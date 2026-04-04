import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { VideoData } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, SortAsc, SortDesc, Play, Eye, Heart, Youtube } from 'lucide-react';
import { cn } from '../../utils/cn';

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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all duration-300 flex flex-col h-full shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={video.thumbnail} alt={video.title} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <Youtube size={24} color="white" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-[10px] font-bold text-white flex items-center gap-1.5 border border-white/10">
          <span className="text-red-500"><Eye size={12} /></span>
          {formatNumber(video.views)}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-sm md:text-base mb-4 line-clamp-2 leading-snug group-hover:text-red-500 transition-colors duration-300" dir="rtl">
          {video.title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <img src={video.channelAvatar} alt={video.channelName} loading="lazy" referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border border-white/10 flex-shrink-0" />
            <span className="text-red-100/60 text-xs font-bold truncate">{video.channelName}</span>
          </div>
          <div className="flex items-center gap-1.5 text-red-500/80 text-[11px] font-black">
            <Heart size={12} />
            {formatNumber(video.likes)}
          </div>
        </div>
      </div>
      <a href={video.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`Watch ${video.title} on YouTube`} />
    </motion.div>
  );
};

export const Videos: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'views'>('newest');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://dolabriform-fascinatedly-lecia.ngrok-free.dev/last', {
          headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        if (!response.ok) throw new Error('Failed to fetch videos');
        const data: VideoData[] = await response.json();
        const uniqueVideos = data.reduce((acc: VideoData[], current) => {
          if (!acc.find(item => item.videoId === current.videoId)) return acc.concat([current]);
          return acc;
        }, []);
        setVideos(uniqueVideos);
        setFilteredVideos(uniqueVideos);
      } catch (err) {
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    let result = [...videos];
    if (searchQuery) {
      result = result.filter(v => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        v.channelName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === 'views') {
      result.sort((a, b) => b.views - a.views);
    }
    setFilteredVideos(result);
  }, [searchQuery, sortBy, videos]);

  return (
    <Container>
      <SectionTitle title="مكتبة المقاطع" subtitle="استكشف جميع مقاطع أعضاء باور في مكان واحد" />
      
      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-red-100/20" size={20} />
          <input 
            type="text" 
            placeholder="ابحث عن مقطع أو صانع محتوى..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-red-600/5 border border-red-600/10 rounded-2xl py-3 pr-12 pl-4 text-white placeholder:text-red-100/20 focus:border-red-600/40 focus:outline-none transition-all"
            dir="rtl"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => setSortBy('newest')}
            className={cn(
              "flex-1 md:flex-none px-6 py-3 rounded-2xl border transition-all font-bold text-sm flex items-center gap-2 justify-center",
              sortBy === 'newest' ? "bg-red-600 border-red-600 text-white" : "bg-red-600/5 border-red-600/10 text-red-100/40"
            )}
          >
            <SortDesc size={18} /> الأحدث
          </button>
          <button 
            onClick={() => setSortBy('views')}
            className={cn(
              "flex-1 md:flex-none px-6 py-3 rounded-2xl border transition-all font-bold text-sm flex items-center gap-2 justify-center",
              sortBy === 'views' ? "bg-red-600 border-red-600 text-white" : "bg-red-600/5 border-red-600/10 text-red-100/40"
            )}
          >
            <Eye size={18} /> الأكثر مشاهدة
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl bg-white/5 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video, index) => (
            <VideoCard key={`${video.videoId}-${index}`} video={video} index={index} />
          ))}
        </div>
      )}
    </Container>
  );
};
