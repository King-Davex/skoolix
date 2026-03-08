export interface User {
  id: number;
  username: string;
  role: 'admin' | 'teacher';
}

export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  class_id: number;
  class_name: string;
  parent_contact: string;
  created_at: string;
  paid: number;
}

export interface Class {
  id: number;
  name: string;
  teacher_id?: number;
  teacher_name?: string;
}

export interface Teacher {
  id: number;
  username: string;
}

export interface Fee {
  id: number;
  term_name: string;
  amount: number;
  academic_year: string;
}

export interface Payment {
  id: number;
  student_id: number;
  amount: number;
  payment_date: string;
  first_name?: string;
  last_name?: string;
}

export interface Result {
  id: number;
  student_id: number;
  subject: string;
  ca_score: number;
  exam_score: number;
  total_score: number;
  grade: string;
}

export interface DashboardStats {
  totalStudents: number;
  totalExpected: number;
  totalCollected: number;
  outstanding: number;
  recentPayments: Payment[];
  teacherName?: string;
  classNames?: string[];
}
