import { Member, ClanDetails } from '../types';

const createSocials = (username: string) => [
  { platform: 'instagram' as const, url: `https://instagram.com/${username}` },
  { platform: 'twitter' as const, url: `https://twitter.com/${username}` },
  { platform: 'youtube' as const, url: `https://youtube.com/@${username}` },
  { platform: 'snapchat' as const, url: `https://snapchat.com/add/${username}` },
];

export const CLAN_DETAILS: ClanDetails = {
  name: 'POWR eSports',
  description: 'كلان باور للرياضات الإلكترونية وصناعة المحتوى. نهدف للارتقاء بمستوى الجيمينج في الشرق الأوسط وصناعة محتوى يليق بجمهورنا، وتطوير المواهب الشابة في مختلف المجالات.',
  logoInitials: 'POWR',
  stats: [
    { label: 'سنة التأسيس', value: '2018' },
    { label: 'مجموع المتابعين', value: '+50M' },
    { label: 'بطولات', value: '+20' },
    { label: 'صناع محتوى', value: '+15' }
  ]
};

export const OWNER: Member = {
  id: 'shongxbong',
  name: 'ShongxBong',
  initials: 'SH',
  role: 'المالك',
  tags: ['قائد', 'سنايبر', 'أسطورة'],
  socials: createSocials('shongxbong'),
  bio: 'قائد ووجه كلان باور. يضع معايير التميز في الألعاب وصناعة المحتوى في منطقة الشرق الأوسط وشمال أفريقيا.',
  stats: [
    { label: 'المتابعين', value: '+5M' },
    { label: 'انضم', value: '2018' },
    { label: 'المشاهدات', value: '+1B' }
  ]
};

export const FOUNDERS: Member[] = [
  {
    id: 'tu36y',
    name: 'TU36Y',
    initials: 'TU',
    avatarUrl: 'https://i.postimg.cc/Dw9JSv7x/IMG-9083.jpg',
    role: 'مؤسس',
    tags: ['مؤسس', 'صاحب رؤية', 'إدارة'],
    socials: [
      { platform: 'twitter', url: 'https://x.com/tu36y?s=21' },
      { platform: 'instagram', url: 'https://instagram.com/tu36y' },
      { platform: 'snapchat', url: 'https://snapchat.com/add/tu36y' }
    ],
    bio: 'صاحب الرؤية خلف كلان باور، يقود الكلان إلى آفاق جديدة من خلال التخطيط الاستراتيجي والقيادة.',
    stats: [
      { label: 'الخبرة', value: '10 سنوات' },
      { label: 'المشاريع', value: '+15' }
    ]
  },
  {
    id: 'modi',
    name: 'Modi',
    initials: 'MD',
    role: 'مؤسس',
    tags: ['شريك مؤسس', 'مخطط', 'عمليات'],
    socials: createSocials('modi'),
    bio: 'الشريك المؤسس والعقل المدبر للعمليات. يضمن سير كل شيء بسلاسة خلف الكواليس.',
    stats: [
      { label: 'الخبرة', value: '8 سنوات' },
      { label: 'الفعاليات', value: '+30' }
    ]
  },
];

export const STAFF: Member[] = [
  {
    id: 'falcon',
    name: 'Falcon',
    initials: 'FL',
    role: 'مسؤول',
    tags: ['مدير', 'عمليات', 'رياضات إلكترونية'],
    socials: createSocials('falcon_powr'),
    bio: 'يدير العمليات اليومية ويضمن أداء فرق الرياضات الإلكترونية بأفضل شكل ممكن.',
  },
  {
    id: 'specter',
    name: 'Specter',
    initials: 'SP',
    role: 'مشرف',
    tags: ['مشرف', 'مجتمع', 'دعم'],
    socials: createSocials('specter_powr'),
    bio: 'يحافظ على أمان المجتمع وتفاعله ونموه كل يوم.',
  },
  {
    id: 'viper',
    name: 'Viper',
    initials: 'VP',
    role: 'مسؤول',
    tags: ['موارد بشرية', 'توظيف', 'مواهب'],
    socials: createSocials('viper_powr'),
    bio: 'يبحث عن أفضل المواهب ويضمهم إلى عائلة باور.',
  },
];

export const CREATORS: Member[] = [
  {
    id: 'suhail',
    name: 'Suhail',
    initials: 'SU',
    role: 'صانع محتوى',
    tags: ['فلوقر', 'جيمر', 'لايف ستايل'],
    socials: createSocials('suhail'),
    bio: 'يصنع فلوقات يومية ومحتوى ألعاب يجلب السعادة للملايين.',
  },
  {
    id: 'rakan',
    name: 'Rakan',
    initials: 'RK',
    role: 'صانع محتوى',
    tags: ['ستريمر', 'لاعب محترف', 'ألعاب شوتر'],
    socials: createSocials('rakan'),
    bio: 'لاعب محترف تحول إلى ستريمر. معروف بمهاراته الميكانيكية الخرافية.',
  },
  {
    id: 'meshal',
    name: 'Meshal',
    initials: 'MS',
    role: 'صانع محتوى',
    tags: ['محتوى', 'مضحك', 'ردود فعل'],
    socials: createSocials('meshal'),
    bio: 'أفضل ردود الفعل والتعليقات المضحكة في عالم الألعاب.',
  },
  {
    id: 'lio',
    name: 'Lio',
    initials: 'LI',
    role: 'صانع محتوى',
    tags: ['لايف ستايل', 'ألعاب', 'منوع'],
    socials: createSocials('lio'),
    bio: 'يمزج بين أسلوب الحياة والألعاب لإنشاء مزيج فريد من المحتوى.',
  },
  {
    id: 'bander',
    name: 'Bander',
    initials: 'BN',
    role: 'صانع محتوى',
    tags: ['رعب', 'قصص', 'ألعاب'],
    socials: createSocials('bander'),
    bio: 'سيد ألعاب الرعب وسرد القصص. محتواه ليس لأصحاب القلوب الضعيفة.',
  },
  {
    id: 'ahmad',
    name: 'Ahmad',
    initials: 'AH',
    role: 'صانع محتوى',
    tags: ['تقنية', 'مراجعات', 'سيت اب'],
    socials: createSocials('ahmad'),
    bio: 'يراجع أحدث التقنيات ويبني أجن السيت اب للألعاب.',
  },
];

export const DEVELOPER: Member = {
  id: 'mohammed',
  name: 'Mohammed',
  initials: 'MO',
  avatarUrl: 'https://i.postimg.cc/VNnDgrMm/IMG-4848.jpg',
  role: 'مطور',
  tags: ['مطور واجهات', 'مبرمج', 'تصميم'],
  socials: [
    { platform: 'twitter', url: 'https://x.com/i_mohammedqht?s=21' },
    { platform: 'discord', url: '221.k' }
  ],
  bio: 'يصنع التجارب الرقمية ويبني البنية التحتية لكلان باور.',
};

export const POWR_SOCIALS = [
  { platform: 'instagram' as const, url: 'https://instagram.com/powr' },
  { platform: 'twitter' as const, url: 'https://twitter.com/powr' },
  { platform: 'youtube' as const, url: 'https://youtube.com/powr' },
  { platform: 'kick' as const, url: 'https://kick.com/powr' },
];
