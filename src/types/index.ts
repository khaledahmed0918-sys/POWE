export type SocialPlatform = 'instagram' | 'twitter' | 'kick' | 'youtube' | 'snapchat' | 'twitch' | 'tiktok' | 'discord' | 'email' | 'x-community';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Member {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
  role: string;
  tags: string[];
  socials: SocialLink[];
  bio?: string;
  stats?: Stat[];
}

export interface ClanDetails {
  name: string;
  description: string;
  logoInitials: string;
  stats: Stat[];
}

export interface VideoData {
  channelId: string;
  channelName: string;
  channelAvatar: string;
  videoId: string;
  title: string;
  url: string;
  thumbnail: string;
  views: number;
  likes: number;
  published: string;
}

