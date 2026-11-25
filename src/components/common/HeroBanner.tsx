import React from 'react';
import { DoodlePaperPlane } from '../doodles/Doodles';
import { Plus, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../../lib/assets';

interface HeroBannerProps {
  onOpenCreatePost: () => void;
  collegeName: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenCreatePost, collegeName }) => {
  return (
    <div className="w-full mb-5">
      {/* 1. Desktop View Banner */}
      <div className="hidden md:flex items-center justify-between bg-gradient-to-r from-campus-cream via-white to-campus-yellowLight border-2 border-campus-borderDark rounded-[28px] p-6 shadow-brutal relative overflow-hidden">
        {/* Background decorative doodles */}
        <div className="absolute top-2 right-48 opacity-80 pointer-events-none">
          <DoodlePaperPlane className="w-12 h-12" />
        </div>
        
        {/* Real Peek Cat sticker from assets */}
        <div className="absolute -bottom-2 right-8 pointer-events-none select-none">
          <img
            src={getAssetUrl('assets/stickers/peek-cat-pure.png')}
            alt="Campus Daily Mascot"
            className="w-36 h-auto drop-shadow-sm"
          />
        </div>

        <div className="z-10 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-campus-yellow border border-black rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Daily Feed • {collegeName}</span>
          </div>

          <h1 className="font-display font-black text-3xl lg:text-4xl text-campus-text tracking-tight leading-none mb-2">
            CAMPUS DAILY <span className="text-campus-yellow">✨</span>
          </h1>

          <p className="text-stone-600 font-semibold text-sm lg:text-base mb-4">
            Here's what's happening at your campus today. Read, share, and stay connected.
          </p>

          <button
            onClick={onOpenCreatePost}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-campus-yellow hover:bg-campus-yellowHover text-black font-display font-bold text-sm lg:text-base rounded-full border-2 border-campus-borderDark shadow-brutal hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-sm transition-all"
          >
            <span>Create Post</span>
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* 2. Mobile View: EXACT `mobWhat's Happening_ Cat Banner.png` from assets! */}
      <div className="md:hidden relative w-full flex justify-center pt-2">
        <div
          onClick={onOpenCreatePost}
          className="cursor-pointer active:scale-[0.98] transition-transform select-none w-full max-w-sm"
        >
          <img
            src={getAssetUrl('assets/mob-cat-banner.png')}
            alt="What's Happening in your college today..."
            className="w-full h-auto drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
