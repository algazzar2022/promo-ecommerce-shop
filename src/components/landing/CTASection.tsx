"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export default function CTASection() {
  const { cta, settings } = useStore();

  if (!settings.showCTA) return null;

  return (
    <section className="relative py-32 overflow-hidden bg-[#020817] text-white">
      {/* Tech Grid and Orbs */}
      <div className="absolute inset-0 bg-tech-grid-dark bg-[size:30px_30px] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-12 md:p-20 rounded-[3rem] backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight drop-shadow-md">
            {cta.headline}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {cta.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${settings.whatsappNumber.replace('+', '')}`}
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#25D366] font-black py-5 px-10 rounded-2xl transition-all shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 text-lg group"
            >
              <div className="bg-[#25D366] p-1.5 rounded-full text-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span>{cta.buttonText}</span>
            </a>

            <a 
              href={cta.secondaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600/20 hover:bg-brand-600/30 text-white font-bold py-5 px-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-1 text-lg backdrop-blur-md"
            >
              <span>{cta.secondaryButtonText}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
