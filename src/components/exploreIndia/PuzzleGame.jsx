import React, { useState, useCallback, useMemo } from 'react';
import {
  Puzzle,
  Trophy,
  RotateCcw,
  Move,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SlidingPuzzleBoard from './SlidingPuzzleBoard';
import {
  parseGridSize,
  createSolvedTiles,
  shuffleTiles,
  isSolved,
  tryMove
} from '../../utils/slidingPuzzle';

function getPuzzleContent(state) {
  // Configured exclusively for the Charminar puzzle with the provided image
  return {
    image: '/charminar.png',
    landmark: 'Charminar, Hyderabad',
    tag: 'Iconic Monument',
  };
}

export default function PuzzleGame({ state }) {
  const content = useMemo(() => getPuzzleContent(state), [state]);

  const puzzleMeta = useMemo(() => ({
    title: 'Puzzle Game',
    subtitle: 'Charminar Heritage Reconstruction',
    badge: 'Logic & Spatial Quest',
    desc: 'Reconstruct the iconic 1591 CE Charminar of Hyderabad. Assemble the four grand minarets, monumental arches, and historic architectural symmetry.',
    difficulty: ['Cadet (3x3)', 'Engineer (4x4)', 'Architect (5x5)'],
    objectives: [
      'Align the four grand minarets with the cardinal roads',
      'Restore the iconic central arches and upper gallery',
      'Complete the Charminar Heritage Puzzle'
    ],
    ctaText: 'Launch Charminar Puzzle',
    readyStatus: 'Ready for Gameplay',
    ...state?.games?.puzzle,
    subtitle: 'Charminar Heritage Reconstruction',
    desc: 'Reconstruct the iconic 1591 CE Charminar of Hyderabad. Assemble the four grand minarets, monumental arches, and historic architectural symmetry.',
    objectives: [
      'Align the four grand minarets with the cardinal roads',
      'Restore the iconic central arches and upper gallery',
      'Complete the Charminar Heritage Puzzle'
    ],
    ctaText: 'Launch Charminar Puzzle',
  }), [state]);

  const difficulties = puzzleMeta.difficulty || ['Cadet (3x3)', 'Architect (4x4)'];
  const [phase, setPhase] = useState('intro');
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[0]);
  const [gridSize, setGridSize] = useState(parseGridSize(difficulties[0]));
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);

  const startGame = useCallback((difficulty) => {
    const size = parseGridSize(difficulty);
    const solved = createSolvedTiles(size);
    setSelectedDifficulty(difficulty);
    setGridSize(size);
    setTiles(shuffleTiles(solved, size));
    setMoves(0);
    setPhase('playing');
  }, []);

  const handleTileClick = (index) => {
    if (phase !== 'playing') return;
    const next = tryMove(tiles, gridSize, index);
    if (next === tiles) return;
    setTiles(next);
    setMoves((m) => m + 1);
    if (isSolved(next)) {
      setPhase('won');
    }
  };

  const handleRestart = () => startGame(selectedDifficulty);
  const handleChangeDifficulty = (diff) => startGame(diff);

  /* ── Intro ── */
  if (phase === 'intro') {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cream-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                {puzzleMeta.badge}
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">
              {puzzleMeta.title}: {puzzleMeta.subtitle}
            </h3>
            <p className="text-sm text-navy-600 mt-1 max-w-2xl">{puzzleMeta.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-[360px] mx-auto border-2 border-dashed border-gold-400 p-2 bg-cream-100">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                <img
                  src={content.image}
                  alt={content.landmark}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 grid pointer-events-none opacity-40"
                  style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)' }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="border border-white/80" />
                  ))}
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-navy-950/80 backdrop-blur-xs p-2 rounded-lg text-center">
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider block">
                    {content.tag}
                  </span>
                  <span className="text-xs font-bold text-gold-300">{content.landmark}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-500 block mb-2">
                Select Difficulty:
              </span>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-navy-900 text-gold-300 border-2 border-gold-400 shadow-sm'
                        : 'bg-cream-100 text-navy-700 border border-cream-300 hover:bg-gold-50'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-500 block">
                Mission Objectives:
              </span>
              {puzzleMeta.objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-cream-50 p-3 rounded-xl border border-cream-200"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-navy-800">{obj}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => startGame(selectedDifficulty)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-amber-600 to-saffron-600 shadow-md hover:brightness-105 active:scale-98 transition-all"
            >
              <Puzzle className="w-4 h-4" />
              {puzzleMeta.ctaText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Won ── */
  if (phase === 'won') {
    return (
      <div className="space-y-6 animate-in fade-in duration-200 text-center py-4">
        <div className="w-20 h-20 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
          <Trophy className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">
            Puzzle Complete!
          </h3>
          <p className="text-sm text-navy-600 mt-1">
            You restored <strong>{content.landmark}</strong> in {moves} moves
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="bg-white rounded-2xl border-2 border-amber-300 px-5 py-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Moves</span>
            <span className="font-display font-black text-2xl text-navy-900">{moves}</span>
          </div>
          <div className="bg-white rounded-2xl border-2 border-gold-300 px-5 py-3">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block">Grid</span>
            <span className="font-display font-black text-2xl text-navy-900">{gridSize}×{gridSize}</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-xs font-bold">{puzzleMeta.objectives[puzzleMeta.objectives.length - 1]}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-saffron-600 hover:brightness-105 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again
          </button>
          <button
            onClick={() => setPhase('intro')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-800 bg-cream-100 border border-cream-300 hover:bg-gold-50 transition-all"
          >
            Change Difficulty
          </button>
        </div>
      </div>
    );
  }

  /* ── Playing ── */
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              {selectedDifficulty}
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-navy-900">{content.landmark}</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-100 border border-cream-300 text-xs font-bold text-navy-700">
            <Move className="w-3.5 h-3.5 text-amber-600" />
            {moves} moves
          </div>
          <button
            onClick={handleRestart}
            className="p-2 rounded-xl bg-cream-100 border border-cream-300 hover:bg-gold-50 transition-colors"
            title="Restart"
            aria-label="Restart puzzle"
          >
            <RotateCcw className="w-4 h-4 text-navy-700" />
          </button>
        </div>
      </div>

      <SlidingPuzzleBoard
        tiles={tiles}
        size={gridSize}
        image={content.image}
        onTileClick={handleTileClick}
      />

      <p className="text-center text-xs text-navy-500">
        Tap tiles adjacent to the empty space to slide them. Reassemble the heritage image!
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => handleChangeDifficulty(diff)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
              selectedDifficulty === diff
                ? 'bg-navy-900 text-gold-300'
                : 'bg-cream-100 text-navy-600 hover:bg-gold-50 border border-cream-300'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
        <span>{puzzleMeta.subtitle} — {state.name} heritage reconstruction</span>
      </div>
    </div>
  );
}
