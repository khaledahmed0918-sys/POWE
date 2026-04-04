import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { CREATORS, CLAN_DETAILS } from '../../data/constants';
import { BarChart2, TrendingUp, Users, Eye, Play, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Stats: React.FC = () => {
  const sortedBySubs = [...CREATORS].sort((a, b) => {
    const getVal = (v: string) => parseFloat(v.replace('M+', '').replace('B+', '')) * (v.includes('B') ? 1000 : 1);
    return getVal(b.stats![0].value) - getVal(a.stats![0].value);
  });

  return (
    <div className="space-y-24">
      {/* Overall Stats */}
      <section>
        <Container>
          <SectionTitle title="إحصائيات باور" subtitle="نظرة عامة على أرقام وإنجازات المنظمة" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLAN_DETAILS.stats.map((stat, idx) => (
              <GlassCard key={idx} className="p-10 text-center relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <TrendingUp size={32} className="text-red-600" /> : 
                     idx === 1 ? <Users size={32} className="text-red-600" /> :
                     idx === 2 ? <Award size={32} className="text-red-600" /> :
                     <Play size={32} className="text-red-600" />}
                  </div>
                  <span className="block text-5xl font-black text-white mb-2 font-display tracking-tighter">{stat.value}</span>
                  <span className="text-red-100/40 text-xs font-black uppercase tracking-[0.3em]">{stat.label}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Rankings Section */}
      <section>
        <Container>
          <div className="flex items-center gap-3 mb-12">
            <BarChart2 size={24} className="text-red-600" />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">ترتيب الأعضاء</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Top by Subscribers */}
            <GlassCard className="p-8 border-red-600/10">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <Users size={20} className="text-red-600" />
                الأكثر اشتراكاً
              </h3>
              <div className="space-y-6">
                {sortedBySubs.map((member, idx) => (
                  <div key={member.id} className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-red-600/5 border border-red-600/5 hover:border-red-600/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center font-black text-red-600 text-lg">
                        #{idx + 1}
                      </div>
                      <img src={member.avatarUrl} alt={member.name} className="w-12 h-12 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-tight">{member.name}</h4>
                        <span className="text-red-100/20 text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-white font-black text-lg font-display">{member.stats![0].value}</span>
                      <span className="text-red-100/20 text-[9px] font-bold uppercase tracking-widest">مشترك</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Top by Views */}
            <GlassCard className="p-8 border-red-600/10">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <Eye size={20} className="text-red-600" />
                الأكثر مشاهدة
              </h3>
              <div className="space-y-6">
                {sortedBySubs.map((member, idx) => (
                  <div key={member.id} className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-red-600/5 border border-red-600/5 hover:border-red-600/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center font-black text-red-600 text-lg">
                        #{idx + 1}
                      </div>
                      <img src={member.avatarUrl} alt={member.name} className="w-12 h-12 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-tight">{member.name}</h4>
                        <span className="text-red-100/20 text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-white font-black text-lg font-display">{member.stats![1].value}</span>
                      <span className="text-red-100/20 text-[9px] font-bold uppercase tracking-widest">مشاهدة</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>
    </div>
  );
};
