"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { MapPin, Compass, Shield, Rocket } from "lucide-react";

export default function HajjBenefits() {
  const { benefits, settings } = useStore();

  if (!settings.showHajjBenefits) return null;

  const icons = [MapPin, Compass, Shield, Rocket];

  return (
    <section className="py-32 relative bg-[#fafafa] dark:bg-[#020817] overflow-hidden transition-colors duration-300">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark bg-[size:40px_40px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-sm font-black mb-6 uppercase tracking-widest"
            >
              <Rocket size={14} className="animate-bounce" />
              <span>أداء استثنائي</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              {benefits.headline.split(' ').map((word, i) => (
                <span key={i} className={word === 'الحج' ? 'text-brand-600 dark:text-brand-400' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
            >
              {benefits.description}
            </motion.p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-brand-200 dark:border-brand-800/50 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <Compass size={48} className="text-brand-500/50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isWide = index === 0 || index === 3;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-gray-100 dark:border-gray-800/50 p-10 flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(5,115,240,0.1)] hover:-translate-y-2 ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm border border-brand-100/50 dark:border-brand-800/50">
                    <Icon size={28} />
                  </div>
                  <div className="text-5xl font-black text-gray-50 dark:text-gray-800/30 transition-colors duration-500 group-hover:text-brand-500/10">
                    0{index + 1}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Icon size={120} strokeWidth={1} />
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
