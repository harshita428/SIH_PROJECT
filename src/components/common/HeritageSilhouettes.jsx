import React from 'react';

export default function HeritageSilhouettes({ className = '', color = '#0A192F', opacity = 'opacity-15' }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${opacity} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-28"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Baseline ground */}
        <rect x="0" y="116" width="1200" height="4" />

        {/* 1. Sanchi Stupa (left) */}
        <path d="M 40,116 L 40,95 C 40,65 110,65 110,95 L 110,116 Z" />
        <rect x="68" y="55" width="14" height="10" />
        <line x1="75" y1="55" x2="75" y2="40" stroke={color} strokeWidth="2" />
        <ellipse cx="75" cy="42" rx="8" ry="2" />
        <ellipse cx="75" cy="46" rx="6" ry="2" />

        {/* 2. Qutub Minar (fluted tower with balconies) */}
        <polygon points="175,116 195,116 190,20 180,20" />
        <rect x="177" y="50" width="16" height="4" rx="1" />
        <rect x="178" y="78" width="14" height="4" rx="1" />
        <rect x="180" y="100" width="10" height="3" rx="1" />
        <polygon points="182,20 188,20 185,12" />

        {/* 3. South Indian Temple Gopuram / Vimana (Brihadisvara inspired stepped pyramid) */}
        <polygon points="260,116 340,116 325,32 275,32" />
        <rect x="270" y="42" width="60" height="4" />
        <rect x="274" y="56" width="52" height="4" />
        <rect x="278" y="72" width="44" height="4" />
        <rect x="282" y="88" width="36" height="4" />
        <rect x="288" y="102" width="24" height="4" />
        {/* Kalasam finials */}
        <path d="M 285,32 C 285,18 315,18 315,32 Z" />
        <circle cx="300" cy="14" r="4" />
        <line x1="300" y1="10" x2="300" y2="4" stroke={color} strokeWidth="2" />

        {/* 4. Rajput Jharokha & Fort Bastion */}
        <rect x="420" y="75" width="70" height="41" />
        <path d="M 430,75 C 430,55 480,55 480,75 Z" />
        <rect x="445" y="42" width="10" height="13" />
        <circle cx="450" cy="38" r="4" />
        {/* Battlements */}
        <rect x="420" y="70" width="10" height="6" />
        <rect x="440" y="70" width="10" height="6" />
        <rect x="460" y="70" width="10" height="6" />
        <rect x="480" y="70" width="10" height="6" />

        {/* 5. Konark Chariot Sun Wheel silhouette (Center-Left) */}
        <circle cx="560" cy="76" r="38" fill="none" stroke={color} strokeWidth="3" />
        <circle cx="560" cy="76" r="28" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="560" cy="76" r="10" fill={color} />
        {/* Radiating wheel spokes */}
        <line x1="560" y1="38" x2="560" y2="114" stroke={color} strokeWidth="2" />
        <line x1="522" y1="76" x2="598" y2="76" stroke={color} strokeWidth="2" />
        <line x1="533" y1="49" x2="587" y2="103" stroke={color} strokeWidth="1.5" />
        <line x1="533" y1="103" x2="587" y2="49" stroke={color} strokeWidth="1.5" />

        {/* 6. Grand Dome & Minarets (Indo-Islamic symmetry) */}
        {/* Left Minaret */}
        <polygon points="670,116 678,116 676,28 672,28" />
        <circle cx="674" cy="24" r="3" />
        <path d="M 672,24 L 674,18 L 676,24 Z" />
        {/* Central Dome */}
        <rect x="696" y="80" width="68" height="36" />
        <path d="M 700,80 C 700,40 760,40 760,80 Z" />
        <line x1="730" y1="40" x2="730" y2="25" stroke={color} strokeWidth="2" />
        <circle cx="730" cy="22" r="3" />
        {/* Arch portal */}
        <path d="M 718,116 L 718,94 C 718,84 742,84 742,94 L 742,116 Z" fill="#FAF7F2" />
        {/* Right Minaret */}
        <polygon points="782,116 790,116 788,28 784,28" />
        <circle cx="786" cy="24" r="3" />
        <path d="M 784,24 L 786,18 L 788,24 Z" />

        {/* 7. Nalanda Stupa & Buddhist Vihara niches */}
        <polygon points="860,116 930,116 915,60 875,60" />
        <rect x="880" y="45" width="30" height="15" rx="2" />
        <path d="M 885,45 C 885,30 905,30 905,45 Z" />
        <circle cx="895" cy="25" r="3" />

        {/* 8. India Gate / Buland Darwaza Monumental Gateway */}
        <rect x="990" y="40" width="80" height="76" />
        <rect x="980" y="34" width="100" height="8" rx="2" />
        {/* Grand Arch */}
        <path d="M 1010,116 L 1010,75 C 1010,55 1050,55 1050,75 L 1050,116 Z" fill="#FAF7F2" />
        <rect x="1005" y="45" width="50" height="5" fill="#FAF7F2" opacity="0.6" />

        {/* 9. Mountain Citadel / Maratha Fort Ramparts */}
        <path d="M 1110,116 L 1110,85 L 1125,85 L 1125,75 L 1140,75 L 1140,65 L 1170,65 L 1170,75 L 1185,75 L 1185,85 L 1200,85 L 1200,116 Z" />
        <line x1="1155" y1="65" x2="1155" y2="48" stroke={color} strokeWidth="2" />
        <polygon points="1155,48 1170,54 1155,60" fill="#E65100" />
      </svg>
    </div>
  );
}
