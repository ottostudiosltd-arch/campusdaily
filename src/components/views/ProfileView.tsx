import React, { useState } from 'react';
import { Post, College } from '../../types';
import { PostCard } from '../cards/PostCard';
import { User, Award, ShieldCheck, Bookmark, Edit3, Settings, Bell, ChevronRight } from 'lucide-react';

interface ProfileViewProps {
  posts: Post[];
  selectedCollege: College;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
  onOpenDetail: (post: Post) => void;
  onShare: (post: Post) => void;
  onOpenCreatePost: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  posts,
  selectedCollege,
  onLike,
  onBookmark,
  onOpenDetail,
  onShare,
  onOpenCreatePost,
}) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'submissions' | 'saved' | 'badge'>('submissions');
  const [isAnonymousDefault, setIsAnonymousDefault] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // User posts
  const mySubmissions = posts.slice(0, 3);
  const savedPosts = posts.filter((p) => p.isSaved);

  return (
    <div className="w-full animate-in fade-in duration-150 pb-10">
      {/* 1. Profile Hero Card */}
      <div className="bg-white border-2 border-campus-borderDark rounded-[28px] p-6 shadow-brutal mb-6 relative overflow-hidden">
        {/* Top banner accent */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-campus-yellow via-campus-peach to-campus-purple opacity-70" />

        <div className="relative pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
                alt="Profile Avatar"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-brutal-sm"
              />
              <span className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black">
                ✓
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display font-black text-2xl text-campus-text">
                  Tausif Shaikh
                </h1>
                <span className="text-[11px] font-black uppercase tracking-wider bg-campus-yellow text-black px-2 py-0.5 rounded-full border border-black shadow-brutal-sm">
                  Verified Reporter ⭐
                </span>
              </div>
              <p className="text-xs font-bold text-stone-600 mt-0.5">
                🎓 {selectedCollege.name} ({selectedCollege.city})
              </p>
              <p className="text-xs font-semibold text-stone-500 mt-0.5">
                Member of Pune Student News Network
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCreatePost}
            className="self-start sm:self-auto px-4 py-2 bg-black text-white font-display font-bold text-xs rounded-full border-2 border-black shadow-brutal-sm hover:bg-stone-800 transition-all"
          >
            + Create New Story
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-stone-200">
          <div className="bg-campus-bg p-3 rounded-2xl border border-stone-200 text-center">
            <span className="block font-display font-black text-xl text-black">
              {mySubmissions.length}
            </span>
            <span className="text-[11px] font-bold text-stone-600">Stories Published</span>
          </div>

          <div className="bg-campus-bg p-3 rounded-2xl border border-stone-200 text-center">
            <span className="block font-display font-black text-xl text-campus-peachDark">
              524
            </span>
            <span className="text-[11px] font-bold text-stone-600">Upvotes Received</span>
          </div>

          <div className="bg-campus-bg p-3 rounded-2xl border border-stone-200 text-center">
            <span className="block font-display font-black text-xl text-campus-purpleDark">
              {savedPosts.length}
            </span>
            <span className="text-[11px] font-bold text-stone-600">Bookmarked</span>
          </div>
        </div>
      </div>

      {/* 2. Sub Tabs: My Submissions, Saved Stories, Digital ID Pass */}
      <div className="flex items-center gap-2 mb-5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveProfileTab('submissions')}
          className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 transition-all shrink-0 ${
            activeProfileTab === 'submissions'
              ? 'bg-black text-white border-black shadow-brutal-sm'
              : 'bg-white text-stone-700 border-campus-borderDark hover:bg-stone-50'
          }`}
        >
          My Submissions ({mySubmissions.length})
        </button>

        <button
          onClick={() => setActiveProfileTab('saved')}
          className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 transition-all shrink-0 ${
            activeProfileTab === 'saved'
              ? 'bg-black text-white border-black shadow-brutal-sm'
              : 'bg-white text-stone-700 border-campus-borderDark hover:bg-stone-50'
          }`}
        >
          Saved Stories ({savedPosts.length})
        </button>

        <button
          onClick={() => setActiveProfileTab('badge')}
          className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 transition-all shrink-0 ${
            activeProfileTab === 'badge'
              ? 'bg-black text-white border-black shadow-brutal-sm'
              : 'bg-white text-stone-700 border-campus-borderDark hover:bg-stone-50'
          }`}
        >
          Reporter ID Pass 🪪
        </button>
      </div>

      {/* 3. Tab Content */}
      {activeProfileTab === 'submissions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-display font-bold text-base text-campus-text">
              Stories Submitted by You
            </h3>
            <span className="text-xs font-semibold text-stone-500">
              Approved by Editorial Desk
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mySubmissions.map((post) => (
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
        </div>
      )}

      {activeProfileTab === 'saved' && (
        <div className="space-y-4">
          <h3 className="font-display font-bold text-base text-campus-text px-1">
            Your Bookmarked Articles
          </h3>
          {savedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedPosts.map((post) => (
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
            <div className="bg-white border-2 border-campus-borderDark rounded-[24px] p-8 text-center shadow-brutal">
              <Bookmark className="w-10 h-10 text-stone-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-stone-600">
                You haven't bookmarked any campus stories yet. Tap the bookmark icon on any post!
              </p>
            </div>
          )}
        </div>
      )}

      {activeProfileTab === 'badge' && (
        <div className="max-w-md mx-auto bg-gradient-to-br from-[#1E1B4B] to-[#312E81] text-white border-2 border-black rounded-[32px] p-6 shadow-brutal relative overflow-hidden">
          {/* Holographic accent */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-campus-yellow rounded-full filter blur-2xl opacity-20" />

          <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                CAMPUS DAILY<span className="text-campus-yellow">.</span>
              </span>
              <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">
                Official Press & Reporter Pass
              </p>
            </div>
            <ShieldCheck className="w-8 h-8 text-campus-yellow" />
          </div>

          <div className="flex items-center gap-4 mb-5">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&auto=format&fit=crop&q=80"
              alt="Reporter"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white/50"
            />
            <div>
              <h4 className="font-display font-black text-lg text-white">Tausif Shaikh</h4>
              <p className="text-xs text-yellow-300 font-bold">Authorized Campus Reporter</p>
              <p className="text-xs text-white/80">{selectedCollege.name}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 text-[11px] text-white/80 font-medium leading-relaxed border border-white/15">
            This digital pass authorizes the holder to gather campus news, interview student councils, and submit verified reports to the College Daily editorial desk.
          </div>
        </div>
      )}

      {/* 4. Student Settings Card */}
      <div className="bg-white border-2 border-campus-borderDark rounded-[28px] p-5 shadow-brutal mt-6">
        <h3 className="font-display font-black text-lg text-campus-text mb-4">
          Campus Preferences
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-stone-50 rounded-2xl border border-stone-200">
            <div>
              <p className="font-bold text-xs text-stone-900">Post Anonymously by Default</p>
              <p className="text-[11px] text-stone-500">Hide your name and profile picture on new posts</p>
            </div>
            <input
              type="checkbox"
              checked={isAnonymousDefault}
              onChange={(e) => setIsAnonymousDefault(e.target.checked)}
              className="w-5 h-5 rounded text-campus-yellow focus:ring-black border-2 border-black"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-stone-50 rounded-2xl border border-stone-200">
            <div>
              <p className="font-bold text-xs text-stone-900">Fest & Exam Alerts</p>
              <p className="text-[11px] text-stone-500">Receive WhatsApp notifications for breaking news</p>
            </div>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="w-5 h-5 rounded text-campus-yellow focus:ring-black border-2 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
