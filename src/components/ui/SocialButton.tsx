import React, { useState } from 'react';
import { SocialPlatform } from '../../types';
import { 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaSnapchat, 
  FaTwitch, 
  FaTiktok,
  FaDiscord,
  FaEnvelope,
  FaUsers
} from 'react-icons/fa';
import { SiKick } from 'react-icons/si';
import { cn } from '../../utils/cn';

interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  className?: string;
}

const iconMap = {
  instagram: { icon: FaInstagram, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  twitter: { icon: FaTwitter, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  youtube: { icon: FaYoutube, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  snapchat: { icon: FaSnapchat, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  twitch: { icon: FaTwitch, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  tiktok: { icon: FaTiktok, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  kick: { icon: SiKick, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  discord: { icon: FaDiscord, color: 'text-white', bg: 'bg-[#5865F2]/10', border: 'border-[#5865F2]/20', hoverBg: 'group-hover:bg-[#5865F2]/30', hoverBorder: 'group-hover:border-[#5865F2]/60', glow: 'group-hover:shadow-[0_0_15px_rgba(88,101,242,0.4)]' },
  email: { icon: FaEnvelope, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  'x-community': { icon: FaUsers, color: 'text-white', bg: 'bg-red-600/10', border: 'border-red-600/20', hoverBg: 'group-hover:bg-red-600/30', hoverBorder: 'group-hover:border-red-600/60', glow: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
};

export const SocialButton: React.FC<SocialButtonProps> = ({ platform, url, className }) => {
  const [copied, setCopied] = useState(false);
  const { icon: Icon, color, bg, border, hoverBg, hoverBorder, glow } = iconMap[platform] || iconMap.twitter;

  const handleClick = (e: React.MouseEvent) => {
    if (platform === 'discord') {
      e.preventDefault();
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <a
        href={platform === 'discord' ? '#' : url}
        target={platform === 'discord' ? undefined : "_blank"}
        rel={platform === 'discord' ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className={cn(
          "group flex items-center justify-center rounded-full border transition-all duration-300",
          "hover:-translate-y-1",
          bg, border, hoverBg, hoverBorder, glow,
          className || "w-11 h-11"
        )}
      >
        <Icon className={cn("w-1/2 h-1/2 transition-colors duration-300", color)} />
      </a>
      
      {/* Copied Tooltip */}
      {copied && (
        <div className="absolute -top-10 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md border border-white/10 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          تم النسخ!
        </div>
      )}
    </div>
  );
};
