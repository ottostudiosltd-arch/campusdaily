import React from 'react';
import { MapPin, ChevronDown, Bell, Search } from 'lucide-react';
import { College } from '../../types';

interface MobileHeaderProps {
  selectedCollege: College;
  onOpenCollegeSelect: () => void;
  onToggleSearch: () => void;
  showSearch: boolean;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  selectedCollege,
  onOpenCollegeSelect,
  onToggleSearch,
  showSearch,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="lg:hidden w-full mb-3 select-none">
      <div className="flex items-center justify-between pt-2 pb-1">
        {/* Left Brand & College Dropdown */}
        <div>
          <div className="flex items-center gap-1">
            <span className="font-display font-black text-2xl tracking-tight text-campus-text">
              CAMPUS<span className="text-campus-yellow">.</span>
            </span>
          </div>

          <button
            onClick={onOpenCollegeSelect}
            className="flex items-center gap-1 text-xs font-bold text-stone-700 mt-0.5 hover:text-black"
          >
            <MapPin className="w-3.5 h-3.5 text-stone-900" />
            <span>{selectedCollege.shortName}, {selectedCollege.city}</span>
            <ChevronDown className="w-3 h-3 text-stone-500" />
          </button>
        </div>

        {/* Right Actions: Search, Bell & Avatar */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleSearch}
            className="w-9 h-9 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm text-stone-700"
          >
            <Search className="w-4 h-4" />
          </button>

          <button className="relative w-9 h-9 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm">
            <Bell className="w-4 h-4 text-stone-800" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF453A] rounded-full text-white text-[9px] font-black flex items-center justify-center border border-white">
              1
            </span>
          </button>

          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
            alt="User"
            className="w-9 h-9 rounded-full object-cover border-2 border-campus-borderDark shadow-brutal-sm"
          />
        </div>
      </div>

      {/* Expandable Mobile Search input */}
      {showSearch && (
        <div className="mt-2.5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search campus news, confessions, fests..."
            autoFocus
            className="w-full px-4 py-2 bg-white border-2 border-campus-borderDark rounded-full text-xs font-medium focus:outline-none shadow-brutal-sm"
          />
        </div>
      )}
    </header>
  );
};
