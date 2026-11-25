import React, { useState } from 'react';
import { College, Post, CategoryId } from '../../types';
import { PostCard } from '../cards/PostCard';
import { Building2, MapPin, Users, Plus, Sparkles, CheckCircle2 } from 'lucide-react';

interface CollegesViewProps {
  colleges: College[];
  selectedCollege: College;
  onSelectCollege: (college: College) => void;
  posts: Post[];
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
  onOpenCreatePost: () => void;
}

export const CollegesView: React.FC<CollegesViewProps> = ({
  colleges,
  selectedCollege,
  onSelectCollege,
  posts,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
  onOpenCreatePost,
}) => {
  const [collegeSubFilter, setCollegeSubFilter] = useState<'all' | 'confessions' | 'events' | 'trending'>('all');

  // Filter posts by selected college
  const collegePosts = posts.filter((p) => {
    const matchesCollege =
      p.collegeSlug === selectedCollege.slug ||
      p.college.toLowerCase() === selectedCollege.shortName.toLowerCase();
    
    if (!matchesCollege) return false;

    if (collegeSubFilter === 'confessions') return p.category === 'confessions';
    if (collegeSubFilter === 'events') return p.category === 'events';
    if (collegeSubFilter === 'trending') return p.isTrending || p.category === 'trending';
    return true;
  });

  return (
    <div className="w-full animate-in fade-in duration-150">
      {/* 1. Mini Filter of College Names (Point 8 Requirement!) */}
      <div className="mb-4">
        <p className="text-[11px] font-black uppercase tracking-wider text-stone-600 mb-2 px-1">
          Select Campus to View Stories:
        </p>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {colleges.map((col) => {
            const isSelected = col.id === selectedCollege.id;
            return (
              <button
                key={col.id}
                onClick={() => onSelectCollege(col)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border-2 transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-campus-yellow text-black border-campus-borderDark shadow-brutal-sm scale-105'
                    : 'bg-white text-stone-700 border-campus-borderDark hover:bg-stone-50'
                }`}
              >
                <span>🏛️</span>
                <span>{col.shortName}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Active College Info Banner */}
      <div className="bg-white border-2 border-campus-borderDark rounded-[28px] p-5 shadow-brutal mb-5 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 bg-campus-purpleLight text-campus-purpleDark border border-campus-purple rounded-full">
                Verified Campus Hub
              </span>
              <span className="text-xs font-bold text-stone-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-800" />
                {selectedCollege.city}
              </span>
            </div>

            <h2 className="font-display font-black text-2xl text-campus-text leading-tight">
              {selectedCollege.name}
            </h2>
            <p className="text-xs font-semibold text-stone-600 mt-1 flex items-center gap-2">
              <Users className="w-3.5 h-3.5" />
              <span>{selectedCollege.studentsCount.toLocaleString()}+ Active Students Community</span>
            </p>
          </div>

          <button
            onClick={onOpenCreatePost}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 bg-campus-yellow hover:bg-campus-yellowHover text-black font-display font-black text-xs rounded-full border-2 border-campus-borderDark shadow-brutal-sm shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Post to {selectedCollege.shortName}</span>
          </button>
        </div>

        {/* Secondary Sub-filters for this specific college */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-stone-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setCollegeSubFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              collegeSubFilter === 'all'
                ? 'bg-black text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All Stories ({collegePosts.length})
          </button>

          <button
            onClick={() => setCollegeSubFilter('confessions')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              collegeSubFilter === 'confessions'
                ? 'bg-black text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            💛 Confessions
          </button>

          <button
            onClick={() => setCollegeSubFilter('events')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              collegeSubFilter === 'events'
                ? 'bg-black text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🎉 Events & Fests
          </button>

          <button
            onClick={() => setCollegeSubFilter('trending')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              collegeSubFilter === 'trending'
                ? 'bg-black text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🔥 Trending
          </button>
        </div>
      </div>

      {/* 3. College Stories Grid */}
      {collegePosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collegePosts.map((post) => (
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
        <div className="bg-white border-2 border-campus-borderDark rounded-[28px] p-8 text-center shadow-brutal my-4">
          <p className="text-base font-bold text-campus-text mb-2">
            No stories posted for {selectedCollege.name} under this tab yet.
          </p>
          <p className="text-xs text-stone-500 mb-4">
            Be the campus reporter who breaks the first story here!
          </p>
          <button
            onClick={onOpenCreatePost}
            className="px-5 py-2 bg-campus-yellow font-display font-black text-xs rounded-full border-2 border-campus-borderDark shadow-brutal-sm"
          >
            Submit Story for {selectedCollege.shortName} ✏️
          </button>
        </div>
      )}
    </div>
  );
};
