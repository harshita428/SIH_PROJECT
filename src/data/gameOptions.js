import { Eye, Puzzle, HelpCircle, Key } from 'lucide-react';

export const gameOptions = [
  {
    id: 'explore',
    number: '01',
    name: 'Explore Now',
    subtitle: 'Virtual State Expedition',
    icon: Eye,
    badgeColor: 'from-saffron-600 to-amber-600',
    tag: 'Interactive Walkthrough',
    accentColor: 'saffron'
  },
  {
    id: 'puzzle',
    number: '02',
    name: 'Puzzle Game',
    subtitle: 'Architectural Assembly',
    icon: Puzzle,
    badgeColor: 'from-amber-600 to-gold-600',
    tag: 'Spatial Reasoning',
    accentColor: 'amber'
  },
  {
    id: 'quiz',
    number: '03',
    name: 'Quiz Game',
    subtitle: 'Heritage & History Challenge',
    icon: HelpCircle,
    badgeColor: 'from-emerald-700 to-teal-700',
    tag: 'NEP 2020 Curriculum',
    accentColor: 'emerald'
  },
  {
    id: 'mystery',
    number: '04',
    name: 'Mystery Game',
    subtitle: 'The Ancient Relic Quest',
    icon: Key,
    badgeColor: 'from-indigo-800 to-purple-800',
    tag: 'Detective Narrative',
    accentColor: 'indigo'
  }
];
