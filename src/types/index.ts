export type CategoryId = 
  | 'all'
  | 'trending'
  | 'spotted'
  | 'confessions'
  | 'memes'
  | 'events'
  | 'competitions'
  | 'achievements'
  | 'opportunities'
  | 'incidents';

export type CardTheme = 
  | 'doodle-question'
  | 'photo-spotlight'
  | 'meme-humor'
  | 'opportunity-notice';

export type SubFilter = 'for-you' | 'my-college' | 'nearby';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  isAnonymous?: boolean;
  role?: 'student' | 'reporter' | 'admin';
  badge?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: CategoryId;
  cardTheme: CardTheme;
  college: string;
  collegeSlug: string;
  city: string;
  author: Author;
  timestamp: string;
  likes: number;
  commentsCount: number;
  isLiked?: boolean;
  isSaved?: boolean;
  isTrending?: boolean;
  badgeLabel?: string;
  badgeType?: 'trending' | 'spotted' | 'confession' | 'meme' | 'event' | 'new' | 'featured';
  imageUrl?: string;
  mascotVariant?: 'thinking-girl' | 'thinking-boy' | 'cool-cat' | 'shocked-ghost' | 'peeking-cat';
  tags?: string[];
  comments?: Array<{
    id: string;
    author: string;
    avatar: string;
    text: string;
    timestamp: string;
    likes: number;
  }>;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  city: string;
  studentsCount: number;
}
