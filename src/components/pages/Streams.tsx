import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Radio, ExternalLink, Youtube, Twitch, Users, UserX } from 'lucide-react';
import { useLiveStreams } from '../../utils/useApi';
import { KickStream } from '../../types';

export const Streams: React.FC = () => {
  const { sortedLiveStreams, loading } = useLiveStreams();
  const streams = sortedLiveStreams as KickStream[];

  return (
    <div className="space-y-24">
      {/* Streams Section */}
      <section>
        <Container>
          <SectionTitle title="البث المباشر" subtitle="شاهد أعضاء باور مباشرة وتفاعل معهم" />
          
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 bg-white/5 animate-pulse rounded-3xl border border-white/5" />
              ))}
            </div>
          ) : streams.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {streams.map((stream) => (
                <GlassCard key={stream.username} className={`p-0 overflow-hidden group transition-all duration-500 ${!stream.live ? 'opacity-60 grayscale-[0.5] hover:grayscale-0 hover:opacity-100' : 'ring-2 ring-red-600/20 shadow-[0_0_30px_rgba(220,38,38,0.1)]'}`}>
                  <div className="relative aspect-video">
                    <img src={stream.thumbnail?.url || stream.avatar || ''} alt={stream.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    
                    {stream.live ? (
                      <>
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full animate-pulse shadow-lg">
                          <Radio size={14} /> LIVE
                        </div>
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">
                          {stream.viewers.toLocaleString()} مشاهد
                        </div>
                      </>
                    ) : (
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md text-white/60 text-xs font-bold rounded-full border border-white/10">
                        OFFLINE
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img src={stream.avatar || ''} alt={stream.username} className={`w-14 h-14 rounded-full border-2 ${stream.live ? 'border-red-600' : 'border-white/10'}`} referrerPolicy="no-referrer" />
                        {stream.live && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-black" />}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-lg mb-0.5 line-clamp-1 group-hover:text-red-500 transition-colors">{stream.title || 'بث مباشر'}</h3>
                        <span className="text-red-500 font-black text-sm tracking-tight">{stream.username}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://kick.com/${stream.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-sm transition-all hover:scale-[1.02] active:scale-95 ${stream.live ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5'}`}
                    >
                      <ExternalLink size={18} />
                      {stream.live ? 'دخول البث' : 'زيارة القناة'}
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <GlassCard className="p-12 text-center border-red-600/10">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserX size={32} className="text-red-600/40" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">لا توجد قنوات حالياً</h3>
              <p className="text-red-100/40 font-medium">يرجى المحاولة مرة أخرى لاحقاً</p>
            </GlassCard>
          )}
        </Container>
      </section>
    </div>
  );
};
