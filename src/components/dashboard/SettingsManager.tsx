"use client";

import { useStore } from "@/store/useStore";

export default function SettingsManager() {
  const { settings, updateSettings } = useStore();

  const toggleSection = (key: keyof typeof settings) => {
    if (key === 'whatsappNumber') return;
    updateSettings({ [key]: !settings[key] });
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">الإعدادات العامة</h2>
        <p className="text-gray-500 text-sm mt-1">إدارة رقم الواتساب وتفعيل/تعطيل أقسام الموقع</p>
      </div>

      <div className="space-y-6">
        {/* Contact Settings */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">معلومات التواصل</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">رقم الواتساب (مع رمز الدولة)</label>
            <input 
              type="text" 
              value={settings.whatsappNumber}
              onChange={e => updateSettings({ whatsappNumber: e.target.value })}
              placeholder="+966500000000"
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              dir="ltr"
            />
            <p className="text-xs text-gray-500 mt-2">مثال: +966500000000</p>
          </div>
        </div>

        {/* Section Toggles */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">أقسام الموقع</h3>
          <p className="text-sm text-gray-500 mb-6">قم بتفعيل أو تعطيل الأقسام التي تظهر للزوار في الصفحة الرئيسية</p>
          
          <div className="space-y-4">
            {[
              { id: 'showHero', label: 'القسم الرئيسي (العلوي)' },
              { id: 'showFeatures', label: 'قسم المميزات' },
              { id: 'showProducts', label: 'شبكة المنتجات' },
              { id: 'showHajjBenefits', label: 'فوائد الحج' },
              { id: 'showCTA', label: 'دعوة لاتخاذ إجراء (السفلي)' },
            ].map((section) => (
              <div key={section.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-700">{section.label}</span>
                <button 
                  onClick={() => toggleSection(section.id as keyof typeof settings)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[section.id as keyof typeof settings] ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings[section.id as keyof typeof settings] ? '-translate-x-6' : '-translate-x-1'
                    }`} 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
