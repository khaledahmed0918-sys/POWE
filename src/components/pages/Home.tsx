import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { CLAN_DETAILS } from '../../data/constants';
import { motion } from 'motion/react';
import { Radio, Play, Star, Eye, Heart, Users, TrendingUp, ArrowLeft, MessageSquare, Share2, Twitter } from 'lucide-react';
import { ContentCreators } from '../sections/ContentCreators';
import { useLiveStreams, useLastVideos, useTwitterData } from '../../utils/useApi';
import { KickStream } from '../../types';

export const Home: React.FC<{ setActiveSection: (section: string) => void }> = ({ setActiveSection }) => {
  const { sortedLiveStreams, loading: streamsLoading } = useLiveStreams();
  const streams = sortedLiveStreams as KickStream[];
  const { data: lastVideos, loading: videosLoading } = useLastVideos();
  const { data: twitterData, loading: twitterLoading } = useTwitterData();

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
  const latestTweet = twitterData?.tweets[0];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section - Clan Philosophy */}
      <section className="relative pt-20 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-red-600" />
                <span className="text-red-600 font-black tracking-[0.3em] uppercase text-sm">نحن نصنع التاريخ</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                أكبر منظمة <br />
                <span className="text-red-600">للرياضات الإلكترونية</span> <br />
                في الشرق الأوسط
              </h1>
              <p className="text-red-100/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                {CLAN_DETAILS.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => setActiveSection('about')}
                  className="px-10 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95"
                >
                  اكتشف المزيد
                </button>
                <button 
                  onClick={() => setActiveSection('members')}
                  className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
                >
                  فريقنا
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600 blur-[120px] opacity-20 rounded-full animate-pulse" />
              <img 
                src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
                alt="POWR Logo" 
                className="w-full max-w-lg mx-auto relative z-10 drop-shadow-[0_0_50px_rgba(220,38,38,0.3)] mix-blend-screen"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </Container>
      </section>
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

      {/* Latest News Teaser */}
      {!twitterLoading && latestTweet && (
        <section>
          <Container>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-3">
                <Twitter size={24} className="text-[#1DA1F2]" />
                آخر الأخبار
              </h2>
              <button 
                onClick={() => setActiveSection('news')}
                className="text-red-500 font-black text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
              >
                جميع الأخبار <ArrowLeft size={16} />
              </button>
            </div>
            
            <GlassCard className="p-8 md:p-12 border-white/5 hover:border-red-600/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-8">
                    <img src={twitterData?.profile?.avatar} alt="POWR" className="w-14 h-14 rounded-full border-2 border-red-600/20" referrerPolicy="no-referrer" />
                    <div>
                      <span className="block text-white font-black text-xl tracking-tight">باور eSports</span>
                      <span className="text-red-500 font-bold text-sm">@POWReSports</span>
                    </div>
                  </div>
                  <p className="text-white/90 text-2xl leading-relaxed mb-10 font-medium tracking-tight" dir="rtl">
                    {latestTweet.text}
                  </p>
                  <div className="flex items-center gap-8 text-red-100/30 font-black text-xs uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Heart size={16} className="text-red-600" /> {latestTweet.likes.toLocaleString()}</span>
                    <span className="flex items-center gap-2"><MessageSquare size={16} className="text-red-600" /> تفاعل</span>
                    <span className="flex items-center gap-2"><Share2 size={16} className="text-red-600" /> {latestTweet.date}</span>
                  </div>
                </div>
                {latestTweet.media.length > 0 && (
                  <div className="w-full md:w-[400px] rounded-3xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
                    <img src={latestTweet.media[0]} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
              </div>
            </GlassCard>
          </Container>
        </section>
      )}

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
      {/* Community Section */}
      <section>
        <Container>
          <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">انضم إلى مجتمع باور</h2>
              <p className="text-red-100/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                كن جزءاً من أكبر تجمع لمحبي الرياضات الإلكترونية وصناع المحتوى في العالم العربي. تابعنا وشاركنا شغفك!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://x.com/powresports" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#1DA1F2] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#1DA1F2]/20 active:scale-95">تويتر</a>
                <a href="https://instagram.com/poweresports" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95">انستقرام</a>
                <a href="https://youtube.com/@powresports" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95">يوتيوب</a>
              </div>
            </motion.div>
          </GlassCard>
        </Container>
      </section>
    </div>
  );
};
