import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

export default function StatePreviewCard({
  state,
  allStates,
  onSelectState,
  onEnterExploration
}) {
  if (!state) return null;

  return (
    <div className="bg-white/95 rounded-3xl border-2 border-gold-300/80 p-6 shadow-heritage flex flex-col justify-between h-full backdrop-blur-md transition-all duration-300">
      {/* Quick State Selector Pills */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-cream-200">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-500 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-saffron-600" />
            Highlighted States (5):
          </span>
          <span className="text-[11px] font-semibold text-gold-700 bg-gold-100/70 px-2 py-0.5 rounded-full">
            Interactive
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {allStates.map((s) => {
            const isActive = s.id === state.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectState(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron-600 to-amber-600 text-white shadow-sm scale-102'
                    : 'bg-cream-100 text-navy-800 hover:bg-gold-100 hover:text-saffron-700 border border-cream-300/70'
                }`}
              >
                <span>{s.name}</span>
                {isActive && <Sparkles className="w-3 h-3 text-gold-200" />}
              </button>
            );
          })}
        </div>

        {/* State Visual Card */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5 border border-gold-300/60 shadow-sm group">
          <img
            src={state.heroImage}
            alt={state.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge variant="saffron" size="sm">
              {state.region} India
            </Badge>
            <Badge variant="gold" size="sm">
              {state.capital}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="flex items-baseline gap-2">
              <h3 className="font-display font-black text-2xl text-white tracking-wide">
                {state.name}
              </h3>
              <span className="text-sm font-heading text-gold-300">
                {state.nativeName}
              </span>
            </div>
            <p className="text-xs text-cream-200/90 line-clamp-1 mt-0.5">
              {state.tagline}
            </p>
          </div>
        </div>

        {/* State Cultural Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
          <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
            <span className="text-[10px] uppercase font-bold text-navy-500 block">Heritage</span>
            <span className="font-bold text-navy-900 truncate block mt-0.5">{state.stats.heritageSites}</span>
          </div>
          <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
            <span className="text-[10px] uppercase font-bold text-navy-500 block">Classical Arts</span>
            <span className="font-bold text-navy-900 truncate block mt-0.5">{state.stats.folkDances}</span>
          </div>
          <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
            <span className="text-[10px] uppercase font-bold text-navy-500 block">Artisan Craft</span>
            <span className="font-bold text-navy-900 truncate block mt-0.5">{state.stats.famousCraft}</span>
          </div>
          <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
            <span className="text-[10px] uppercase font-bold text-navy-500 block">Geography</span>
            <span className="font-bold text-navy-900 truncate block mt-0.5">{state.stats.climateZone}</span>
          </div>
        </div>

        {/* State Short Description */}
        <p className="text-xs sm:text-sm text-navy-700/85 leading-relaxed mb-6 line-clamp-3">
          {state.shortIntro}
        </p>
      </div>

      {/* 4 Games Quick Access Preview Pills */}
      <div>
        <div className="bg-gold-50/70 p-3 rounded-2xl border border-gold-200/80 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-800 block mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-saffron-600" />
            4 Dedicated Quests & Game Modes:
          </span>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-navy-800">
            <button
              onClick={() => onEnterExploration(state, 'explore')}
              className="flex items-center justify-between p-2 rounded-xl bg-white/90 hover:bg-white border border-gold-200/80 hover:border-saffron-400 hover:text-saffron-700 transition-all text-left shadow-xs group"
              title="Launch Explore Now Mode"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-saffron-500 shrink-0" />
                <span>1. Explore Now</span>
              </span>
              <ArrowRight className="w-3 h-3 text-gold-500 group-hover:translate-x-0.5 group-hover:text-saffron-600 transition-transform shrink-0" />
            </button>
            <button
              onClick={() => onEnterExploration(state, 'puzzle')}
              className="flex items-center justify-between p-2 rounded-xl bg-white/90 hover:bg-white border border-gold-200/80 hover:border-amber-400 hover:text-amber-700 transition-all text-left shadow-xs group"
              title="Launch Puzzle Game Mode"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>2. Puzzle Game</span>
              </span>
              <ArrowRight className="w-3 h-3 text-gold-500 group-hover:translate-x-0.5 group-hover:text-amber-600 transition-transform shrink-0" />
            </button>
            <button
              onClick={() => onEnterExploration(state, 'quiz')}
              className="flex items-center justify-between p-2 rounded-xl bg-white/90 hover:bg-white border border-gold-200/80 hover:border-emerald-400 hover:text-emerald-700 transition-all text-left shadow-xs group"
              title="Launch Quiz Game Mode"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span>3. Quiz Game</span>
              </span>
              <ArrowRight className="w-3 h-3 text-gold-500 group-hover:translate-x-0.5 group-hover:text-emerald-600 transition-transform shrink-0" />
            </button>
            <button
              onClick={() => onEnterExploration(state, 'mystery')}
              className="flex items-center justify-between p-2 rounded-xl bg-white/90 hover:bg-white border border-gold-200/80 hover:border-indigo-400 hover:text-indigo-700 transition-all text-left shadow-xs group"
              title="Launch Mystery Game Mode"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                <span>4. Mystery Game</span>
              </span>
              <ArrowRight className="w-3 h-3 text-gold-500 group-hover:translate-x-0.5 group-hover:text-indigo-600 transition-transform shrink-0" />
            </button>
          </div>
        </div>

        {/* Enter State Exploration Page CTA */}
        <button
          onClick={() => onEnterExploration(state)}
          className="w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-600 shadow-md shadow-saffron-600/20 hover:shadow-saffron-glow hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Enter {state.name} Exploration</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
