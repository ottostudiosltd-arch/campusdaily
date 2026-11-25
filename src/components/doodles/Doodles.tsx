import React from 'react';

// 1. Cute Peeking Cat (Hero Banner & Cards)
export const PeekingCat: React.FC<{ className?: string }> = ({ className = "w-28 h-20" }) => (
  <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cat Ears */}
    <path d="M42 55L32 18C30 14 34 10 38 12L62 30" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M40 38L36 22L50 30" fill="#FFD1DF" />
    <path d="M118 55L128 18C130 14 126 10 122 12L98 30" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M120 38L124 22L110 30" fill="#FFD1DF" />
    
    {/* Head Outline */}
    <path d="M38 52C28 65 30 85 45 92C60 98 100 98 115 92C130 85 132 65 122 52C112 36 48 36 38 52Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" strokeLinejoin="round" />
    
    {/* Paws resting over edge */}
    <path d="M40 88C35 88 32 94 34 99C36 104 42 107 50 106C58 105 60 98 58 92C55 88 46 88 40 88Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" />
    <line x1="43" y1="96" x2="43" y2="103" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    <line x1="49" y1="96" x2="49" y2="103" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />

    <path d="M120 88C125 88 128 94 126 99C124 104 118 107 110 106C102 105 100 98 102 92C105 88 114 88 120 88Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" />
    <line x1="117" y1="96" x2="117" y2="103" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    <line x1="111" y1="96" x2="111" y2="103" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />

    {/* Eyes */}
    <circle cx="62" cy="62" r="5" fill="#18181B" />
    <circle cx="60" cy="60" r="1.5" fill="#FFFFFF" />
    <circle cx="98" cy="62" r="5" fill="#18181B" />
    <circle cx="96" cy="60" r="1.5" fill="#FFFFFF" />

    {/* Nose & Mouth */}
    <ellipse cx="80" cy="68" rx="3.5" ry="2.5" fill="#18181B" />
    <path d="M74 72Q80 77 80 72Q80 77 86 72" fill="none" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />

    {/* Whiskers */}
    <line x1="26" y1="65" x2="46" y2="68" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    <line x1="28" y1="75" x2="46" y2="73" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    <line x1="134" y1="65" x2="114" y2="68" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    <line x1="132" y1="75" x2="114" y2="73" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />

    {/* Excitement marks */}
    <path d="M18 42L12 32M24 38L22 26M136 38L138 26M142 42L148 32" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 2. Confused / Wondering Student Girl (Theme 1: Questions / Trending)
export const WonderingGirl: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Question marks doodle */}
    <text x="15" y="45" fontFamily="Fredoka, sans-serif" fontSize="36" fontWeight="bold" fill="#18181B">?</text>
    <path d="M38 28L44 22M40 38L48 36" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Hair Back */}
    <path d="M52 50C42 62 40 95 44 135C52 145 125 145 136 135C140 95 138 62 128 50C118 30 62 30 52 50Z" fill="#18181B" />

    {/* Face */}
    <path d="M60 65C58 85 62 105 90 105C118 105 122 85 120 65C118 48 62 48 60 65Z" fill="#FFF2E2" stroke="#18181B" strokeWidth="3.5" />
    
    {/* Bangs */}
    <path d="M58 55C66 70 82 58 92 65C102 58 116 70 122 55C122 40 58 40 58 55Z" fill="#18181B" />

    {/* Eyes (looking up thoughtfully) */}
    <ellipse cx="78" cy="74" rx="4" ry="5.5" fill="#18181B" />
    <circle cx="76" cy="72" r="1.5" fill="#FFFFFF" />
    <ellipse cx="104" cy="74" rx="4" ry="5.5" fill="#18181B" />
    <circle cx="102" cy="72" r="1.5" fill="#FFFFFF" />

    {/* Eyebrows (wondering / worried) */}
    <path d="M72 65C76 62 82 64 85 67" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M97 67C100 64 106 62 110 65" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Nose & Mouth */}
    <path d="M91 80C89 82 91 84 92 84" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
    <path d="M86 91Q91 88 96 91" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Blush */}
    <ellipse cx="70" cy="84" rx="4" ry="2.5" fill="#FFB7B2" opacity="0.8" />
    <ellipse cx="112" cy="84" rx="4" ry="2.5" fill="#FFB7B2" opacity="0.8" />

    {/* Hands holding chin */}
    <path d="M55 125C58 108 68 102 75 102C82 102 85 112 85 125" fill="#FFF2E2" stroke="#18181B" strokeWidth="3.5" />
    <path d="M125 125C122 108 112 102 105 102C98 102 95 112 95 125" fill="#FFF2E2" stroke="#18181B" strokeWidth="3.5" />
    {/* Clothes */}
    <path d="M48 145C55 130 75 124 90 124C105 124 125 130 132 145" fill="#FFFFFF" stroke="#18181B" strokeWidth="3.5" />
  </svg>
);

