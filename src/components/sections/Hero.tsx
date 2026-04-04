import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-10 overflow-hidden">
      {/* Vibrant Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-red-900/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
        {/* Logo with Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 relative group"
        >
          <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />
          <img 
            src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
            alt="POWR Logo" 
            className="w-32 md:w-48 h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 font-display flex flex-col items-center gap-y-1"
        >
          <span className="text-white">WE ARE</span>
          <span className="text-red-600 text-glow" dir="ltr">
            #POWR
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-red-100/60 max-w-xl mx-auto font-bold leading-relaxed tracking-wide"
        >
          المنظمة الرائدة في صناعة المحتوى والرياضات الإلكترونية
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-red-500/40 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-red-600/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
