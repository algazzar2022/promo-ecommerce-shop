"use client";

import { Product, useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { ArrowLeft, Battery, Activity, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { settings } = useStore();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative rounded-[2rem] overflow-hidden group focus:outline-none focus:ring-4 focus:ring-brand-500/30 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-[0_0_40px_rgba(5,115,240,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Glowing Border effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/20 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative h-64 overflow-hidden p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-t-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent z-10 opacity-60"></div>
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
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 line-clamp-2 min-h-[56px] tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{product.name}</h3>
          
          {/* Tech Specs */}
          <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 dark:text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Battery size={14} className="text-brand-500" />
              <span>{product.type === 'electric' ? '24 كم' : 'يدوي'}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1.5">
              <Activity size={14} className="text-brand-500" />
              <span>وزن خفيف</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 group/price">
                {/* Official SAMA Riyal Symbol approximation (U+20C1) */}
                <span className="text-brand-600 dark:text-brand-400">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="inline-block" aria-label="SAR">
                    <path d="M7 4h2v13.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V11h2v6.5c0 2.48-2.02 4.5-4.5 4.5S7 19.98 7 17.5V4zm10 0h2v5h-2V4z" />
                  </svg>
                </span>
                <span className="text-3xl font-black text-gray-900 dark:text-white font-sans">
                  {product.price.toLocaleString('en-US')}
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">السعر النهائي</span>
            </div>

            <a 
              href={product.externalLink || `https://wa.me/${settings.whatsappNumber.replace('+', '')}`}
              target="_blank"
              className="w-full relative overflow-hidden bg-brand-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-brand-500/20 hover:bg-brand-700 hover:shadow-brand-500/40 hover:-translate-y-1"
            >
              <span className="text-sm">اطلب عبر واتساب</span>
              <ShoppingCart size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
