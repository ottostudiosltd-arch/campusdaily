import React from 'react';
import { Post } from '../../types';
import { ArrowBigUp, MessageCircle, Bookmark, Share2, MapPin } from 'lucide-react';

interface CardProps {
  post: Post;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
}

export const PhotoSpotlightCard: React.FC<CardProps> = ({
  post,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
}) => {
  return (
    <article className="bg-[#EAE4FF] bg-gradient-to-br from-[#F5F2FF] to-[#E5DCFF] border-2 border-campus-borderDark rounded-[24px] overflow-hidden shadow-brutal hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
      {/* Visual media banner */}
      {post.imageUrl && (
        <div 
          onClick={() => onOpenDetail(post)}
          className="relative h-48 md:h-52 w-full overflow-hidden border-b-2 border-campus-borderDark cursor-pointer group"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badge over image */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 bg-campus-purple text-white border border-black rounded-full shadow-brutal-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {post.badgeLabel || 'Campus Spotted'}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 text-white">
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
              <MapPin className="w-3 h-3 text-campus-yellow" />
              {post.college}, {post.city}
            </span>
          </div>
        </div>
      )}

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Author info */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-7 h-7 rounded-full object-cover border border-black"
              />
              <span className="text-xs font-bold text-campus-text">
                {post.author.name}
              </span>
              {post.author.badge && (
                <span className="text-[10px] bg-campus-yellow font-bold px-1.5 py-0.5 rounded-full border border-black">
                  {post.author.badge}
                </span>
              )}
            </div>
            <span className="text-xs text-stone-500 font-medium">
              {post.timestamp}
            </span>
          </div>

          <h3 
            onClick={() => onOpenDetail(post)}
            className="font-display font-bold text-xl text-campus-text leading-snug mb-2 hover:text-campus-purpleDark cursor-pointer transition-colors"
          >
            {post.title}
          </h3>

          <p className="text-stone-700 text-sm line-clamp-2 font-medium leading-relaxed mb-3">
            {post.content}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-bold bg-white text-campus-purpleDark px-2.5 py-0.5 rounded-full border border-purple-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-black/10 mt-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full border border-campus-borderDark transition-all duration-150 ${
                post.isLiked
                  ? 'bg-campus-yellow text-black shadow-brutal-sm'
                  : 'bg-white hover:bg-stone-50 text-stone-700'
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
              className="p-1.5 text-stone-600 hover:text-black rounded-full hover:bg-white/60 transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onBookmark(post.id)}
              className={`p-1.5 rounded-full border border-campus-borderDark transition-all ${
                post.isSaved ? 'bg-campus-yellow text-black' : 'bg-white text-stone-600 hover:bg-stone-50'
              }`}
              title="Bookmark"
            >
              <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
