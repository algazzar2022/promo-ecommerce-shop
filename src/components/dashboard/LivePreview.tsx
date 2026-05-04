"use client";

import { useState } from "react";
import { Monitor, Smartphone, RefreshCw } from "lucide-react";

export default function LivePreview() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [key, setKey] = useState(0);

  const refreshPreview = () => setKey(prev => prev + 1);

  return (
    <div className="flex flex-col h-full bg-gray-200 border-r border-gray-300 w-1/2 hidden lg:flex">
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-md transition-all ${device === 'desktop' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Monitor size={18} />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-md transition-all ${device === 'mobile' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Smartphone size={18} />
          </button>
        </div>

        <button onClick={refreshPreview} className="text-gray-500 hover:text-gray-900 transition-colors">
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-hidden relative">
        <div 
          className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
            device === 'desktop' ? 'w-full h-full' : 'w-[375px] h-[812px]'
          }`}
        >
          <iframe 
            key={key}
            src="/" 
            className="w-full h-full border-none"
            title="Live Preview"
          />
        </div>
      </div>
    </div>
  );
}
