import React from 'react';
import { Compass, Sparkles, ArrowRight, Award, Flame } from 'lucide-react';
import KalachakraWheel from '../common/KalachakraWheel';
import JaliPattern from '../common/JaliPattern';

export default function StudentQuestCTA({ onStartJourney }) {
  return (
    <section className="relative py-20 sm:py-28 bg-cream-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 border-2 border-gold-400 shadow-2xl overflow-hidden text-cream-100">
          {/* Subtle Jali Background */}
          <JaliPattern variant="dark" opacity="opacity-20" />

          {/* Golden Ambient Glow and Wheel background */}
          <div className="absolute -right-20 -top-20 opacity-20 pointer-events-none">
            <KalachakraWheel size={450} spin={true} glow={true} />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 border border-saffron-400/40 text-saffron-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>Begin Your Student Heritage Odyssey</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready to Discover the Secrets of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-amber-400 to-gold-400">
                Timeless Bharat?
              </span>
            </h2>

            <p className="text-cream-200/85 text-sm sm:text-base leading-relaxed">
              Step into the world's oldest living civilization. Earn scholar ranks, unlock architectural 3D secrets, and experience history that shapes tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartJourney}
                className="px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-600 shadow-lg shadow-saffron-600/30 hover:shadow-saffron-glow hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <Compass className="w-5 h-5" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#curriculum"
                className="px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-cream-100 bg-white/10 hover:bg-white/20 border border-gold-400/40 hover:border-gold-400 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Award className="w-5 h-5 text-gold-400" />
                <span>View School Quests</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-cream-300/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Instant access • No fee required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-saffron-500"></span>
                Aligned with NCERT & NEP 2020
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                50,000+ Active Explorers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
