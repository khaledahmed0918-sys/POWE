import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-10 overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none" 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto"
      >
        {/* Breathing Logo */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <img 
            src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
            alt="POWR Logo" 
            className="w-48 md:w-64 h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 font-display flex flex-col justify-center items-center gap-y-2 py-6">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-600 leading-normal pb-2">
            WE ARE
          </span>
          <span className="inline-block text-red-600 text-glow leading-normal pb-4" dir="ltr">#POWR</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
          كل ما تحتاج معرفته عن مؤسسي وصناع محتوى وطاقم إدارة كلان باور
        </p>
      </motion.div>
    </section>
  );
};
