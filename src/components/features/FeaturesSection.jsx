import React, { useState } from 'react';
import {
  Compass,
  Landmark,
  Sparkles,
  Award,
  Layers,
  GraduationCap,
  ArrowRight,
  Check,
  Play
} from 'lucide-react';
import Badge from '../common/Badge';
import JaliPattern from '../common/JaliPattern';

export default function FeaturesSection({ onExploreEra, onExploreMonuments }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 'time-wheel',
      icon: Compass,
      tag: 'Core Innovation',
      tagVariant: 'saffron',
      title: 'Interactive Time Wheel',
      hindi: 'कालचक्र अन्वेषण',
      description: 'Spin through 5,000 years of history across 6 major eras. Click on any epoch to discover key rulers, architecture, and inventions.',
      actionText: 'Explore Time Wheel',
      onClick: onExploreEra,
      color: 'border-saffron-300 group-hover:border-saffron-500',
      badge: 'Interactive Tool'
    },
    {
      id: 'monument-expeditions',
      icon: Landmark,
      tag: 'Architecture & 3D',
      tagVariant: 'gold',
      title: 'Virtual Heritage Expeditions',
      hindi: 'स्मारक दर्शन',
      description: 'Deep-dive into 42+ UNESCO World Heritage Sites. Examine Konark sundials, Ellora Kailasa monoliths, and Hampi musical pillars.',
      actionText: 'View Monument Catalog',
      onClick: onExploreMonuments,
      color: 'border-gold-300 group-hover:border-gold-500',
      badge: 'Virtual Tours'
    },
    {
      id: 'living-arts',
      icon: Sparkles,
      tag: 'Folk & Classical Arts',
      tagVariant: 'green',
      title: 'Living Traditions & Crafts',
      hindi: 'भारतीय कला एवं संस्कृति',
      description: 'Hands-on discovery of Madhubani, Warli, and Tanjore art, along with Bharatanatyam mudras and classical ragas.',
      actionText: 'Discover Art Forms',
      href: '#traditions',
      color: 'border-emerald-300 group-hover:border-emerald-500',
      badge: 'Cultural Immersion'
    },
    {
      id: 'gamified-quests',
      icon: Award,
      tag: 'Student Engagement',
      tagVariant: 'saffron',
      title: 'Gamified Heritage Quests',
      hindi: 'ज्ञान प्रश्नोत्तरी',
      description: 'Test historical knowledge through interactive quizzes. Unlock badges like "Chola Navigator" and "Vedic Scholar" as you learn.',
      actionText: 'Take a Quick Quiz',
      href: '#timeline',
      color: 'border-amber-300 group-hover:border-amber-500',
      badge: 'Earn XP Badges'
    },
    {
      id: 'ancient-sciences',
      icon: Layers,
      tag: 'STEM in History',
      tagVariant: 'gold',
      title: 'Ancient Indian Sciences',
      hindi: 'प्राचीन विज्ञान एवं गणित',
      description: 'Explore the mathematical birth of Zero, plastic surgery treatise by Sushruta, and rust-resistant metallurgy of the Delhi Iron Pillar.',
      actionText: 'Explore Inventions',
      href: '#traditions',
      color: 'border-gold-300 group-hover:border-gold-500',
      badge: 'STEM + Heritage'
    },
    {
      id: 'curriculum-modules',
      icon: GraduationCap,
      tag: 'CBSE / ICSE / State',
      tagVariant: 'navy',
      title: 'Curriculum-Aligned Learning',
      hindi: 'पाठ्यक्रम संरेखण',
      description: 'Organized Class 6–12 experiential modules mapped directly to NCERT and state school syllabi under NEP 2020 guidelines.',
      actionText: 'View Grade Tracks',
      href: '#curriculum',
      color: 'border-navy-300 group-hover:border-navy-500',
      badge: 'Grades 6 to 12'
    }
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden">
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="saffron" size="md">
            Features Built For Curious Minds
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            How Students Learn with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-amber-600">
              KALACHAKRA
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            Crafted like a world-class EdTech platform—blending cinematic storytelling, rich heritage research, and interactive student challenges.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                onMouseEnter={() => setHoveredFeature(feat.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border-2 border-cream-300 hover:border-gold-400 shadow-sm hover:shadow-heritage-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon & Tag */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-cream-100 group-hover:bg-saffron-50 border border-cream-300 group-hover:border-saffron-300 p-3 text-navy-800 group-hover:text-saffron-600 transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={feat.tagVariant} size="sm">
                      {feat.badge}
                    </Badge>
                  </div>

                  {/* Feature Title */}
                  <div>
                    <span className="font-heading text-xs text-gold-700 font-semibold block">
                      {feat.hindi}
                    </span>
                    <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-saffron-700 transition-colors mt-0.5">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Feature Description */}
                  <p className="text-sm text-navy-700/80 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-cream-200/80">
                  {feat.onClick ? (
                    <button
                      onClick={feat.onClick}
                      className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-navy-900 group-hover:text-saffron-600 transition-colors"
                    >
                      <span>{feat.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={feat.href}
                      className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-navy-900 group-hover:text-saffron-600 transition-colors"
                    >
                      <span>{feat.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
