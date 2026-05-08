"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { settings } = useStore();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-white/80 dark:bg-[#020817]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:shadow-brand-200 dark:group-hover:shadow-brand-900 transition-shadow duration-300">
          <Image
            src="https://mscostore.com/wp-content/uploads/2025/01/cropped-Medical-Sources-Company-LOGO-0%D9%A1-6.png"
            alt="MSCO - مصادر الطب"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 leading-tight">MSCO</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">مصادر الطب</p>
        </div>
      </a>

      {/* CTA Button + Theme Toggle */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark Mode Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-brand-600" />
            )}
          </button>
        )}

        <a
          href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-4 md:px-5 rounded-xl transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="hidden sm:inline">تواصل معنا</span>
          <span className="sm:hidden">واتساب</span>
        </a>
      </div>
    </motion.nav>
  );
}
