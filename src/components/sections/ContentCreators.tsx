import React, { useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { VideoData } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { FaEye, FaHeart, FaYoutube } from 'react-icons/fa';

const VideoCard: React.FC<{ video: VideoData; index: number }> = ({ video, index }) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all duration-300 flex flex-col h-full shadow-lg will-change-[transform,opacity]"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <FaYoutube size={24} color="white" />
          </div>
        </div>

        {/* Views Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-[10px] font-bold text-white flex items-center gap-1.5 border border-white/10">
          <span className="text-red-500"><FaEye size={12} /></span>
          {formatNumber(video.views)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-sm md:text-base mb-4 line-clamp-2 leading-snug group-hover:text-red-500 transition-colors duration-300" dir="rtl">
          {video.title}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <img 
              src={video.channelAvatar} 
              alt={video.channelName}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border border-white/10 flex-shrink-0"
            />
            <span className="text-red-100/60 text-xs font-bold truncate">
              {video.channelName}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 text-red-500/80 text-[11px] font-black">
            <FaHeart size={12} />
            {formatNumber(video.likes)}
          </div>
        </div>
      </div>

      {/* Link Overlay */}
      <a 
        href={video.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-20"
        aria-label={`Watch ${video.title} on YouTube`}
      />
    </motion.div>
  );
};

export const ContentCreators: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://dolabriform-fascinatedly-lecia.ngrok-free.dev/last', {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        if (!response.ok) throw new Error('Failed to fetch videos');
        const data: VideoData[] = await response.json();
        
        // Filter out duplicates by videoId
        const uniqueVideos = data.reduce((acc: VideoData[], current) => {
          const x = acc.find(item => item.videoId === current.videoId);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setVideos(uniqueVideos);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('تعذر تحميل الفيديوهات حالياً');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-red-600/5 to-transparent pointer-events-none" />
      
      <Container>
        <SectionTitle 
          title="آخر مقاطع صنّاع محتوى POWR" 
          subtitle="تابع أحدث المقاطع من نخبة صناع المحتوى في المنظمة" 
        />

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded-2xl bg-white/5 animate-pulse border border-white/5" />
              ))}
            </motion.div>
          ) : error ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-red-500 font-bold">{error}</p>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {videos.map((video, index) => (
                <VideoCard key={`${video.videoId}-${index}`} video={video} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
