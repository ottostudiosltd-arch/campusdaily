import React from 'react';
import { Post } from '../../types';
import { ArrowBigUp, MessageCircle, Bookmark, Share2, Sparkles, ExternalLink } from 'lucide-react';

interface CardProps {
  post: Post;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
}

export const OpportunityCard: React.FC<CardProps> = ({
  post,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
}) => {
  return (
    <article className="bg-white border-2 border-campus-borderDark rounded-[24px] p-5 shadow-brutal hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-campus-yellow via-campus-purple to-campus-mint" />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-campus-yellow/20 border-2 border-campus-borderDark flex items-center justify-center font-black text-xs">
              ⚡
            </div>
            <div>
              <span className="font-bold text-sm text-campus-text">
                {post.author.name}
              </span>
              <p className="text-xs text-stone-500 font-medium">
                {post.college} • {post.timestamp}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 bg-amber-400 text-black border border-campus-borderDark rounded-full shadow-brutal-sm">
            <Sparkles className="w-3.5 h-3.5" />
            {post.badgeLabel || 'Opportunity'}
          </span>
        </div>

        {/* Content */}
        <div onClick={() => onOpenDetail(post)} className="cursor-pointer my-2">
          <h3 className="font-display font-bold text-xl text-campus-text leading-snug mb-2 hover:text-campus-purple transition-colors">
            {post.title}
          </h3>
          <p className="text-stone-700 text-sm font-medium leading-relaxed mb-3">
            {post.content}
          </p>

          {/* Quick Info Box */}
          <div className="bg-campus-bg p-3 rounded-2xl border border-stone-200 flex items-center justify-between gap-2 mb-3">
            <div className="text-xs font-bold text-stone-800">
              🎓 Open to all Maharashtra College Students
            </div>
            <button className="flex items-center gap-1 text-xs font-bold text-campus-purple hover:underline shrink-0">
              Details <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-bold bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-stone-200 mt-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full border border-campus-borderDark transition-all duration-150 ${
              post.isLiked
                ? 'bg-campus-yellow text-black shadow-brutal-sm'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <ArrowBigUp className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
            <span>{post.likes}</span>
          </button>

          <button
            onClick={() => onOpenDetail(post)}
            className="flex items-center gap-1.5 text-sm font-bold text-stone-700 hover:text-black transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{post.commentsCount}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onShare(post)}
            className="p-1.5 text-stone-600 hover:text-black rounded-full hover:bg-stone-100 transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => onBookmark(post.id)}
            className={`p-1.5 rounded-full border border-campus-borderDark transition-all ${
              post.isSaved ? 'bg-campus-yellow text-black' : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
            title="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
};
