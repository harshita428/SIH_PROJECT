import React from 'react';
import { MapPin } from 'lucide-react';

export default function FamousPlacesGrid({ title, summary, places }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl border bg-emerald-50/50 border-emerald-200/70">
      <div className="flex items-start gap-3.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-navy-900">{title}</h3>
          <p className="text-xs sm:text-sm text-navy-700/85 leading-relaxed mt-1">{summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl border border-cream-300 overflow-hidden hover:border-saffron-400 hover:shadow-sm transition-all"
          >
            {place.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-gold-300 bg-navy-900/70 px-2 py-0.5 rounded-md">
                  {place.tag || 'Heritage'}
                </span>
              </div>
            )}
            <div className="p-3">
              <h4 className="font-display font-bold text-sm text-navy-900 group-hover:text-saffron-700 transition-colors">
                {place.name}
              </h4>
              <p className="text-[11px] text-navy-600 leading-relaxed mt-1 line-clamp-2">
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
