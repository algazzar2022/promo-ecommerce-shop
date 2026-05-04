"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { ImageIcon } from "lucide-react";

export default function HeroManager() {
  const { hero, updateHero } = useStore();
  
  const [formData, setFormData] = useState(hero);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    updateHero(formData);
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, backgroundImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">القسم الرئيسي (Hero)</h2>
        <p className="text-gray-500 text-sm mt-1">إدارة النصوص والصورة الخلفية للقسم الأول في الموقع</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الرئيسي</label>
          <input 
            type="text" 
            value={formData.headline}
            onChange={e => setFormData({...formData, headline: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none font-bold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">العنوان الفرعي</label>
          <textarea 
            value={formData.subheadline}
            onChange={e => setFormData({...formData, subheadline: e.target.value})}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">صورة الخلفية</label>
          
          <div className="relative h-48 w-full rounded-xl border-2 border-dashed border-gray-300 overflow-hidden group bg-gray-50 flex flex-col items-center justify-center">
            {formData.backgroundImage ? (
              <>
                <img src={formData.backgroundImage} alt="Hero Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                  <label className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
                    تغيير الصورة
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </>
            ) : (
              <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full text-gray-500 hover:text-teal-600 transition-colors">
                <ImageIcon size={32} className="mb-2" />
                <span className="font-medium">انقر لرفع صورة</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
          <div className="mt-3">
            <input 
              type="text" 
              value={formData.backgroundImage?.startsWith('data:') ? '' : formData.backgroundImage}
              onChange={e => setFormData({...formData, backgroundImage: e.target.value})}
              placeholder="أو ضع رابط الصورة هنا..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={handleSave} 
            className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-md flex items-center gap-2"
          >
            {isSaving ? 'تم الحفظ!' : 'حفظ التغييرات'}
          </button>
        </div>
      </div>
    </div>
  );
}
