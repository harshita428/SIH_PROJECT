import React from 'react';

export default function ActivityCard({ option, isActive, onSelect }) {
  const Icon = option.icon;

  return (
    <button
      onClick={() => onSelect(option.id)}
      className={`p-5 rounded-3xl text-left border-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
        isActive
          ? 'bg-white border-saffron-500 shadow-heritage-hover scale-[1.02] ring-2 ring-saffron-500/20'
          : 'bg-white/80 hover:bg-white border-cream-300 hover:border-gold-400 shadow-xs'
      }`}
    >
      <div className="flex items-center justify-between w-full mb-3">
        <span
          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
            isActive ? 'bg-saffron-600 text-white' : 'bg-cream-200 text-navy-600'
          }`}
        >
          Option {option.number}
        </span>
        <div
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
            isActive
              ? 'bg-saffron-100 text-saffron-700'
              : 'bg-cream-100 text-navy-600 group-hover:bg-gold-100'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div>
        <h3
          className={`font-display font-bold text-lg mb-1 transition-colors ${
            isActive ? 'text-saffron-700' : 'text-navy-900 group-hover:text-saffron-600'
          }`}
        >
          {option.name}
        </h3>
        <p className="text-xs text-navy-500 leading-tight">{option.subtitle}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs font-semibold">
        <span className={isActive ? 'text-saffron-600' : 'text-navy-400'}>{option.tag}</span>
        <span className={isActive ? 'text-saffron-600 font-bold' : 'text-navy-400'}>
          {isActive ? 'Active Mode ●' : 'Select →'}
        </span>
      </div>
    </button>
  );
}
