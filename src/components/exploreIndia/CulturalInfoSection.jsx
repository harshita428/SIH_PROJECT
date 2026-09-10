import React from 'react';

export default function CulturalInfoSection({ icon: Icon, title, summary, highlights, variant = 'default' }) {
  const variantStyles = {
    default: 'bg-cream-50/70 border-cream-300',
    culture: 'bg-saffron-50/60 border-saffron-200/80',
    history: 'bg-navy-50/50 border-navy-200/60',
    food: 'bg-amber-50/60 border-amber-200/80',
    art: 'bg-gold-50/60 border-gold-200/80',
    places: 'bg-emerald-50/50 border-emerald-200/70'
  };

  const iconStyles = {
    default: 'bg-gold-100 text-saffron-700',
    culture: 'bg-saffron-100 text-saffron-700',
    history: 'bg-navy-100 text-navy-800',
    food: 'bg-amber-100 text-amber-800',
    art: 'bg-gold-100 text-gold-800',
    places: 'bg-emerald-100 text-emerald-800'
  };

  return (
    <div className={`p-5 sm:p-6 rounded-2xl border transition-all hover:shadow-sm ${variantStyles[variant]}`}>
      <div className="flex items-start gap-3.5 mb-4">
        {Icon && (
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconStyles[variant]}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div>
          <h3 className="font-display font-bold text-lg text-navy-900">{title}</h3>
          <p className="text-xs sm:text-sm text-navy-700/85 leading-relaxed mt-1">{summary}</p>
        </div>
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2">
          {highlights.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-navy-800 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
