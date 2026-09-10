import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Compass,
  Landmark,
  Sparkles,
  BookOpen,
  Award,
  ChevronRight,
  GraduationCap,
  MapPin
} from 'lucide-react';
import KalachakraWheel from '../common/KalachakraWheel';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Mystery Game', sub: 'रहस्य', href: '/mystery-game', icon: BookOpen },
    { name: 'Time Wheel', sub: 'कालचक्र', href: '#timeline', icon: Compass },
    { name: 'Monuments', sub: 'धरोहर', href: '#monuments', icon: Landmark },
    { name: 'Arts & Culture', sub: 'संस्कृति', href: '#traditions', icon: Sparkles },
    { name: 'Explore India', sub: 'भारत दर्शन', href: '#explore-india', icon: MapPin },
    { name: 'Curriculum', sub: 'अभ्यास', href: '#curriculum', icon: GraduationCap },
    { name: 'About', sub: 'परिचय', href: '#about', icon: BookOpen },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      if (location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Heritage Sanskrit/Sub-banner */}
      <div className="bg-navy-950 text-cream-200 border-b border-gold-400/20 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-saffron-500 animate-pulse"></span>

            <span className="font-heading tracking-wide text-gold-300">
              कालोऽस्मि कालचक्रम्
            </span>

            <span className="text-navy-400">•</span>

            <span className="text-cream-300/80">
              Interactive Indian Heritage & EdTech Portal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-gold-400/90 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-saffron-500" />
              Aligned with NEP 2020 & CBSE/ICSE
            </span>

            <span className="text-navy-500">|</span>

            <button
              onClick={onOpenSearch}
              className="text-cream-300 hover:text-gold-300 flex items-center gap-1 transition-colors"
            >
              <kbd className="px-1 py-0.2 bg-navy-800 rounded border border-navy-700 text-[10px] text-gold-400">
                Ctrl + K
              </kbd>

              <span>Search Heritage</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 border-b ${isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-gold-300/40 py-2.5'
            : 'bg-cream-100/80 backdrop-blur-sm border-gold-200/50 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Kalachakra Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-navy-900 flex items-center justify-center border-2 border-gold-400 shadow-sm overflow-hidden group-hover:border-saffron-500 transition-colors">
              <KalachakraWheel
                size={44}
                spin={true}
                glow={false}
                opacity="opacity-95"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-widest text-navy-900 group-hover:text-saffron-600 transition-colors leading-none flex items-center gap-1">
                KALACHAKRA
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 inline-block mb-1"></span>
              </span>

              <span className="text-[10px] sm:text-[11px] tracking-wider font-semibold text-gold-700 uppercase leading-tight mt-0.5">
                The Wheel of Time
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-navy-800 hover:text-saffron-600 hover:bg-cream-200/60 transition-all flex items-center gap-1.5 group"
                >
                  <Icon className="w-4 h-4 text-gold-600 group-hover:text-saffron-500 transition-colors" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <Link
    to="/mystery-game"
    className="px-3.5 py-2 rounded-xl text-sm font-semibold text-navy-800 hover:text-saffron-600 hover:bg-cream-200/60 transition-all flex items-center gap-1.5 group"
  >
    Mystery Game
  </Link>
</div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-cream-300 hover:border-gold-400 text-xs font-medium text-navy-700 shadow-xs hover:shadow transition-all"
              title="Quick Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-saffron-600" />

              <span className="hidden xl:inline">
                Search...
              </span>

              <kbd className="px-1.5 py-0.5 bg-cream-100 rounded text-[10px] text-navy-500 font-mono border border-cream-200">
                ⌘K
              </kbd>
            </button>

            {/* Start Exploring Button */}
            <a
              href="#timeline"
              onClick={(e) => scrollToSection(e, '#timeline')}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-600 shadow-sm hover:shadow-saffron-glow hover:brightness-105 active:scale-95 transition-all"
            >
              <span>Explore Eras</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-cream-200/80 text-navy-800 border border-cream-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-saffron-600" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cream-200/80 text-navy-800 border border-cream-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-saffron-700" />
              ) : (
                <Menu className="w-6 h-6 text-navy-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] sm:top-[93px] bottom-0 bg-cream-100/98 backdrop-blur-xl border-b border-gold-300/40 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-saffron-700 px-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Learning Chapters
            </p>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-cream-300 hover:border-gold-400 hover:bg-gold-50/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gold-100/70 flex items-center justify-center text-gold-700 group-hover:bg-saffron-100 group-hover:text-saffron-700 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="font-semibold text-navy-900 group-hover:text-saffron-700">
                          {link.name}
                        </div>

                        <div className="text-xs text-navy-500">
                          {link.sub}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-navy-400 group-hover:text-saffron-600 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-cream-300 space-y-3">
            <a
              href="#timeline"
              onClick={(e) => scrollToSection(e, '#timeline')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-saffron-600 via-saffron-500 to-amber-600 shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>Start Your Journey</span>
            </a>

            <div className="text-center text-xs text-navy-600 font-medium">
              Explore India. Experience History. Shape the Future.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}