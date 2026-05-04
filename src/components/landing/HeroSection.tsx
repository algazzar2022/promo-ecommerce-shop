"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";

export default function HeroSection() {
  const { hero, settings } = useStore();

  if (!settings.showHero) return null;

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#020817] pt-24 pb-12 transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:40px_40px] opacity-40"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-400/20 dark:bg-brand-400/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Right Content */}
        <div className="flex-1 text-right w-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 font-semibold text-sm mb-8 shadow-sm"
          >
            <Zap size={16} className="text-brand-500 animate-pulse" />
            <span>الجيل الجديد من الكراسي المتحركة</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.2] text-gray-900 dark:text-white tracking-tight"
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 font-medium max-w-2xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#products" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_0_20px_rgba(5,115,240,0.4)] hover:shadow-[0_0_30px_rgba(5,115,240,0.6)] hover:-translate-y-1 text-lg group">
              <span>تصفح المنتجات</span>
              <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4 ml-4">
              <div className="flex -space-x-4 -space-x-reverse">
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020817] bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xs">+1K</div>
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#020817] bg-brand-100 flex items-center justify-center text-brand-600"><Shield size={20} /></div>
              </div>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">عميل يثق بنا</span>
            </div>
          </motion.div>
        </div>

        {/* Left Content - Floating Tech Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Holographic glowing backplate */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-600 to-cyan-400 blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            
            {/* Tech UI Rings */}
            <div className="absolute inset-0 rounded-full border border-brand-200 dark:border-brand-800/50 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-dashed border-brand-300 dark:border-brand-700/50 animate-[spin_40s_linear_infinite_reverse]"></div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <img 
                src="/images/hajj_electric_wheelchair_1777924154589.png" 
                alt="Electric Wheelchair" 
                className="w-[120%] h-[120%] object-contain drop-shadow-[0_20px_50px_rgba(5,115,240,0.3)] z-10 scale-110"
              />
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-8 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl"
            >
              <div className="text-brand-600 font-bold text-lg">24/7</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">دعم فني متواصل</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -left-8 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600"><Shield size={20} /></div>
              <div>
                <div className="font-bold text-sm dark:text-white">ضمان 3 سنوات</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">شامل المحرك والبطارية</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
