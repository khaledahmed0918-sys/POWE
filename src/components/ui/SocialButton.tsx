import React, { useState } from 'react';
import { SocialPlatform } from '../../types';
import { 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaSnapchat, 
  FaTwitch, 
  FaTiktok,
  FaDiscord
} from 'react-icons/fa';
import { SiKick } from 'react-icons/si';
import { cn } from '../../utils/cn';

interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  className?: string;
}

const iconMap = {
  instagram: { icon: FaInstagram, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20', hoverBg: 'group-hover:bg-pink-500/20', hoverBorder: 'group-hover:border-pink-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]' },
  twitter: { icon: FaTwitter, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20', hoverBg: 'group-hover:bg-sky-400/20', hoverBorder: 'group-hover:border-sky-400/50', glow: 'group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]' },
  youtube: { icon: FaYoutube, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', hoverBg: 'group-hover:bg-red-500/20', hoverBorder: 'group-hover:border-red-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]' },
  snapchat: { icon: FaSnapchat, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20', hoverBg: 'group-hover:bg-yellow-400/20', hoverBorder: 'group-hover:border-yellow-400/50', glow: 'group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]' },
  twitch: { icon: FaTwitch, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', hoverBg: 'group-hover:bg-purple-500/20', hoverBorder: 'group-hover:border-purple-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]' },
  tiktok: { icon: FaTiktok, color: 'text-white', bg: 'bg-white/10', border: 'border-white/20', hoverBg: 'group-hover:bg-white/20', hoverBorder: 'group-hover:border-white/50', glow: 'group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]' },
  kick: { icon: SiKick, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', hoverBg: 'group-hover:bg-green-400/20', hoverBorder: 'group-hover:border-green-400/50', glow: 'group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]' },
  discord: { icon: FaDiscord, color: 'text-[#5865F2]', bg: 'bg-[#5865F2]/10', border: 'border-[#5865F2]/20', hoverBg: 'group-hover:bg-[#5865F2]/20', hoverBorder: 'group-hover:border-[#5865F2]/50', glow: 'group-hover:shadow-[0_0_15px_rgba(88,101,242,0.5)]' },
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
