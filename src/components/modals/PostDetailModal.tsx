import React, { useState } from 'react';
import { Post } from '../../types';
import { X, ArrowBigUp, Share2, Bookmark, Send, MessageCircle } from 'lucide-react';
import { getAssetUrl } from '../../lib/assets';

interface PostDetailModalProps {
  post: Post | null;
  onClose: () => void;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onAddComment: (postId: string, text: string) => void;
  onShareWhatsApp: (post: Post) => void;
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  onClose,
  onLike,
  onBookmark,
  onAddComment,
  onShareWhatsApp,
}) => {
  const [commentText, setCommentText] = useState('');

  if (!post) return null;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(post.id, commentText);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-campus-bg border-2 border-campus-borderDark rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-brutal p-4 sm:p-6 relative flex flex-col justify-between">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm hover:bg-stone-100 transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Author Header */}
          <div className="flex items-center gap-3 mb-4 pr-10">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-campus-borderDark shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-black text-sm sm:text-base text-campus-text truncate">
                  {post.author.name}
                </span>
                {post.author.badge && (
                  <span className="text-[10px] bg-campus-yellow border border-black font-bold px-2 py-0.5 rounded-full">
                    {post.author.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-600 font-bold truncate">
                📍 {post.college}, {post.city} • {post.timestamp}
              </p>
            </div>
          </div>

          {/* Media if photo exists */}
          {post.imageUrl && (
            <div className="rounded-2xl overflow-hidden border-2 border-campus-borderDark mb-4 max-h-64 sm:max-h-72">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title & Content with real sticker mascot */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-center mb-4">
            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-campus-text leading-tight mb-2.5">
                {post.title}
              </h2>
              <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Real Cropped Sticker Mascot */}
            <div className="hidden sm:flex justify-center items-center select-none shrink-0">
              {post.mascotVariant === 'cool-cat' ? (
                <img
                  src={getAssetUrl('assets/stickers/cool-cat-pure.png')}
                  alt="Cool Cat"
                  className="w-24 h-auto drop-shadow-sm select-none"
                />
              ) : post.mascotVariant === 'thinking-girl' ? (
                <img
                  src={getAssetUrl('assets/stickers/wondering-girl-pure.png')}
                  alt="Thinking Girl"
                  className="w-24 h-auto drop-shadow-sm select-none"
                />
              ) : post.mascotVariant === 'thinking-boy' ? (
                <img
                  src={getAssetUrl('assets/stickers/thinking-boy-pure.png')}
                  alt="Thinking Boy"
                  className="w-24 h-auto drop-shadow-sm select-none"
                />
              ) : (
                <img
                  src={getAssetUrl('assets/stickers/ghost-megaphone-pure.png')}
                  alt="Hype Ghost"
                  className="w-24 h-auto drop-shadow-sm select-none"
                />
              )}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold bg-white text-stone-800 px-3 py-1 rounded-full border border-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Row & WhatsApp Share */}
          <div className="p-3 bg-white border-2 border-campus-borderDark rounded-2xl mb-5 shadow-brutal-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 justify-between sm:justify-start">
              <button
                onClick={() => onLike(post.id)}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-campus-borderDark font-bold text-xs sm:text-sm transition-all ${
                  post.isLiked
                    ? 'bg-campus-yellow text-black'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <ArrowBigUp className={`w-4 h-4 sm:w-5 sm:h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                <span>{post.likes} Upvotes</span>
              </button>

              <button
                onClick={() => onBookmark(post.id)}
                className={`p-2 rounded-full border border-campus-borderDark transition-all shrink-0 ${
                  post.isSaved ? 'bg-campus-yellow text-black' : 'bg-stone-50 text-stone-600'
                }`}
                title="Bookmark"
              >
                <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${post.isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* 1-Click WhatsApp Viral Share Button */}
            <button
              onClick={() => onShareWhatsApp(post)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display font-bold text-xs sm:text-sm rounded-full border border-black shadow-brutal-sm transition-all shrink-0"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="border-t-2 border-campus-borderDark/20 pt-3">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4" />
              <h3 className="font-display font-bold text-sm sm:text-base text-campus-text">
                Campus Comments ({post.comments?.length || post.commentsCount})
              </h3>
            </div>

            {/* Existing comments */}
            <div className="space-y-2.5 mb-4 max-h-48 overflow-y-auto pr-1">
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((c) => (
                  <div
                    key={c.id}
                    className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-2.5"
                  >
                    <img
                      src={c.avatar}
                      alt={c.author}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-black mt-0.5 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-campus-text">
                          {c.author}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          {c.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 font-medium mt-0.5 break-words">
                        {c.text}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-stone-500 italic p-2">
                  No comments yet. Be the first to start the banter!
                </p>
              )}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleCommentSubmit} className="flex gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment or college reply..."
                className="flex-1 px-4 py-2.5 bg-white border-2 border-campus-borderDark rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-campus-yellow shadow-brutal-sm"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-stone-800 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
