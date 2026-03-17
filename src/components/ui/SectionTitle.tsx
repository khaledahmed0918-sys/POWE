import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("relative flex flex-col items-center justify-center w-full mb-16", className)}
    >
      <div className="w-px h-10 bg-gradient-to-b from-transparent via-red-600/40 to-transparent mb-6" />
      
      <div className="text-center relative">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-red-100/40 text-base md:text-lg font-bold max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="w-2 h-2 rounded-full bg-red-600/60 mt-6 shadow-[0_0_10px_rgba(220,38,38,0.3)]" />
    </motion.div>
  );
};
