import React from 'react';
import { Sparkles, Users, ScrollText, UtensilsCrossed, Palette } from 'lucide-react';
import CulturalInfoSection from './CulturalInfoSection';
import FamousPlacesGrid from './FamousPlacesGrid';

const sectionIcons = {
  culture: Users,
  history: ScrollText,
  food: UtensilsCrossed,
  artCrafts: Palette
};

const sectionVariants = {
  culture: 'culture',
  history: 'history',
  food: 'food',
  artCrafts: 'art'
};

export default function StateCulturalHub({ state }) {
  const hub = state.culturalHub;
  if (!hub) return null;

  const infoSections = ['culture', 'history', 'food', 'artCrafts'];

  return (
    <div className="space-y-8 mb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-xs font-bold text-saffron-800 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
            State Cultural Hub
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-navy-900 tracking-tight">
            Discover {state.name}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-navy-600 max-w-md">
          Explore the living heritage, culinary traditions, artisan crafts, and iconic landmarks that define {state.name}.
        </p>
      </div>

      {/* Introduction Banner */}
      <div className="bg-white rounded-3xl border-2 border-gold-300/80 shadow-heritage p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-saffron-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
            Introduction
          </span>
        </div>
        <p className="text-sm sm:text-base text-navy-700/90 leading-relaxed">
          {hub.introduction || state.fullIntro}
        </p>
      </div>

      {/* Culture, History, Food, Art & Crafts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoSections.map((key) => {
          const section = hub[key];
          if (!section) return null;
          return (
            <CulturalInfoSection
              key={key}
              icon={sectionIcons[key]}
              title={section.title}
              summary={section.summary}
              highlights={section.highlights}
              variant={sectionVariants[key]}
            />
          );
        })}
      </div>

      {/* Famous Places */}
      {hub.famousPlaces && (
        <FamousPlacesGrid
          title={hub.famousPlaces.title}
          summary={hub.famousPlaces.summary}
          places={hub.famousPlaces.places}
        />
      )}
    </div>
  );
}
