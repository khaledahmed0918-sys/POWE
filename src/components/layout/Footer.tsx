import React from 'react';
import { Container } from '../ui/Container';
import { DEVELOPER, FOUNDERS, OWNER, SITE_FOUNDER } from '../../data/constants';
import { Avatar } from '../ui/Avatar';
import { SocialButton } from '../ui/SocialButton';

export const Footer: React.FC = () => {
  const founder = SITE_FOUNDER; // Use the specific site founder for the footer

  return (
    <footer className="relative py-16 mt-20 border-t border-red-600/10 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" alt="POWR" className="w-8 h-8 object-contain" />
              <span className="text-xl font-black text-white tracking-tighter">POWR CLAN</span>
            </div>
            <div className="text-red-100/30 text-[10px] font-bold tracking-[0.1em]">
              جميع الحقوق محفوظة © 2026 كلان باور
            </div>
          </div>

          {/* Credits */}
          <div className="flex flex-col sm:flex-row gap-12 items-center">
            
            {/* Founder Credit */}
            {founder && (
              <div className="flex items-center gap-4 group">
                <div className="text-right">
                  <div className="text-red-500/40 text-[9px] uppercase tracking-[0.2em] font-black mb-1">المؤسس</div>
                  <div className="font-bold text-red-100/60 group-hover:text-white transition-colors tracking-wide text-sm mb-2">
                    {founder.name}
                  </div>
                  <div className="flex justify-end gap-2">
                    {founder.socials.map((social) => (
                      <SocialButton 
                        key={social.platform} 
                        platform={social.platform} 
                        url={social.url} 
                        className="w-7 h-7"
                      />
                    ))}
                  </div>
                </div>
                <Avatar initials={founder.initials} src={founder.avatarUrl} size="sm" className="border border-red-600/20 group-hover:border-red-600/50 transition-colors" />
              </div>
            )}

            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-12 bg-red-600/10" />

            {/* Developer Credit */}
            <div className="flex items-center gap-4 group">
              <div className="text-right">
                <div className="text-red-500/40 text-[9px] uppercase tracking-[0.2em] font-black mb-1">المطور</div>
                <div className="font-bold text-red-100/60 group-hover:text-white transition-colors tracking-wide text-sm mb-2">
                  {DEVELOPER.name}
                </div>
                <div className="flex justify-end gap-2">
                  {DEVELOPER.socials.map((social) => (
                    <SocialButton 
                      key={social.platform} 
                      platform={social.platform} 
                      url={social.url} 
                      className="w-7 h-7"
                    />
                  ))}
                </div>
              </div>
              <Avatar initials={DEVELOPER.initials} src={DEVELOPER.avatarUrl} size="sm" className="border border-red-600/20 group-hover:border-red-600/50 transition-colors" />
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
};
