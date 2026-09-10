import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Clock,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { curriculumTracks } from '../../data/curriculumData';
import Badge from '../common/Badge';
import JaliPattern from '../common/JaliPattern';

export default function CurriculumSection() {
  const [activeGradeIdx, setActiveGradeIdx] = useState(0);
  const track = curriculumTracks[activeGradeIdx];

  return (
    <section id="curriculum" className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden">
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="navy" size="md">
            NEP 2020 & Board Mapped
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            Curriculum Learning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-amber-600">
              Quests
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            Designed to empower CBSE, ICSE, and State Board students with experiential projects, board-exam epigraphy analysis, and interactive historical modules.
          </p>
        </div>

        {/* Grade Level Selectors */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          {curriculumTracks.map((item, idx) => {
            const isSelected = activeGradeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveGradeIdx(idx)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2.5 ${
                  isSelected
                    ? 'bg-navy-900 text-cream-100 shadow-md ring-2 ring-gold-400'
                    : 'bg-white text-navy-800 border-2 border-cream-300 hover:border-gold-300'
                }`}
              >
                <GraduationCap className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-saffron-600'}`} />
                <span>{item.grade}</span>
              </button>
            );
          })}
        </div>

        {/* Active Track Showcase Card */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold-300/80 shadow-heritage animate-in fade-in duration-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-cream-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                {track.grade}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-gold-700 font-medium mt-0.5">
                Focus: {track.focus}
              </p>
            </div>

            {/* Badge earned */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-gold-300/70 flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-700">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy-500 block">
                  Earnable Badge
                </span>
                <span className="font-display font-bold text-base text-navy-900">
                  {track.badgeTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Modules List */}
          <div className="mt-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 block">
              Core Experiential Learning Modules:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {track.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="p-5 rounded-2xl bg-cream-50 hover:bg-gold-50/50 border border-cream-200 hover:border-gold-300 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-navy-700 border border-cream-300">
                        {mod.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-gold-700">
                        +{mod.xp} XP
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-navy-900">
                      {mod.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-cream-200 text-xs text-navy-600">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-saffron-600" />
                      {mod.duration}
                    </span>
                    <span className="text-saffron-600 font-bold flex items-center gap-1 hover:underline cursor-pointer">
                      Start Track <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School Teacher / Educator Note */}
          <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Includes formative quiz sets, board question linkages & downloadable teacher slides</span>
            </div>
            <div className="text-gold-700 font-bold">
              100% Free for Government & Private Schools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
