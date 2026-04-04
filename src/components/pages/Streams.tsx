import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { LIVE_STREAMS, STREAM_SCHEDULE } from '../../data/constants';
import { Radio, Calendar, Clock, User, ExternalLink, Youtube, Twitch } from 'lucide-react';

export const Streams: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Live Now Section */}
      <section>
        <Container>
          <SectionTitle title="البث المباشر" subtitle="شاهد أعضاء باور مباشرة وتفاعل معهم" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LIVE_STREAMS.map((stream) => (
              <GlassCard key={stream.id} className="p-0 overflow-hidden group">
                <div className="relative aspect-video">
                  <img src={stream.thumbnail} alt={stream.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full animate-pulse">
                    <Radio size={14} /> LIVE
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">
                    {stream.viewerCount} مشاهد
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img src={stream.avatar} alt={stream.channelName} className="w-12 h-12 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{stream.title}</h3>
                      <span className="text-red-500 font-black text-sm">{stream.channelName}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-2xl font-black text-sm hover:bg-red-700 transition-all hover:scale-105">
                    {stream.platform === 'youtube' ? <Youtube size={18} /> : <Twitch size={18} />}
                    دخول البث
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section>
        <Container>
          <div className="flex items-center gap-3 mb-10">
            <Calendar size={24} className="text-red-600" />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">جدول البثوث الأسبوعي</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STREAM_SCHEDULE.map((item, idx) => (
              <GlassCard key={idx} className="p-6 border-red-600/10 hover:border-red-600/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-600/10 text-red-500 text-xs font-black rounded-lg border border-red-600/20">
                    {item.day}
                  </span>
                  <div className="flex items-center gap-1 text-red-100/40 text-[10px] font-bold">
                    <Clock size={12} /> {item.time}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/10 rounded-full flex items-center justify-center">
                    <User size={20} className="text-red-600" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-tight">{item.member}</span>
                </div>
                <div className="flex items-center gap-2 text-red-100/20 text-[10px] font-black uppercase tracking-widest">
                  {item.platform === 'YouTube' ? <Youtube size={14} /> : <Twitch size={14} />}
                  {item.platform}
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
