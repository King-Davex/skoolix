import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config'; // Load variables from .env
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ Warning: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing in .env");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());

// --- API Routes ---

// Login - Note: In a production app, you would use supabase.auth.signInWithPassword
// using an email and password. For this migration, we'll check the 'profiles' table.
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Hardcoded fallback for testing before DB is populated
  if (username === 'admin' && password === 'admin123') {
    return res.json({ id: '00000000-0000-0000-0000-000000000000', username: 'admin', role: 'admin' });
  }
  if (username === 'teacher' && password === 'teacher123') {
    return res.json({ id: '11111111-1111-1111-1111-111111111111', username: 'teacher', role: 'teacher' });
  }

  const { data: user, error } = await supabase
    .from('profiles')
    .select('id, username, role, password')
    .eq('username', username)
    .single();

  if (user && (!user.password || user.password === password)) {
    res.json({ id: user.id, username: user.username, role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid credentials or user not found' });
  }
});

app.get('/api/dashboard/stats', async (req, res) => {
  const { teacher_id } = req.query;
  
  try {
    let studentQuery = supabase.from('students').select('id', { count: 'exact' });
    if (teacher_id && teacher_id !== 'admin-id' && teacher_id !== '00000000-0000-0000-0000-000000000000') {
       // Filter students by teacher's classes
       const { data: classes } = await supabase.from('classes').select('id').eq('teacher_id', teacher_id);
       const classIds = classes?.map(c => c.id) || [];
       if (classIds.length > 0) {
           studentQuery = studentQuery.in('class_id', classIds);
       } else {
           studentQuery = supabase.from('students').select('id', {count: 'exact'}).eq('id', -1); // Return 0 students
       }
    }
    
    const { count: totalStudents } = await studentQuery;

    const { data: feeStructure } = await supabase.from('fees').select('amount').order('id', { ascending: false }).limit(1).single();
    const termFee = feeStructure?.amount || 0;
    
    const totalExpected = (totalStudents || 0) * termFee;
    
    const { data: totalCollectedObj } = await supabase.from('payments').select('amount');
    const collected = totalCollectedObj?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;
    
    const { data: recentPayments } = await supabase.from('payments')
      .select('*, students(first_name, last_name)')
      .order('payment_date', { ascending: false })
      .limit(5);

    // Format recent payments to match frontend expectations
    const formattedRecentPayments = recentPayments?.map(p => ({
      ...p,
      first_name: p.students?.first_name,
      last_name: p.students?.last_name
    })) || [];

    let teacherName = undefined;
    let classNames = undefined;

    if (teacher_id && teacher_id !== '00000000-0000-0000-0000-000000000000') {
      const { data: teacher } = await supabase.from('profiles').select('username').eq('id', teacher_id).single();
      const { data: classes } = await supabase.from('classes').select('name').eq('teacher_id', teacher_id);
      
      teacherName = teacher?.username;
      classNames = classes?.map(c => c.name);
    }

    res.json({
      totalStudents: totalStudents || 0,
      totalExpected,
      totalCollected: collected,
      outstanding: totalExpected - collected,
      recentPayments: formattedRecentPayments,
      teacherName,
      classNames
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/students', async (req, res) => {
  const { teacher_id } = req.query;
  try {
    let query = supabase.from('students').select('*, classes!inner(name, teacher_id), payments(amount)');
    
    if (teacher_id && teacher_id !== '00000000-0000-0000-0000-000000000000' && teacher_id !== '11111111-1111-1111-1111-111111111111') {
      query = query.eq('classes.teacher_id', teacher_id);
    }

    const { data: students, error } = await query;
    if (error) throw error;

    const formattedStudents = students?.map(s => {
      const totalPaid = s.payments?.reduce((sum: number, p: any) => sum + Number(p.amount), 0) || 0;
      return {
        ...s,
        class_name: s.classes?.name,
        paid: totalPaid,
        payments: undefined,
        classes: undefined
      };
    }) || [];

    res.json(formattedStudents);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/students', async (req, res) => {
  const { first_name, last_name, class_id, parent_contact } = req.body;
  try {
    const { data, error } = await supabase.from('students').insert([{ first_name, last_name, class_id, parent_contact }]).select('id').single();
    if (error) throw error;
    res.json({ id: data.id });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/teachers', async (req, res) => {
  try {
    const { data: teachers, error } = await supabase.from('profiles').select('id, username').eq('role', 'teacher');
    if (error) throw error;
    res.json(teachers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/teachers', async (req, res) => {
  const { username, password, class_id } = req.body;
  
  // Note: True Supabase Auth flow would use supabase.auth.admin.createUser or signUp
  // For this local migration snippet, we will manually insert into profiles table
  try {
    // Generate a temporary UUID for the custom profile
    const { data: newUser, error: userError } = await supabase.from('profiles').insert([{
      username,
      password,
      role: 'teacher'
    }]).select('id').single();

    if (userError) throw userError;
    const teacherId = newUser.id;

    if (class_id) {
      const { error: classError } = await supabase.from('classes').update({ teacher_id: teacherId }).eq('id', class_id);
      if (classError) throw classError;
    }
    
    res.json({ id: teacherId });
  } catch (err: any) {
    res.status(400).json({ error: 'Failed to create teacher. ' + err.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const updateData: any = {};
    if (username) updateData.username = username;
    if (password) updateData.password = password;

    const { error } = await supabase.from('profiles').update(updateData).eq('id', id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Settings Endpoints
app.get('/api/settings/grading', async (req, res) => {
  try {
    const { data, error } = await supabase.from('settings').select('value').eq('key', 'grading').single();
    if (error) {
      // Return defaults if not found
      return res.json({ a_min: 70, b_min: 60, c_min: 50 });
    }
    res.json(JSON.parse(data.value));
  } catch (err: any) {
    res.json({ a_min: 70, b_min: 60, c_min: 50 });
  }
});

app.post('/api/settings/grading', async (req, res) => {
  const { a_min, b_min, c_min } = req.body;
  try {
    const gradingValue = JSON.stringify({ a_min, b_min, c_min });
    // Check if exists
    const { data: existing } = await supabase.from('settings').select('id').eq('key', 'grading').single();
    if (existing) {
      await supabase.from('settings').update({ value: gradingValue }).eq('key', 'grading');
    } else {
      await supabase.from('settings').insert([{ key: 'grading', value: gradingValue }]);
    }
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/classes/:id', async (req, res) => {
  const { id } = req.params;
  const { teacher_id } = req.body;
  try {
    const { error } = await supabase.from('classes').update({ teacher_id }).eq('id', id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/classes', async (req, res) => {
  try {
    const { data: classes, error } = await supabase.from('classes').select('*, profiles(username)');
    if (error) throw error;
    
    const formattedClasses = classes.map(c => ({
      ...c,
      teacher_name: c.profiles?.username,
      profiles: undefined
    }));

    res.json(formattedClasses);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/fees', async (req, res) => {
  try {
    const { data: fees, error } = await supabase.from('fees').select('*').order('id', { ascending: false });
    if (error) throw error;
    res.json(fees);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/fees', async (req, res) => {
  const { term_name, amount, academic_year } = req.body;
  try {
    const { error } = await supabase.from('fees').insert([{ term_name, amount, academic_year }]);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/payments', async (req, res) => {
  const { student_id, amount } = req.body;
  try {
    const { error } = await supabase.from('payments').insert([{ student_id, amount }]);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/results/:studentId', async (req, res) => {
  try {
    const { data: results, error } = await supabase.from('results').select('*').eq('student_id', req.params.studentId);
    if (error) throw error;
    res.json(results);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/results', async (req, res) => {
  const { student_id, subject, ca_score, exam_score } = req.body;
  try {
    // Fetch grading system
    let gradingSystem = { a_min: 70, b_min: 60, c_min: 50 };
    try {
      const { data } = await supabase.from('settings').select('value').eq('key', 'grading').single();
      if (data) gradingSystem = JSON.parse(data.value);
    } catch (e) {}

    const total = parseFloat(ca_score) + parseFloat(exam_score);
    let grade = 'F';
    if (total >= gradingSystem.a_min) grade = 'A';
    else if (total >= gradingSystem.b_min) grade = 'B';
    else if (total >= gradingSystem.c_min) grade = 'C';
    
    const { error } = await supabase.from('results').insert([{ 
      student_id, 
      subject, 
      ca_score: parseFloat(ca_score), 
      exam_score: parseFloat(exam_score), 
      grade 
    }]);
    
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});


// --- Vite & Server Middleware ---
if (process.env.NODE_ENV !== 'production') {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
