import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { CLAN_DETAILS } from '../../data/constants';
import { motion } from 'motion/react';
import { Radio, Play, Star, BarChart2, Eye, Heart, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import { ContentCreators } from '../sections/ContentCreators';
import { useLiveStreams, useLastVideos } from '../../utils/useApi';
import { KickStream } from '../../types';

export const Home: React.FC<{ setActiveSection: (section: string) => void }> = ({ setActiveSection }) => {
  const { sortedLiveStreams, loading: streamsLoading } = useLiveStreams();
  const streams = sortedLiveStreams as KickStream[];
  const { data: lastVideos, loading: videosLoading } = useLastVideos();

  // Logic for Video of the Day
  const getVideoOfTheDay = () => {
    if (videosLoading || !lastVideos.length) return null;
    
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    // 1. Check if any video was released today
    const todayVideo = lastVideos.find(v => v.published.startsWith(todayStr));
    if (todayVideo) return todayVideo;
    
    // 2. Check for latest video of the current week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    const weekVideo = lastVideos.find(v => new Date(v.published) >= oneWeekAgo);
    if (weekVideo) return weekVideo;
    
    return null;
  };

  const videoOfTheDay = getVideoOfTheDay();

  // Logic for Trend Power (Channel UCm6dEXyAMIy0njEOW-suLww)
  const trendVideo = lastVideos.find(v => v.channelId === 'UCm6dEXyAMIy0njEOW-suLww');

  const topStreams = streams.slice(0, 2);

  return (
    <div className="space-y-24">
      {/* Live Now Section */}
      {!streamsLoading && topStreams.length > 0 && (
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
              {topStreams.map((stream) => (
                <GlassCard key={stream.username} className="p-4 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative aspect-video w-full md:w-48 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={stream.thumbnail?.url || stream.avatar || ''} alt={stream.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase">Live</div>
                  </div>
                  <div className="flex-grow text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <img src={stream.avatar || ''} alt={stream.username} className="w-8 h-8 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
                      <span className="text-red-500 font-bold text-sm">{stream.username}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4 line-clamp-1">{stream.title}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-red-100/40 text-xs flex items-center gap-1">
                        <Users size={14} /> {stream.viewers.toLocaleString()} مشاهد
                      </span>
                      <a 
                        href={`https://kick.com/${stream.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors"
                      >
                        مشاهدة الآن
                      </a>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Video of the Day */}
      {!videosLoading && videoOfTheDay && (
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
                  <img src={videoOfTheDay.thumbnail} alt={videoOfTheDay.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={videoOfTheDay.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Play size={32} fill="white" className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <img src={videoOfTheDay.channelAvatar} alt={videoOfTheDay.channelName} className="w-12 h-12 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-red-500 font-black text-lg">{videoOfTheDay.channelName}</h4>
                      <span className="text-red-100/40 text-xs font-bold">صانع محتوى باور</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{videoOfTheDay.title}</h3>
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-white font-display text-2xl font-black flex items-center gap-2">
                        <Eye size={20} className="text-red-600" />
                        {videoOfTheDay.views >= 1000000 ? (videoOfTheDay.views / 1000000).toFixed(1) + 'M' : (videoOfTheDay.views / 1000).toFixed(1) + 'K'}
                      </span>
                      <span className="text-red-100/20 text-[10px] font-bold uppercase tracking-widest">مشاهدة</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-display text-2xl font-black flex items-center gap-2">
                        <Heart size={20} className="text-red-600" />
                        {videoOfTheDay.likes >= 1000 ? (videoOfTheDay.likes / 1000).toFixed(0) + 'K' : videoOfTheDay.likes}
                      </span>
                      <span className="text-red-100/20 text-[10px] font-bold uppercase tracking-widest">إعجاب</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Container>
        </section>
      )}

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

      {/* Latest Videos Section */}
      <section>
        <ContentCreators limit={5} />
        <Container className="flex justify-center mt-8">
          <button 
            onClick={() => {
              setActiveSection('videos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 px-10 py-4 bg-red-600/10 border border-red-600/20 text-red-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all group"
          >
            المزيد <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          </button>
        </Container>
      </section>

      {/* Trend Power */}
      {!videosLoading && trendVideo && (
        <section className="pb-24">
          <Container>
            <div className="grid grid-cols-1 gap-12">
              {/* Trend Power */}
              <GlassCard className="p-8 border-red-600/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                  <TrendingUp size={24} className="text-red-600" />
                  ترند باور
                </h3>
                
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative group">
                    <img src={trendVideo.thumbnail} alt={trendVideo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={trendVideo.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play size={28} fill="white" className="ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                      <img src={trendVideo.channelAvatar} alt={trendVideo.channelName} className="w-10 h-10 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
                      <span className="text-red-600 font-black">{trendVideo.channelName}</span>
                    </div>
                    <h4 className="text-3xl font-black text-white mb-6 leading-tight">{trendVideo.title}</h4>
                    <div className="flex gap-10">
                      <div>
                        <span className="block text-2xl font-black text-white">{trendVideo.views.toLocaleString()}</span>
                        <span className="text-red-100/20 text-[10px] font-black uppercase">مشاهدة</span>
                      </div>
                      <div>
                        <span className="block text-2xl font-black text-white">{trendVideo.likes.toLocaleString()}</span>
                        <span className="text-red-100/20 text-[10px] font-black uppercase">إعجاب</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};
