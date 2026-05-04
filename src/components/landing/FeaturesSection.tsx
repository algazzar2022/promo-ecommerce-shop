"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function FeaturesSection() {
  const { features, settings } = useStore();

  if (!settings.showFeatures) return null;

  return (
    <section className="py-32 relative bg-[#fafafa] dark:bg-[#020817] overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/50 text-brand-600 dark:text-brand-400 text-sm font-bold tracking-wider uppercase"
          >
            لماذا تختارنا؟
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            تكنولوجيا تلبي <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-cyan-500">احتياجاتك</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-brand-400 to-cyan-400 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {features.map((feature, index) => {
              // @ts-expect-error Dynamic icon access
              const Icon = LucideIcons[feature.iconName] || LucideIcons.CheckCircle;
              const isEven = index % 2 === 0;
              
              return (
                <div key={feature.id} className="relative md:py-16">
                  {/* Central Node Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600 border-4 border-white dark:border-[#020817] shadow-[0_0_15px_rgba(5,115,240,0.5)] z-20 hidden md:block"></div>

                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="flex-1 w-full"
                    >
                      <div className={`p-8 md:p-12 rounded-[3rem] bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-gray-100 dark:border-gray-800/50 shadow-xl relative group hover:border-brand-500/30 transition-colors duration-500 ${isEven ? 'text-right' : 'text-right md:text-left'}`}>
                        <div className={`w-20 h-20 rounded-3xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-8 border border-brand-100 dark:border-brand-800/50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 mx-auto ${isEven ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
                          <Icon size={36} strokeWidth={2} />
                        </div>
                        
                        <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{feature.title}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                          {feature.description}
                        </p>

                        {/* Hover Decoration */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-brand-500/10 to-cyan-500/10 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>

                    {/* Empty Side (Space for layout) */}
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
