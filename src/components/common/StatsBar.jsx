import React from 'react';
import { platformStats } from '../../data/curriculumData';

export default function StatsBar() {
  return (
    <div className="relative -mt-6 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl border-2 border-gold-300/80 shadow-heritage p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-cream-300">
        {platformStats.map((stat, idx) => (
          <div key={idx} className={`text-center ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
            <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-navy-900 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-amber-600">
                {stat.value}
              </span>
            </div>
            <div className="font-bold text-sm text-navy-800 mt-1">{stat.label}</div>
            <div className="text-xs text-navy-600/70 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
