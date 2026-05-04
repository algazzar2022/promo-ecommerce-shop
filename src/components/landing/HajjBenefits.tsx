"use client";

import { useStore } from "@/store/useStore";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const benefits = [
  { id: 1, title: 'الطواف', description: 'كراسي مريحة تتحمل الازدحام وتوفر سهولة في الحركة داخل الحرم المكي، مزودة بحساسات أمان لتفادي الاصطدام.' },
  { id: 2, title: 'السعي', description: 'بطاريات ليثيوم تدوم طويلاً لضمان أداء السعي بين الصفا والمروة بدون انقطاع، مع مؤشر ذكي للشحن.' },
  { id: 3, title: 'منى', description: 'تصميم هندسي قابل للطي في 3 ثوانٍ يسهل نقله وتخزينه في الخيام والمساحات الضيقة جداً.' },
  { id: 4, title: 'عرفات', description: 'نظام تعليق هيدروليكي وعجلات قوية تتحمل مختلف التضاريس لضمان راحة فائقة الحاج يوم عرفة.' },
];

export default function HajjBenefits() {
  const { settings } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  if (!settings.showHajjBenefits) return null;

  return (
    <section ref={containerRef} className="py-32 relative bg-gray-50 dark:bg-[#020817] transition-colors duration-300 overflow-hidden">
      {/* High-tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/5 via-gray-50 to-gray-50 dark:from-brand-900/20 dark:via-[#020817] dark:to-[#020817]"></div>
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:30px_30px] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 font-semibold text-sm mb-6"
            >
              <span>أداء استثنائي</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white"
            >
              مصممة خصيصاً لمناسك <span className="text-brand-600 dark:text-brand-400">الحج</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              تقنيات متقدمة تجعل أداء المناسك أسهل وأكثر أماناً. كل خطوة وكل ركن من أركان الحج أصبح في متناول الجميع بفضل الهندسة الذكية.
            </motion.p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"></div>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-6 mt-0 md:mt-20">
              {[benefits[0], benefits[2]].map((benefit) => (
                <div key={benefit.id} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-[0_0_30px_rgba(5,115,240,0.15)] transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all duration-500"></div>
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-4">{benefit.id.toString().padStart(2, '0')}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-6">
              {[benefits[1], benefits[3]].map((benefit) => (
                <div key={benefit.id} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-[0_0_30px_rgba(5,115,240,0.15)] transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all duration-500"></div>
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-bl from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-4">{benefit.id.toString().padStart(2, '0')}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
