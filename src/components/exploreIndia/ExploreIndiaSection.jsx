import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Gamepad2 } from 'lucide-react';
import JaliPattern from '../common/JaliPattern';
import IndiaMap from './IndiaMap';
import StatePreviewCard from './StatePreviewCard';
import { statesData, statesList } from '../../data/statesData';

export default function ExploreIndiaSection() {
  const navigate = useNavigate();
  const [selectedStateSlug, setSelectedStateSlug] = useState('rajasthan');
  const [hoveredStateSlug, setHoveredStateSlug] = useState(null);

  const [navigatingState, setNavigatingState] = useState(null);

  const currentState = statesData[selectedStateSlug] || statesList[0];

  const handleStateClick = (state) => {
    setSelectedStateSlug(state.slug);
    setNavigatingState(state);
    setTimeout(() => {
      navigate(`/state/${state.slug}`);
    }, 280);
  };

  const handleSelectFromPreview = (state) => {
    setSelectedStateSlug(state.id);
  };

  const handleEnterExploration = (state, tab = 'explore') => {
    navigate(`/state/${state.id}?tab=${tab}`);
  };

  const handleHoverState = (state) => {
    if (state) {
      setHoveredStateSlug(state.slug);
      // Also update selected state for preview card
      if (statesData[state.slug]) {
        setSelectedStateSlug(state.slug);
      }
    } else {
      setHoveredStateSlug(null);
    }
  };

  return (
    <section id="explore-india" className="relative py-24 sm:py-32 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 overflow-hidden border-t-2 border-gold-300/40">
      {/* Decorative Jali Lattice Texture */}
      <JaliPattern variant="light" opacity="opacity-15" />

      {/* Ambient Decorative Lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-gold-300/90 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-saffron-500 animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase text-navy-900 font-display">
              भारत दर्शनम्
            </span>
            <span className="text-gold-400">•</span>
            <span className="text-xs font-semibold text-saffron-700">
              Interactive State Cartography
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            Explore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-gold-600">
              India
            </span>
          </h2>

          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed font-normal">
            Traverse India's geographic and cultural tapestry. Select one of the highlighted states below to explore living heritage, monolithic architectures, and four custom learning quests.
          </p>

          {/* Quick instructions badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-navy-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-saffron-500 inline-block" />
              5 Highlighted Focus States
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 font-medium">
              <Gamepad2 className="w-3.5 h-3.5 text-saffron-600" />
              4 Quests & Games Per State
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              NEP 2020 Pedagogical Mapping
            </span>
          </div>
        </div>

        {/* Dual Column Layout: Interactive Map + Spotlight Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left / Center Column: Interactive India Map */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <IndiaMap
              selectedStateSlug={selectedStateSlug}
              hoveredStateSlug={hoveredStateSlug}
              onHoverState={handleHoverState}
              onSelectState={handleStateClick}
            />
          </div>

          {/* Right Column: State Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col">
            <StatePreviewCard
              state={currentState}
              allStates={statesList}
              onSelectState={handleSelectFromPreview}
              onEnterExploration={handleEnterExploration}
            />
          </div>
        </div>

        {/* 5 States Quick Cards Grid (Below the Map for fast scanning) */}
        <div className="mt-16 pt-12 border-t border-gold-300/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-navy-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-saffron-600" />
                Featured States Directory
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 mt-1">
                Choose any state to launch its dedicated exploration page, puzzles, and quizzes
              </p>
            </div>
            <span className="text-xs font-semibold text-gold-700 bg-white px-3 py-1.5 rounded-full border border-gold-300/60 shadow-xs">
              5 Active State Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {statesList.map((state, idx) => (
              <div
                key={state.id}
                onClick={() => navigate(`/state/${state.id}`)}
                className="group cursor-pointer bg-white rounded-2xl border-2 border-cream-300/80 hover:border-saffron-500 p-3.5 shadow-xs hover:shadow-heritage-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
                    <img
                      src={state.heroImage}
                      alt={state.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-navy-900/80 text-[10px] font-bold text-gold-300 font-mono">
                      0{idx + 1}
                    </span>
                    <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white">
                      {state.capital}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-display font-bold text-base text-navy-900 group-hover:text-saffron-600 transition-colors">
                        {state.name}
                      </h4>
                      <span className="text-xs font-heading text-gold-700">
                        {state.nativeName}
                      </span>
                    </div>
                    <p className="text-[11px] text-navy-600 line-clamp-2 leading-relaxed">
                      {state.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-cream-200 flex items-center justify-between text-xs font-semibold text-saffron-700 group-hover:text-saffron-600">
                  <span>Explore 4 Quests</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Visual Navigation Feedback Toast */}
      {navigatingState && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200 pointer-events-none">
          <div className="bg-navy-950/95 text-cream-50 px-5 py-3 rounded-2xl shadow-2xl border-2 border-gold-400/80 backdrop-blur-md flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron-500 animate-ping" />
            <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider font-display">
              Selected:
            </span>
            <span className="font-display font-bold text-sm text-white">
              {navigatingState.name}
            </span>
            <span className="text-xs text-cream-300/80">• Opening Exploration Hub...</span>
          </div>
        </div>
      )}
    </section>
  );
}
