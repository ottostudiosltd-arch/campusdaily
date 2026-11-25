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

export const DoodleQuestionCard: React.FC<CardProps> = ({
  post,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
}) => {
  return (
    <article className="bg-[#FFD9CD] bg-gradient-to-br from-[#FFE3D8] to-[#FFD5C2] border-2 border-campus-borderDark rounded-[24px] p-4 sm:p-5 shadow-brutal hover:translate-y-[-2px] transition-all duration-200 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative corner background blobs */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#FFC0AC] rounded-full filter blur-xl opacity-50 pointer-events-none" />

      {/* Top Author & Badge Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-campus-borderDark shrink-0"
            />
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-xs sm:text-sm text-campus-text">
                  {post.author.name}
                </span>
                {post.author.badge && (
                  <span className="text-[9px] bg-campus-yellow border border-black font-bold px-1.5 py-0.2 rounded-full">
                    {post.author.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-600 font-medium">
                {post.college} • {post.timestamp}
              </p>
            </div>
          </div>

          {/* Badge */}
          {post.badgeLabel && (
            <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#FF6B4A] text-white border border-campus-borderDark rounded-full shadow-sm shrink-0">
              🔥 {post.badgeLabel}
            </span>
          )}
        </div>

        {/* Content Area with Real Mascot Sticker */}
        <div 
          onClick={() => onOpenDetail(post)}
          className="cursor-pointer grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 items-center my-1.5"
        >
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-campus-text leading-tight mb-2 hover:text-[#D9401C] transition-colors">
              {post.title}
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm line-clamp-3 font-medium leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Real Cutout Sticker Mascot from Assets! */}
          <div className="hidden sm:flex justify-center items-center select-none shrink-0 pl-1">
            {post.mascotVariant === 'thinking-boy' ? (
              <img
                src={getAssetUrl('assets/stickers/thinking-boy-pure.png')}
                alt="Thinking Boy"
                className="w-20 sm:w-24 h-auto drop-shadow-sm select-none"
              />
            ) : post.mascotVariant === 'shocked-ghost' ? (
              <img
                src={getAssetUrl('assets/stickers/ghost-megaphone-pure.png')}
                alt="Ghost"
                className="w-20 sm:w-24 h-auto drop-shadow-sm select-none"
              />
            ) : (
              <img
                src={getAssetUrl('assets/stickers/wondering-girl-pure.png')}
                alt="Wondering Girl"
                className="w-20 sm:w-24 h-auto drop-shadow-sm select-none"
              />
            )}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-2.5">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-bold bg-white/70 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-2.5 border-t border-black/10 mt-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-campus-borderDark transition-all duration-150 ${
              post.isLiked
                ? 'bg-campus-yellow text-black shadow-brutal-sm'
                : 'bg-white/80 hover:bg-white text-stone-700'
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
              post.isSaved ? 'bg-campus-yellow text-black' : 'bg-white/80 text-stone-600 hover:bg-white'
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
