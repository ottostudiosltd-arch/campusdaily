import React from 'react';
import { Home, Newspaper, GraduationCap, User } from 'lucide-react';
import { getAssetUrl } from '../../lib/assets';

interface LeftSidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'colleges', label: 'Colleges', icon: GraduationCap },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="w-64 shrink-0 hidden lg:flex flex-col justify-between h-[calc(100vh-2rem)] sticky top-4 bg-campus-card border-2 border-campus-borderDark rounded-[28px] p-5 shadow-brutal select-none overflow-y-auto no-scrollbar">
      <div>
        {/* Brand Logo */}
        <div
          className="flex items-center gap-1.5 mb-6 px-2 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => onSelectTab('home')}
        >
          <div className="font-display font-black text-3xl tracking-tight text-campus-text">
            CAMPUS<span className="text-campus-yellow">.</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-campus-yellow border border-black px-1.5 py-0.5 rounded-md rotate-2">
            DAILY
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-2xl font-display font-bold text-sm transition-all ${
                  isActive
                    ? 'bg-campus-purpleLight text-campus-purpleDark border-2 border-campus-purple shadow-sm translate-x-1'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-black border-2 border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Mascot Section: Original Scrolling Girl Sticker from assets */}
      <div className="pt-3 border-t-2 border-campus-borderDark/20 relative mt-4">
        <div className="flex flex-col items-center">
          {/* Real Good Vibes Sticker from assets */}
          <img
            src={getAssetUrl('assets/stickers/good-vibes.png')}
            alt="Good vibes only"
            className="w-24 h-auto drop-shadow-sm mb-1 select-none pointer-events-none"
          />

          {/* Real Scrolling Girl Sticker from assets */}
          <div className="relative w-28 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-campus-mint rounded-full filter blur-md opacity-40" />
            <img
              src={getAssetUrl('assets/stickers/scrolling-girl-pure.png')}
              alt="Scrolling Girl"
              className="w-full h-full object-contain relative z-10 select-none pointer-events-none drop-shadow-sm"
            />
          </div>

          <p className="text-[11px] text-center font-bold text-stone-500 mt-1">
            Pune & Maharashtra Colleges ❤️
          </p>
        </div>
      </div>
    </aside>
  );
};
