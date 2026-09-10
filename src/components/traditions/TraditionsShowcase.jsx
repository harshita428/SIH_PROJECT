import React, { useState } from 'react';
import {
  Sparkles,
  Music,
  FlaskConical,
  Palette,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { traditionsData } from '../../data/traditionsData';
import Badge from '../common/Badge';
import JaliPattern from '../common/JaliPattern';

export default function TraditionsShowcase() {
  const [activeTab, setActiveTab] = useState('folkArts');

  const tabs = [
    { id: 'folkArts', label: 'Indigenous Folk Arts', icon: Palette, count: traditionsData.folkArts.length },
    { id: 'performingArts', label: 'Classical Performing Arts', icon: Music, count: traditionsData.performingArts.length },
    { id: 'ancientSciences', label: 'Ancient Sciences & STEM', icon: FlaskConical, count: traditionsData.ancientSciences.length }
  ];

  return (
    <section id="traditions" className="relative py-24 sm:py-32 bg-cream-100 overflow-hidden">
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="green" size="md">
            Living Culture & Ancient Wisdom
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            Art, Performance &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700">
              Ancient Sciences
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            Discover the living soul of India—tribal mud-wall murals, cosmic dance mudras, and mathematical treatises that reshaped global human progress.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white p-2 rounded-2xl border-2 border-gold-300/60 shadow-xs flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-navy-900 text-cream-100 shadow-md ring-2 ring-gold-400'
                      : 'text-navy-800 hover:bg-cream-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-saffron-600'}`} />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-navy-800 text-gold-300' : 'bg-cream-200 text-navy-600'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Indigenous Folk Arts */}
        {activeTab === 'folkArts' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {traditionsData.folkArts.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-heritage transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                      {art.origin}
                    </span>
                    <Badge variant="gold" size="sm">
                      {art.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy-900 group-hover:text-saffron-700 transition-colors">
                      {art.name}
                    </h3>
                    <p className="text-xs font-medium text-gold-700 mt-1">
                      Medium: {art.medium}
                    </p>
                  </div>

                  <p className="text-sm text-navy-700 leading-relaxed">
                    {art.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-cream-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Iconic Characteristics:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {art.keyElements.map((el, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-cream-100 text-xs text-navy-800 border border-cream-200"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Classical Performing Arts */}
        {activeTab === 'performingArts' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {traditionsData.performingArts.map((dance) => (
              <div
                key={dance.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cream-300 hover:border-emerald-500 shadow-sm hover:shadow-heritage transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      {dance.origin}
                    </span>
                    <Music className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy-900 group-hover:text-emerald-800 transition-colors">
                    {dance.name}
                  </h3>

                  <p className="text-sm text-navy-700 leading-relaxed">
                    {dance.significance}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-cream-200 space-y-1">
                    <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wider">
                      Distinguishing Technique:
                    </span>
                    <p className="text-xs text-navy-700 leading-relaxed">
                      {dance.feature}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-200">
                  <span className="text-xs font-bold text-navy-900 block mb-2">
                    Key Accompanying Instruments:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dance.instruments.map((inst, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-xs border border-emerald-200 font-medium"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Ancient Sciences & STEM */}
        {activeTab === 'ancientSciences' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {traditionsData.ancientSciences.map((sci) => (
              <div
                key={sci.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-heritage transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 font-mono">
                      {sci.era}
                    </span>
                    <FlaskConical className="w-5 h-5 text-gold-600" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                    {sci.name}
                  </h3>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Ancient Breakthrough:
                    </h4>
                    <p className="text-sm text-navy-700 leading-relaxed">
                      {sci.innovation}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Modern STEM Legacy:
                    </span>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {sci.modernImpact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
