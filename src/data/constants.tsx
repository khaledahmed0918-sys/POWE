import { Member, ClanDetails } from '../types';

const createSocials = (username: string) => [
  { platform: 'instagram' as const, url: `https://instagram.com/${username}` },
  { platform: 'twitter' as const, url: `https://twitter.com/${username}` },
  { platform: 'youtube' as const, url: `https://youtube.com/@${username}` },
  { platform: 'snapchat' as const, url: `https://snapchat.com/add/${username}` },
];

export const CLAN_DETAILS: ClanDetails = {
  name: 'POWR eSports',
  description: 'باور هو الكلان الرائد في الشرق الأوسط، يجمع نخبة صناع المحتوى واللاعبين المحترفين تحت سقف واحد. نحن لا نصنع المحتوى فحسب، بل نصنع التاريخ ونلهم جيلاً جديداً من المبدعين في عالم الرياضات الإلكترونية.',
  logoInitials: 'POWR',
  stats: [
    { label: 'سنة التأسيس', value: '2010' },
    { label: 'مجموع المتابعين', value: '+100M' },
    { label: 'بطولات', value: '+50' },
    { label: 'صناع محتوى', value: '+25' }
  ]
};

export const OWNER: Member = {
  id: 'jaser',
  name: 'POWR JASER',
  initials: 'PJ',
  avatarUrl: 'https://i.postimg.cc/Gtv8VMrb/IMG_9133.jpg',
  role: 'Owner',
  tags: ['Owner'],
  socials: [
    { platform: 'youtube', url: 'https://youtube.com/@powrjaser?si=gIIRWWnFcIKxoRGL' },
    { platform: 'twitter', url: 'https://x.com/powr_jaser?s=21' },
    { platform: 'instagram', url: 'https://www.instagram.com/ijaser?igsh=ZjlxbW1uaGcyNGhr' },
  ],
  bio: 'المؤسس والوجه الأول لمنظمة POWR، أحد أبرز صناع المحتوى في مجال القيمنق بالعالم العربي. قدر يبني اسم قوي ويخلق مجتمع ضخم حوله بفضل شغفه واستمراريته. يتميز بأسلوبه القريب من الجمهور ورؤيته الواضحة في تطوير المحتوى والارتقاء بالمنظمة، وكان له دور أساسي في وصول POWR لمكانتها الحالية بين أقوى المنظمات في المنطقة.',
  stats: [
    { label: 'عدد المشتركين', value: '+193K' },
    { label: 'عدد المشاهدات', value: '+3.5M' }
  ]
};

export const FOUNDERS: Member[] = [
  {
    id: 'hunter',
    name: 'Ibrahim Altmimy (Hunter)',
    initials: 'IA',
    avatarUrl: 'https://i.postimg.cc/0j7MFtxM/IMG_9135.jpg',
    role: 'CEO',
    tags: ['CEO'],
    socials: [],
    bio: 'أحد مؤسسي منظمة POWR والعقل الإداري خلف نجاحاتها. يتمتع برؤية طموحة لقيادة المنظمة نحو العالمية، مع تركيز قوي على تطوير صناعة القيمنق وصناعة المحتوى في العالم العربي. يسعى لصناعة بيئة احترافية تجمع بين الإبداع والإدارة الذكية، وكان له دور كبير في تنظيم الفريق وتوسيع نطاقه وتحقيق إنجازات ملموسة على مستوى المنطقة.',
  }
];

export const CREATORS: Member[] = [
  {
    id: 'shong',
    name: 'SHONGXBONG',
    initials: 'SX',
    avatarUrl: 'https://i.postimg.cc/Gtv8VMrb/IMG_9133.jpg',
    role: 'صانع محتوى',
    tags: ['Gaming', 'Vlogs', 'Entertainment'],
    socials: createSocials('shongxbong'),
    bio: 'أحد أشهر صناع المحتوى في العالم العربي، يتميز بأسلوبه الفكاهي وتحدياته المبتكرة.',
    stats: [
      { label: 'مشتركين', value: '10M+' },
      { label: 'مشاهدات', value: '1B+' }
    ]
  },
  {
    id: 'mody',
    name: 'MODY',
    initials: 'MD',
    avatarUrl: 'https://i.postimg.cc/0j7MFtxM/IMG_9135.jpg',
    role: 'صانع محتوى',
    tags: ['Gaming', 'Challenges'],
    socials: createSocials('mody'),
    bio: 'مبدع في عالم الألعاب والتحديات، يقدم محتوى ترفيهي عالي الجودة لملايين المتابعين.',
    stats: [
      { label: 'مشتركين', value: '5M+' },
      { label: 'مشاهدات', value: '500M+' }
    ]
  },
  {
    id: 'razan',
    name: 'RAZAN',
    initials: 'RZ',
    avatarUrl: 'https://i.postimg.cc/Gtv8VMrb/IMG_9133.jpg',
    role: 'صانعة محتوى',
    tags: ['Gaming', 'Lifestyle'],
    socials: createSocials('razan'),
    bio: 'صانعة محتوى متميزة في عائلة باور، تقدم محتوى متنوع يجمع بين الألعاب واللايف ستايل.',
    stats: [
      { label: 'مشتركين', value: '2M+' },
      { label: 'مشاهدات', value: '200M+' }
    ]
  }
];

