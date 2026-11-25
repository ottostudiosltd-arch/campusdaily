import React from 'react';
import { Home, Newspaper, Plus, GraduationCap, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenCreatePost: () => void;
  onOpenCollegesModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenCreatePost,
  onOpenCollegesModal,
}) => {
  return (
    <div className="lg:hidden fixed bottom-3 left-4 right-4 z-40">
      <div className="bg-white/95 backdrop-blur-md border-2 border-campus-borderDark rounded-[26px] px-3 py-2 shadow-brutal flex items-center justify-around relative">
        {/* Home */}
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
            activeTab === 'home' ? 'text-campus-purpleDark' : 'text-stone-500 hover:text-black'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
          {activeTab === 'home' && (
            <span className="w-4 h-0.5 bg-campus-purpleDark rounded-full mt-0.5" />
          )}
        </button>

        {/* News */}
        <button
          onClick={() => onSelectTab('news')}
          className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
            activeTab === 'news' ? 'text-campus-purpleDark' : 'text-stone-500 hover:text-black'
          }`}
        >
          <Newspaper className="w-5 h-5" />
          <span>News</span>
          {activeTab === 'news' && (
            <span className="w-4 h-0.5 bg-campus-purpleDark rounded-full mt-0.5" />
          )}
        </button>

        {/* Center Floating (+) Button */}
        <div className="relative -top-5">
          <button
            onClick={onOpenCreatePost}
            className="w-13 h-13 p-3.5 bg-black hover:bg-stone-900 active:scale-95 text-white rounded-full border-2 border-campus-borderDark shadow-brutal flex items-center justify-center transition-all"
            title="Create Post"
          >
            <Plus className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        {/* Colleges */}
        <button
          onClick={onOpenCollegesModal}
          className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
            activeTab === 'colleges' ? 'text-campus-purpleDark' : 'text-stone-500 hover:text-black'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <span>Colleges</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => onSelectTab('profile')}
          className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
            activeTab === 'profile' ? 'text-campus-purpleDark' : 'text-stone-500 hover:text-black'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
          {activeTab === 'profile' && (
            <span className="w-4 h-0.5 bg-campus-purpleDark rounded-full mt-0.5" />
          )}
        </button>
      </div>
    </div>
  );
};
