"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function FeaturesSection() {
  const { features, settings } = useStore();

  if (!settings.showFeatures) return null;

  return (
    <section className="py-24 relative bg-gray-50 dark:bg-[#020817] transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            تكنولوجيا تلبي <span className="text-brand-600 dark:text-brand-400">احتياجاتك</span>
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[minmax(250px,auto)]">
          {features.map((feature, index) => {
            // @ts-expect-error Dynamic icon access
            const Icon = LucideIcons[feature.iconName] || LucideIcons.CheckCircle;
            
            // Bento logic: Make the first and fourth item span 2 columns on desktop
            const isWide = index === 0 || index === 3;
            
            return (
              <motion.div 
                key={feature.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col group hover:-translate-y-1 transition-all duration-300 ${isWide ? 'md:col-span-2' : 'md:col-span-1'} shadow-sm hover:shadow-[0_0_30px_rgba(5,115,240,0.15)]`}
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 dark:bg-brand-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 border border-brand-100 dark:border-brand-800/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10 relative`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{feature.description}</p>
                </div>
                
                {/* Tech lines decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
