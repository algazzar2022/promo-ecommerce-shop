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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            // @ts-expect-error Dynamic icon access
            const Icon = LucideIcons[feature.iconName] || LucideIcons.CheckCircle;
            
            // Bento logic: Make specific items stand out
            const isFeatured = index === 0;
            
            return (
              <motion.div 
                key={feature.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-[2.5rem] p-1 ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Border Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-white dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.4rem] p-10 border border-gray-100 dark:border-gray-800/50 flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(5,115,240,0.1)]">
                  
                  {/* Decorative Icon in Background */}
                  <div className="absolute -right-4 -top-4 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <Icon size={180} strokeWidth={1} />
                  </div>

                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/40 dark:to-brand-800/20 text-brand-600 dark:text-brand-400 flex items-center justify-center border border-brand-200/50 dark:border-brand-700/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm">
                      <Icon size={32} strokeWidth={2.5} />
                    </div>
                    <div className="text-4xl font-black text-gray-100 dark:text-gray-800/50 group-hover:text-brand-500/20 transition-colors duration-500">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span>اكتشف المزيد</span>
                    <LucideIcons.ArrowLeft size={16} />
                  </div>

                  {/* Tech Lines Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
