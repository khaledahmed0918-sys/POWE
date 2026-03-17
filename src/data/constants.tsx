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
    { label: 'سنة التأسيس', value: '2018' },
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

export const CREATORS: Member[] = [];

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
