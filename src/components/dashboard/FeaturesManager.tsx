"use client";

import { useStore, Feature } from "@/store/useStore";
import { useState } from "react";
import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";

export default function FeaturesManager() {
  const { features, updateFeature } = useStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Feature>>({});

  const startEdit = (feature: Feature) => {
    setFormData(feature);
    setEditingId(feature.id);
  };

  const handleSave = () => {
    if (editingId) {
      updateFeature(editingId, formData);
      setEditingId(null);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">المميزات</h2>
        <p className="text-gray-500 text-sm mt-1">تعديل نصوص وأيقونات قسم المميزات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map(feature => {
          // @ts-expect-error Dynamic icon access
          const Icon = LucideIcons[feature.iconName] || LucideIcons.CheckCircle;
          const isEditing = editingId === feature.id;

          return (
            <div key={feature.id} className={`bg-white p-6 rounded-2xl border transition-all ${isEditing ? 'border-teal-500 shadow-md ring-1 ring-teal-500' : 'border-gray-200 shadow-sm hover:border-teal-300'}`}>
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">اسم الأيقونة (Lucide)</label>
                    <input 
                      type="text" 
                      value={formData.iconName}
                      onChange={e => setFormData({...formData, iconName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">العنوان</label>
                    <input 
                      type="text" 
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-bold focus:ring-1 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">الوصف</label>
                    <textarea 
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-teal-500 outline-none resize-none"
                    />
                  </div>
                  <div className="flex gap-2 justify-end pt-2">
                    <button onClick={() => setEditingId(null)} className="px-4 py-1.5 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">إلغاء</button>
                    <button onClick={handleSave} className="px-4 py-1.5 text-sm text-white bg-teal-600 rounded-lg hover:bg-teal-700 flex items-center gap-1">
                      <Check size={16} /> حفظ
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{feature.description}</p>
                    <button onClick={() => startEdit(feature)} className="text-sm font-medium text-teal-600 hover:text-teal-700">تعديل</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
