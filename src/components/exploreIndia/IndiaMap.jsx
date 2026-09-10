import React, { useState, useRef } from 'react';
import { Compass, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { indiaMapData } from '../../data/indiaMapData';

export default function IndiaMap({
  selectedStateSlug,
  hoveredStateSlug,
  onHoverState,
  onSelectState
}) {
  const [tooltip, setTooltip] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const [recentlyClickedSlug, setRecentlyClickedSlug] = useState(null);

  const handleMouseEnter = (state, e) => {
    if (!state.selectable) return;
    if (onHoverState) onHoverState(state);
    updateTooltip(state, e);
  };

  const handleMouseMove = (state, e) => {
    if (!state.selectable) return;
    updateTooltip(state, e);
  };

  const updateTooltip = (state, e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Boundary-aware positioning to prevent clipping on mobile / container edge
    const estimatedWidth = 230;
    const posX = x + estimatedWidth > rect.width ? Math.max(10, x - estimatedWidth + 20) : x + 16;
    const posY = y < 55 ? y + 25 : y - 52;

    setTooltip({
      name: state.name,
      capital: state.capital,
      code: state.code,
      slug: state.slug,
      x: posX,
      y: posY
    });
  };

  const handleMouseLeave = () => {
    if (onHoverState) onHoverState(null);
    setTooltip(null);
  };

  const handleClick = (state) => {
    if (!state.selectable) return;
    setRecentlyClickedSlug(state.slug);
    if (onSelectState) onSelectState(state);
    setTimeout(() => {
      setRecentlyClickedSlug(null);
    }, 800);
  };

  const handleKeyDown = (e, state) => {
    if (state.selectable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick(state);
    }
  };

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.9), 1.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/4.2] sm:aspect-[4/4] max-w-[720px] mx-auto bg-gradient-to-b from-cream-100/90 via-cream-50/95 to-gold-50/40 rounded-3xl border-2 border-gold-300/70 p-3 sm:p-6 shadow-heritage overflow-hidden select-none"
    >
      {/* Decorative Cartographic Grid & Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="carto-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#BCA787" strokeWidth="0.5" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#carto-grid)" />
        </svg>
      </div>

      {/* Decorative Sea Labels */}
      <div className="absolute bottom-16 left-6 pointer-events-none hidden sm:flex flex-col items-center opacity-40 text-navy-800">
        <span className="text-[10px] font-display font-semibold tracking-widest uppercase">Arabian Sea</span>
        <span className="text-[9px] font-heading text-gold-700">सिन्धु सागर</span>
      </div>
      <div className="absolute bottom-28 right-8 pointer-events-none hidden sm:flex flex-col items-center opacity-40 text-navy-800">
        <span className="text-[10px] font-display font-semibold tracking-widest uppercase">Bay of Bengal</span>
        <span className="text-[9px] font-heading text-gold-700">वङ्ग सागर</span>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center opacity-40 text-navy-800">
        <span className="text-[10px] font-display font-semibold tracking-widest uppercase">Indian Ocean</span>
        <span className="text-[9px] font-heading text-gold-700">हिन्द महासागर</span>
      </div>

      {/* Cartographic Compass Rose (Top-Left) */}
      <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-2xl border border-gold-300/50 shadow-xs pointer-events-none">
        <Compass className="w-4 h-4 text-saffron-600 animate-spin-slow" />
        <span className="text-[10px] font-display font-bold tracking-wider text-navy-900 uppercase">
          Bharat Cartography
        </span>
      </div>

      {/* Map Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-gold-300/60 shadow-sm">
        <button
          onClick={() => handleZoom(0.2)}
          className="p-1.5 hover:bg-gold-100 rounded-lg text-navy-800 transition-colors"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => handleZoom(-0.2)}
          className="p-1.5 hover:bg-gold-100 rounded-lg text-navy-800 transition-colors"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-1.5 hover:bg-gold-100 rounded-lg text-navy-800 transition-colors"
          title="Reset View"
          aria-label="Reset View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Interactive SVG Canvas */}
      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${zoomLevel}) translate(${pan.x}px, ${pan.y}px)`
        }}
      >
        <svg
          viewBox="100 50 820 920"
          className="w-full h-full max-h-[850px] drop-shadow-md"
          role="img"
          aria-label="Interactive Map of India with selectable states"
        >
          <defs>
            {/* Radiant Glowing Gradients for Highlighted States */}
            <linearGradient id="highlight-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA040" />
              <stop offset="50%" stopColor="#FF7722" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>

            <linearGradient id="hover-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="50%" stopColor="#FF8533" />
              <stop offset="100%" stopColor="#D84315" />
            </linearGradient>

            <linearGradient id="selected-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="50%" stopColor="#FF6F00" />
              <stop offset="100%" stopColor="#BF360C" />
            </linearGradient>

            {/* Glowing Drop Shadow for Selectable States */}
            <filter id="state-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FF7722" floodOpacity="0.45" />
            </filter>

            <filter id="state-glow-strong" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#E65100" floodOpacity="0.65" />
            </filter>
          </defs>

          {/* 1. Base Layer: Non-Selectable Subtle States */}
          <g id="subtle-states">
            {indiaMapData
              .filter((s) => !s.selectable)
              .map((state) => (
                <path
                  key={state.id}
                  id={state.id}
                  d={state.d}
                  fill="#EFE8DA"
                  stroke="#D3C7B5"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="transition-colors duration-300 opacity-80 hover:opacity-90"
                >
                  <title>{state.name}</title>
                </path>
              ))}
          </g>

          {/* 2. Primary Layer: 5 Highlighted Selectable States */}
          <g id="highlighted-states">
            {indiaMapData
              .filter((s) => s.selectable)
              .map((state) => {
                const isSelected = selectedStateSlug === state.slug;
                const isHovered = hoveredStateSlug === state.slug;

                let fillVal = 'url(#highlight-grad)';
                if (isSelected) fillVal = 'url(#selected-grad)';
                else if (isHovered) fillVal = 'url(#hover-grad)';

                return (
                  <path
                    key={state.id}
                    id={state.id}
                    d={state.d}
                    fill={fillVal}
                    stroke={isSelected ? '#781E00' : isHovered ? '#8E2800' : '#A73200'}
                    strokeWidth={isSelected ? '2.4' : isHovered ? '2.2' : '1.5'}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    filter={isSelected ? 'url(#state-glow-strong)' : 'url(#state-glow)'}
                    className={`cursor-pointer transition-all duration-300 outline-none ${
                      isHovered ? 'brightness-110' : ''
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select state ${state.name}`}
                    onMouseEnter={(e) => handleMouseEnter(state, e)}
                    onMouseMove={(e) => handleMouseMove(state, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(state)}
                    onKeyDown={(e) => handleKeyDown(e, state)}
                  >
                    <title>{`${state.name} • Click to Explore`}</title>
                  </path>
                );
              })}
          </g>

          {/* 3. Interactive Centroid Pulse Badges & Pins */}
          <g id="state-pins" className="pointer-events-none">
            {indiaMapData
              .filter((s) => s.selectable && s.centroid)
              .map((state) => {
                const { x, y } = state.centroid;
                const isSelected = selectedStateSlug === state.slug;
                const isHovered = hoveredStateSlug === state.slug;
                const isRecentlyClicked = recentlyClickedSlug === state.slug;

                return (
                  <g key={`pin-${state.id}`} transform={`translate(${x}, ${y})`}>
                    {/* Active Click Radiant Ripple */}
                    {isRecentlyClicked && (
                      <circle
                        r="24"
                        fill="#FFD166"
                        opacity="0.75"
                        className="animate-ping origin-center"
                      />
                    )}

                    {/* Animated Radar Pulse Ring */}
                    <circle
                      r={isRecentlyClicked ? '20' : isHovered ? '16' : '12'}
                      fill="#FF7722"
                      opacity={isRecentlyClicked ? '0.6' : '0.35'}
                      className="animate-ping origin-center"
                    />

                    {/* Outer Glow Halo */}
                    <circle
                      r={isRecentlyClicked ? '16' : isHovered ? '14' : '10'}
                      fill={isSelected ? '#FFE082' : '#FFF3D6'}
                      stroke={isSelected ? '#BF360C' : '#FF7722'}
                      strokeWidth="2.5"
                      className="transition-all duration-200"
                    />

                    {/* Central Core Indicator */}
                    <circle
                      r={isRecentlyClicked ? '7' : isHovered ? '6' : '4.5'}
                      fill={isSelected ? '#E65100' : '#C23D00'}
                      className="transition-all duration-200"
                    />

                    {/* State Code Micro-Label Banner */}
                    <g transform="translate(0, -18)">
                      <rect
                        x="-16"
                        y="-10"
                        width="32"
                        height="14"
                        rx="4"
                        fill="#0A192F"
                        stroke="#D4AF37"
                        strokeWidth="1"
                        opacity="0.95"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="bold"
                        fill="#FAF7F2"
                        fontFamily="Cinzel, sans-serif"
                      >
                        {state.code}
                      </text>
                    </g>
                  </g>
                );
              })}
          </g>
        </svg>
      </div>

      {/* Interactive Floating State Tooltip */}
      {tooltip && (
        <div
          className="absolute z-30 pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`
          }}
        >
          <div className="bg-navy-950/95 text-cream-50 px-3 py-2 rounded-xl shadow-2xl border border-gold-400/70 backdrop-blur-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
              <span className="font-display font-bold text-sm text-gold-300">
                {tooltip.name}
              </span>
              <span className="text-xs text-cream-300/70">• {tooltip.capital}</span>
            </div>
            <div className="text-[10px] text-saffron-300 font-semibold tracking-wide mt-0.5 flex items-center gap-1">
              <span>Click to Enter State Exploration</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Interaction Hint */}
      <div className="absolute bottom-2 right-3 z-10 sm:hidden">
        <span className="text-[10px] text-navy-700/80 bg-white/85 px-2 py-0.5 rounded-full border border-gold-300/40 font-medium">
          Tap highlighted states
        </span>
      </div>
    </div>
  );
}
