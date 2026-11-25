import React from 'react';
import { DoodleMegaphone } from '../doodles/Doodles';
import { ArrowRight } from 'lucide-react';

interface SponsoredAdCardProps {
  onOpenPublishAd: () => void;
}

export const SponsoredAdCard: React.FC<SponsoredAdCardProps> = ({ onOpenPublishAd }) => {
  return (
    <div
      onClick={onOpenPublishAd}
      className="cursor-pointer bg-gradient-to-r from-[#FFCC4D] to-[#FFC233] border-2 border-campus-borderDark rounded-[24px] p-4 sm:p-5 shadow-brutal hover:translate-y-[-2px] transition-all my-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <DoodleMegaphone className="w-10 h-10 shrink-0" />
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-full inline-block mb-1">
            Sponsored / Promo
          </span>
          <h4 className="font-display font-black text-base sm:text-lg text-campus-text leading-tight">
            Want to promote your college event, hostel or cafe?
          </h4>
          <p className="text-xs text-stone-800 font-bold">
            Reach 50,000+ college students across Maharashtra • Tap to publish your ad
          </p>
        </div>
      </div>

      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-md">
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};
