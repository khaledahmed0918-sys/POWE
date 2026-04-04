import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { useTwitterData } from '../../utils/useApi';
import { Calendar, Heart, ExternalLink, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FALLBACK_AVATAR = 'https://i.postimg.cc/6qJ7Y26q/IMG_9451.jpg';
const FALLBACK_BANNER = 'https://i.postimg.cc/8cQFtJkv/IMG_9452.jpg';

export const News: React.FC = () => {
  const { data, loading } = useTwitterData();
  const [webviewUrl, setWebviewUrl] = useState<string | null>(null);

  const extractLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
  };

  const isImageUrl = (url: string) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  const isVideoUrl = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-red-500 font-black tracking-widest uppercase text-sm animate-pulse">جاري تحميل آخر الأخبار...</p>
        </div>
      </div>
    );
  }

  const avatar = data?.profile?.avatar || FALLBACK_AVATAR;
  const banner = data?.profile?.banner || FALLBACK_BANNER;

  return (
    <div className="pb-24">
      {/* Profile Header - Enhanced */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        <img 
          src={banner} 
          alt="Banner" 
          className="w-full h-full object-cover scale-105 blur-[2px] opacity-50" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        
        <Container className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full animate-pulse" />
              <div className="p-1 rounded-full bg-gradient-to-tr from-red-600 to-red-900 relative z-10">
                <img 
                  src={avatar} 
                  alt="POWR Avatar" 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-black object-cover shadow-2xl" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase font-display drop-shadow-2xl">POWR eSports</h1>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-[1px] w-8 bg-red-600/50" />
                <p className="text-red-500 font-black tracking-[0.3em] uppercase text-sm">@POWReSports</p>
                <div className="h-[1px] w-8 bg-red-600/50" />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data?.tweets.map((tweet, idx) => {
            const links = extractLinks(tweet.text);
            const webLinks = links.filter(link => !isImageUrl(link) && !isVideoUrl(link));
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-8 h-full flex flex-col border-white/5 hover:border-red-600/20 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-0.5 rounded-full bg-red-600/20">
                        <img src={avatar} alt="" className="w-12 h-12 rounded-full border border-black object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <span className="block text-white font-black text-base tracking-tight">باور</span>
                        <div className="flex items-center gap-2 text-red-100/30 text-[10px] font-bold uppercase tracking-widest">
                          <Calendar size={12} />
                          {tweet.date}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-red-600/10 rounded-full flex items-center gap-2 text-red-500 text-xs font-black border border-red-600/20">
                      <Heart size={14} className="fill-current" />
                      {tweet.likes > 0 ? tweet.likes.toLocaleString() : '0'}
                    </div>
                  </div>

                  <p className="text-white/90 text-xl leading-relaxed mb-8 font-medium whitespace-pre-wrap tracking-tight" dir="rtl">
                    {tweet.text}
                  </p>

                  {/* Media Gallery - Improved */}
                  {tweet.media.length > 0 && (
                    <div className={`grid gap-4 mb-8 ${tweet.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {tweet.media.map((m, i) => (
                        <div key={i} className="rounded-3xl overflow-hidden border border-white/5 aspect-video bg-black/20 group/media">
                          <img 
                            src={m} 
                            alt="" 
                            className="w-full h-full object-contain group-hover/media:scale-105 transition-transform duration-700" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Webview Buttons */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                      {webLinks.map((link, i) => (
                        <button 
                          key={i}
                          onClick={() => setWebviewUrl(link)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl text-xs font-black hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all active:scale-95"
                        >
                          <Globe size={14} /> عرض الرابط
                        </button>
                      ))}
                    </div>
                    <a 
                      href="https://twitter.com/powresports" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-100/20 hover:text-red-600 transition-colors text-xs font-black uppercase tracking-widest"
                    >
                      عرض على X <ExternalLink size={14} />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Webview Modal */}
      <AnimatePresence>
        {webviewUrl && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWebviewUrl(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full h-full max-w-6xl bg-[#0A0A0A] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-white font-bold text-sm truncate max-w-[200px] md:max-w-md">{webviewUrl}</span>
                </div>
                <button 
                  onClick={() => setWebviewUrl(null)}
                  className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-xl flex items-center justify-center text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-grow bg-white">
                <iframe 
                  src={webviewUrl} 
                  className="w-full h-full border-none"
                  title="Webview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
