import React from 'react';
import { Container } from '../ui/Container';
import { DEVELOPER, FOUNDERS } from '../../data/constants';
import { Avatar } from '../ui/Avatar';

export const Footer: React.FC = () => {
  const founder = FOUNDERS.find(f => f.id === 'tu36y');

  return (
    <footer className="relative py-12 mt-10 border-t border-white/5 bg-[#030303]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm tracking-wide">
            جميع الحقوق محفوظة © 2026 كلان باور
          </div>

          {/* Credits */}
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            
            {/* Founder Credit */}
            {founder && (
              <div className="flex items-center gap-4 group">
                <span className="text-gray-600 text-xs uppercase tracking-widest">المؤسس</span>
                <a href={founder.socials[0]?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Avatar initials={founder.initials} src={founder.avatarUrl} size="sm" />
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">{founder.name}</span>
                </a>
              </div>
            )}

            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Developer Credit */}
            <div className="flex items-center gap-4 group">
              <span className="text-gray-600 text-xs uppercase tracking-widest">المطور</span>
              <a href={DEVELOPER.socials[0]?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Avatar initials={DEVELOPER.initials} src={DEVELOPER.avatarUrl} size="sm" />
                <span className="font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">{DEVELOPER.name}</span>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
};
