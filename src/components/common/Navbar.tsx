import React from 'react';
import { Search, Bell, MapPin, ChevronDown } from 'lucide-react';
import { College } from '../../types';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCollege: College;
  onOpenCollegeSelect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCollege,
  onOpenCollegeSelect,
}) => {
  return (
    <header className="hidden lg:flex items-center justify-between gap-4 mb-6 sticky top-4 z-20">
      {/* Search Input Box with brutal border */}
      <div className="flex-1 max-w-2xl relative">
        <div className="relative">
          <Search className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search posts, campus news, fests, or colleges..."
            className="w-full pl-12 pr-4 py-3 bg-white/90 focus:bg-white backdrop-blur-sm border-2 border-campus-borderDark rounded-full font-medium text-sm text-campus-text placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-campus-yellow shadow-brutal-sm transition-all"
          />
        </div>
      </div>

      {/* College Location Quick Indicator & Actions */}
      <div className="flex items-center gap-3">
        {/* College Selector Pill */}
        <button
          onClick={onOpenCollegeSelect}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-2 border-campus-borderDark rounded-full font-bold text-xs shadow-brutal-sm hover:bg-stone-50 transition-all text-campus-text"
        >
          <MapPin className="w-3.5 h-3.5 text-campus-yellow fill-campus-yellow" />
          <span>{selectedCollege.shortName}, {selectedCollege.city}</span>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
        </button>

        {/* Notification Bell */}
        <button className="relative w-11 h-11 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm hover:translate-y-[-1px] transition-all">
          <Bell className="w-5 h-5 text-campus-text" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF453A] border-2 border-white rounded-full text-white text-[10px] font-black flex items-center justify-center">
            1
          </span>
        </button>

        {/* Profile Avatar */}
        <div className="relative cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
            alt="My Profile"
            className="w-11 h-11 rounded-full object-cover border-2 border-campus-borderDark shadow-brutal-sm"
          />
        </div>
      </div>
    </header>
  );
};
