import React, { useState } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  Volume2,
  VolumeX,
  CheckCircle,
  HelpCircle,
  Share2,
  Bookmark
} from 'lucide-react';
import Badge from '../common/Badge';

export default function MonumentModal({ monument, onClose }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!monument) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-cream-50 rounded-3xl border-2 border-gold-400/80 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-navy-900/80 text-cream-100 hover:bg-saffron-600 flex items-center justify-center transition-colors shadow-md focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={monument.image}
            alt={monument.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge variant="saffron" size="sm">
              {monument.state} • {monument.region} India
            </Badge>
            {monument.unesco && (
              <Badge variant="gold" size="sm">
                UNESCO World Heritage ({monument.unescoYear})
              </Badge>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-cream-100">
            <span className="text-xs font-heading text-gold-300 uppercase tracking-widest block">
              {monument.nativeName}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {monument.name}
            </h3>
            <p className="text-xs sm:text-sm text-gold-200/90 font-medium mt-1 flex items-center gap-3">
              <span>{monument.period}</span>
              <span>•</span>
              <span className="italic">{monument.architecturalStyle}</span>
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Quick Action Audio Player Bar */}
          <div className="p-3.5 rounded-2xl bg-white border border-gold-300/60 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  isPlayingAudio
                    ? 'bg-saffron-600 text-white'
                    : 'bg-saffron-100 text-saffron-700 hover:bg-saffron-200'
                }`}
              >
                {isPlayingAudio ? <Volume2 className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div>
                <div className="text-xs font-bold text-navy-900">
                  {isPlayingAudio ? 'Playing Audio Commentary (Simulated)' : 'Student Audio Guide'}
                </div>
                <div className="text-[11px] text-navy-600">
                  {isPlayingAudio ? 'Listening to architectural history...' : 'Click to listen to 2-min monument story'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl border transition-colors ${
                  isBookmarked
                    ? 'bg-gold-100 border-gold-400 text-gold-800'
                    : 'bg-cream-100 border-cream-300 text-navy-700 hover:bg-gold-50'
                }`}
                title="Save to Study Journal"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Historical Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-700">
              Civilizational Legacy & Architecture
            </h4>
            <p className="text-sm sm:text-base text-navy-800 leading-relaxed font-sans">
              {monument.fullDesc}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-600" />
              Architectural & Engineering Feats
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {monument.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white border border-cream-300 text-xs sm:text-sm text-navy-800 flex items-start gap-2.5 shadow-2xs"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Trivia Callout */}
          <div className="p-4 rounded-2xl bg-gold-50 border border-gold-300/80 space-y-1">
            <div className="text-xs font-bold text-gold-900 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-gold-700" />
              Did You Know? (Student Trivia)
            </div>
            <p className="text-xs sm:text-sm text-gold-950 leading-relaxed">
              {monument.studentTrivia}
            </p>
          </div>

          {/* Fun Fact */}
          {monument.funFact && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
              <span className="font-bold">Architectural Wonder: </span>
              {monument.funFact}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-cream-100 border-t border-cream-300 flex items-center justify-between text-xs text-navy-600">
          <span>Part of Kalachakra Heritage Registry</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-saffron-600 text-white font-bold text-xs transition-colors"
          >
            Close Explorer
          </button>
        </div>
      </div>
    </div>
  );
}
