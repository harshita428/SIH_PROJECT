import React, { useState } from 'react';
import {
  Landmark,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  Award
} from 'lucide-react';
import { monumentsData } from '../../data/monumentsData';
import Badge from '../common/Badge';
import JaliPattern from '../common/JaliPattern';
import MonumentModal from './MonumentModal';

export default function MonumentExplorer({ selectedMonument, onSelectMonument }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [unescoOnly, setUnescoOnly] = useState(false);
  const [activeModalMonument, setActiveModalMonument] = useState(null);

  const regions = ['All', 'South', 'North', 'East', 'West', 'Central'];

  const filteredMonuments = monumentsData.filter((m) => {
    const matchesRegion = selectedRegion === 'All' || m.region === selectedRegion;
    const matchesUnesco = !unescoOnly || m.unesco;
    return matchesRegion && matchesUnesco;
  });

  const handleCardClick = (monument) => {
    setActiveModalMonument(monument);
    onSelectMonument && onSelectMonument(monument);
  };

  return (
    <section id="monuments" className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden">
      <JaliPattern variant="light" opacity="opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" size="md">
            Living Architecture & Sanctuaries
          </Badge>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-navy-900 tracking-tight">
            Monuments of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-amber-600">
              Timeless Wonder
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-700/80 leading-relaxed">
            From zero-mortar Dravidian granite vimanas to subterranean desert baolis and solar sundials, explore the structural engineering of ancient Bharat.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-cream-300 shadow-xs">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-saffron-600" />
              Region:
            </span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedRegion === region
                    ? 'bg-navy-900 text-cream-100 shadow-xs'
                    : 'bg-cream-100 text-navy-700 hover:bg-gold-50 hover:text-navy-900'
                }`}
              >
                {region === 'All' ? 'All Regions' : `${region} India`}
              </button>
            ))}
          </div>

          {/* UNESCO World Heritage Toggle */}
          <button
            onClick={() => setUnescoOnly(!unescoOnly)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              unescoOnly
                ? 'bg-gold-100 text-gold-900 border-gold-400'
                : 'bg-white text-navy-700 border-cream-300 hover:border-gold-300'
            }`}
          >
            <Award className="w-4 h-4 text-gold-600" />
            <span>UNESCO Sites Only</span>
            {unescoOnly && <Check className="w-3.5 h-3.5 text-gold-800 ml-1" />}
          </button>
        </div>

        {/* Monument Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMonuments.map((monument) => (
            <div
              key={monument.id}
              onClick={() => handleCardClick(monument)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-cream-300 hover:border-gold-400/90 shadow-sm hover:shadow-heritage-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-cream-100 backdrop-blur-xs border border-gold-400/30">
                      {monument.state}
                    </span>
                  </div>

                  {monument.unesco && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-400 text-navy-950 flex items-center gap-1 shadow-xs">
                        <Award className="w-3 h-3" />
                        UNESCO
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-cream-100">
                    <span className="text-[10px] font-heading text-gold-300 uppercase tracking-wider block">
                      {monument.nativeName}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {monument.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-navy-500">
                    <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                    <span>{monument.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-navy-700/80 line-clamp-3 leading-relaxed">
                    {monument.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <div className="w-full py-2.5 rounded-xl bg-cream-100 group-hover:bg-saffron-600 group-hover:text-white text-navy-800 font-bold text-xs transition-all flex items-center justify-center gap-2">
                  <span>Explore Architectural Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monument Detail Modal */}
      {activeModalMonument && (
        <MonumentModal
          monument={activeModalMonument}
          onClose={() => setActiveModalMonument(null)}
        />
      )}
    </section>
  );
}
