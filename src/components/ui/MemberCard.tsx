import React from 'react';
import { Member } from '../../types';
import { GlassCard } from '../ui/GlassCard';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { SocialButton } from '../ui/SocialButton';

interface MemberCardProps {
  member: Member;
  featured?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, featured = false }) => {
  return (
    <GlassCard className={`flex flex-col h-full ${featured ? 'p-6 md:p-10 md:flex-row gap-6 md:gap-10 items-center' : 'p-6 gap-4'}`}>
      
      {/* Top / Right: Avatar & Role (RTL layout) */}
      <div className={`flex ${featured ? 'flex-col items-center md:items-start' : 'items-center gap-4 w-full'}`}>
        <Avatar 
          initials={member.initials} 
          src={member.avatarUrl}
          size={featured ? 'xl' : 'md'} 
        />
        {!featured && (
          <div className="flex flex-col items-start flex-1">
            <h3 className="font-bold text-white text-xl tracking-tight mb-0.5">{member.name}</h3>
            <span className="text-red-500 text-[10px] font-semibold uppercase tracking-widest">{member.role}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className={`flex flex-col flex-1 ${featured ? 'items-center md:items-start text-center md:text-right' : 'items-start text-right w-full'}`}>
        
        {featured && (
          <>
            <h3 className="font-bold text-white text-3xl md:text-4xl tracking-tight mb-2">{member.name}</h3>
            <span className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-4">{member.role}</span>
          </>
        )}
        
        {member.bio && (
          <p className={`text-gray-400 text-xs leading-relaxed mb-4 ${featured ? 'max-w-xl text-sm' : ''}`}>
            {member.bio}
          </p>
        )}
        
        {/* Stats Grid */}
        {member.stats && member.stats.length > 0 && (
          <div className={`flex flex-wrap gap-4 mb-4 w-full ${featured ? 'justify-center md:justify-start' : 'justify-start'}`}>
            {member.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-white font-display text-base md:text-lg font-medium">{stat.value}</span>
                <span className="text-gray-500 text-[9px] uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        <div className={`flex flex-wrap gap-1.5 mb-6 ${featured ? 'justify-center md:justify-start' : 'justify-start'}`}>
          {member.tags.map((tag) => (
            <Badge key={tag} className="px-3 py-1 text-[9px]">{tag}</Badge>
          ))}
        </div>
        
        {/* Socials */}
        <div className={`flex gap-3 mt-auto ${featured ? 'justify-center md:justify-start w-full' : 'w-full justify-start'}`}>
          {member.socials.map((social) => (
            <SocialButton 
              key={social.platform} 
              platform={social.platform} 
              url={social.url} 
            />
          ))}
        </div>
      </div>
    </GlassCard>
  );
};
