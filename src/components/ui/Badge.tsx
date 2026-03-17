import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={cn(
      "px-2.5 py-0.5 text-[8px] font-black uppercase tracking-[0.1em] rounded-full bg-red-600/5 border border-red-600/10 text-red-400/60",
      "hover:bg-red-600/10 hover:text-white hover:border-red-600/30 transition-all duration-300 cursor-default",
      className
    )}>
      {children}
    </span>
  );
};
