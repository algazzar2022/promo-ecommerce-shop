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
          
          <a 
            href={`https://wa.me/${settings.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <div className="absolute inset-0 bg-brand-500 rounded-2xl blur group-hover:blur-xl transition-all duration-300 opacity-70"></div>
            <div className="relative bg-white text-brand-900 hover:bg-brand-50 font-black py-5 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 text-xl hover:scale-105 border border-white">
              {cta.buttonText}
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.101.824z"></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
