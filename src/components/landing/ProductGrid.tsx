"use client";

import { useState } from "react";
import { useStore, ProductType } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { products } = useStore();
  const [filter, setFilter] = useState<ProductType | 'all'>('all');

  const filteredProducts = products.filter(
    p => filter === 'all' ? true : p.type === filter
  );

  return (
    <section id="products" className="py-24 bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            أحدث الإصدارات
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'electric', label: 'كهربائي' },
            { id: 'manual', label: 'يدوي' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as ProductType | 'all')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden ${
                filter === item.id 
                  ? 'text-white shadow-[0_0_20px_rgba(5,115,240,0.4)]' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter === item.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-brand-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            لا توجد منتجات مطابقة للفلتر المحدد
          </div>
        )}
      </div>
    </section>
  );
}
