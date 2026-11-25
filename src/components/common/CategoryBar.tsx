import React from 'react';
import { CategoryId } from '../../types';
import { Flame, Eye, Heart, Smile, Calendar, Sparkles, Trophy } from 'lucide-react';

interface CategoryBarProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

interface CategoryOption {
  id: CategoryId;
  label: string;
  icon: React.ReactNode;
  bgActive: string;
  bgInactive: string;
  textColor: string;
  borderColor: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: 'trending',
    label: 'Trending',
    icon: <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />,
    bgActive: 'bg-[#FFC5B2] shadow-brutal-sm',
    bgInactive: 'bg-[#FFE9E1]/80 hover:bg-[#FFC5B2]/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'spotted',
    label: 'Spotted',
    icon: <Eye className="w-4 h-4 text-purple-600" />,
    bgActive: 'bg-[#DEC9FF] shadow-brutal-sm',
    bgInactive: 'bg-[#F2EBFF]/80 hover:bg-[#DEC9FF]/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'confessions',
    label: 'Confessions',
    icon: <Heart className="w-4 h-4 fill-amber-500 text-amber-500" />,
    bgActive: 'bg-[#FFE082] shadow-brutal-sm',
    bgInactive: 'bg-[#FFF3D1]/80 hover:bg-[#FFE082]/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'memes',
    label: 'Memes',
    icon: <Smile className="w-4 h-4 text-emerald-600" />,
    bgActive: 'bg-[#C7F5D4] shadow-brutal-sm',
    bgInactive: 'bg-[#E5FBEB]/80 hover:bg-[#C7F5D4]/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'events',
    label: 'Events',
    icon: <Calendar className="w-4 h-4 text-rose-500" />,
    bgActive: 'bg-[#FFD1DF] shadow-brutal-sm',
    bgInactive: 'bg-[#FFEBF1]/80 hover:bg-[#FFD1DF]/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'opportunities',
    label: 'Opportunities',
    icon: <Sparkles className="w-4 h-4 text-amber-600" />,
    bgActive: 'bg-amber-300 shadow-brutal-sm',
    bgInactive: 'bg-amber-100/80 hover:bg-amber-200/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
  {
    id: 'competitions',
    label: 'Competitions',
    icon: <Trophy className="w-4 h-4 text-indigo-600" />,
    bgActive: 'bg-indigo-200 shadow-brutal-sm',
    bgInactive: 'bg-indigo-50/80 hover:bg-indigo-100/60',
    textColor: 'text-stone-900',
    borderColor: 'border-campus-borderDark',
  },
];

export const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full mb-4">
      {/* Scrollable pill container */}
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
        {/* 'All' button */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full font-display font-bold text-sm border-2 border-campus-borderDark transition-all shrink-0 flex items-center gap-1.5 ${
            activeCategory === 'all'
              ? 'bg-campus-yellow text-black shadow-brutal-sm'
              : 'bg-white/80 hover:bg-white text-stone-700'
          }`}
        >
          <span>All News</span>
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-display font-bold text-sm border-2 ${
                cat.borderColor
              } transition-all shrink-0 flex items-center gap-2 ${
                isActive ? `${cat.bgActive} scale-[1.02]` : cat.bgInactive
              } ${cat.textColor}`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
