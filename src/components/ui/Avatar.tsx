import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  initials?: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-14 h-14 text-lg',
  lg: 'w-20 h-20 text-2xl',
  xl: 'w-28 h-28 md:w-36 md:h-36 text-4xl',
};

export const Avatar: React.FC<AvatarProps> = ({ initials, src, size = 'md', className }) => {
  return (
    <div className={cn("relative group flex-shrink-0 rounded-full", className)}>
      {/* Outer Glow Ring */}
      <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-red-600 to-red-950 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
      
      {/* Container */}
      <div className={cn(
        "relative flex items-center justify-center rounded-full bg-gradient-to-br from-red-900/40 to-black border border-red-600/30 backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-red-600/60 overflow-hidden shadow-2xl",
        sizeClasses[size]
      )}>
        {src ? (
          <img 
            src={src} 
            alt="Avatar" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <>
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-50" />
            
            <span className="relative z-10 font-display font-black text-white drop-shadow-md tracking-wider">
              {initials}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
