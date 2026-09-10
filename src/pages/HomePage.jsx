import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/hero/HeroSection';
import StatsBar from '../components/common/StatsBar';
import AboutSection from '../components/about/AboutSection';
import FeaturesSection from '../components/features/FeaturesSection';
import EraTimeWheel from '../components/timeline/EraTimeWheel';
import MonumentExplorer from '../components/monuments/MonumentExplorer';
import TraditionsShowcase from '../components/traditions/TraditionsShowcase';
import CurriculumSection from '../components/curriculum/CurriculumSection';
import StudentQuestCTA from '../components/cta/StudentQuestCTA';
import ExploreIndiaSection from '../components/exploreIndia/ExploreIndiaSection';

export default function HomePage({ onOpenSearch }) {
  const [selectedEraId, setSelectedEraId] = useState('indus-valley');
  const [selectedMonument, setSelectedMonument] = useState(null);

  const handleStartJourney = () => {
    const el = document.getElementById('timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreIndia = () => {
    const el = document.getElementById('explore-india');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section ("Discover India Through Time", CTAs, Wheel, Silhouettes) */}
      <HeroSection
        onStartJourney={handleStartJourney}
        onExploreIndia={handleExploreIndia}
      />

      {/* 2. Platform Metrics Bar */}
      <StatsBar />

      {/* 3. About Kalachakra Section (Philosophy & 4 Pillars) */}
      <AboutSection />

      {/* 4. Features Section (6 Core EdTech Capabilities) */}
      <FeaturesSection
        onExploreEra={handleStartJourney}
        onExploreMonuments={handleExploreIndia}
      />

      {/* 5. Era Time Wheel Section (Interactive 6 Epochs, Artifacts, Quiz) */}
      <EraTimeWheel
        selectedEraId={selectedEraId}
        onSelectEra={(id) => setSelectedEraId(id)}
      />

      {/* 6. Monument Explorer (Regional Filters, UNESCO & Detail Modal) */}
      <MonumentExplorer
        selectedMonument={selectedMonument}
        onSelectMonument={(m) => setSelectedMonument(m)}
      />

      {/* 7. Traditions, Arts & Ancient Sciences Showcase */}
      <TraditionsShowcase />

      {/* 8. Curriculum-Mapped Quests (Classes 6-12, NEP 2020) */}
      <CurriculumSection />

      {/* 9. Student Quest Call to Action */}
      <StudentQuestCTA onStartJourney={handleStartJourney} />

      {/* 10. Explore India (Interactive State Map, Highlighted States, 4 Game Options) */}
      <ExploreIndiaSection />
      {/* Mystery Game Link */}
      <div className="flex justify-center mt-8">
        <Link to="/mystery-game" className="bg-saffron-500 text-white px-4 py-2 rounded hover:bg-saffron-600 transition">Play the Mystery Game</Link>
      </div>
    </main>
  );
}
