"use client";

import { useState, useEffect } from "react";
import { Lock, User, KeyRound, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is already logged in for this session
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "algazzar" && password === "Mooha@2711") {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("بيانات الدخول غير صحيحة. يرجى المحاولة مرة أخرى.");
    }
  };

  if (isChecking) {
    return <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center">...</div>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:40px_40px] opacity-20"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-8 relative z-10 overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">تسجيل الدخول</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">لوحة تحكم MSCO</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-xl text-sm font-semibold text-center">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">اسم المستخدم</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </span>
              <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white transition-all font-sans text-left"
                dir="ltr"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">كلمة المرور</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <KeyRound size={18} />
              </span>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white transition-all font-sans text-left"
                dir="ltr"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(5,115,240,0.3)] hover:shadow-[0_0_30px_rgba(5,115,240,0.5)] flex items-center justify-center gap-2"
          >
            <span>دخول</span>
            <ChevronLeft size={20} />
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
            &rarr; العودة للموقع
          </a>
        </div>
      </motion.div>
    </div>
  );
}
