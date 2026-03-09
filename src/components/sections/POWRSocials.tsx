import React from 'react';
import { Container } from '../ui/Container';
import { SocialButton } from '../ui/SocialButton';
import { POWR_SOCIALS } from '../../data/constants';

export const POWRSocials: React.FC = () => {
  return (
    <section className="py-16 relative">
      <Container>
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-red-900/40 via-[#0a0a0a] to-black/80 border border-red-500/20 p-12 md:p-24 text-center shadow-[0_0_50px_rgba(220,38,38,0.15)]">
          {/* Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/30 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-widest relative z-10 font-display">
            تابع <span className="text-red-500 text-glow">#POWR</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            كن جزءاً من عائلتنا وتابعنا على جميع منصات التواصل الاجتماعي ليصلك كل جديد وحصري.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 relative z-10">
            {POWR_SOCIALS.map((social) => (
              <SocialButton 
                key={social.platform} 
                platform={social.platform} 
                url={social.url}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
