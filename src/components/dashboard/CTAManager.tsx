"use client";

import { useStore } from "@/store/useStore";
import { MessageCircle } from "lucide-react";

export default function CTAManager() {
  const { cta, updateCTA, settings, updateSettings } = useStore();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
            <MessageCircle size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">تواصل معنا (CTA)</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">إدارة قسم الواتساب في أسفل الموقع</p>
          </div>
        </div>
        
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={settings.showCTA}
            onChange={(e) => updateSettings({ showCTA: e.target.checked })}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-600"></div>
        </label>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">العنوان الرئيسي</label>
          <input
            type="text"
            value={cta.headline || ''}
            onChange={(e) => updateCTA({ headline: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all"
            placeholder="مثال: جاهز لتجربة راحة لا مثيل لها؟"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">النص الفرعي</label>
          <textarea
            value={cta.subheadline || ''}
            onChange={(e) => updateCTA({ subheadline: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all h-24 resize-none"
            placeholder="النص الذي يظهر تحت العنوان الرئيسي..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">نص الزر</label>
            <input
              type="text"
              value={cta.buttonText}
              onChange={(e) => updateCTA({ buttonText: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">رقم الواتساب</label>
            <div className="relative">
              <input
                type="text"
                dir="ltr"
                value={settings.whatsappNumber}
                onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all text-left font-sans"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">الزر الإضافي (الموقع الكامل)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">نص الزر الثاني</label>
              <input
                type="text"
                value={cta.secondaryButtonText}
                onChange={(e) => updateCTA({ secondaryButtonText: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">رابط الزر الثاني</label>
              <input
                type="text"
                dir="ltr"
                value={cta.secondaryButtonLink}
                onChange={(e) => updateCTA({ secondaryButtonLink: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white transition-all text-left font-sans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
