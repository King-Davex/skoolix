import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  FileText, 
  LogOut, 
  GraduationCap,
  Menu,
  X,
  Plus,
  Search,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Lock,
  User as UserIcon,
  ArrowRight,
  Settings,
  Star,
  Shield,
  Activity,
  Award,
  Crown,
  Fingerprint,
  Mail,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Student, Class, Fee, Payment, Result, DashboardStats, Teacher } from './types';

// --- Components ---

const Logo = ({ size = 40, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=128&h=128&fit=crop&q=80" 
        alt="Skoolix Logo" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const StatsCard = ({ label, value, icon: Icon, color, trend, trendUp }: { label: string, value: string | number, icon: any, color: string, trend?: string, trendUp?: boolean }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-700 ${color}`} />
    
    <div className="flex justify-between items-start mb-6">
      <div className={`p-3.5 rounded-2xl shadow-lg shadow-indigo-100/20 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </div>
      )}
    </div>
    
    <div>
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{label}</h3>
      <p className="text-3xl font-black text-slate-900 tracking-tight">{value}</p>
    </div>
  </div>
);

// --- Pages ---

const LandingPage = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={40} className="shadow-lg shadow-indigo-500/10" />
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text tracking-tight">Skoolix</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a>
          </div>
          <div>
            <button 
              onClick={onGetStarted}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Sign In
            </button>
            <a 
              href="/admin"
              className="ml-3 bg-indigo-500 text-white px-6 py-2.5 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-600 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Admin
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
              >
                Managing your school has never been <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">easier.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium"
              >
                Streamline admissions, track student performance, and handle fee collections all in one beautiful, intuitive dashboard. Built for modern educators.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button 
                  onClick={onGetStarted}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                >
                  Enter Portal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Everything you need</h2>
              <p className="text-slate-500 text-lg">Powerful features designed to reduce administrative overhead and focus on what matters most: education.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Student Management', desc: 'Easily organize student records, class assignments, and parent contact information.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: CreditCard, title: 'Fee Tracking', desc: 'Monitor outstanding balances, record payments, and generate financial reports instantly.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { icon: Award, title: 'Results Processing', desc: 'Input scores, autocalculate grades based on custom thresholds, and generate termly results.', color: 'text-purple-600', bg: 'bg-purple-50' }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-6`}>
                    <f.icon size={28} className={f.color} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed max-w-[250px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium">© {new Date().getFullYear()} Skoolix Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

const LoginPage = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const user = await res.json();
        onLogin(user);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -50, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[440px] p-4 z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Logo size={80} className="shadow-2xl shadow-indigo-500/20" />
            </motion.div>
            <motion.h1 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white tracking-tight text-center"
            >
              Skoolix
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 mt-2 text-center"
            >
              Enter your credentials to access the portal
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Username</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <UserIcon size={20} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="admin or teacher"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="••••••••"
                  required
                />
              </div>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm py-3 px-4 rounded-xl flex items-center gap-2"
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-8 border-t border-white/5 text-center"
          >
            <p className="text-slate-500 text-sm">
              Forgot your password? <button className="text-indigo-400 hover:text-indigo-300 transition-colors">Contact Admin</button>
            </p>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-slate-600 text-xs mt-8 uppercase tracking-widest"
        >
          © 2026 Skoolix
        </motion.p>
      </motion.div>
    </div>
  );
};

