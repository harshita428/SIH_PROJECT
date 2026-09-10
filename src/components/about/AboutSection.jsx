import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  Quote,
  ArrowUpRight
} from 'lucide-react';
import KalachakraWheel from '../common/KalachakraWheel';
import JaliPattern from '../common/JaliPattern';
import Badge from '../common/Badge';

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'chronology',
      sanskrit: 'कालक्रम दर्शन',
      title: 'Chronological Immersion',
      subtitle: 'Living Timelines, Not Rote Dates',
      description: 'Students often find history dry when presented as endless memorized dates. Kalachakra shifts pedagogy from rote facts to causal, living narrative arcs where every era connects seamlessly to the next.',
      takeaways: [
        'Explore causes and effects of empire shifts',
        'Interactive 3D timeline wheel navigation',
        'Micro-stories of everyday citizens and builders'
      ],
      icon: Compass,
      color: 'saffron'
    },
    {
      id: 'culture',
      sanskrit: 'संस्कृति एवं कला',
      title: 'Living Traditions & Arts',
      subtitle: 'Connecting Past Crafts with Modern Artisans',
      description: 'Indian culture is not confined to glass museum cases. We celebrate centuries-old art traditions like Madhubani, Warli, and Tanjore paintings alongside classical dances and regional music traditions.',
      takeaways: [
        'Interactive folk art workshops & color extraction guides',
        'Audio guide library of Indian classical ragas & instruments',
        'Direct spotlights on master craftspersons keeping heritage alive'
      ],
      icon: Sparkles,
      color: 'gold'
    },
    {
      id: 'science',
      sanskrit: 'प्राचीन भारतीय विज्ञान',
      title: 'Scientific & Engineering Heritage',
      subtitle: 'From Aryabhata to Ancient Metallurgy',
      description: 'Unveiling India’s groundbreaking legacy in astronomy, mathematics, metallurgy, town planning, and medical surgery (Sushruta & Charaka), showing students how modern STEM stems from heritage roots.',
      takeaways: [
        'The birth of Zero, decimals, and algebraic geometry',
        'Rust-free metallurgy & Wootz crucible steel science',
        'Sundial mechanics at Konark and Jantar Mantar'
      ],
      icon: Layers,
      color: 'green'
    },
    {
      id: 'curriculum',
      sanskrit: 'राष्ट्रीय शिक्षा नीति संरेखण',
      title: 'NEP 2020 Aligned Pedagogy',
      subtitle: 'Experiential Learning for CBSE, ICSE & State Boards',
      description: 'Directly supporting national curriculum frameworks by turning history, civics, and geography textbooks into multi-sensory interactive quests, quizzes, and classroom collaborative projects.',
      takeaways: [
        'Grade-specific Class 6–12 experiential curriculum pathways',
        'Instant formative assessment quizzes with knowledge badges',
        'Printable teacher lesson plans and student heritage passports'
      ],
      icon: Award,
      color: 'navy'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cream-100 overflow-hidden">
      {/* Background Jali overlay */}
      <JaliPattern variant="light" opacity="opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="gold" size="md">
              About the Platform
            </Badge>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            The Philosophy of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-amber-600">
              KALACHAKRA
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            In Sanskrit, <span className="font-semibold text-navy-900">कालचक्र (Kāla-chakra)</span> signifies the eternal, cyclical Wheel of Time. We bridge ancient civilizational memory with cutting-edge digital learning to empower the next generation of students.
          </p>
        </div>

        {/* Dual Philosophy Showcase: Brand Story + The 4 Learning Pillars */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Conceptual Story Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-950 text-cream-100 rounded-3xl p-8 sm:p-10 border-2 border-gold-400/40 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow and mandala watermark */}
            <div className="absolute -right-16 -bottom-16 opacity-15 pointer-events-none">
              <KalachakraWheel size={320} spin={true} glow={false} />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center text-saffron-400">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="font-heading text-xs tracking-widest text-gold-400 uppercase">
                  Our Mission
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream-50 leading-snug">
                  “Explore India. Experience History. Shape the Future.”
                </h3>
              </div>

              <p className="text-cream-200/80 text-sm leading-relaxed">
                India is not just a nation on a map; it is a living civilizational continuum spanning over five millennia. Kalachakra reimagines how history is taught in schools—transforming static textbook pages into a vibrant, interactive universe.
              </p>

              <div className="p-4 rounded-2xl bg-navy-800/80 border border-gold-400/20 space-y-2">
                <div className="flex items-center gap-2 text-gold-300 font-semibold text-xs uppercase tracking-wider">
                  <Quote className="w-4 h-4 text-saffron-400" />
                  Educator’s Vision
                </div>
                <p className="text-xs text-cream-300/90 italic leading-relaxed">
                  "When students see history not as dead ruins, but as the living origin of today's mathematics, architecture, art, and values, they understand who they are—and what they can achieve."
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-cream-300/70 border-t border-navy-800">
                <span>Designed for Students & Educators</span>
                <span className="text-gold-400 font-bold">Bharat Heritage Initiative</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Pillars Interactive Tabs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                The 4 Educational Pillars
              </span>
              <span className="text-xs text-navy-500">Select a pillar to view details</span>
            </div>

            {/* Pillar Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? 'bg-white border-saffron-500 shadow-md ring-2 ring-saffron-400/20'
                        : 'bg-white/60 border-cream-300 hover:bg-white hover:border-gold-300'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-1.5 ${
                        isSelected ? 'text-saffron-600' : 'text-navy-400'
                      }`}
                    />
                    <div className="text-xs font-bold text-navy-900 truncate">{pillar.title}</div>
                    <div className="text-[10px] text-gold-700 font-heading">{pillar.sanskrit}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card Deep-Dive */}
            {(() => {
              const p = pillars[activePillar];
              const Icon = p.icon;
              return (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-300/70 shadow-heritage transition-all animate-in fade-in duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-saffron-700 bg-saffron-50 px-2.5 py-1 rounded-full border border-saffron-200">
                        <span>Pillar {activePillar + 1}</span>
                        <span>•</span>
                        <span className="font-heading">{p.sanskrit}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy-900 mt-2">
                        {p.title}
                      </h3>
                      <p className="text-sm font-medium text-gold-700 mt-0.5">{p.subtitle}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-cream-200/80 flex items-center justify-center text-saffron-600 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-navy-700 text-sm sm:text-base leading-relaxed mt-4">
                    {p.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-cream-200 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      What Students Learn:
                    </span>
                    <ul className="space-y-2">
                      {p.takeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
