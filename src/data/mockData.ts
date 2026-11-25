import { Post, College } from '../types';

export const COLLEGES: College[] = [
  { id: '1', name: 'COEP Technological University', shortName: 'COEP', slug: 'coep-pune', city: 'Pune', studentsCount: 4200 },
  { id: '2', name: 'MIT World Peace University', shortName: 'MIT-WPU', slug: 'mit-wpu-pune', city: 'Pune', studentsCount: 16000 },
  { id: '3', name: 'Pune Institute of Computer Technology', shortName: 'PICT', slug: 'pict-pune', city: 'Pune', studentsCount: 3800 },
  { id: '4', name: 'Fergusson College', shortName: 'Fergusson', slug: 'fergusson-pune', city: 'Pune', studentsCount: 6500 },
  { id: '5', name: 'Symbiosis International University', shortName: 'Symbiosis', slug: 'symbiosis-pune', city: 'Pune', studentsCount: 14000 },
  { id: '6', name: 'Vishwakarma Institute of Technology', shortName: 'VIT', slug: 'vit-pune', city: 'Pune', studentsCount: 5200 },
  { id: '7', name: 'D. Y. Patil College of Engineering', shortName: 'DY Patil', slug: 'dy-patil-akurdi', city: 'Pune', studentsCount: 8000 },
  { id: '8', name: 'G. H. Raisoni College of Engineering', shortName: 'GHRSTU', slug: 'ghrstu-nagpur', city: 'Nagpur', studentsCount: 5000 },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    title: "What's going on with the new attendance rules?",
    content: "Someone please explain 😭 The HOD announced mandatory 75% biometric tracking from Monday. Does mass bunking still work or are we officially cooked?",
    category: 'trending',
    cardTheme: 'doodle-question',
    college: 'MIT-WPU',
    collegeSlug: 'mit-wpu-pune',
    city: 'Pune',
    author: {
      id: 'u-anon1',
      name: 'Anonymous',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isAnonymous: true,
      role: 'student'
    },
    timestamp: '12 min ago',
    likes: 124,
    commentsCount: 48,
    isLiked: false,
    isSaved: false,
    isTrending: true,
    badgeLabel: 'Trending',
    badgeType: 'trending',
    mascotVariant: 'thinking-girl',
    tags: ['Attendance', 'CampusLife', 'Exams'],
    comments: [
      {
        id: 'c1',
        author: 'Rohan (Comp Engg)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        text: 'Bro, medical certificate mafia is going to make bank this semester 😂',
        timestamp: '8 min ago',
        likes: 34
      },
      {
        id: 'c2',
        author: 'Priya S.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        text: 'Don’t panic, every year they say this in week 1. By week 4 it’s back to normal.',
        timestamp: '4 min ago',
        likes: 19
      }
    ]
  },
  {
    id: 'post-2',
    title: 'The fest preparations have officially started! 🔥',
    content: 'Stage design setup underway at the main amphitheatre. Headliner DJ artist revealing tomorrow 6 PM at the college canteen steps. Who are you hoping for?',
    category: 'events',
    cardTheme: 'photo-spotlight',
    college: 'COEP',
    collegeSlug: 'coep-pune',
    city: 'Pune',
    author: {
      id: 'u-fest',
      name: 'Campus Spotted',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
      isAnonymous: false,
      role: 'reporter',
      badge: 'Verified Reporter'
    },
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
    timestamp: '20 min ago',
    likes: 96,
    commentsCount: 22,
    isLiked: true,
    isSaved: true,
    badgeLabel: 'Campus Spotted',
    badgeType: 'spotted',
    tags: ['AarohanFest', 'COEPFest', 'LiveMusic'],
    comments: [
      {
        id: 'c3',
        author: 'Kunal Patil',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        text: 'If it is Nucleya again, I am camping in front row from 4 PM!',
        timestamp: '15 min ago',
        likes: 12
      }
    ]
  },
  {
    id: 'post-3',
    title: 'I swear the canteen has more plot twists than our syllabus 💀',
    content: 'When attendance is 75% but you’ve been in college for 3 hours only sitting near the samosa counter with your homies. The samosa price went up by ₹5 but the taste is 10/10.',
    category: 'memes',
    cardTheme: 'meme-humor',
    college: 'PICT',
    collegeSlug: 'pict-pune',
    city: 'Pune',
    author: {
      id: 'u-meme1',
      name: 'PICT Memer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      isAnonymous: false,
      role: 'student'
    },
    timestamp: '25 min ago',
    likes: 87,
    commentsCount: 31,
    isLiked: false,
    isSaved: false,
    badgeLabel: 'Canteen Chronicles',
    badgeType: 'meme',
    mascotVariant: 'cool-cat',
    tags: ['CanteenMemes', 'CollegeLife', 'SamosaTax']
  },
  {
    id: 'post-4',
    title: 'Pune Tech Hackathon 2026: ₹1.5 Lakh Prize Pool 🚀',
    content: 'Registration opened for the annual 36-hour inter-college hackathon hosted at PICT auditorium. Domains: Web3, AI/ML, and Smart Mobility. Free food & red bull provided!',
    category: 'opportunities',
    cardTheme: 'opportunity-notice',
    college: 'PICT',
    collegeSlug: 'pict-pune',
    city: 'Pune',
    author: {
      id: 'u-tech',
      name: 'Tech Council',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isAnonymous: false,
      role: 'reporter',
      badge: 'Official Notice'
    },
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    timestamp: '45 min ago',
    likes: 182,
    commentsCount: 42,
    isLiked: false,
    isSaved: true,
    badgeLabel: 'Hackathon Alert',
    badgeType: 'featured',
    tags: ['Hackathon', 'Coding', 'PICT', 'Opportunities']
  },
  {
    id: 'post-5',
    title: 'To the person playing guitar near Fergusson main quadrangle...',
    content: 'You played the acoustic version of "Tum Se Hi" around 4:30 PM today. That genuinely made my stressful exam day 100x better. Please don’t stop playing!',
    category: 'confessions',
    cardTheme: 'doodle-question',
    college: 'Fergusson',
    collegeSlug: 'fergusson-pune',
    city: 'Pune',
    author: {
      id: 'u-anon2',
      name: 'Anonymous',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isAnonymous: true,
      role: 'student'
    },
    timestamp: '1 hour ago',
    likes: 215,
    commentsCount: 38,
    isLiked: true,
    isSaved: false,
    badgeLabel: 'Campus Confession',
    badgeType: 'confession',
    mascotVariant: 'thinking-boy',
    tags: ['FCQuad', 'Music', 'Wholesome']
  },
  {
    id: 'post-6',
    title: 'Inter-College Football Championship Finals Tonight! ⚽',
    content: 'Symbiosis vs COEP finals under the stadium floodlights at 7 PM. Loudest cheer squad gets free tickets to the post-match afterparty!',
    category: 'events',
    cardTheme: 'photo-spotlight',
    college: 'Symbiosis',
    collegeSlug: 'symbiosis-pune',
    city: 'Pune',
    author: {
      id: 'u-sports',
      name: 'Sports Desk',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      isAnonymous: false,
      role: 'reporter'
    },
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    timestamp: '2 hours ago',
    likes: 140,
    commentsCount: 19,
    isLiked: false,
    isSaved: false,
    badgeLabel: 'Sports Live',
    badgeType: 'event',
    tags: ['Football', 'Derby', 'PuneSports']
  }
];

export const TRENDING_TOPICS = [
  { rank: 1, title: 'Attendance Rules', postsCount: '1.4k posts', category: 'Campus' },
  { rank: 2, title: 'College Fest 2026', postsCount: '890 posts', category: 'Events' },
  { rank: 3, title: 'Canteen Food Price Hike', postsCount: '640 posts', category: 'Food' },
  { rank: 4, title: 'Professor Drama', postsCount: '420 posts', category: 'Confessions' },
  { rank: 5, title: 'Placements & Internships', postsCount: '310 posts', category: 'Jobs' }
];
