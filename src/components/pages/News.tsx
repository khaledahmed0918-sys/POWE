import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { NEWS } from '../../data/constants';
import { Newspaper, Calendar, ArrowLeft, Tag } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <Container>
      <SectionTitle title="أخبار باور" subtitle="آخر التحديثات والفعاليات في المنظمة" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {NEWS.map((item, idx) => (
          <GlassCard key={item.id} className="p-0 overflow-hidden group border-red-600/10 hover:border-red-600/30 transition-all">
            <div className="relative aspect-video overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                {item.category}
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-red-500/60 text-[10px] font-black uppercase tracking-widest mb-4">
                <Calendar size={14} /> {item.date}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-red-100/40 text-sm md:text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                {item.excerpt}
              </p>
              <button className="flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                اقرأ المزيد <ArrowLeft size={18} />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-24">
        <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden card-gradient border-red-600/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-red-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Newspaper size={32} className="text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase font-display">اشترك في النشرة الإخبارية</h2>
            <p className="text-red-100/40 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              كن أول من يعرف عن البطولات القادمة، انضمام الأعضاء الجدد، والمقاطع الحصرية.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex-grow bg-red-600/5 border border-red-600/10 rounded-2xl py-4 px-6 text-white placeholder:text-red-100/20 focus:border-red-600/40 focus:outline-none transition-all"
                dir="rtl"
              />
              <button className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all hover:scale-105">
                اشترك الآن
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </Container>
  );
};
