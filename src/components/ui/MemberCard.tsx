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
    <GlassCard className={`flex flex-col h-full ${featured ? 'p-8 md:p-12 md:flex-row gap-8 md:gap-12 items-center' : 'p-8 gap-6'}`}>
      
      {/* Top / Right: Avatar & Role (RTL layout) */}
      <div className={`flex ${featured ? 'flex-col items-center md:items-start' : 'items-center gap-6 w-full'}`}>
        <Avatar 
          initials={member.initials} 
          src={member.avatarUrl}
          size={featured ? 'xl' : 'lg'} 
        />
        {!featured && (
          <div className="flex flex-col items-start flex-1">
            <h3 className="font-bold text-white text-2xl tracking-tight mb-1">{member.name}</h3>
            <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">{member.role}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className={`flex flex-col flex-1 ${featured ? 'items-center md:items-start text-center md:text-right' : 'items-start text-right w-full'}`}>
        
        {featured && (
          <>
            <h3 className="font-bold text-white text-4xl md:text-5xl tracking-tight mb-3">{member.name}</h3>
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-6">{member.role}</span>
          </>
        )}
        
        {member.bio && (
          <p className={`text-gray-400 text-sm leading-relaxed mb-6 ${featured ? 'max-w-2xl text-base' : ''}`}>
            {member.bio}
          </p>
        )}
        
        {/* Stats Grid */}
        {member.stats && member.stats.length > 0 && (
          <div className={`flex flex-wrap gap-6 mb-6 w-full ${featured ? 'justify-center md:justify-start' : 'justify-start'}`}>
            {member.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-white font-display text-lg md:text-xl font-medium">{stat.value}</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        <div className={`flex flex-wrap gap-2 mb-8 ${featured ? 'justify-center md:justify-start' : 'justify-start'}`}>
          {member.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
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
