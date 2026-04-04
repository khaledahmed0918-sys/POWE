import React from 'react';
import { Container } from '../ui/Container';
import { SITE_FOUNDER, DEVELOPER } from '../../data/constants';
import { motion } from 'motion/react';
import { Twitter, Github, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-red-600/10 bg-black/40 backdrop-blur-md mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-right">
          {/* Logo & Rights */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
              alt="POWR Logo" 
              className="w-20 h-auto opacity-80"
              referrerPolicy="no-referrer"
            />
            <p className="text-red-100/40 text-xs font-bold tracking-widest uppercase">
              جميع الحقوق محفوظة © {currentYear} POWR CLAN
            </p>
          </div>

          {/* Credits */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-red-500/40 text-[10px] font-black uppercase tracking-[0.3em]">المؤسس</span>
              <div className="flex items-center gap-3 bg-red-600/5 px-4 py-2 rounded-2xl border border-red-600/10">
                <img src={SITE_FOUNDER.avatarUrl} alt={SITE_FOUNDER.name} className="w-8 h-8 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
                <span className="text-white font-bold text-sm tracking-tighter">{SITE_FOUNDER.name}</span>
              </div>
            </div>
          </div>

          {/* Developer */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-red-500/40 text-[10px] font-black uppercase tracking-[0.3em]">تطوير</span>
            <div className="flex items-center gap-3 bg-red-600/5 px-4 py-2 rounded-2xl border border-red-600/10">
              <span className="text-white font-bold text-sm tracking-tighter">{DEVELOPER.name}</span>
              <img src={DEVELOPER.avatarUrl} alt={DEVELOPER.name} className="w-8 h-8 rounded-full border border-red-600/20" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
