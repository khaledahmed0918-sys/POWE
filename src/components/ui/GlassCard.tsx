import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass-panel border border-red-600/20 will-change-[transform,opacity]",
        hoverEffect && "transition-all duration-300 hover:bg-red-600/[0.03] hover:border-red-600/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(220,38,38,0.1)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
