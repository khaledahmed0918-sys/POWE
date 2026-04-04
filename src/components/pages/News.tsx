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
      <Container>
        <SectionTitle title="أخبار باور" subtitle="جاري تحميل آخر التحديثات..." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-64 bg-white/5 animate-pulse rounded-3xl border border-white/5" />
          ))}
        </div>
      </Container>
    );
  }

  const avatar = data?.profile?.avatar || FALLBACK_AVATAR;
  const banner = data?.profile?.banner || FALLBACK_BANNER;

  return (
    <div className="pb-24">
      {/* Profile Header */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-24">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <Container className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full" />
              <img 
                src={avatar} 
                alt="POWR Avatar" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-black relative z-10 object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center mt-6">
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-display">POWR eSports</h1>
              <p className="text-red-500 font-bold tracking-widest uppercase text-xs mt-2">@POWReSports</p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data?.tweets.map((tweet, idx) => {
            const links = extractLinks(tweet.text);
            const webLinks = links.filter(link => !isImageUrl(link) && !isVideoUrl(link));
            
            return (
              <GlassCard key={idx} className="p-8 flex flex-col border-red-600/10 hover:border-red-600/30 transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt="" className="w-10 h-10 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
                    <div>
                      <span className="block text-white font-bold text-sm">باور</span>
                      <span className="text-red-100/20 text-[10px] font-black uppercase tracking-widest">{tweet.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-500/60 text-xs font-bold">
                    <Heart size={14} className="fill-current" />
                    {tweet.likes > 0 ? tweet.likes : ''}
                  </div>
                </div>

                <p className="text-white text-lg leading-relaxed mb-8 font-medium whitespace-pre-wrap" dir="rtl">
                  {tweet.text}
                </p>

                {/* Media Gallery */}
                {tweet.media.length > 0 && (
                  <div className={`grid gap-2 mb-8 ${tweet.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {tweet.media.map((m, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-white/5 aspect-square md:aspect-video">
                        <img src={m} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Webview Buttons */}
                <div className="mt-auto flex flex-wrap gap-4">
                  {webLinks.map((link, i) => (
                    <button 
                      key={i}
                      onClick={() => setWebviewUrl(link)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 text-red-500 rounded-xl text-xs font-black hover:bg-red-600 hover:text-white transition-all"
                    >
                      <Globe size={14} /> عرض Webview
                    </button>
                  ))}
                  <a 
                    href="https://twitter.com/powresports" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-100/20 hover:text-red-600 transition-colors text-xs font-bold"
                  >
                    عرض على X <ExternalLink size={14} />
                  </a>
                </div>
              </GlassCard>
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
