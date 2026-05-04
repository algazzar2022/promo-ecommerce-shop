"use client";

import { Product } from "@/store/useStore";
import { motion } from "framer-motion";
import { ArrowLeft, Battery, Activity } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.a 
      href={product.externalLink || '#'}
      target={product.externalLink ? "_blank" : undefined}
      rel={product.externalLink ? "noopener noreferrer" : undefined}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative rounded-[2rem] overflow-hidden group cursor-pointer block focus:outline-none focus:ring-4 focus:ring-brand-500/30 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-[0_0_40px_rgba(5,115,240,0.15)] transition-all duration-500 hover:-translate-y-2"
    >
      {/* Glowing Border effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/20 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative h-72 overflow-hidden p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-t-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent z-10 opacity-100"></div>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal rounded-2xl transition-transform duration-700 group-hover:scale-110 z-0 relative"
          />
          <div className="absolute top-6 right-6 z-20">
            <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-1.5 text-sm font-bold rounded-full text-brand-600 dark:text-brand-400 shadow-lg border border-brand-100 dark:border-brand-800/50">
              {product.type === 'electric' ? 'كهربائي' : 'يدوي'}
            </span>
          </div>
        </div>
        
        <div className="p-8 pt-6 flex-1 flex flex-col bg-white dark:bg-gray-900 z-20 relative rounded-b-[2rem]">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 line-clamp-2 min-h-[64px] tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{product.name}</h3>
          
          {/* Tech Specs (Mock) */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Battery size={16} className="text-brand-500" />
              <span>{product.type === 'electric' ? '24 كم' : 'بدون'}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1.5">
              <Activity size={16} className="text-brand-500" />
              <span>وزن خفيف</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-auto mb-6">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">السعر</span>
              <span className="text-3xl font-black text-gray-900 dark:text-white font-sans tracking-tight">
                {product.price.toLocaleString('ar-SA')} <span className="text-lg text-brand-600 font-bold">ر.س</span>
              </span>
            </div>
          </div>
          
          <div className="w-full relative overflow-hidden bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 border border-brand-100 dark:border-brand-800/50 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 shadow-sm group-hover:shadow-[0_10px_20px_rgba(5,115,240,0.3)]">
            <span className="relative z-10 text-lg">استكشف التفاصيل</span>
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
