"use client";

import { useState } from "react";
import Sidebar, { TabType } from "@/components/dashboard/Sidebar";
import LivePreview from "@/components/dashboard/LivePreview";
import ProductsManager from "@/components/dashboard/ProductsManager";
import HeroManager from "@/components/dashboard/HeroManager";
import FeaturesManager from "@/components/dashboard/FeaturesManager";
import CTAManager from "@/components/dashboard/CTAManager";
import SettingsManager from "@/components/dashboard/SettingsManager";
import BenefitsManager from "@/components/dashboard/BenefitsManager";
import { useStore } from "@/store/useStore";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const { products } = useStore();

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">مرحباً بك في لوحة تحكم MSCO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">إجمالي المنتجات</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">{products.length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">حالة الموقع</h3>
                <p className="text-3xl font-bold text-teal-600 mt-2">نشط ✓</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">الزوار اليوم</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">+120</p>
              </div>
            </div>
          </div>
        );
      case 'products':
        return <ProductsManager />;
      case 'hero':
        return <HeroManager />;
      case 'features':
        return <FeaturesManager />;
      case 'cta':
        return <CTAManager />;
      case 'settings':
        return <SettingsManager />;
      case 'benefits':
        return <BenefitsManager />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed width */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area - Scrollable */}
      <main className="flex-1 overflow-y-auto bg-gray-50/50 p-8">
        {renderContent()}
      </main>

      {/* Live Preview - Split Screen (Hidden on mobile) */}
      <LivePreview />
    </div>
  );
}
