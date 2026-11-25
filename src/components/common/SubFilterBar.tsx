import React from 'react';
import { SubFilter } from '../../types';
import { Sparkles, Building2, MapPin } from 'lucide-react';

interface SubFilterBarProps {
  activeFilter: SubFilter;
  onSelectFilter: (filter: SubFilter) => void;
  selectedCollegeName?: string;
}

export const SubFilterBar: React.FC<SubFilterBarProps> = ({
  activeFilter,
  onSelectFilter,
  selectedCollegeName,
}) => {
  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar">
      {/* For You */}
      <button
        onClick={() => onSelectFilter('for-you')}
        className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 border-campus-borderDark transition-all shrink-0 flex items-center gap-1.5 ${
          activeFilter === 'for-you'
            ? 'bg-campus-text text-white shadow-brutal-sm'
            : 'bg-white hover:bg-stone-50 text-stone-700'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-campus-yellow" />
        <span>For You</span>
      </button>

      {/* My College */}
      <button
        onClick={() => onSelectFilter('my-college')}
        className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 border-campus-borderDark transition-all shrink-0 flex items-center gap-1.5 ${
          activeFilter === 'my-college'
            ? 'bg-campus-text text-white shadow-brutal-sm'
            : 'bg-white hover:bg-stone-50 text-stone-700'
        }`}
      >
        <Building2 className="w-3.5 h-3.5" />
        <span>{selectedCollegeName ? selectedCollegeName : 'My College'}</span>
      </button>

      {/* Nearby */}
      <button
        onClick={() => onSelectFilter('nearby')}
        className={`px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 border-campus-borderDark transition-all shrink-0 flex items-center gap-1.5 ${
          activeFilter === 'nearby'
            ? 'bg-campus-text text-white shadow-brutal-sm'
            : 'bg-white hover:bg-stone-50 text-stone-700'
        }`}
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>Nearby Campus</span>
      </button>
    </div>
  );
};
