import React from 'react';
import { Post } from '../../types';
import { ArrowBigUp, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { getAssetUrl } from '../../lib/assets';

interface CardProps {
  post: Post;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
}

export const MemeHumorCard: React.FC<CardProps> = ({
  post,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
}) => {
  return (
    <article className="bg-[#D6F5DE] bg-gradient-to-br from-[#E2F9E8] to-[#C7F5D4] border-2 border-campus-borderDark rounded-[24px] p-4 sm:p-5 shadow-brutal hover:translate-y-[-2px] transition-all duration-200 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative dots pattern */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-40 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-800" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-800" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-800" />
      </div>

      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-campus-borderDark shrink-0"
            />
            <div>
              <span className="font-bold text-xs sm:text-sm text-campus-text">
                {post.author.name}
              </span>
              <p className="text-[11px] text-emerald-900/70 font-semibold">
                {post.college} • {post.timestamp}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 bg-emerald-700 text-white border border-campus-borderDark rounded-full shadow-sm shrink-0">
            🐸 {post.badgeLabel || 'Memes'}
          </span>
        </div>

        {/* Content with Real Cool Cat Sticker */}
        <div
          onClick={() => onOpenDetail(post)}
          className="cursor-pointer grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 items-center my-1"
        >
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-campus-text leading-snug mb-2 hover:text-emerald-900 transition-colors">
              "{post.title}"
            </h3>
            <p className="text-stone-800 text-xs sm:text-sm font-medium leading-relaxed bg-white/70 p-3 rounded-2xl border border-emerald-900/15">
              {post.content}
            </p>
          </div>

          {/* Real Cutout Sticker Mascot from Assets! */}
          <div className="hidden sm:flex justify-center items-center select-none shrink-0 pl-1">
            <img
              src={getAssetUrl('assets/stickers/cool-cat-pure.png')}
              alt="Cool Cat"
              className="w-20 sm:w-24 h-auto drop-shadow-sm select-none"
            />
          </div>
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-1.5 my-2.5">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-bold bg-white text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-2.5 border-t border-emerald-900/15 mt-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-campus-borderDark transition-all duration-150 ${
              post.isLiked
                ? 'bg-campus-yellow text-black shadow-brutal-sm'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <ArrowBigUp className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
            <span>{post.likes}</span>
          </button>

          <button
            onClick={() => onOpenDetail(post)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-black transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{post.commentsCount}</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onShare(post)}
            className="p-1.5 text-stone-600 hover:text-black rounded-full hover:bg-white/50 transition-colors"
            title="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onBookmark(post.id)}
            className={`p-1.5 rounded-full border border-campus-borderDark transition-all ${
              post.isSaved ? 'bg-campus-yellow text-black' : 'bg-white text-stone-600 hover:bg-stone-50'
            }`}
            title="Bookmark"
          >
            <Bookmark className={`w-3.5 h-3.5 ${post.isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
};
