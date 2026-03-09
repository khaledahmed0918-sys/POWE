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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass-panel",
        hoverEffect && "transition-all duration-500 hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2",
        className
      )}
      {...props}
    >
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      {/* Hover glow effect */}
      {hoverEffect && (
        <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-3xl" />
        </div>
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
