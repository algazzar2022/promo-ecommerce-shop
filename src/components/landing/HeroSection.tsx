"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const { hero, settings } = useStore();

  // Sync state across tabs/iframes when localStorage changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'msco-storage-v2') {
        window.location.reload();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!settings.showHero) return null;

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#020817] pt-20 pb-10 transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:40px_40px] opacity-40"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-400/20 dark:bg-brand-400/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
        {/* Left Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:flex-1 relative"
        >
          <div className="relative w-full aspect-square max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            {/* Geometric Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-cyan-400/20 dark:from-brand-600/40 dark:to-cyan-400/40 blur-3xl opacity-50 animate-pulse"></div>
            
            {/* The Geometric Frame */}
            <div 
              className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl" 
              style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
            >
              {/* Inner Decorative Grid */}
              <div className="absolute inset-0 bg-tech-grid-dark opacity-10"></div>
            </div>

            {/* Rotating Tech Rings */}
            <div className="absolute inset-4 rounded-full border-2 border-brand-500/20 dark:border-brand-500/30 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute inset-12 rounded-full border border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite_reverse]"></div>
            
            {/* Floating Orbitals */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-500 rounded-full shadow-[0_0_15px_rgba(5,115,240,0.8)]"></div>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute inset-0 z-10 flex items-center justify-center p-12"
            >
              <img 
                src={hero.backgroundImage} 
                alt="Electric Wheelchair" 
                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(5,115,240,0.4)] z-10 scale-125"
              />
            </motion.div>

            {/* Badge 1 - RIGHT side of image (24/7) */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-4 sm:-right-10 lg:-right-16 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-2 sm:p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl min-w-[90px] sm:min-w-[110px]"
            >
              <div className="text-brand-600 font-bold text-base sm:text-lg leading-tight">{hero.badge1Value}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">{hero.badge1Title}</div>
            </motion.div>

            {/* Badge 2 - LEFT side of image (راضي او ارجع) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -left-4 sm:-left-10 lg:-left-12 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-2 sm:p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex items-center gap-2 sm:gap-3 max-w-[140px] sm:max-w-[180px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0">
                <Shield size={16} className="sm:hidden" />
                <Shield size={20} className="hidden sm:block" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm dark:text-white leading-tight">{hero.badge2Title}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{hero.badge2Value}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Text Content */}
        <div className="flex-1 text-right w-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 font-semibold text-sm mb-6 shadow-sm"
          >
            <Zap size={16} className="text-brand-500 animate-pulse" />
            <span>الجيل الجديد من الكراسي المتحركة</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-[1.2] text-gray-900 dark:text-white tracking-tight"
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 font-medium max-w-2xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a 
              href="#products" 
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 sm:py-4 px-7 sm:px-10 rounded-2xl transition-all shadow-[0_0_20px_rgba(5,115,240,0.4)] hover:shadow-[0_0_30px_rgba(5,115,240,0.6)] hover:-translate-y-1 text-base sm:text-lg group"
            >
              <span>تصفح المنتجات</span>
              <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-4 -space-x-reverse">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-[#020817] bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xs">+1K</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-[#020817] bg-brand-100 flex items-center justify-center text-brand-600"><Shield size={18} /></div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">عميل يثق بنا</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
