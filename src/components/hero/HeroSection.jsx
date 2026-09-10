import React from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Landmark,
  BookOpen,
  Award,
  ChevronDown,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import KalachakraWheel from '../common/KalachakraWheel';
import JaliPattern from '../common/JaliPattern';
import HeritageSilhouettes from '../common/HeritageSilhouettes';
import Badge from '../common/Badge';

export default function HeroSection({ onStartJourney, onExploreIndia }) {
  const quickEras = [
    { name: 'Indus Valley', year: '3300 BCE' },
    { name: 'Vedic Age', year: '1500 BCE' },
    { name: 'Maurya & Gupta', year: '322 BCE' },
    { name: 'Chola Navy', year: '1010 CE' },
    { name: 'Mughal & Maratha', year: '1526 CE' },
    { name: 'Modern Bharat', year: '1947 CE' },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200">
      {/* Jali Lattice Subtle Background Pattern */}
      <JaliPattern variant="light" opacity="opacity-15" />

      {/* Decorative Golden Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-gold-300/20 via-saffron-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-300/80 shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-ping" />
              <span className="text-xs font-bold tracking-widest uppercase text-navy-900 font-display">
                KALACHAKRA
              </span>
              <span className="text-gold-400">•</span>
              <span className="text-xs font-semibold text-saffron-700">
                National Educational Heritage Platform
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-navy-900 tracking-tight leading-[1.1]">
                Discover India{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-gold-600">
                  Through Time
                  {/* Decorative underline curve */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-gold-400/70"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C58 3 148 2 298 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Official Tagline */}
            <p className="font-display text-xl sm:text-2xl text-navy-800 font-semibold tracking-wide border-l-0 lg:border-l-4 border-gold-400 lg:pl-4 italic">
              “Explore India. Experience History. Shape the Future.”
            </p>

            {/* Platform Sub-description */}
            <p className="text-base sm:text-lg text-navy-700/85 max-w-2xl leading-relaxed font-normal">
              An interactive, curriculum-aligned EdTech journey through 5,000 years of civilization.
              Traverse ancient cities, monolithic temple wonders, classical arts, and timeless scientific breakthroughs designed specifically for modern students.
            </p>

            {/* Dual CTAs required by user */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Button 1: Start Your Journey */}
              <button
                onClick={onStartJourney}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-600 shadow-lg shadow-saffron-600/25 hover:shadow-saffron-glow hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Explore India */}
              <button
                onClick={onExploreIndia}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-base text-navy-900 bg-white hover:bg-gold-50/80 border-2 border-gold-400/80 hover:border-gold-500 shadow-sm hover:shadow-md hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-2.5"
              >
                <Compass className="w-5 h-5 text-saffron-600" />
                <span>Explore India</span>
              </button>
            </div>

            {/* Trust Badges for EdTech Credibility */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-navy-700 font-medium">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NEP 2020 Pedagogical Framework</span>
              </div>
              <div className="flex items-center gap-1.5 text-navy-700">
                <GraduationCap className="w-4 h-4 text-saffron-600" />
                <span>CBSE & ICSE Aligned Quests</span>
              </div>
              <div className="flex items-center gap-1.5 text-gold-700">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Verified by Heritage Historians</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - The Great Kalachakra Cosmic Wheel */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Outer Golden Concentric Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/50 animate-spin-reverse-slow" />
              
              {/* The Master Kalachakra Wheel SVG */}
              <KalachakraWheel size={390} spin={true} glow={true} opacity="opacity-95" />

              {/* Floating Educational Micro-Cards */}
              {/* Card 1: Konark Sundial */}
              <div className="absolute -top-3 -right-2 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gold-300/80 shadow-heritage animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-saffron-100 flex items-center justify-center text-saffron-700">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Konark Sun Chariot</div>
                    <div className="text-[10px] text-saffron-600 font-semibold">24 Solar Sundial Wheels</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Ancient Mathematics */}
              <div
                className="absolute -bottom-2 -left-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gold-300/80 shadow-heritage animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Invention of Zero</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">Aryabhata & Brahmagupta</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Center Badge */}
              <div className="absolute z-10 text-center bg-navy-900/90 backdrop-blur-md text-cream-50 px-4 py-2.5 rounded-xl border border-gold-400 shadow-xl pointer-events-auto">
                <div className="font-heading text-xs text-gold-300 tracking-wider">कालचक्र</div>
                <div className="font-display text-sm font-bold tracking-widest text-cream-100">THE WHEEL OF TIME</div>
                <div className="text-[9px] text-saffron-400 font-medium tracking-wide mt-0.5">5,000 BCE → TODAY</div>
              </div>
            </div>

            {/* Quick Era Jump Navigation Bar */}
            <div className="mt-8 w-full max-w-md bg-white/85 backdrop-blur-md p-2 rounded-2xl border border-gold-300/60 shadow-xs">
              <div className="text-[11px] font-bold text-navy-700/80 uppercase tracking-wider px-2 mb-1.5 flex items-center justify-between">
                <span>Quick Time Travel Jump</span>
                <span className="text-saffron-600 text-[10px]">Click any era</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center">
                {quickEras.map((era) => (
                  <button
                    key={era.name}
                    onClick={onStartJourney}
                    className="p-1.5 rounded-lg bg-cream-100 hover:bg-saffron-50 hover:text-saffron-700 border border-transparent hover:border-saffron-300 transition-all text-left group"
                  >
                    <div className="text-[11px] font-semibold text-navy-900 group-hover:text-saffron-700 truncate">
                      {era.name}
                    </div>
                    <div className="text-[9px] text-gold-700 font-mono">{era.year}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indian Architecture Silhouettes Anchoring the Hero base */}
      <div className="relative mt-8 sm:mt-12">
        <HeritageSilhouettes opacity="opacity-20" color="#0A192F" />
      </div>
    </section>
  );
}
