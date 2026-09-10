import React from 'react';

export default function KalachakraWheel({
  size = 280,
  className = '',
  spin = true,
  glow = true,
  opacity = 'opacity-90',
  showSpokes = true
}) {
  // 24 spokes representing 24 fortnights / 24 hours of cosmic cycle
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);
  // 12 lotus petals
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient background aura */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-saffron-500/20 via-gold-400/20 to-transparent blur-2xl transform scale-110"
        />
      )}

      <svg
        viewBox="0 0 400 400"
        className={`w-full h-full transform-gpu ${spin ? 'animate-spin-slow' : ''} ${opacity}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4E5B1" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B48A18" />
            <stop offset="100%" stopColor="#F4E5B1" />
          </linearGradient>

          <linearGradient id="saffronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9933" />
            <stop offset="60%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#B43800" />
          </linearGradient>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Sacred Ring with beaded perimeter */}
        <circle cx="200" cy="200" r="190" stroke="url(#goldGradient)" strokeWidth="3" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="182" stroke="url(#saffronGradient)" strokeWidth="4" />
        <circle cx="200" cy="200" r="172" stroke="url(#goldGradient)" strokeWidth="1.5" />

        {/* Decorative Lotus Petals */}
        <g stroke="url(#goldGradient)" strokeWidth="2" fill="none">
          {petals.map((angle) => (
            <path
              key={`petal-${angle}`}
              d="M 200,28 C 188,80 188,120 200,150 C 212,120 212,80 200,28 Z"
              transform={`rotate(${angle} 200 200)`}
              fill="rgba(212, 175, 55, 0.06)"
            />
          ))}
        </g>

        {/* Mid-tier concentric ring */}
        <circle cx="200" cy="200" r="148" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="6 3" />
        <circle cx="200" cy="200" r="140" stroke="url(#saffronGradient)" strokeWidth="2.5" />
        <circle cx="200" cy="200" r="110" stroke="url(#goldGradient)" strokeWidth="1.5" />

        {/* 24 Radiating Konark / Ashoka Chakra Spokes */}
        {showSpokes && (
          <g stroke="url(#saffronGradient)" strokeWidth="2" strokeLinecap="round">
            {spokes.map((angle) => (
              <line
                key={`spoke-${angle}`}
                x1="200"
                y1="200"
                x2={200 + 138 * Math.cos((angle * Math.PI) / 180)}
                y2={200 + 138 * Math.sin((angle * Math.PI) / 180)}
                strokeOpacity="0.85"
              />
            ))}
          </g>
        )}

        {/* Mid-spoke decorative diamond ornaments */}
        {spokes.filter((_, i) => i % 2 === 0).map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 125 * Math.cos(rad);
          const cy = 200 + 125 * Math.sin(rad);
          return (
            <circle
              key={`point-${angle}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="#D4AF37"
              stroke="#0A192F"
              strokeWidth="1"
            />
          );
        })}

        {/* Inner Hub Ring */}
        <circle cx="200" cy="200" r="65" stroke="url(#goldGradient)" strokeWidth="3" />
        <circle cx="200" cy="200" r="58" fill="#0A192F" stroke="url(#saffronGradient)" strokeWidth="2" />
        <circle cx="200" cy="200" r="42" stroke="url(#goldGradient)" strokeWidth="1.5" strokeDasharray="2 3" />

        {/* Central Bindu (The timeless center point) */}
        <circle cx="200" cy="200" r="24" fill="url(#saffronGradient)" />
        <circle cx="200" cy="200" r="12" fill="#D4AF37" />
        <circle cx="200" cy="200" r="5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
