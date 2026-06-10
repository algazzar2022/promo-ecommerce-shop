"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { MapPin, Compass, Shield, Rocket, ChevronLeft } from "lucide-react";

export default function PromoBenefits() {
  const { benefits, settings } = useStore();

  if (!settings.showPromoBenefits) return null;

  const icons = [MapPin, Compass, Shield, Rocket];

  return (
    <section className="py-32 relative bg-white dark:bg-[#020817] overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/30 dark:bg-brand-900/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
          >
            {benefits.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
          >
            {benefits.description}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Path Line */}
          <div className="absolute top-0 bottom-0 right-[2.75rem] md:right-1/2 w-1 bg-gradient-to-b from-brand-100 via-brand-500 to-brand-100 dark:from-gray-800 dark:via-brand-500/50 dark:to-gray-800 hidden md:block"></div>

          <div className="space-y-16 relative">
            {benefits.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.id} className="relative group">
                  {/* Step Circle on Line */}
                  <div className="absolute top-1/2 right-[2.75rem] md:right-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-brand-500 shadow-[0_0_20px_rgba(5,115,240,0.3)] z-20 flex items-center justify-center hidden md:flex">
                    <span className="text-brand-600 font-black">0{index + 1}</span>
                  </div>

                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="flex-1 w-full"
                    >
                      <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-gray-100 dark:border-gray-800/50 shadow-xl group-hover:shadow-2xl group-hover:border-brand-500/30 transition-all duration-500">
                        <div className="flex items-center gap-6 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <Icon size={32} />
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-brand-500 font-bold text-sm">
                              <span>المرحلة {index + 1}</span>
                              <ChevronLeft size={14} />
                            </div>
                          </div>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                          {item.description}
                        </p>
                        
                        {/* Decorative background icon */}
                        <div className="absolute left-6 bottom-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                          <Icon size={120} strokeWidth={1} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Spacer for the other side */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
