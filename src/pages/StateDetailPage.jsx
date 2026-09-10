import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Compass,
  Sparkles,
  Gamepad2,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Key,
  ScrollText
} from 'lucide-react';
import { statesData, statesList } from '../data/statesData';
import { gameOptions } from '../data/gameOptions';
import Badge from '../components/common/Badge';
import JaliPattern from '../components/common/JaliPattern';
import StateCulturalHub from '../components/exploreIndia/StateCulturalHub';
import ActivityCard from '../components/exploreIndia/ActivityCard';
import ExploreNowGame from '../components/exploreIndia/ExploreNowGame';
import QuizGame from '../components/exploreIndia/QuizGame';
import PuzzleGame from '../components/exploreIndia/PuzzleGame';
import MysteryGame from '../pages/MysteryGame';

export default function StateDetailPage() {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get('tab');
  const validTabs = ['explore', 'puzzle', 'quiz', 'mystery'];

  // Active game option tab: 'explore' | 'puzzle' | 'quiz' | 'mystery'
  const [activeTab, setActiveTab] = useState(
    validTabs.includes(urlTab) ? urlTab : 'explore'
  );
  const [modalActionState, setModalActionState] = useState(null);
  // Function to start Mystery Game: resets persisted state and opens modal
  const startMystery = () => {
    localStorage.removeItem('mysteryGameState');
    setModalActionState('mystery');
  };

  // Sync activeTab if urlTab changes
  useEffect(() => {
    if (urlTab && validTabs.includes(urlTab)) {
      setActiveTab(urlTab);
    }
  }, [urlTab]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setSearchParams({ tab: newTab });
  };

  // Scroll to top on mount or stateId change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stateId]);

  const state = statesData[stateId] || statesData['rajasthan'];

  const handleBackToMap = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('explore-india');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-navy-900 pt-28 pb-24">
      {/* Decorative Jali Lattice Background */}
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Breadcrumb & Return to Map Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={handleBackToMap}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-gold-50 border border-gold-300 text-xs font-bold text-navy-800 shadow-xs hover:shadow transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-saffron-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to India Map</span>
          </button>

          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 text-xs font-semibold text-navy-600">
            <Link to="/" className="hover:text-saffron-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <button onClick={handleBackToMap} className="hover:text-saffron-600 transition-colors">
              Explore India
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-saffron-700 font-bold">{state.name}</span>
          </div>

          {/* Quick Switch to other 4 highlighted states */}
          <div className="hidden lg:flex items-center gap-1.5 bg-white/80 backdrop-blur-xs p-1 rounded-xl border border-cream-300">
            <span className="text-[11px] font-bold text-navy-500 px-2 uppercase">Jump:</span>
            {statesList.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/state/${s.id}`)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  s.id === state.id
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-navy-700 hover:bg-gold-100/60'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* State Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/80 shadow-heritage mb-12">
          <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
            <img
              src={state.heroImage}
              alt={state.name}
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
            <div className="absolute inset-0 bg-radial from-transparent to-navy-950/40" />

            {/* Banner Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="saffron" size="md">
                  {state.region} Region • {state.capital}
                </Badge>
                <Badge variant="gold" size="md">
                  State Code: {state.mapId}
                </Badge>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-md border border-gold-400/40 text-xs font-semibold text-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Heritage Module</span>
              </div>
            </div>

            {/* Banner Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 max-w-3xl">
              <div className="flex items-baseline gap-3">
                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
                  {state.name}
                </h1>
                <span className="font-heading text-xl sm:text-3xl text-gold-300 drop-shadow-sm">
                  {state.nativeName}
                </span>
              </div>
              <p className="font-display text-base sm:text-xl text-gold-200 font-semibold tracking-wide italic">
                “{state.tagline}”
              </p>
              <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed pt-1 line-clamp-2 sm:line-clamp-none">
                {state.fullIntro}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="bg-navy-900 text-cream-100 py-3.5 px-6 border-t border-gold-400/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-gold-400 text-[10px] uppercase font-bold tracking-wider block">Heritage Sites</span>
              <span className="font-bold text-sm text-white truncate block">{state.stats.heritageSites}</span>
            </div>
            <div>
              <span className="text-gold-400 text-[10px] uppercase font-bold tracking-wider block">Folk & Classical Arts</span>
              <span className="font-bold text-sm text-white truncate block">{state.stats.folkDances}</span>
            </div>
            <div>
              <span className="text-gold-400 text-[10px] uppercase font-bold tracking-wider block">Famous Craftsmanship</span>
              <span className="font-bold text-sm text-white truncate block">{state.stats.famousCraft}</span>
            </div>
            <div>
              <span className="text-gold-400 text-[10px] uppercase font-bold tracking-wider block">Eco-Geographic Zone</span>
              <span className="font-bold text-sm text-white truncate block">{state.stats.climateZone}</span>
            </div>
          </div>
        </div>

        {/* State Cultural Hub — Introduction, Culture, History, Food, Art & Famous Places */}
        <StateCulturalHub state={state} />

        {/* 4 GAME & EXPLORATION NAVIGATION HUB */}
        <div className="space-y-8 mb-16">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-xs font-bold text-saffron-800 uppercase tracking-wider mb-2">
                <Gamepad2 className="w-3.5 h-3.5 text-saffron-600" />
                Interactive Gameplay & Exploration
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-navy-900 tracking-tight">
                Select Your Learning Journey
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-navy-600 max-w-md">
              Choose one of four specialized gameplay and exploration modes below to interact with {state.name}'s heritage.
            </p>
          </div>

          {/* 4 Navigation Cards / Tab Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gameOptions.map((opt) => (
              <ActivityCard
                key={opt.id}
                option={opt}
                isActive={activeTab === opt.id}
                onSelect={handleTabChange}
              />
            ))}
          </div>

          {/* ACTIVE TAB CONTENT DISPLAY CONTAINER */}
          <div className="bg-white rounded-3xl border-2 border-gold-300/80 shadow-heritage p-6 sm:p-8 lg:p-10 transition-all duration-300">
            
            {/* OPTION 1: EXPLORE NOW */}
            {activeTab === 'explore' && (
              <ExploreNowGame state={state} />
            )}

            {/* OPTION 2: PUZZLE GAME */}
            {activeTab === 'puzzle' && (
              <PuzzleGame state={state} />
            )}

            {/* OPTION 3: QUIZ GAME */}
            {activeTab === 'quiz' && (
              <QuizGame state={state} />
            )}

            {/* OPTION 4: MYSTERY GAME */}
            {activeTab === 'mystery' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-cream-200">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                        Option 4 • {state.games.mystery.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">
                      {state.games.mystery.title}: {state.games.mystery.subtitle}
                    </h3>
                    <p className="text-sm text-navy-600 mt-1 max-w-2xl">
                      {state.games.mystery.desc}
                    </p>
                  </div>

                  <button
                      onClick={startMystery}
                      className="px-6 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-indigo-700 to-purple-700 shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center gap-2 shrink-0"
                    >
                      <Key className="w-4 h-4" />
                      <span>{state.games.mystery.ctaText}</span>
                    </button>
                </div>

                {/* Mystery Dossier Card */}
                <div className="bg-navy-950 text-cream-50 p-6 sm:p-8 rounded-3xl border-2 border-gold-400/60 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-navy-800">
                      <div className="flex items-center gap-2 text-gold-400 font-mono text-xs">
                        <ScrollText className="w-4 h-4" />
                        <span>{state.games.mystery.caseFile}</span>
                      </div>
                      <span className="text-xs font-bold bg-indigo-900/80 text-indigo-300 px-3 py-1 rounded-full border border-indigo-700">
                        {state.games.mystery.cluesCount}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-xl text-white">
                        Mission Briefing: The Lost Heritage Relic
                      </h4>
                      <p className="text-xs sm:text-sm text-cream-200/85 leading-relaxed">
                        Historians at the Archaeological Survey have uncovered a ciphered manuscript. Its poetic riddles correspond to cardinal directions, astronomical shadows, and temple sculptures in {state.name}. As the Lead Heritage Investigator, you must decode each clue before sunset.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="bg-navy-900/80 p-3 rounded-xl border border-navy-800">
                        <span className="text-gold-400 font-bold block mb-0.5">Clue #1: The Inscription</span>
                        <span className="text-cream-300">Decipher ancient script symbols</span>
                      </div>
                      <div className="bg-navy-900/80 p-3 rounded-xl border border-navy-800">
                        <span className="text-gold-400 font-bold block mb-0.5">Clue #2: Solar Shadow</span>
                        <span className="text-cream-300">Align time with sundial spoke angles</span>
                      </div>
                      <div className="bg-navy-900/80 p-3 rounded-xl border border-navy-800">
                        <span className="text-gold-400 font-bold block mb-0.5">Clue #3: Secret Sanctum</span>
                        <span className="text-cream-300">Unlock the vault with the three sacred keys</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM NAVIGATION FOOTER STRIP */}
        <div className="mt-12 bg-white rounded-2xl border border-cream-300 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center text-saffron-700">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-navy-900">
                Ready to explore another region?
              </h4>
              <p className="text-xs text-navy-600">
                Return to the interactive India map to choose another state.
              </p>
            </div>
          </div>

          <button
            onClick={handleBackToMap}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-navy-900 bg-cream-100 hover:bg-gold-100 border border-gold-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-saffron-600" />
            <span>Back to Explore India Section</span>
          </button>
        </div>

      </div>

      {/* Interactive Gameplay Modal — Mystery only */}
      {modalActionState === 'mystery' && (
        <MysteryGame onClose={() => setModalActionState(null)} />
      )}
    </div>
  );
}
