import React from 'react';

export default function Badge({ children, variant = 'saffron', size = 'md', className = '' }) {
  const variants = {
    saffron: 'bg-saffron-50 text-saffron-700 border-saffron-200/80',
    gold: 'bg-gold-50 text-gold-700 border-gold-300',
    navy: 'bg-navy-900 text-cream-100 border-navy-700',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    cream: 'bg-cream-200 text-navy-800 border-cream-300',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs md:text-sm px-3 py-1',
    lg: 'text-sm px-4 py-1.5 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide uppercase ${variants[variant] || variants.saffron} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
