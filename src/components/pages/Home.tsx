import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { LIVE_STREAMS, VIDEO_OF_THE_DAY, CLAN_DETAILS } from '../../data/constants';
import { motion } from 'motion/react';
import { Radio, Play, Star, BarChart2, Eye, Heart, Users, TrendingUp } from 'lucide-react';
import { ContentCreators } from '../sections/ContentCreators';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Live Now Section */}
      <section>
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase flex items-center gap-2">
              <Radio size={20} className="text-red-600" />
              بث مباشر الآن
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LIVE_STREAMS.map((stream) => (
              <GlassCard key={stream.id} className="p-4 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative aspect-video w-full md:w-48 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={stream.thumbnail} alt={stream.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase">Live</div>
                </div>
                <div className="flex-grow text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <img src={stream.avatar} alt={stream.channelName} className="w-8 h-8 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
                    <span className="text-red-500 font-bold text-sm">{stream.channelName}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4 line-clamp-1">{stream.title}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="text-red-100/40 text-xs flex items-center gap-1">
                      <Users size={14} /> {stream.viewerCount} مشاهد
                    </span>
                    <button className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors">
                      مشاهدة الآن
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Video of the Day */}
      <section>
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              مقطع اليوم
            </h2>
          </div>
          
          <GlassCard className="p-0 overflow-hidden border-yellow-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video">
                <img src={VIDEO_OF_THE_DAY.thumbnail} alt={VIDEO_OF_THE_DAY.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                    <Play size={32} fill="white" className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <img src={VIDEO_OF_THE_DAY.channelAvatar} alt={VIDEO_OF_THE_DAY.channelName} className="w-12 h-12 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-red-500 font-black text-lg">{VIDEO_OF_THE_DAY.channelName}</h4>
                    <span className="text-red-100/40 text-xs font-bold">صانع محتوى باور</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{VIDEO_OF_THE_DAY.title}</h3>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-white font-display text-2xl font-black flex items-center gap-2">
                      <Eye size={20} className="text-red-600" />
                      {(VIDEO_OF_THE_DAY.views / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-red-100/20 text-[10px] font-bold uppercase tracking-widest">مشاهدة</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-display text-2xl font-black flex items-center gap-2">
                      <Heart size={20} className="text-red-600" />
                      {(VIDEO_OF_THE_DAY.likes / 1000).toFixed(0)}K
                    </span>
                    <span className="text-red-100/20 text-[10px] font-bold uppercase tracking-widest">إعجاب</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Quick Stats */}
      <section>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CLAN_DETAILS.stats.map((stat, idx) => (
              <GlassCard key={idx} className="p-8 text-center group">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors">
                  <BarChart2 size={24} className="text-red-600" />
                </div>
                <span className="block text-3xl md:text-4xl font-black text-white mb-1 font-display">{stat.value}</span>
                <span className="text-red-100/40 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Videos Section (Reusing existing component) */}
      <ContentCreators />

      {/* Trend Power & Audience Panel */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Trend Power */}
            <GlassCard className="p-8 border-red-600/10">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <TrendingUp size={24} className="text-red-600" />
                ترند باور (آخر 24 ساعة)
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                    <span className="text-2xl font-black text-red-600/40 group-hover:text-red-600 transition-colors">0{i}</span>
                    <div className="w-16 h-10 rounded-lg bg-red-600/20 overflow-hidden">
                      <img src={VIDEO_OF_THE_DAY.thumbnail} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-bold text-xs line-clamp-1">مقطع ترند جديد من أعضاء باور</h4>
                      <span className="text-red-100/20 text-[9px] font-black uppercase">1.2M مشاهدة</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Audience Control Panel */}
            <GlassCard className="p-8 border-red-600/10">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <Users size={24} className="text-red-600" />
                لوحة تحكم الجمهور
              </h3>
              <p className="text-red-100/40 text-sm mb-8 font-medium">شارك برأيك وصوّت للأفضل هذا الأسبوع!</p>
              <div className="space-y-6">
                <div>
                  <span className="text-white font-bold text-xs mb-3 block">أفضل عضو هذا الأسبوع:</span>
                  <div className="flex gap-2">
                    {['SHONG', 'MODY', 'JASER'].map((name) => (
                      <button key={name} className="flex-1 py-2 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black hover:bg-red-600 hover:text-white transition-all">
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-white font-bold text-xs mb-3 block">أفضل مقطع:</span>
                  <div className="p-4 rounded-2xl bg-red-600/5 border border-red-600/10 text-center">
                    <span className="text-red-100/40 text-[10px] font-bold">جاري جمع النتائج...</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>
    </div>
  );
};
