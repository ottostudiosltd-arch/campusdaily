import React from 'react';
import { Flame, Building2, Bookmark, Bell, Settings, ArrowRight } from 'lucide-react';
import { TRENDING_TOPICS } from '../../data/mockData';
import { DoodlePaperPlane } from '../doodles/Doodles';

interface RightSidebarProps {
  onSelectTopic: (topic: string) => void;
  onOpenCollegesModal: () => void;
  onOpenSavedPosts: () => void;
  savedCount: number;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  onSelectTopic,
  onOpenCollegesModal,
  onOpenSavedPosts,
  savedCount,
}) => {
  return (
    <aside className="w-80 shrink-0 hidden xl:flex flex-col gap-3.5 h-[calc(100vh-2rem)] sticky top-4 select-none overflow-y-auto no-scrollbar pb-2">
      {/* 1. Trending Now Card */}
      <div className="bg-campus-card border-2 border-campus-borderDark rounded-[24px] p-4 shadow-brutal shrink-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FFD5C2] flex items-center justify-center border border-black">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            </span>
            <h2 className="font-display font-black text-base text-campus-text">
              Trending Now
            </h2>
          </div>
          <button className="text-[11px] font-bold text-campus-purpleDark hover:underline flex items-center gap-0.5">
            See all <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <ul className="space-y-2">
          {TRENDING_TOPICS.map((item) => (
            <li
              key={item.rank}
              onClick={() => onSelectTopic(item.title)}
              className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-white cursor-pointer transition-colors group"
            >
              <span className="font-display font-black text-sm text-stone-400 group-hover:text-black w-4 text-center">
                {item.rank}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-xs text-campus-text truncate group-hover:text-campus-purpleDark">
                  {item.title}
                </p>
                <p className="text-[10px] text-stone-500 font-medium">
                  {item.postsCount}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Quick Access Menu */}
      <div className="bg-campus-card border-2 border-campus-borderDark rounded-[24px] p-4 shadow-brutal shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">⚡</span>
          <h2 className="font-display font-black text-base text-campus-text">
            Quick Access
          </h2>
        </div>

        <div className="space-y-1">
          <button
            onClick={onOpenCollegesModal}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-white text-stone-700 hover:text-black font-bold text-xs transition-all"
          >
            <Building2 className="w-4 h-4" />
            <span>My College Hub</span>
          </button>

          <button
            onClick={onOpenSavedPosts}
            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white text-stone-700 hover:text-black font-bold text-xs transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Bookmark className="w-4 h-4" />
              <span>Saved Posts</span>
            </div>
            {savedCount > 0 && (
              <span className="text-[10px] bg-campus-yellow font-black px-1.5 py-0.5 rounded-full border border-black">
                {savedCount}
              </span>
            )}
          </button>

          <button className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-white text-stone-700 hover:text-black font-bold text-xs transition-all">
            <Bell className="w-4 h-4" />
            <span>Campus Alerts</span>
          </button>

          <button className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-white text-stone-700 hover:text-black font-bold text-xs transition-all">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* 3. Promo Banner: "Stay updated, stay connected" (No more cutting off / clipping!) */}
      <div className="bg-gradient-to-br from-campus-purple to-[#5F3CE5] text-white border-2 border-campus-borderDark rounded-[24px] p-4 shadow-brutal relative overflow-hidden shrink-0">
        <div className="absolute -right-3 -bottom-3 opacity-25 pointer-events-none">
          <DoodlePaperPlane className="w-20 h-20 text-white" />
        </div>

        <div className="relative z-10">
          <h3 className="font-display font-black text-base leading-snug mb-1">
            Stay updated, stay connected.
          </h3>
          <p className="text-white/85 text-[11px] font-semibold mb-3 leading-relaxed">
            Get instant fest reveals, exam leaks & canteen chatter directly to your pocket.
          </p>

          <button
            onClick={onOpenCollegesModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-campus-purpleDark font-display font-bold text-xs rounded-full border border-black shadow-brutal-sm hover:translate-y-[-1px] transition-all"
          >
            <span>Join your college</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};
