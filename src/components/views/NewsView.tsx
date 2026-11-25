import React, { useState } from 'react';
import { Post, CategoryId } from '../../types';
import { PostCard } from '../cards/PostCard';
import { Newspaper, Sparkles, Flame, Eye, Heart, Smile, Calendar, Trophy, AlertTriangle } from 'lucide-react';

interface NewsViewProps {
  posts: Post[];
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
}

const NEWS_FILTERS: { id: CategoryId; label: string; icon: string }[] = [
  { id: 'all', label: 'All News', icon: '🗞️' },
  { id: 'confessions', label: 'Confessions', icon: '💛' },
  { id: 'trending', label: 'Trending', icon: '🔥' },
  { id: 'spotted', label: 'Spotted', icon: '👁️' },
  { id: 'memes', label: 'Memes', icon: '🐸' },
  { id: 'events', label: 'Events & Fests', icon: '🎉' },
  { id: 'incidents', label: 'Campus Incidents', icon: '⚠️' },
  { id: 'opportunities', label: 'Opportunities', icon: '⚡' },
  { id: 'competitions', label: 'Competitions', icon: '🏆' },
];

export const NewsView: React.FC<NewsViewProps> = ({
  posts,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
}) => {
  const [selectedNewsFilter, setSelectedNewsFilter] = useState<CategoryId>('all');

  const filtered = posts.filter((p) => {
    if (selectedNewsFilter === 'all') return true;
    if (selectedNewsFilter === 'trending') return p.isTrending || p.category === 'trending';
    return p.category === selectedNewsFilter;
  });

  return (
    <div className="w-full animate-in fade-in duration-150">
      {/* Header Ticker */}
      <div className="bg-campus-yellow/30 border-2 border-campus-borderDark rounded-2xl p-3 mb-4 flex items-center justify-between gap-3 shadow-brutal-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="font-display font-black text-xs uppercase tracking-wider text-black">
            Campus Daily Wire
          </span>
        </div>
        <p className="text-xs font-bold text-stone-700 truncate">
          Verified campus reports across Pune & Maharashtra colleges
        </p>
      </div>

      {/* Mini Filter Pills Row (Point 5 Requirement!) */}
      <div className="mb-5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {NEWS_FILTERS.map((f) => {
            const isActive = selectedNewsFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedNewsFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-brutal-sm scale-105'
                    : 'bg-white text-stone-700 border-campus-borderDark hover:bg-stone-50'
                }`}
              >
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stories Feed */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={onLike}
              onBookmark={onBookmark}
              onOpenDetail={onOpenDetail}
              onShare={onShare}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border-2 border-campus-borderDark rounded-[24px] p-8 text-center shadow-brutal my-4">
          <p className="text-sm font-bold text-stone-600">
            No news under this filter yet. Check other categories!
          </p>
        </div>
      )}
    </div>
  );
};
