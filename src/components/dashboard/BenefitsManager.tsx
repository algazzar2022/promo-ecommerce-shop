"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { Save } from "lucide-react";

export default function BenefitsManager() {
  const { benefits, updateBenefits, updateBenefit } = useStore();
  const [formData, setFormData] = useState({
    headline: benefits.headline,
    description: benefits.description
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveMain = () => {
    setIsSaving(true);
    updateBenefits(formData);
    setTimeout(() => setIsSaving(false), 500);
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">قسم أداء استثنائي (مناسك الحج)</h2>
        <p className="text-gray-500 text-sm mt-1">تعديل النصوص والعناوين الخاصة بقسم مميزات الحج</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الرئيسي</label>
            <input 
              type="text" 
              value={formData.headline}
              onChange={e => setFormData({...formData, headline: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
            <textarea 
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end pt-4 border-t border-gray-50">
          <button 
            onClick={handleSaveMain}
            className="flex items-center gap-2 bg-brand-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-sm"
          >
            <Save size={18} />
            {isSaving ? "تم الحفظ" : "حفظ النصوص الأساسية"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md uppercase tracking-wider">المنسك {item.id}</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">اسم المنسك</label>
                <input 
                  type="text" 
                  value={item.title}
                  onChange={e => updateBenefit(item.id, { title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">الوصف التفصيلي</label>
                <textarea 
                  value={item.description}
                  onChange={e => updateBenefit(item.id, { description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none resize-none text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
