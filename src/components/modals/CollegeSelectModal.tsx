import React from 'react';
import { College } from '../../types';
import { X, Building2, MapPin, Check } from 'lucide-react';

interface CollegeSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  colleges: College[];
  selectedCollege: College;
  onSelectCollege: (college: College) => void;
}

export const CollegeSelectModal: React.FC<CollegeSelectModalProps> = ({
  isOpen,
  onClose,
  colleges,
  selectedCollege,
  onSelectCollege,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-campus-bg border-2 border-campus-borderDark rounded-[32px] w-full max-w-lg shadow-brutal p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm hover:bg-stone-100 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-5 h-5 text-campus-purple" />
          <h2 className="font-display font-black text-2xl text-campus-text">
            Choose Your Campus
          </h2>
        </div>
        <p className="text-xs font-semibold text-stone-600 mb-5">
          Select a college to filter stories, fests, and local student news.
        </p>

        <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
          {colleges.map((col) => {
            const isSelected = col.id === selectedCollege.id;
            return (
              <div
                key={col.id}
                onClick={() => {
                  onSelectCollege(col);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-campus-yellow border-campus-borderDark shadow-brutal-sm'
                    : 'bg-white border-stone-200 hover:border-campus-borderDark hover:bg-stone-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-black text-sm text-campus-text">
                      {col.shortName}
                    </span>
                    <span className="text-[10px] bg-stone-100 font-bold px-2 py-0.5 rounded-full border border-stone-300">
                      {col.city}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-medium truncate max-w-xs mt-0.5">
                    {col.name}
                  </p>
                </div>

                {isSelected ? (
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                ) : (
                  <span className="text-xs font-bold text-stone-400">
                    {col.studentsCount.toLocaleString()}+ students
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
