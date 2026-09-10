import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { ProgressProvider } from './context/ProgressContext';
import StateDetailPage from './pages/StateDetailPage';
import SearchModal from './components/common/SearchModal';
import MonumentModal from './components/monuments/MonumentModal';
import MysteryGame from './pages/MysteryGame';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSearchMonument, setActiveSearchMonument] = useState(null);

  // Global keyboard shortcut for Ctrl/Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectMonumentFromSearch = (monument) => {
    setActiveSearchMonument(monument);
  };

  const handleSelectEraFromSearch = (eraId) => {
    const el = document.getElementById('timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ProgressProvider>
      <div className="min-h-screen flex flex-col bg-cream-100 text-navy-900 font-sans selection:bg-saffron-500 selection:text-white">
        {/* Top Navigation */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Main Content View */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />}
            />
            <Route
              path="/state/:stateId"
              element={<StateDetailPage />}
            />
            <Route path="/mystery-game" element={<MysteryGame />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer
          onExploreEra={() => scrollToSection('timeline')}
          onExploreMonuments={() => scrollToSection('monuments')}
        />

        {/* Global Quick Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectMonument={handleSelectMonumentFromSearch}
          onSelectEra={handleSelectEraFromSearch}
        />

        {/* Search Selected Monument Modal */}
        {activeSearchMonument && (
          <MonumentModal
            monument={activeSearchMonument}
            onClose={() => setActiveSearchMonument(null)}
          />
        )}
      </div>
    </ProgressProvider>
  );
}
