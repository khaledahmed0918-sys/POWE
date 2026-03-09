import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={cn(
      "px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-white/[0.03] border border-white/10 text-gray-300",
      "hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default",
      className
    )}>
      {children}
    </span>
  );
};
