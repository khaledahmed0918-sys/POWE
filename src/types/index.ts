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

export interface KickStream {
  username: string;
  avatar: string | null;
  banner: string | null;
  bio: string;
  followers: number;
  live: boolean;
  viewers: number;
  title: string;
  thumbnail: { url: string } | null;
  last_stream_date: string | null;
  socials: {
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    discord: string | null;
    tiktok: string | null;
    facebook: string | null;
  };
}

export interface TwitterData {
  profile: {
    avatar: string | null;
    banner: string | null;
  };
  tweets: {
    text: string;
    date: string;
    likes: number;
    media: string[];
  }[];
  updatedAt: string;
}