const SignupPage = ({ onSignup, onGoToLogin }: { onSignup: (user: User) => void, onGoToLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const user = await res.json();
        onSignup(user);
      } else {
        const data = await res.json();
        setError(data.error || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[440px] p-4 z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Logo size={80} className="shadow-2xl shadow-emerald-500/20" />
            </motion.div>
            <motion.h1 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white tracking-tight text-center"
            >
              Create Account
            </motion.h1>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 mt-2 text-center"
            >
              Sign up to get started with Skoolix
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Username</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                  <UserIcon size={20} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="Choose a username"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="Min 6 characters"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Confirm Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                  <Shield size={20} />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="Re-enter your password"
                  required
                />
              </div>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm py-3 px-4 rounded-xl flex items-center gap-2"
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 pt-8 border-t border-white/5 text-center"
          >
            <p className="text-slate-500 text-sm">
              Already have an account? <button onClick={onGoToLogin} className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">Sign In</button>
            </p>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center text-slate-600 text-xs mt-8 uppercase tracking-widest"
        >
          © 2026 Skoolix
        </motion.p>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ stats, user, onNavigate }: { stats: DashboardStats | null, user: User, onNavigate: (tab: string) => void }) => {
  if (!stats) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );

  const isTeacher = user.role === 'teacher';

  const handleDownloadReport = () => {
    const reportData = `SKOOLIX PERFORMANCE REPORT\n` +
      `Date: ${new Date().toLocaleDateString()}\n\n` +
      `Total Students: ${stats.totalStudents}\n` +
      `Total Expected Fee Revenue: NGN ${stats.totalExpected.toLocaleString()}\n` +
      `Total Collected: NGN ${stats.totalCollected.toLocaleString()}\n` +
      `Outstanding Balance: NGN ${stats.outstanding.toLocaleString()}\n\n` +
      `Generated by Skoolix System.`;
    
    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skoolix-summary-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard Overview</h2>
          <p className="text-slate-500 font-medium">
            {isTeacher ? `Welcome, Teacher ${stats.teacherName || user.username}! Assigned Classes: ${stats.classNames?.join(', ') || 'None'}` : 'Welcome back! Here\'s what\'s happening today.'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {user.role === 'admin' && (
            <button onClick={handleDownloadReport} className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
              Download Report
            </button>
          )}
          <button onClick={() => window.location.reload()} className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Refresh Data
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 ${isTeacher ? 'lg:grid-cols-1' : 'lg:grid-cols-4'} gap-6`}>
        <StatsCard label="Total Students" value={stats.totalStudents} icon={Users} color="bg-blue-500" trend={isTeacher ? "Your Classes" : "12% New"} trendUp={true} />
        {!isTeacher && (
          <>
            <StatsCard label="Expected Fees" value={`₦${stats.totalExpected.toLocaleString()}`} icon={TrendingUp} color="bg-indigo-600" trend="Term 1" trendUp={true} />
            <StatsCard label="Collected" value={`₦${stats.totalCollected.toLocaleString()}`} icon={CheckCircle2} color="bg-emerald-500" trend="84% Goal" trendUp={true} />
            <StatsCard label="Outstanding" value={`₦${stats.outstanding.toLocaleString()}`} icon={AlertCircle} color="bg-rose-500" trend="16% Left" trendUp={false} />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {!isTeacher && (
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Recent Activity</h3>
              <button onClick={() => onNavigate('fees')} className="text-indigo-600 text-sm font-bold hover:underline">View All</button>
            </div>
            
            <div className="space-y-6">
              {stats.recentPayments.map((p, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={p.id} 
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 font-black group-hover:bg-white group-hover:shadow-md transition-all">
                      {p.first_name?.[0]}{p.last_name?.[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{p.first_name} {p.last_name}</p>
                      <p className="text-xs text-slate-400 font-medium">Payment Received • {new Date(p.payment_date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-600 font-black text-lg">+₦{p.amount.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified</p>
                  </div>
                </motion.div>
              ))}
              {stats.recentPayments.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-slate-400 font-medium">No recent payments found.</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={`space-y-8 ${isTeacher ? 'lg:col-span-3' : ''}`}>
          {!isTeacher && (
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[2.5rem] shadow-xl shadow-indigo-200 text-white relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">Financial Insights</h3>
                <p className="text-indigo-100 text-sm font-medium leading-relaxed mb-8">
                  Your collection rate is up by <span className="text-white font-bold">8.4%</span> compared to last term. Great job!
                </p>
                <button onClick={() => onNavigate('fees')} className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-black text-sm hover:bg-indigo-50 transition-all shadow-lg active:scale-[0.98]">
                  View Detailed Analysis
                </button>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-lg font-black text-slate-900 mb-6 tracking-tight">Quick Actions</h3>
            <div className={`grid ${isTeacher ? 'grid-cols-2' : 'grid-cols-2'} gap-4`}>
              <button onClick={() => onNavigate('students')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                <Users size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600" />
                <span className="text-xs font-bold">Add Student</span>
              </button>
              {!isTeacher && (
                <button onClick={() => onNavigate('fees')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-all group">
                  <CreditCard size={20} className="mb-2 text-slate-400 group-hover:text-emerald-600" />
                  <span className="text-xs font-bold">Record Fee</span>
                </button>
              )}
              <button onClick={() => onNavigate('results')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 hover:text-purple-600 transition-all group">
                <FileText size={20} className="mb-2 text-slate-400 group-hover:text-purple-600" />
                <span className="text-xs font-bold">Add Result</span>
              </button>
              {!isTeacher && (
                <button onClick={() => onNavigate('fees')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                  <AlertCircle size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600" />
                  <span className="text-xs font-bold">Defaulters</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentsPage = ({ user }: { user: User }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [newStudent, setNewStudent] = useState({ first_name: '', last_name: '', class_id: '', parent_contact: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = user.role === 'teacher' ? `/api/students?teacher_id=${user.id}` : '/api/students';
      const [sRes, cRes] = await Promise.all([
        fetch(url),
        fetch('/api/classes')
      ]);
      setStudents(await sRes.json());
      setClasses(await cRes.json());
    } catch (err) {
      console.error('Failed to fetch students data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    fetchData(); 
  }, []);

  useEffect(() => {
    if (user.role === 'teacher' && classes.length > 0) {
      const teacherClass = classes.find(c => c.teacher_id === user.id);
      if (teacherClass) {
        setNewStudent(prev => ({ ...prev, class_id: teacherClass.id.toString() }));
      }
    }
  }, [classes, user]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent)
    });
    if (res.ok) {
      setShowAdd(false);
      setNewStudent({ first_name: '', last_name: '', class_id: user.role === 'teacher' ? (classes.find(c => c.teacher_id === user.id)?.id.toString() || '') : '', parent_contact: '' });
      fetchData();
    }
  };

  const filtered = students.filter(s => 
    `${s.first_name} ${s.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Students</h2>
          <p className="text-slate-500 font-medium">Manage student records and class assignments.</p>
        </div>
          <button 
            onClick={() => setShowAdd(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <Plus size={18} /> Add Student
          </button>
      </div>

      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
        <input
          type="text"
          placeholder="Search students by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all bg-white font-medium shadow-sm"
        />
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
              <tr>
                <th className="px-8 py-5">Name</th>
                <th className="px-8 py-5">Class</th>
                <th className="px-8 py-5">Parent Contact</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-black text-xs group-hover:bg-white group-hover:shadow-sm transition-all">
                        {s.first_name[0]}{s.last_name[0]}
                      </div>
                      <p className="font-bold text-slate-900">{s.first_name} {s.last_name}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-slate-600 font-medium">{s.class_name}</td>
                  <td className="px-8 py-6 text-slate-600 font-medium">{s.parent_contact}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${s.paid > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      {s.paid > 0 ? (
                        <><CheckCircle2 size={12} /> Active</>
                      ) : (
                        <><AlertCircle size={12} /> No Payment</>
                      )}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center text-slate-400 font-medium">No students found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {showAdd && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Add New Student</h3>
                <button onClick={() => setShowAdd(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleAdd} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={newStudent.first_name}
                      onChange={e => setNewStudent({...newStudent, first_name: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={newStudent.last_name}
                      onChange={e => setNewStudent({...newStudent, last_name: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Class</label>
                  <select
                    required
                    value={newStudent.class_id}
                    onChange={e => setNewStudent({...newStudent, class_id: e.target.value})}
                    disabled={user.role === 'teacher'}
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Class</option>
                    {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Parent Phone</label>
                  <input
                    type="text"
                    required
                    value={newStudent.parent_contact}
                    onChange={e => setNewStudent({...newStudent, parent_contact: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                  />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black mt-4 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]">
                  Register Student
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeesPage = () => {
  const [fees, setFees] = useState<Fee[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [showPay, setShowPay] = useState(false);
  const [showSetFee, setShowSetFee] = useState(false);
  const [payment, setPayment] = useState({ student_id: '', amount: '' });
  const [newFee, setNewFee] = useState({ term_name: '', amount: '', academic_year: '2025/2026' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [fRes, sRes] = await Promise.all([
        fetch('/api/fees'),
        fetch('/api/students')
      ]);
      setFees(await fRes.json());
      setStudents(await sRes.json());
    } catch (err) {
      console.error('Failed to fetch fees data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payment)
    });
    if (res.ok) {
      setShowPay(false);
      setPayment({ student_id: '', amount: '' });
      fetchData();
    }
  };

  const handleSetFee = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/fees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFee)
    });
    if (res.ok) {
      setShowSetFee(false);
      fetchData();
    }
  };

  const currentFee = fees[0]?.amount || 0;

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Fee Management</h2>
          <p className="text-slate-500 font-medium">Manage school fees and track student payments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowSetFee(true)}
            className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm"
          >
            Set Term Fee
          </button>
          <button 
            onClick={() => setShowPay(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <Plus size={18} /> Record Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-indigo-600 opacity-[0.03] group-hover:scale-150 transition-transform duration-700" />
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Current Term Fee</h3>
          <p className="text-3xl font-black text-slate-900 tracking-tight">₦{currentFee.toLocaleString()}</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded-lg">
              {fees[0]?.term_name || 'No term set'}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              {fees[0]?.academic_year}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">Student Balances</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Cleared
            <div className="w-2 h-2 rounded-full bg-rose-500 ml-2" /> Defaulter
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
              <tr>
                <th className="px-8 py-5">Student</th>
                <th className="px-8 py-5">Total Paid</th>
                <th className="px-8 py-5">Balance</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {students.map(s => {
                const paid = s.paid || 0;
                const balance = currentFee - paid;
                const isCleared = balance <= 0;
                return (
                  <tr key={s.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-black text-xs group-hover:bg-white group-hover:shadow-sm transition-all">
                          {s.first_name[0]}{s.last_name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{s.first_name} {s.last_name}</p>
                          <p className="text-xs text-slate-400 font-medium">{s.class_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-emerald-600 font-black">₦{paid.toLocaleString()}</p>
                    </td>
                    <td className="px-8 py-6">
                      <p className={`${isCleared ? 'text-slate-400' : 'text-rose-600'} font-black`}>
                        ₦{Math.max(0, balance).toLocaleString()}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${isCleared ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                        {isCleared ? (
                          <><CheckCircle2 size={12} /> Cleared</>
                        ) : (
                          <><AlertCircle size={12} /> Defaulter</>
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {showPay && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Record Payment</h3>
                <button onClick={() => setShowPay(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"><X size={20} /></button>
              </div>
              <form onSubmit={handlePay} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Student</label>
                  <select required value={payment.student_id} onChange={e => setPayment({...payment, student_id: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium">
                    <option value="">Select Student</option>
                    {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name} ({s.class_name})</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Amount (₦)</label>
                  <input type="number" required value={payment.amount} onChange={e => setPayment({...payment, amount: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" placeholder="0.00" />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]">Confirm Payment</button>
              </form>
            </motion.div>
          </div>
        )}

        {showSetFee && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Set Term Fee</h3>
                <button onClick={() => setShowSetFee(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"><X size={20} /></button>
              </div>
              <form onSubmit={handleSetFee} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Term Name</label>
                  <input type="text" placeholder="e.g. 1st Term" required value={newFee.term_name} onChange={e => setNewFee({...newFee, term_name: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Amount (₦)</label>
                  <input type="number" required value={newFee.amount} onChange={e => setNewFee({...newFee, amount: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" placeholder="0.00" />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]">Save Fee Structure</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResultsPage = ({ user }: { user: User }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newResult, setNewResult] = useState({ subject: '', ca_score: '', exam_score: '' });
  const [isLoading, setIsLoading] = useState(false);

  const fetchStudents = async () => {
    const url = user.role === 'teacher' ? `/api/students?teacher_id=${user.id}` : '/api/students';
    const res = await fetch(url);
    setStudents(await res.json());
  };

  const fetchResults = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/results/${id}`);
      setResults(await res.json());
    } catch (err) {
      console.error('Failed to fetch results', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);
  useEffect(() => { if (selectedStudent) fetchResults(selectedStudent); }, [selectedStudent]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newResult, student_id: selectedStudent })
    });
    if (res.ok) {
      setShowAdd(false);
      setNewResult({ subject: '', ca_score: '', exam_score: '' });
      fetchResults(selectedStudent);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Academic Results</h2>
          <p className="text-slate-500 font-medium">Manage student grades and performance reports.</p>
        </div>
        {selectedStudent && (
          <button 
            onClick={() => setShowAdd(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <Plus size={18} /> Enter Scores
          </button>
        )}
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">Select Student to View/Enter Results</label>
        <select 
          value={selectedStudent} 
          onChange={e => setSelectedStudent(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
        >
          <option value="">Choose a student from the list...</option>
          {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name} — {s.class_name}</option>)}
        </select>
      </div>

      {selectedStudent ? (
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
                <tr>
                  <th className="px-8 py-5">Subject</th>
                  <th className="px-8 py-5">CA (40)</th>
                  <th className="px-8 py-5">Exam (60)</th>
                  <th className="px-8 py-5">Total (100)</th>
                  <th className="px-8 py-5">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center">
                      <div className="w-6 h-6 border-2 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin mx-auto" />
                    </td>
                  </tr>
                ) : results.length > 0 ? results.map(r => (
                  <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900">{r.subject}</td>
                    <td className="px-8 py-6 text-slate-600 font-medium">{r.ca_score}</td>
                    <td className="px-8 py-6 text-slate-600 font-medium">{r.exam_score}</td>
                    <td className="px-8 py-6 font-black text-slate-900 text-lg">{r.total_score}</td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-black ${r.grade === 'A' ? 'bg-emerald-100 text-emerald-700' : r.grade === 'F' ? 'bg-rose-100 text-rose-700' : 'bg-indigo-100 text-indigo-700'}`}>
                        {r.grade}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center text-slate-400 font-medium">No results recorded for this student yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-100/50 rounded-[2.5rem] p-16 text-center border-2 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FileText size={40} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Student Selected</h3>
          <p className="text-slate-500 max-w-xs mx-auto">Select a student from the dropdown above to manage their academic performance records.</p>
        </div>
      )}

      <AnimatePresence>
        {showAdd && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Enter Scores</h3>
                <button onClick={() => setShowAdd(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"><X size={20} /></button>
              </div>
              <form onSubmit={handleAdd} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Subject</label>
                  <input type="text" placeholder="e.g. Mathematics" required value={newResult.subject} onChange={e => setNewResult({...newResult, subject: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">CA Score (Max 40)</label>
                    <input type="number" max="40" required value={newResult.ca_score} onChange={e => setNewResult({...newResult, ca_score: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Exam Score (Max 60)</label>
                    <input type="number" max="60" required value={newResult.exam_score} onChange={e => setNewResult({...newResult, exam_score: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black mt-4 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]">Save Result</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ username: '', password: '', email: '', class_id: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [tRes, cRes] = await Promise.all([
        fetch('/api/teachers'),
        fetch('/api/classes')
      ]);
      setTeachers(await tRes.json());
      setClasses(await cRes.json());
    } catch (err) {
      console.error('Failed to fetch teachers data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAddTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/teachers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeacher)
    });
    if (res.ok) {
      setShowAdd(false);
      setNewTeacher({ username: '', password: '', email: '', class_id: '' });
      fetchData();
    } else {
      const data = await res.json();
      alert(data.error || 'Failed to add teacher');
    }
  };

  const handleAssignTeacher = async (classId: number, teacherId: string) => {
    const res = await fetch(`/api/classes/${classId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teacher_id: teacherId })
    });
    if (res.ok) {
      fetchData();
    }
  };

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Teacher Management</h2>
          <p className="text-slate-500 font-medium">Onboard teachers and assign them to classes.</p>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          <Plus size={18} /> Onboard Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Teachers List */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">All Teachers</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {teachers.map(t => (
                <div key={t.id} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-black">
                    {t.username[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.username}</p>
                    <p className="text-xs text-slate-400 font-medium">Teacher ID: #{t.id}</p>
                  </div>
                </div>
              ))}
              {teachers.length === 0 && (
                <p className="text-center py-8 text-slate-400 font-medium">No teachers onboarded yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Class Assignments */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Class Assignments</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {classes.map(c => (
                <div key={c.id} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-black text-slate-900">{c.name}</h4>
                    <div className="p-2 bg-white rounded-xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <GraduationCap size={18} />
                    </div>
                  </div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Assigned Teacher</label>
                  <select 
                    value={c.teacher_id || ''} 
                    onChange={e => handleAssignTeacher(c.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-sm"
                  >
                    <option value="">Unassigned</option>
                    {teachers.map(t => <option key={t.id} value={t.id}>{t.username}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showAdd && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Onboard New Teacher</h3>
                <button onClick={() => setShowAdd(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"><X size={20} /></button>
              </div>
              <form onSubmit={handleAddTeacher} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Username</label>
                  <input type="text" required value={newTeacher.username} onChange={e => setNewTeacher({...newTeacher, username: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email (Gmail)</label>
                  <input type="email" value={newTeacher.email} onChange={e => setNewTeacher({...newTeacher, email: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" placeholder="teacher@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password</label>
                  <input type="password" required value={newTeacher.password} onChange={e => setNewTeacher({...newTeacher, password: e.target.value})} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Assign Class (Optional)</label>
                  <select 
                    value={newTeacher.class_id} 
                    onChange={e => setNewTeacher({...newTeacher, class_id: e.target.value})} 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                  >
                    <option value="">No class assigned</option>
                    {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black mt-4 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]">Create Teacher Account</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SettingsPage = ({ user }: { user: User }) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [grading, setGrading] = useState({ a_min: 70, b_min: 60, c_min: 50 });
  const [selectedUserId, setSelectedUserId] = useState<string>(user.id.toString());
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userMessage, setUserMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
  const [gradingMessage, setGradingMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  const fetchData = async () => {
    const [tRes, gRes] = await Promise.all([
      fetch('/api/teachers'),
      fetch('/api/settings/grading')
    ]);
    if (tRes.ok) setTeachers(await tRes.json());
    if (gRes.ok) setGrading(await gRes.json());
  };

  useEffect(() => { fetchData(); }, []);

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const body: any = {};
    if (newUsername) body.username = newUsername;
    if (newPassword) body.password = newPassword;
    setUserMessage(null);
    try {
      const res = await fetch(`/api/users/${selectedUserId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        setUserMessage({ text: 'Credentials updated successfully!', type: 'success' });
        setNewPassword('');
        fetchData();
      } else {
        const text = await res.text();
        let data: any = {};
        try { data = JSON.parse(text); } catch(e) {}
        setUserMessage({ text: `Failed to update credentials: ${data.error || text || 'Unknown error'}`, type: 'error' });
      }
    } catch (err: any) {
      setUserMessage({ text: `Network error: ${err.message}`, type: 'error' });
    }
  };

  const handleUpdateGrading = async (e: React.FormEvent) => {
    e.preventDefault();
    setGradingMessage(null);
    try {
      const res = await fetch('/api/settings/grading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grading)
      });
      if (res.ok) {
        setGradingMessage({ text: 'Grading system updated!', type: 'success' });
      } else {
        const text = await res.text();
        let data: any = {};
        try { data = JSON.parse(text); } catch(e) {}
        setGradingMessage({ text: `Failed to update: ${data.error || text || 'Unknown error'}`, type: 'error' });
      }
    } catch (err: any) {
      setGradingMessage({ text: `Network error: ${err.message}`, type: 'error' });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h2>
        <p className="text-slate-500 font-medium">Manage user credentials and school grading system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2"><Lock size={20} className="text-indigo-600"/> Update Credentials</h3>
          {userMessage && (
            <div className={`p-4 mb-6 rounded-2xl text-sm font-bold ${userMessage.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
              <div className="relative break-words overflow-hidden break-all max-h-48 overflow-y-auto">
                {userMessage.text}
              </div>
            </div>
          )}
          <form onSubmit={handleUpdateUser} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Select User</label>
              <select value={selectedUserId} onChange={e => setSelectedUserId(e.target.value)} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium">
                <option value={user.id.toString()}>My Account ({user.username})</option>
                {teachers.map(t => <option key={t.id} value={t.id.toString()}>Teacher: {t.username}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">New Username (Optional)</label>
              <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" placeholder="Leave blank to keep current" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">New Password (Optional)</label>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" placeholder="Leave blank to keep current" />
            </div>
            <button type="submit" disabled={!newUsername && !newPassword} className="w-full bg-indigo-600 text-white py-3.5 rounded-2xl font-black mt-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Update User</button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2"><TrendingUp size={20} className="text-emerald-600"/> Grading System</h3>
          {gradingMessage && (
            <div className={`p-4 mb-6 rounded-2xl text-sm font-bold ${gradingMessage.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
              <div className="relative break-words overflow-hidden break-all max-h-48 overflow-y-auto">
                {gradingMessage.text}
              </div>
            </div>
          )}
          <form onSubmit={handleUpdateGrading} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Minimum Score for 'A'</label>
              <input type="number" required value={grading.a_min} onChange={e => setGrading({...grading, a_min: Number(e.target.value)})} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-medium" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Minimum Score for 'B'</label>
              <input type="number" required value={grading.b_min} onChange={e => setGrading({...grading, b_min: Number(e.target.value)})} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-medium" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Minimum Score for 'C'</label>
              <input type="number" required value={grading.c_min} onChange={e => setGrading({...grading, c_min: Number(e.target.value)})} className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-medium" />
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white py-3.5 rounded-2xl font-black mt-2 shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">Save Grading System</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Admin Signup Page ---

const AdminSignupPage = ({ onSignup, onGoToLogin }: { onSignup: (user: User) => void, onGoToLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      if (res.ok) {
        onSignup(await res.json());
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to create admin account');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Background blobs same as login */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-[120px]" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md p-6 z-10">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 rounded-[2.5rem] shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center mb-4">
              <Crown size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-black text-white">Create Admin Account</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Username</label>
              <div className="relative group">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400" size={18} />
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required placeholder="admin_user" className="w-full bg-white/[0.05] border border-white/[0.1] text-white pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Email (for recovery)</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400" size={18} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="admin@skoolix.com" className="w-full bg-white/[0.05] border border-white/[0.1] text-white pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400" size={18} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full bg-white/[0.05] border border-white/[0.1] text-white pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Confirm Password</label>
              <div className="relative group">
                <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400" size={18} />
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder="••••••••" className="w-full bg-white/[0.05] border border-white/[0.1] text-white pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>

            {error && <div className="text-rose-500 text-xs font-semibold bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">{error}</div>}

            <button type="submit" disabled={isLoading} className="w-full bg-indigo-500 text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-400 transition-all disabled:opacity-50">
              {isLoading ? 'Creating...' : 'Create Admin Account'}
            </button>
          </form>

          <button onClick={onGoToLogin} className="w-full mt-6 text-slate-500 text-sm font-bold hover:text-white transition-colors">
            Already have an account? Log In
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- Admin Forgot Password Page ---

const AdminForgotPasswordPage = ({ onGoToLogin }: { onGoToLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Connection error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px]" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-md p-6 z-10">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 rounded-[2.5rem] shadow-2xl">
          <button onClick={onGoToLogin} className="mb-6 flex items-center gap-2 text-slate-500 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Back to Login</span>
          </button>

          <h2 className="text-2xl font-black text-white mb-2">Forgot Password?</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">Enter your admin email and we'll send you a link to reset your password.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Admin Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400" size={18} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" className="w-full bg-white/[0.05] border border-white/[0.1] text-white pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>

            {status && (
              <div className={`p-4 rounded-xl border text-sm font-medium ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={isLoading} className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all disabled:opacity-50">
              {isLoading ? 'Processing...' : 'Send Recovery Link'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// --- Admin Login Page ---

const AdminLoginPage = ({ onLogin, onGoToSignup, onGoToForgot }: { 
  onLogin: (user: User) => void, 
  onGoToSignup: () => void,
  onGoToForgot: () => void 
}) => {
  const [credential, setCredential] = useState(''); // Can be username or email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Determine if credential is email
    const isEmail = credential.includes('@');
    const payload = isEmail ? { email: credential, password } : { username: credential, password };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const user = await res.json();
        if (user.role !== 'admin') {
          setError('Access denied. Admin credentials required.');
          setIsLoading(false);
          return;
        }
        onLogin(user);
      } else {
        setError('Invalid admin credentials.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            x: [0, 80, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[15%] w-[45%] h-[45%] bg-indigo-600/15 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -120, 0],
            x: [0, -60, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[15%] -right-[15%] w-[50%] h-[50%] bg-purple-600/15 blur-[140px] rounded-full"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[460px] p-4 z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <Crown size={14} className="text-indigo-400" />
            <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">Admin Portal</span>
          </div>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col items-center mb-10 relative">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30 mb-6">
              <Shield size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight text-center">Admin Access</h1>
            <p className="text-slate-500 mt-2 text-center text-sm">Authorized personnel only</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Username or Email</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                  <UserIcon size={20} />
                </div>
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 outline-none transition-all"
                  placeholder="Enter admin user or email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-sm font-medium text-slate-400">Password</label>
                <button type="button" onClick={onGoToForgot} className="text-xs font-bold text-indigo-500 hover:text-indigo-400 transition-colors">Forgot Password?</button>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm py-3 px-4 rounded-xl flex items-center gap-2">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-2xl font-black hover:shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Authenticate"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <button onClick={onGoToSignup} className="text-slate-500 text-sm font-bold hover:text-white transition-colors">
              New Administrator? Create Account
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Admin Panel (dedicated /admin route) ---

const AdminPanel = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const fetchStats = async () => {
    const res = await fetch('/api/dashboard/stats');
    setStats(await res.json());
  };

  useEffect(() => {
    if (user) fetchStats();
  }, [user, activeTab]);

  if (!user) {
    if (authMode === 'signup') return <AdminSignupPage onSignup={setUser} onGoToLogin={() => setAuthMode('login')} />;
    if (authMode === 'forgot') return <AdminForgotPasswordPage onGoToLogin={() => setAuthMode('login')} />;
    return <AdminLoginPage onLogin={setUser} onGoToSignup={() => setAuthMode('signup')} onGoToForgot={() => setAuthMode('forgot')} />;
  }

  const adminTabs = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'students', label: 'Students', icon: Users },
    { key: 'teachers', label: 'Teachers', icon: GraduationCap },
    { key: 'fees', label: 'Fees', icon: CreditCard },
    { key: 'results', label: 'Results', icon: FileText },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] flex">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Dark Admin Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-[#13141b] border-r border-white/[0.06] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Logo size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-white tracking-tight">Skoolix</h1>
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.15em] -mt-0.5">Admin Panel</p>
            </div>
          </div>

          <div className="h-px bg-white/[0.06] my-4" />

          <nav className="flex-1 space-y-1">
            {adminTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => handleNav(tab.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.key 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                    : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-300 border border-transparent'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-semibold text-sm">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 px-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-sm">
                {user.username[0].toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{user.username}</p>
                <div className="flex items-center gap-1">
                  <Crown size={10} className="text-indigo-400" />
                  <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Administrator</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setUser(null)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
            >
              <LogOut size={18} />
              <span className="font-semibold text-sm">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-[#13141b]/80 backdrop-blur-xl border-b border-white/[0.06] flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-slate-400">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">System Online</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === 'dashboard' && <Dashboard stats={stats} user={user} onNavigate={setActiveTab} />}
              {activeTab === 'students' && <StudentsPage user={user} />}
              {activeTab === 'teachers' && <TeachersPage />}
              {activeTab === 'fees' && <FeesPage />}
              {activeTab === 'results' && <ResultsPage user={user} />}
              {activeTab === 'settings' && <SettingsPage user={user} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- Regular App (non-admin) ---

const RegularApp = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const fetchStats = async () => {
    const url = user?.role === 'teacher' ? `/api/dashboard/stats?teacher_id=${user.id}` : '/api/dashboard/stats';
    const res = await fetch(url);
    setStats(await res.json());
  };

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        window.location.href = '/admin';
        return;
      }
      fetchStats();
    }
  }, [user, activeTab]);

  if (showLanding) return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  if (user.role === 'admin') {
    window.location.href = '/admin';
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <Logo size={32} />
            <h1 className="text-xl font-bold text-slate-900">Skoolix</h1>
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNav('dashboard')} />
            <SidebarItem icon={Users} label="Students" active={activeTab === 'students'} onClick={() => handleNav('students')} />
            {user.role === 'admin' && (
              <>
                <SidebarItem icon={GraduationCap} label="Teachers" active={activeTab === 'teachers'} onClick={() => handleNav('teachers')} />
                <SidebarItem icon={CreditCard} label="Fees" active={activeTab === 'fees'} onClick={() => handleNav('fees')} />
              </>
            )}
            <SidebarItem icon={FileText} label="Results" active={activeTab === 'results'} onClick={() => handleNav('results')} />
            {user.role === 'admin' && (
              <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => handleNav('settings')} />
            )}
          </nav>

          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 px-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                {user.username[0].toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{user.username}</p>
                <p className="text-xs text-slate-500 capitalize">{user.role}</p>
              </div>
            </div>
            <button 
              onClick={() => setUser(null)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-50 transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-slate-500">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <Dashboard stats={stats} user={user} onNavigate={setActiveTab} />}
              {activeTab === 'students' && <StudentsPage user={user} />}
              {activeTab === 'teachers' && <TeachersPage />}
              {activeTab === 'fees' && <FeesPage />}
              {activeTab === 'results' && <ResultsPage user={user} />}
              {activeTab === 'settings' && <SettingsPage user={user} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- Main App Router ---

export default function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return <AdminPanel />;
  }

  return <RegularApp />;
}