// 3. Cool Cat with Sunglasses (Theme 3: Memes & Canteen Chronicles)
export const CoolCat: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <polygon points="36,45 28,12 58,26" fill="#F49D37" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="38,36 32,18 48,26" fill="#FFCBA4" />
    <polygon points="124,45 132,12 102,26" fill="#F49D37" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="122,36 128,18 112,26" fill="#FFCBA4" />

    {/* Head */}
    <ellipse cx="80" cy="72" rx="48" ry="42" fill="#F49D37" stroke="#18181B" strokeWidth="4.5" />

    {/* Forehead Tiger Stripes */}
    <path d="M72 34L80 44L88 34" stroke="#D36B15" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 46L80 52L85 46" stroke="#D36B15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Cool Sunglasses */}
    <path d="M42 64C42 58 52 56 68 56C84 56 86 64 80 78C74 88 50 88 44 80C42 76 42 68 42 64Z" fill="#18181B" />
    <path d="M118 64C118 58 108 56 92 56C76 56 74 64 80 78C86 88 110 88 116 80C118 76 118 68 118 64Z" fill="#18181B" />
    <rect x="74" y="62" width="12" height="4" fill="#18181B" />
    {/* Sunglass glare reflection */}
    <line x1="52" y1="62" x2="62" y2="76" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <line x1="98" y1="62" x2="108" y2="76" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

    {/* Nose & Smug Smile */}
    <polygon points="76,88 84,88 80,93" fill="#18181B" />
    <path d="M73 95Q80 99 80 95Q80 99 87 95" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />

    {/* Body & Paws */}
    <path d="M48 110C42 120 44 138 52 140C65 140 95 140 108 140C116 138 118 120 112 110" fill="#F49D37" stroke="#18181B" strokeWidth="4.5" />
    <ellipse cx="62" cy="115" rx="14" ry="10" fill="#FFFFFF" stroke="#18181B" strokeWidth="3.5" />
    <ellipse cx="98" cy="115" rx="14" ry="10" fill="#FFFFFF" stroke="#18181B" strokeWidth="3.5" />

    {/* Whiskers */}
    <line x1="28" y1="84" x2="42" y2="86" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="94" x2="42" y2="92" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="132" y1="84" x2="118" y2="86" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="130" y1="94" x2="118" y2="92" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 4. Shocked / Excited Doodle Ghost Mascot
export const ShockedGhost: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body */}
    <path d="M35 70C35 35 105 35 105 70C105 105 100 120 85 115C75 110 65 122 55 115C42 120 35 105 35 70Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="4.5" strokeLinejoin="round" />
    
    {/* Wide Shocked Eyes */}
    <circle cx="58" cy="65" r="7" fill="#18181B" />
    <circle cx="56" cy="63" r="2" fill="#FFFFFF" />
    <circle cx="82" cy="65" r="7" fill="#18181B" />
    <circle cx="80" cy="63" r="2" fill="#FFFFFF" />
    
    {/* Round 'O' Mouth */}
    <ellipse cx="70" cy="84" rx="6" ry="9" fill="#18181B" />

    {/* Little excited arms */}
    <path d="M38 78C26 72 24 82 32 88" stroke="#18181B" strokeWidth="4" strokeLinecap="round" />
    <path d="M102 78C114 72 116 82 108 88" stroke="#18181B" strokeWidth="4" strokeLinecap="round" />

    {/* Sparks */}
    <path d="M22 42L30 46M28 32L32 40M118 42L110 46M112 32L108 40" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 5. Crown Doodle 👑
export const DoodleCrown: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="5,24 5,8 14,16 20,4 26,16 35,8 35,24" fill="#FFC83B" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="5" cy="8" r="2" fill="#18181B" />
    <circle cx="20" cy="4" r="2" fill="#18181B" />
    <circle cx="35" cy="8" r="2" fill="#18181B" />
  </svg>
);

// 6. Paper Airplane Doodle ✈️
export const DoodlePaperPlane: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="5,24 52,6 36,44 26,30" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" strokeLinejoin="round" />
    <polygon points="26,30 52,6 30,22" fill="#E8DEFF" stroke="#18181B" strokeWidth="2" strokeLinejoin="round" />
    <path d="M18 38C12 40 8 36 10 32C12 28 8 24 4 26" stroke="#18181B" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
  </svg>
);

// 7. Megaphone Doodle 📣
export const DoodleMegaphone: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="12,16 24,10 24,30 12,24" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24,10 L38,4 L38,36 L24,30 Z" fill="#8462F6" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="8" y="16" width="4" height="8" rx="2" fill="#18181B" />
    <path d="M22,30 L18,38 L14,36 L17,28" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M42,12C45,15 45,25 42,28" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M46,8C51,13 51,27 46,32" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 8. "Good Vibes Only" badge with doodled letters
export const GoodVibesBadge: React.FC<{ className?: string }> = ({ className = "w-32" }) => (
  <div className={`relative select-none font-display text-center ${className}`}>
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-12">
      <DoodleCrown className="w-6 h-6 text-yellow-400" />
    </div>
    <span className="block text-2xl font-black text-campus-text tracking-tight rotate-[-4deg] italic">
      good
    </span>
    <span className="block text-3xl font-black text-campus-text tracking-wide rotate-[2deg] italic">
      vibes
    </span>
    <span className="block text-xl font-bold text-campus-text tracking-wider rotate-[-2deg] opacity-80">
      only ✨
    </span>
  </div>
);
