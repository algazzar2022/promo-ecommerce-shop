"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep the loader fully opaque for a short moment to ensure store hydration
    const timer = setTimeout(() => {
      setLoading(false);
      // Remove it from the DOM after the fade out transition
      setTimeout(() => setShow(false), 500);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white dark:bg-[#020817] flex items-center justify-center transition-opacity duration-500 pointer-events-none ${loading ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-brand-600 font-semibold animate-pulse">جاري تحميل الموقع...</p>
      </div>
    </div>
  );
}
