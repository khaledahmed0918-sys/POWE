import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { CLAN_DETAILS, POWR_SOCIALS } from '../../data/constants';
import { Info, Target, History, Globe } from 'lucide-react';
import { SocialButton } from '../ui/SocialButton';

export const About: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Mission & Vision */}
      <section>
        <Container>
          <SectionTitle title="عن باور" subtitle="المنظمة الرائدة في صناعة المحتوى والرياضات الإلكترونية" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-700" />
              <img 
                src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
                alt="POWR Logo" 
                className="w-full max-w-md mx-auto h-auto object-contain relative z-10 drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black mb-6 uppercase tracking-[0.3em]">
                قصتنا
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-display leading-tight">
                نحن لا نصنع المحتوى فحسب، بل <span className="text-red-600 text-glow">نصنع التاريخ</span>
              </h2>
              <p className="text-red-100/40 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                {CLAN_DETAILS.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-8 text-center md:text-right border-red-600/10">
                  <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 md:ml-auto">
                    <Target size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">رؤيتنا</h3>
                  <p className="text-red-100/40 text-sm leading-relaxed font-medium">
                    الارتقاء بمستوى صناعة المحتوى في العالم العربي والوصول به إلى العالمية من خلال الابتكار والاحترافية.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center md:text-right border-red-600/10">
                  <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 md:ml-auto">
                    <History size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">تاريخنا</h3>
                  <p className="text-red-100/40 text-sm leading-relaxed font-medium">
                    تأسست المنظمة في عام 2010 وبدأت كفريق صغير من المبدعين، واليوم نحن أكبر منظمة في الشرق الأوسط.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Socials Section */}
      <section>
        <Container>
          <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden card-gradient border-red-600/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter font-display">
                تابع <span className="text-red-600 text-glow">#POWR</span>
              </h2>
              <p className="text-red-100/60 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                كن جزءاً من عائلتنا وتابعنا على جميع منصات التواصل الاجتماعي ليصلك كل جديد وحصري من عالم باور.
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {POWR_SOCIALS.map((social) => (
                  <a 
                    key={social.platform} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 md:w-20 md:h-20 bg-red-600/10 rounded-3xl flex items-center justify-center border border-red-600/20 hover:bg-red-600 hover:scale-110 transition-all group"
                  >
                    <Globe size={32} className="text-red-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </div>
  );
};