export const LIVE_STREAMS = [
  {
    id: '1',
    channelName: 'POWR SHONG',
    title: 'بث مباشر - فورتنايت مع الشباب 🔥',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewerCount: '12.5K',
    platform: 'youtube',
    avatar: 'https://i.postimg.cc/Gtv8VMrb/IMG_9133.jpg'
  },
  {
    id: '2',
    channelName: 'POWR MODY',
    title: 'تحدي الضحك مع المتابعين 😂',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewerCount: '8.2K',
    platform: 'twitch',
    avatar: 'https://i.postimg.cc/0j7MFtxM/IMG_9135.jpg'
  }
];

export const NEWS = [
  {
    id: '1',
    title: 'انضمام عضو جديد لعائلة باور!',
    date: '2024-03-15',
    category: 'تحديثات الفريق',
    image: 'https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg',
    excerpt: 'نرحب بالعضو الجديد الذي سينضم إلينا في رحلة الإبداع وصناعة المحتوى...'
  },
  {
    id: '2',
    title: 'الفوز ببطولة الشرق الأوسط للرياضات الإلكترونية',
    date: '2024-03-10',
    category: 'بطولات',
    image: 'https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg',
    excerpt: 'حقق فريق باور للرياضات الإلكترونية المركز الأول في بطولة الشرق الأوسط...'
  }
];

export const VIDEO_OF_THE_DAY = {
  id: 'v1',
  title: 'أقوى تحدي في تاريخ باور - من يربح الـ 100 ألف؟',
  url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
  thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  views: 2500000,
  likes: 150000,
  channelName: 'POWR eSports',
  channelAvatar: 'https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg'
};

export const STREAM_SCHEDULE = [
  { day: 'الأحد', time: '9:00 PM', member: 'SHONGXBONG', platform: 'YouTube' },
  { day: 'الاثنين', time: '10:00 PM', member: 'MODY', platform: 'Twitch' },
  { day: 'الثلاثاء', time: '8:30 PM', member: 'RAZAN', platform: 'YouTube' },
  { day: 'الأربعاء', time: '9:00 PM', member: 'POWR JASER', platform: 'YouTube' },
  { day: 'الخميس', time: '11:00 PM', member: 'SHONGXBONG', platform: 'Twitch' },
  { day: 'الجمعة', time: '10:00 PM', member: 'MODY', platform: 'YouTube' },
  { day: 'السبت', time: '9:00 PM', member: 'RAZAN', platform: 'Twitch' }
];

export const SITE_FOUNDER: Member = {
  id: 'tu36y',
  name: 'TU36Y',
  initials: 'TY',
  avatarUrl: 'https://i.postimg.cc/fy5NFZGT/IMG-9114.jpg',
  role: 'المؤسس',
  tags: ['Founder'],
  socials: [
    { platform: 'twitter', url: 'https://x.com/tu36y?s=21' },
  ],
  bio: '',
};

export const DEVELOPER: Member = {
  id: 'mohammed',
  name: 'Mohammed',
  initials: 'MO',
  avatarUrl: 'https://i.postimg.cc/V6GgHVKF/IMG-2984.jpg',
  role: 'مطور',
  tags: ['مطور واجهات', 'مبرمج', 'تصميم'],
  socials: [
    { platform: 'twitter', url: 'https://x.com/i_mohammedqht?s=21' },
    { platform: 'discord', url: '221.k' }
  ],
  bio: 'يصنع التجارب الرقمية ويبني البنية التحتية لكلان باور.',
};

export const POWR_SOCIALS = [
  { platform: 'twitter' as const, url: 'https://x.com/powresports?s=21' },
  { platform: 'x-community' as const, url: 'https://x.com/i/communities/1541356808069152775' },
  { platform: 'instagram' as const, url: 'https://www.instagram.com/poweresports?igsh=cjhvdmh4bDkwZDQ=' },
  { platform: 'email' as const, url: 'mailto:info@powr.sa' },
];
