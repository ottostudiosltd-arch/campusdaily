import React, { useState } from 'react';
import { CardTheme, CategoryId, Post, College } from '../../types';
import { X, Sparkles, Image as ImageIcon, Flame, Heart, Smile, Calendar, Plus } from 'lucide-react';
import { WonderingGirl, CoolCat } from '../doodles/Doodles';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitPost: (newPost: Partial<Post>) => void;
  colleges: College[];
  defaultCollege: College;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onSubmitPost,
  colleges,
  defaultCollege,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<CardTheme>('doodle-question');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<CategoryId>('trending');
  const [collegeId, setCollegeId] = useState(defaultCollege.id);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [authorName, setAuthorName] = useState('Tausif Shaikh');
  const [imageUrl, setImageUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const collegeObj = colleges.find((c) => c.id === collegeId) || defaultCollege;
    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    const newPost: Partial<Post> = {
      id: `post-${Date.now()}`,
      title,
      content,
      category,
      cardTheme: selectedTheme,
      college: collegeObj.shortName,
      collegeSlug: collegeObj.slug,
      city: collegeObj.city,
      author: {
        id: `u-${Date.now()}`,
        name: isAnonymous ? 'Anonymous Student' : authorName || 'Campus Student',
        avatar: isAnonymous
          ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
          : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        isAnonymous,
        role: 'student',
      },
      imageUrl: selectedTheme === 'photo-spotlight' && imageUrl ? imageUrl : undefined,
      timestamp: 'Just now',
      likes: 1,
      isLiked: true,
      commentsCount: 0,
      tags: tags.length > 0 ? tags : ['CampusUpdate'],
      badgeLabel:
        selectedTheme === 'doodle-question'
          ? 'Trending Question'
          : selectedTheme === 'photo-spotlight'
          ? 'Campus Spotted'
          : selectedTheme === 'meme-humor'
          ? 'Memes'
          : 'Notice',
      mascotVariant:
        selectedTheme === 'doodle-question'
          ? 'thinking-girl'
          : selectedTheme === 'meme-humor'
          ? 'cool-cat'
          : undefined,
    };

    onSubmitPost(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-campus-bg border-2 border-campus-borderDark rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-brutal p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm hover:bg-stone-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">✏️</span>
            <h2 className="font-display font-black text-2xl text-campus-text">
              Create a Campus Post
            </h2>
          </div>
          <p className="text-xs font-semibold text-stone-600">
            Choose a card theme, write your update, and reach your campus!
          </p>
        </div>

        {/* 1. CHOOSE CARD THEME (The 3-4 distinct themes user asked for!) */}
        <div className="mb-5">
          <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2">
            1. Select Post Card Theme & Style
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* Theme 1: Peach Doodle Question */}
            <button
              type="button"
              onClick={() => setSelectedTheme('doodle-question')}
              className={`p-3 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                selectedTheme === 'doodle-question'
                  ? 'bg-[#FFD5C2] border-campus-borderDark shadow-brutal-sm ring-2 ring-orange-400'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🍑</span>
                <span className="text-[10px] font-black uppercase text-orange-700">Doodle</span>
              </div>
              <p className="font-bold text-xs text-stone-900 leading-tight">
                Question & Discussion
              </p>
            </button>

            {/* Theme 2: Photo Spotlight */}
            <button
              type="button"
              onClick={() => setSelectedTheme('photo-spotlight')}
              className={`p-3 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                selectedTheme === 'photo-spotlight'
                  ? 'bg-[#DEC9FF] border-campus-borderDark shadow-brutal-sm ring-2 ring-purple-400'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">📸</span>
                <span className="text-[10px] font-black uppercase text-purple-700">Photo</span>
              </div>
              <p className="font-bold text-xs text-stone-900 leading-tight">
                Event & Spotted
              </p>
            </button>

            {/* Theme 3: Mint Meme Humor */}
            <button
              type="button"
              onClick={() => setSelectedTheme('meme-humor')}
              className={`p-3 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                selectedTheme === 'meme-humor'
                  ? 'bg-[#C7F5D4] border-campus-borderDark shadow-brutal-sm ring-2 ring-emerald-400'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">🐸</span>
                <span className="text-[10px] font-black uppercase text-emerald-800">Meme</span>
              </div>
              <p className="font-bold text-xs text-stone-900 leading-tight">
                Humor & Confession
              </p>
            </button>

            {/* Theme 4: Opportunity Notice */}
            <button
              type="button"
              onClick={() => setSelectedTheme('opportunity-notice')}
              className={`p-3 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                selectedTheme === 'opportunity-notice'
                  ? 'bg-amber-200 border-campus-borderDark shadow-brutal-sm ring-2 ring-amber-400'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">⚡</span>
                <span className="text-[10px] font-black uppercase text-amber-900">Notice</span>
              </div>
              <p className="font-bold text-xs text-stone-900 leading-tight">
                Hackathon & Job
              </p>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
              Title / Catchy Headline
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                selectedTheme === 'doodle-question'
                  ? "e.g., What's going on with the 75% attendance rules?"
                  : selectedTheme === 'photo-spotlight'
                  ? 'e.g., Annual cultural fest main stage is ready!'
                  : selectedTheme === 'meme-humor'
                  ? 'e.g., When the canteen bhaiya knows your order better than your mom'
                  : 'e.g., Pune Inter-college Coding Championship 2026'
              }
              className="w-full px-4 py-2.5 bg-white border-2 border-campus-borderDark rounded-xl text-sm font-bold text-campus-text placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-campus-yellow shadow-brutal-sm"
            />
          </div>

          {/* Content / Story */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
              Your Story / Description
            </label>
            <textarea
              required
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the details, what happened, or share your thoughts..."
              className="w-full px-4 py-2.5 bg-white border-2 border-campus-borderDark rounded-xl text-sm font-medium text-campus-text placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-campus-yellow shadow-brutal-sm"
            />
          </div>

          {/* Photo URL if photo theme */}
          {selectedTheme === 'photo-spotlight' && (
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                Image URL (Campus photo, fest banner, or event)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="flex-1 px-4 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-medium focus:outline-none shadow-brutal-sm"
                />
                <button
                  type="button"
                  onClick={() =>
                    setImageUrl(
                      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'
                    )
                  }
                  className="px-3 py-1.5 bg-stone-200 border-2 border-campus-borderDark rounded-xl text-xs font-bold hover:bg-stone-300"
                >
                  Sample Photo
                </button>
              </div>
            </div>
          )}

          {/* College and Category selection row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                College Campus
              </label>
              <select
                value={collegeId}
                onChange={(e) => setCollegeId(e.target.value)}
                className="w-full px-3 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold text-campus-text shadow-brutal-sm"
              >
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.city})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryId)}
                className="w-full px-3 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold text-campus-text shadow-brutal-sm"
              >
                <option value="trending">🔥 Trending</option>
                <option value="spotted">👁️ Campus Spotted</option>
                <option value="confessions">💛 Confession</option>
                <option value="memes">🟢 Memes & Banter</option>
                <option value="events">🌸 Events & Fests</option>
                <option value="opportunities">⚡ Opportunities</option>
                <option value="competitions">🏆 Competitions</option>
              </select>
            </div>
          </div>

          {/* Tags & Anonymous Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Attendance, Fest2026, Canteen"
                className="w-full px-3 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-medium shadow-brutal-sm"
              />
            </div>

            <div className="pt-4">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 rounded text-campus-yellow focus:ring-black border-2 border-campus-borderDark"
                />
                <span className="text-xs font-bold text-stone-800">
                  Post Anonymously (Hide Name & Photo)
                </span>
              </label>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-3 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-display font-bold text-sm rounded-full border border-stone-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-campus-yellow hover:bg-campus-yellowHover text-black font-display font-black text-sm rounded-full border-2 border-campus-borderDark shadow-brutal hover:translate-y-[-1px] transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Publish Post</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
