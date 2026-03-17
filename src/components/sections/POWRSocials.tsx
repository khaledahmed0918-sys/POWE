import React from 'react';
import { Container } from '../ui/Container';
import { SocialButton } from '../ui/SocialButton';
import { POWR_SOCIALS } from '../../data/constants';
import { motion } from 'motion/react';

export const POWRSocials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] overflow-hidden card-gradient border border-red-600/20 p-12 md:p-20 text-center shadow-[0_0_40px_rgba(220,38,38,0.1)]"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black mb-6 uppercase tracking-[0.3em]">
              انضم إلينا
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter font-display">
              تابع <span className="text-red-600 text-glow">#POWR</span>
            </h2>
            
            <p className="text-red-100/60 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              كن جزءاً من عائلتنا وتابعنا على جميع منصات التواصل الاجتماعي ليصلك كل جديد وحصري من عالم باور.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
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
        </motion.div>
      </Container>
    </section>
  );
};
