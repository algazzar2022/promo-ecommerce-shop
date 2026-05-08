"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const { hero, settings } = useStore();

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "msco-storage-v2") {
        window.location.reload();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!settings.showHero) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#020817] py-12 transition-colors duration-300">
      {/* Background grid */}
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:40px_40px] opacity-30" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] bg-brand-500/15 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-10">

        {/* ── LOGO ── clean, glowing, no heavy card */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo image — transparent background, drop shadow only */}
          <div className="relative w-36 h-24 md:w-56 md:h-36 drop-shadow-[0_8px_30px_rgba(5,115,240,0.25)]">
            <img
              src="https://mscostore.com/wp-content/uploads/2025/01/cropped-Medical-Sources-Company-LOGO-0%D9%A1-6.png"
              alt="MSCO - مصادر الطب"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* ── MAIN ROW: IMAGE RIGHT | TEXT LEFT ── */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-right lg:text-right w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-brand-50 dark:bg-brand-900/30
                         border border-brand-100 dark:border-brand-800
                         text-brand-600 dark:text-brand-400
                         font-semibold text-sm mb-5 shadow-sm"
            >
              <Zap size={16} className="text-brand-500 animate-pulse" />
              <span>الجيل الجديد من الكراسي المتحركة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5
                         leading-[1.2] text-gray-900 dark:text-white tracking-tight"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400
                         mb-8 font-medium max-w-xl leading-relaxed"
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
                className="inline-flex items-center justify-center gap-2
                           bg-brand-600 hover:bg-brand-700 text-white font-bold
                           py-3.5 px-8 rounded-2xl transition-all
                           shadow-[0_0_20px_rgba(5,115,240,0.4)]
                           hover:shadow-[0_0_30px_rgba(5,115,240,0.6)]
                           hover:-translate-y-1 text-base sm:text-lg group"
              >
                <span>تصفح المنتجات</span>
                <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 -space-x-reverse">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020817] bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xs">+1K</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020817] bg-brand-100 flex items-center justify-center text-brand-600"><Shield size={16} /></div>
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">عميل يثق بنا</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-cyan-400/20 dark:from-brand-600/40 dark:to-cyan-400/40 blur-3xl opacity-60 animate-pulse" />

              {/* Geometric frame */}
              <div
                className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl"
                style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
              >
                <div className="absolute inset-0 bg-tech-grid-dark opacity-10" />
              </div>

              {/* Spinning rings */}
              <div className="absolute inset-4 rounded-full border-2 border-brand-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-500 rounded-full shadow-[0_0_12px_rgba(5,115,240,0.9)]" />
              </motion.div>

              {/* Product image */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 1.5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute inset-0 z-10 flex items-center justify-center p-10"
              >
                <img
                  src={hero.backgroundImage}
                  alt="Electric Wheelchair"
                  className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(5,115,240,0.4)] scale-125"
                />
              </motion.div>

              {/* ── BADGE 1: 24/7 → أعلى يمين الصورة ── */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-3 -right-3 sm:-right-8 lg:-right-12 z-20
                           bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
                           px-3 py-2 sm:px-4 sm:py-3
                           rounded-2xl border border-gray-100 dark:border-gray-800
                           shadow-xl text-right min-w-[85px]"
              >
                <div className="text-brand-600 font-extrabold text-lg sm:text-xl leading-none">
                  {hero.badge1Value}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  {hero.badge1Title}
                </div>
              </motion.div>

              {/* ── BADGE 2: راضي او ارجع → أسفل يسار الصورة ── */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-3 -left-3 sm:-left-8 lg:-left-12 z-20
                           bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
                           px-3 py-2 sm:px-4 sm:py-3
                           rounded-2xl border border-gray-100 dark:border-gray-800
                           shadow-xl flex items-center gap-2 sm:gap-3
                           max-w-[145px] sm:max-w-[185px]"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0">
                  <Shield size={15} />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm dark:text-white leading-tight">
                    {hero.badge2Title}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                    {hero.badge2Value}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
