import React, { useState, useEffect } from 'react';
import { Search, X, Compass, Landmark, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { erasData } from '../../data/erasData';
import { monumentsData } from '../../data/monumentsData';
import { traditionsData } from '../../data/traditionsData';

export default function SearchModal({ isOpen, onClose, onSelectMonument, onSelectEra }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingEras = cleanQuery
    ? erasData.filter(
        (era) =>
          era.name.toLowerCase().includes(cleanQuery) ||
          era.hindiName.includes(cleanQuery) ||
          era.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingMonuments = cleanQuery
    ? monumentsData.filter(
        (m) =>
          m.name.toLowerCase().includes(cleanQuery) ||
          m.state.toLowerCase().includes(cleanQuery) ||
          m.shortDesc.toLowerCase().includes(cleanQuery) ||
          m.architecturalStyle.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingArts = cleanQuery
    ? traditionsData.folkArts.filter(
        (art) =>
          art.name.toLowerCase().includes(cleanQuery) ||
          art.origin.toLowerCase().includes(cleanQuery) ||
          art.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const hasResults =
    matchingEras.length > 0 || matchingMonuments.length > 0 || matchingArts.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy-950/70 backdrop-blur-md transition-all">
      <div
        className="w-full max-w-2xl bg-cream-50 rounded-2xl shadow-2xl border border-gold-400/50 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-cream-300 bg-white gap-3">
          <Search className="w-5 h-5 text-saffron-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search eras, monuments, classical arts, or ancient sciences..."
            className="w-full bg-transparent text-navy-900 placeholder:text-navy-900/40 text-base focus:outline-none font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-navy-900/40 hover:text-navy-900 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-cream-200 text-navy-700 px-2 py-1 rounded border border-cream-300 hover:bg-cream-300 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Quick suggestions if no query */}
        {!cleanQuery && (
          <div className="p-6 text-sm text-navy-700/80 overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-saffron-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Popular Student Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {['Konark Sun Temple', 'Indus Valley drainage', 'Chola Navy', 'Aryabhata Zero', 'Brihadisvara Temple', 'Madhubani Art', 'Ellora Kailasa'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-gold-50 border border-cream-300 hover:border-gold-300 text-xs text-navy-800 transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-navy-900/60">
              <span>ProTip: Press <kbd className="px-1.5 py-0.5 bg-cream-200 rounded border">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-cream-200 rounded border">K</kbd> anywhere to open</span>
              <span>Kalachakra Knowledge Graph</span>
            </div>
          </div>
        )}

        {/* Results list */}
        {cleanQuery && (
          <div className="p-4 overflow-y-auto space-y-4 max-h-[60vh]">
            {!hasResults && (
              <div className="py-12 text-center text-navy-700/70">
                <Compass className="w-10 h-10 mx-auto text-saffron-500/50 mb-2" />
                <p className="font-medium">No results found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for "Hampi", "Vedic", "Chola", or "Surgery"</p>
              </div>
            )}

            {/* Eras */}
            {matchingEras.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 px-2 py-1">
                  Historical Eras ({matchingEras.length})
                </span>
                <div className="mt-2 space-y-1">
                  {matchingEras.map((era) => (
                    <button
                      key={era.id}
                      onClick={() => {
                        onSelectEra && onSelectEra(era.id);
                        onClose();
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-cream-100 border border-transparent hover:border-gold-300/60 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-saffron-100 flex items-center justify-center text-saffron-700">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-navy-900 group-hover:text-saffron-700">
                            {era.name} <span className="text-xs font-normal text-gold-600">({era.hindiName})</span>
                          </div>
                          <div className="text-xs text-navy-700/70">{era.period}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-saffron-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Monuments */}
            {matchingMonuments.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-2 py-1">
                  Monuments & Heritage Sites ({matchingMonuments.length})
                </span>
                <div className="mt-2 space-y-1">
                  {matchingMonuments.map((monument) => (
                    <button
                      key={monument.id}
                      onClick={() => {
                        onSelectMonument && onSelectMonument(monument);
                        onClose();
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-cream-100 border border-transparent hover:border-gold-300/60 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-navy-900 group-hover:text-gold-700">
                            {monument.name}
                          </div>
                          <div className="text-xs text-navy-700/70">{monument.state} • {monument.period}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Arts & Traditions */}
            {matchingArts.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 px-2 py-1">
                  Living Culture & Arts ({matchingArts.length})
                </span>
                <div className="mt-2 space-y-1">
                  {matchingArts.map((art) => (
                    <div
                      key={art.id}
                      className="p-2.5 rounded-xl bg-cream-50 border border-cream-200 flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-navy-900">{art.name}</div>
                        <div className="text-xs text-navy-700/80 mt-0.5">{art.origin} — {art.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
