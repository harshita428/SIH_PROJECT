import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Flame,
  Award
} from 'lucide-react';
import { erasData } from '../../data/erasData';
import KalachakraWheel from '../common/KalachakraWheel';
import Badge from '../common/Badge';
import JaliPattern from '../common/JaliPattern';

export default function EraTimeWheel({ selectedEraId, onSelectEra }) {
  const [currentIdx, setCurrentIdx] = useState(
    selectedEraId ? erasData.findIndex((e) => e.id === selectedEraId) : 0
  );
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const era = erasData[currentIdx] || erasData[0];

  const handleEraChange = (idx) => {
    setCurrentIdx(idx);
    setSelectedQuizAnswer(null);
    setIsQuizSubmitted(false);
    onSelectEra && onSelectEra(erasData[idx].id);
  };

  const handleQuizSubmit = (optIdx) => {
    if (isQuizSubmitted) return;
    setSelectedQuizAnswer(optIdx);
    setIsQuizSubmitted(true);
  };

  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-cream-100 overflow-hidden">
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="saffron" size="md">
            Interactive Timeline Wheel
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            Journey Across the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-gold-600">
              Wheel of Time
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            Click any era on the wheel or timeline to step into the cities, architecture, and inventions that defined the epoch.
          </p>
        </div>

        {/* Horizontal Era Navigation Strip / Circular Wheel Nodes */}
        <div className="mt-12 bg-white rounded-3xl p-3 sm:p-4 border-2 border-gold-300/70 shadow-heritage">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {erasData.map((item, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleEraChange(idx)}
                  className={`flex-1 min-w-[150px] p-3 sm:p-4 rounded-2xl text-left transition-all relative ${
                    isActive
                      ? 'bg-gradient-to-r from-navy-900 to-navy-950 text-cream-100 shadow-md ring-2 ring-gold-400'
                      : 'hover:bg-cream-100 text-navy-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-gold-400' : 'text-saffron-600'
                      }`}
                    >
                      Era {idx + 1}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-300'
                          : 'bg-cream-200 text-navy-600'
                      }`}
                    >
                      {item.shortEra}
                    </span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base mt-1 truncate">
                    {item.name}
                  </div>
                  <div
                    className={`text-xs truncate ${
                      isActive ? 'text-cream-300/80' : 'text-navy-500'
                    }`}
                  >
                    {item.hindiName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Era Interactive Stage */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Era Visual, Story & Sites */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-2 border-gold-300/60 shadow-heritage flex flex-col justify-between">
            {/* Visual Cover Banner with Overlay */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={era.coverImage}
                alt={era.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="saffron" size="sm">
                  {era.period}
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-cream-100">
                <span className="text-xs font-heading text-gold-300 uppercase tracking-wider block">
                  {era.hindiName}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                  {era.name}
                </h3>
                <p className="text-xs sm:text-sm text-gold-200/90 font-medium italic mt-1">
                  “{era.tagline}”
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                {era.description}
              </p>

              {/* Key Innovations */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-saffron-600" />
                  Key Civilizational Breakthroughs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {era.keyInnovations.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-cream-50 border border-cream-200 text-xs sm:text-sm text-navy-800 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Iconic Archaeological Sites */}
              <div className="space-y-2 pt-2 border-t border-cream-200">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  Major Excavation & Heritage Hubs
                </span>
                <div className="flex flex-wrap gap-2">
                  {era.iconicSites.map((site) => (
                    <span
                      key={site}
                      className="px-3 py-1 rounded-lg bg-cream-100 border border-gold-200 text-xs font-semibold text-navy-800"
                    >
                      {site}
                    </span>
                  ))}
                </div>
              </div>

              {/* Student Trivia Callout */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Student Curiosity Box
                  </div>
                  <p className="text-xs text-amber-900/90 mt-0.5 leading-relaxed">
                    {era.trivia}
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper Footer Controls */}
            <div className="px-6 py-4 bg-cream-50 border-t border-cream-200 flex items-center justify-between">
              <button
                disabled={currentIdx === 0}
                onClick={() => handleEraChange(Math.max(0, currentIdx - 1))}
                className="flex items-center gap-1 text-xs font-bold text-navy-700 disabled:opacity-40 hover:text-saffron-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Era</span>
              </button>
              <span className="text-xs font-mono text-navy-500">
                {currentIdx + 1} of {erasData.length}
              </span>
              <button
                disabled={currentIdx === erasData.length - 1}
                onClick={() => handleEraChange(Math.min(erasData.length - 1, currentIdx + 1))}
                className="flex items-center gap-1 text-xs font-bold text-navy-700 disabled:opacity-40 hover:text-saffron-600 transition-colors"
              >
                <span>Next Era</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Knowledge Challenge & Badge Quest */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Gamified Era Mini-Quiz Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-300/80 shadow-heritage flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200">
                    <Award className="w-3.5 h-3.5 text-saffron-600" />
                    Era Checkpoint Quiz
                  </span>
                  <span className="text-xs font-mono font-bold text-gold-700">+50 XP</span>
                </div>

                <h4 className="font-display text-lg font-bold text-navy-900 leading-snug">
                  {era.quiz.question}
                </h4>

                {/* Options */}
                <div className="mt-5 space-y-2.5">
                  {era.quiz.options.map((opt, optIdx) => {
                    const isSelected = selectedQuizAnswer === optIdx;
                    const isCorrect = era.quiz.correct === optIdx;
                    
                    let btnStyle = 'bg-cream-50 border-cream-300 text-navy-800 hover:border-gold-400 hover:bg-gold-50/50';
                    if (isQuizSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelected) {
                        btnStyle = 'bg-red-50 border-red-400 text-red-900';
                      } else {
                        btnStyle = 'bg-cream-50/50 border-cream-200 text-navy-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isQuizSubmitted}
                        onClick={() => handleQuizSubmit(optIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isQuizSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isQuizSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {isQuizSubmitted && (
                  <div
                    className={`mt-4 p-4 rounded-2xl text-xs sm:text-sm animate-in fade-in duration-200 border ${
                      selectedQuizAnswer === era.quiz.correct
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                        : 'bg-amber-50 border-amber-300 text-amber-900'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      {selectedQuizAnswer === era.quiz.correct ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Correct! +50 XP Earned</span>
                        </>
                      ) : (
                        <>
                          <HelpCircle className="w-4 h-4 text-amber-600" />
                          <span>Good Attempt! Here is the insight:</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed">{era.quiz.explanation}</p>
                  </div>
                )}
              </div>

              {!isQuizSubmitted && (
                <p className="text-xs text-navy-500 mt-4 text-center">
                  Select an option to test your understanding of this era
                </p>
              )}
            </div>

            {/* Quick Time Wheel Decorative Widget */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-6 border-2 border-gold-400/40 text-cream-100 flex items-center justify-between relative overflow-hidden">
              <div className="space-y-1 relative z-10">
                <span className="text-[10px] font-heading text-gold-400 uppercase tracking-widest">
                  Wheel Spoke Position
                </span>
                <div className="font-display font-bold text-lg text-white">
                  Spoke {currentIdx + 1} of 6
                </div>
                <p className="text-xs text-cream-300/80 max-w-[200px]">
                  Each spoke reflects an epoch of cultural synthesis and architectural wonder.
                </p>
              </div>
              <div className="relative z-10">
                <KalachakraWheel size={84} spin={true} glow={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
