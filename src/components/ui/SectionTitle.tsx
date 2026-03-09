import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full mb-16", className)}>
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-px bg-gradient-to-b from-transparent to-red-500 mb-6" 
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-white tracking-wide text-center"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="w-2 h-2 rounded-full bg-red-500 mt-6 shadow-[0_0_15px_rgba(220,38,38,0.8)]" 
      />
    </div>
  );
};
