"use client";

import { LayoutDashboard, ShoppingBag, Type, Star, Settings, Megaphone, Eye } from "lucide-react";

export type TabType = 'overview' | 'hero' | 'products' | 'features' | 'benefits' | 'cta' | 'settings';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
    { id: 'hero', label: 'القسم الرئيسي', icon: Type },
    { id: 'products', label: 'المنتجات', icon: ShoppingBag },
    { id: 'features', label: 'المميزات', icon: Star },
    { id: 'benefits', label: 'أداء المناسك', icon: Zap },
    { id: 'cta', label: 'دعوة لاتخاذ إجراء', icon: Megaphone },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ] as const;

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-full shrink-0 shadow-xl z-20 relative">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Settings className="text-teal-500" />
          <span>لوحة التحكم</span>
        </h1>
        <p className="text-gray-400 text-sm mt-2">إدارة محتوى MSCO</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-teal-600 text-white font-bold shadow-lg shadow-teal-900/50' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-gray-500"} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <a href="/" target="_blank" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors">
          <Eye size={18} />
          <span>عرض الموقع</span>
        </a>
      </div>
    </aside>
  );
}
