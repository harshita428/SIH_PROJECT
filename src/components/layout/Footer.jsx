import React, { useState } from 'react';
import {
  Compass,
  Landmark,
  Sparkles,
  BookOpen,
  Send,
  Heart,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import KalachakraWheel from '../common/KalachakraWheel';
import HeritageSilhouettes from '../common/HeritageSilhouettes';
import JaliPattern from '../common/JaliPattern';

export default function Footer({ onExploreEra, onExploreMonuments }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-navy-950 text-cream-200 pt-16 pb-12 overflow-hidden border-t-2 border-gold-400/40">
      {/* Jali Lattice subtle overlay */}
      <JaliPattern variant="dark" opacity="opacity-10" />

      {/* Heritage Architecture Silhouette framing top edge */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-6">
        <HeritageSilhouettes opacity="opacity-20" color="#D4AF37" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 border border-gold-400 flex items-center justify-center overflow-hidden">
                <KalachakraWheel size={40} spin={true} glow={false} />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-widest text-white block leading-none">
                  KALACHAKRA
                </span>
                <span className="text-[10px] tracking-wider font-semibold text-gold-400 uppercase">
                  The Wheel of Time
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-display text-base text-gold-300 font-semibold italic">
              “Explore India. Experience History. Shape the Future.”
            </p>

            <p className="text-xs text-cream-300/80 leading-relaxed max-w-sm">
              An interactive national EdTech initiative dedicated to preserving, celebrating, and teaching India's monumental civilizational heritage to students across schools and universities.
            </p>

            <div className="p-3 rounded-xl bg-navy-900/90 border border-gold-400/30 text-xs text-cream-300/90">
              <span className="font-heading text-gold-300 block text-[11px] mb-0.5">
                विद्या ददाति विनयं विनयाद् याति पात्रताम्
              </span>
              <span className="text-[10px] text-cream-400/70 italic">
                “Knowledge bestows discipline; from discipline comes worthiness.”
              </span>
            </div>
          </div>

          {/* Column 2: Historical Timelines */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-saffron-400" />
              Timelines
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Indus Valley (3300 BCE)
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Vedic & Mahajanapadas
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Maurya & Gupta Empires
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Chola Maritime Age
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Mughal & Maratha Era
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-gold-300 transition-colors">
                  Modern Bharat (1947+)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Monuments & Architecture */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-gold-400" />
              Monuments
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Konark Sun Temple
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Brihadisvara Thanjavur
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Hampi Stone Chariot
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Ellora Kailasa Monolith
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Sanchi Great Stupa
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:text-gold-300 transition-colors">
                  Hawa Mahal Jaipur
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Student Chronicle */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              The Heritage Chronicle
            </h4>
            <p className="text-xs text-cream-300/80 leading-relaxed">
              Join 50,000+ school students receiving weekly stories on ancient discoveries, forgotten inventions, and interactive trivia.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to the Weekly Chronicle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-gold-400/40 bg-navy-900 focus-within:border-gold-400">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter student / teacher email"
                    className="w-full px-3 py-2.5 bg-transparent text-xs text-cream-100 placeholder:text-cream-400/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-gradient-to-r from-saffron-600 to-amber-600 text-white hover:brightness-110 flex items-center justify-center transition-all"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-cream-400/70 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Zero spam • Safe for schools & young learners</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70">
          <div>
            © {new Date().getFullYear()} <span className="text-gold-300 font-semibold">KALACHAKRA</span>.
            All rights reserved. Dedicated to Bharat’s heritage.
          </div>

          <div className="flex items-center gap-6">
            <a href="#explore-india" className="hover:text-cream-200 transition-colors">Explore India</a>
            <a href="#about" className="hover:text-cream-200 transition-colors">Pedagogy Framework</a>
            <a href="#curriculum" className="hover:text-cream-200 transition-colors">Curriculum Alignment</a>
            <a href="#timeline" className="hover:text-cream-200 transition-colors">Time Wheel</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
