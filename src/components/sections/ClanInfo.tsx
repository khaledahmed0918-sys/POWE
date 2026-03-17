import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import { Avatar } from '../ui/Avatar';
import { CLAN_DETAILS } from '../../data/constants';
import { motion } from 'motion/react';

export const ClanInfo: React.FC = () => {
  return (
    <section className="py-20 relative">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="p-8 md:p-12 relative overflow-hidden card-gradient border-red-600/10">
            {/* Glowing Accents */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              {/* Clan Logo */}
              <div className="flex-shrink-0 relative">
                <Avatar initials={CLAN_DETAILS.logoInitials} size="lg" className="relative z-10 border-2 border-red-600/20" />
              </div>
              
              {/* Clan Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-right w-full">
                <div className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
                  عن الكلان
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                  {CLAN_DETAILS.name}
                </h2>
                
                <p className="text-red-100/60 text-base md:text-lg leading-relaxed mb-8 max-w-3xl font-medium">
                  {CLAN_DETAILS.description}
                </p>
                
                {/* Clan Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  {CLAN_DETAILS.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start group">
                      <span className="text-white font-display text-2xl md:text-3xl font-black mb-1 group-hover:text-red-500 transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="text-red-400/40 text-[9px] uppercase tracking-[0.15em] font-bold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
};
