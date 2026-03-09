import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import { Avatar } from '../ui/Avatar';
import { CLAN_DETAILS } from '../../data/constants';

export const ClanInfo: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <GlassCard className="p-8 md:p-12 relative overflow-hidden border-red-500/20">
          {/* Soft Glowing Accents */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Clan Logo */}
            <div className="flex-shrink-0">
              <Avatar initials={CLAN_DETAILS.logoInitials} size="xl" />
            </div>
            
            {/* Clan Details */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right w-full">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                {CLAN_DETAILS.name}
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                {CLAN_DETAILS.description}
              </p>
              
              {/* Clan Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-8 w-full">
                {CLAN_DETAILS.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center md:items-start">
                    <span className="text-red-500 font-display text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
};
