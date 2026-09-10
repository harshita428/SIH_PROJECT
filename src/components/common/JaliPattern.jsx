import React from 'react';

export default function JaliPattern({ className = '', variant = 'light', opacity = 'opacity-20' }) {
  const strokeColor = variant === 'dark' ? '#D4AF37' : '#C59B27';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${opacity} ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`jali-pattern-${variant}`} width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Indian 8-pointed star & interlocking octagon lattice */}
            <path
              d="M20 0 L40 20 L20 40 L0 20 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.8"
            />
            <circle cx="20" cy="20" r="4" fill="none" stroke={strokeColor} strokeWidth="0.8" />
            <path
              d="M0 0 L10 10 M30 10 L40 0 M40 40 L30 30 M10 30 L0 40"
              stroke={strokeColor}
              strokeWidth="0.8"
            />
            <circle cx="0" cy="0" r="2" fill={strokeColor} />
            <circle cx="40" cy="0" r="2" fill={strokeColor} />
            <circle cx="40" cy="40" r="2" fill={strokeColor} />
            <circle cx="0" cy="40" r="2" fill={strokeColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#jali-pattern-${variant})`} />
      </svg>
    </div>
  );
}
