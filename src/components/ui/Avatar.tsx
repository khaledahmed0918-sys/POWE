import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  initials?: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-10 h-10 text-sm',
  md: 'w-16 h-16 text-xl',
  lg: 'w-24 h-24 text-3xl',
  xl: 'w-32 h-32 md:w-40 md:h-40 text-5xl',
};

export const Avatar: React.FC<AvatarProps> = ({ initials, src, size = 'md', className }) => {
  return (
    <div className={cn("relative group flex-shrink-0 rounded-full", className)}>
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-900 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
      
      {/* Container */}
      <div className={cn(
        "relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-105 overflow-hidden shadow-2xl",
        sizeClasses[size]
      )}>
        {src ? (
          <img 
            src={src} 
            alt="Avatar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <>
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-50" />
            
            <span className="relative z-10 font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 tracking-wider">
              {initials}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
