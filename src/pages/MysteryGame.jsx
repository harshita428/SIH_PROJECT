import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { X, ArrowLeft, Trophy, Sparkles, Key, CheckCircle2, RotateCcw } from 'lucide-react';

// The Whispers of Golconda Citadel – 4 clue heritage narrative adventure
const clues = [
  {
    type: 'multiple',
    title: 'The Whispering Gallery of Bala Hissar',
    question: 'Acoustic engineers designed Golconda Citadel so that a sound made at the Fateh Darwaza (outer entrance gate) could travel to Bala Hissar (the highest pavilion) over 1 kilometer away. What specific sound was used for emergency signaling?',
    options: [
      { label: 'A. A single sharp handclap under the entry dome', value: 'A' },
      { label: 'B. The ringing of a massive subterranean bronze gong', value: 'B' },
      { label: 'C. The blowing of a conch shell trumpet', value: 'C' },
      { label: 'D. The firing of a ceremonial gateway cannon', value: 'D' },
    ],
    correct: 'A',
    hint: 'A simple gesture of both hands meeting creates soundwaves that bounce along the arched masonry.',
    insight: 'A handclap under the entry dome traveled more than 1 kilometer to alert the fortress commander of approaching forces.'
  },
  {
    type: 'multiple',
    title: 'The Floating Bricks of Ramappa',
    question: 'The 1213 CE Kakatiya temple at Palampet (Ramappa) survived multiple massive earthquakes due to what unique architectural innovation in its roof (vimana)?',
    options: [
      { label: 'A. Porous volcanic clay bricks so lightweight they can float on water', value: 'A' },
      { label: 'B. Solid hollow copper spheres filled with mountain mercury', value: 'B' },
      { label: 'C. Teakwood beams suspended on oiled volcanic ropes', value: 'C' },
      { label: 'D. Carved soapstone arches with interlocking iron mortar', value: 'D' },
    ],
    correct: 'A',
    hint: 'These volcanic porous bricks have trapped air pockets making their density lower than water.',
    insight: 'Kakatiya engineers used lightweight floating bricks to drastically reduce roof weight, preventing temple collapse during earthquakes.'
  },
  {
    type: 'multiple',
    title: 'The Four Minarets of Charminar',
    question: 'Built in 1591 CE by Muhammad Quli Qutb Shah at the intersection of historical trade routes, what architectural purpose do the four grand arches of Charminar serve?',
    options: [
      { label: 'A. They open directly toward the four cardinal directions (North, South, East, West)', value: 'A' },
      { label: 'B. They acted as flood gates to four underground rivers of Hyderabad', value: 'B' },
      { label: 'C. They held four giant sundials measuring solstices', value: 'C' },
      { label: 'D. They marked the four seasons of royal Deccan harvests', value: 'D' },
    ],
    correct: 'A',
    hint: 'Think about the primary compass directions that connect the four royal roads of the ancient city.',
    insight: 'Each 11-meter wide arch opens toward one of the four cardinal directions, aligning the monument with the city grid.'
  },
  {
    type: 'multiple',
    title: 'The Legendary Diamond Vault of Kollur',
    question: 'Telangana was historically the world\'s primary source of legendary Type IIa diamonds. Which of these famous gemstones was mined from the Deccan mines of Golconda?',
    options: [
      { label: 'A. Both the Koh-i-Noor and the Hope Diamond', value: 'A' },
      { label: 'B. The Black Orlov Diamond and Star of Africa', value: 'B' },
      { label: 'C. The Golden Jubilee Diamond only', value: 'C' },
      { label: 'D. The Cullinan Diamond from premier kimberlite pipes', value: 'D' },
    ],
    correct: 'A',
    hint: 'The Golconda kingdom produced the most famous gem now in the British Crown Jewels as well as the famous deep blue gem.',
    insight: 'Golconda’s Kollur mines yielded both the Koh-i-Noor (Mountain of Light) and the 45.5-carat deep blue Hope Diamond.'
  }
];

export default function MysteryGame({ onClose }) {
  const navigate = useNavigate();
  const { updateProgress } = useProgress();

  // Investigation opens directly into the game without intermediate start screen
  const [currentClue, setCurrentClue] = useState(0);
  const [selected, setSelected] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [unlockAnim, setUnlockAnim] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  // Load saved game progress if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mysteryGameProgress');
      if (saved) {
        const data = JSON.parse(saved);
        if (typeof data.currentClue === 'number' && data.currentClue < clues.length) {
          setCurrentClue(data.currentClue);
        }
        setAttempts(data.attempts ?? 0);
        setTotalAttempts(data.totalAttempts ?? 0);
        setHintsUsed(data.hintsUsed ?? 0);
        setGameCompleted(data.gameCompleted ?? false);
      }
    } catch (error) {
      console.error('Could not load Mystery Game progress:', error);
      localStorage.removeItem('mysteryGameProgress');
    }
  }, []);

  // Save game progress
  useEffect(() => {
    const data = {
      gameStarted: true,
      currentClue,
      attempts,
      totalAttempts,
      hintsUsed,
      gameCompleted,
    };
    localStorage.setItem('mysteryGameProgress', JSON.stringify(data));
  }, [
    currentClue,
    attempts,
    totalAttempts,
    hintsUsed,
    gameCompleted,
  ]);

  // Exit / Close handler
  const handleExit = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  // Show hint
  const handleHint = () => {
    if (!showHint) {
      setShowHint(true);
      setHintsUsed((prev) => prev + 1);
    }
  };

  // Move to the next clue
  const moveToNextClue = (insight) => {
    setFeedback(`Correct! ${insight}`);
    setUnlockAnim(true);

    setTimeout(() => {
      setUnlockAnim(false);

      if (currentClue < clues.length - 1) {
        setCurrentClue((prev) => prev + 1);
        setSelected('');
        setShowHint(false);
        setAttempts(0);
        setFeedback('');
      } else {
        setGameCompleted(true);
        updateProgress({
          mysteryGameCompleted: true,
          mysteryGameMastery: 100,
        });
      }
    }, 1200);
  };

  // Submit multiple choice answer
  const handleMultipleSubmit = (event) => {
    event.preventDefault();
    const clue = clues[currentClue];

    if (!selected) {
      setFeedback('Please select an answer first.');
      return;
    }

    if (selected === clue.correct) {
      moveToNextClue(clue.insight);
    } else {
      setAttempts((prev) => prev + 1);
      setTotalAttempts((prev) => prev + 1);
      setFeedback('Not quite. Read the clue and hint carefully.');

      if (attempts + 1 >= 2) {
        setShowHint(true);
      }
    }
  };

  // Restart the investigation
  const handleRestart = () => {
    localStorage.removeItem('mysteryGameProgress');
    setGameCompleted(false);
    setCurrentClue(0);
    setSelected('');
    setAttempts(0);
    setTotalAttempts(0);
    setHintsUsed(0);
    setShowHint(false);
    setFeedback('');
    setUnlockAnim(false);

    updateProgress({
      mysteryGameCompleted: false,
      mysteryGameMastery: 0,
    });
  };

  // Current progress calculation
  const completedClues = gameCompleted ? clues.length : currentClue;
  const progressPercent = Math.round((completedClues / clues.length) * 100);

  /* ── Victory / Solved Screen ── */
  if (gameCompleted) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        onClick={handleExit}
      >
        <div
          className={`relative w-full max-w-xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 text-center border-2 border-gold-400 overflow-y-auto max-h-[90vh] my-auto ${
            unlockAnim ? 'scale-105' : ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleExit}
            className="absolute top-4 right-4 p-2 rounded-full text-navy-400 hover:text-navy-900 hover:bg-cream-100 transition-colors"
            title="Close"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8" />
          </div>

          <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            Investigation Accomplished
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-2">
            Mystery Solved!
          </h2>
          <p className="text-xs sm:text-sm text-navy-600 mb-6 max-w-md mx-auto">
            The Whispers of Golconda Citadel and Deccan heritage ciphers have been fully decoded.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-cream-50 rounded-2xl border border-cream-200">
              <span className="text-[11px] font-bold text-navy-500 uppercase block">Clues</span>
              <span className="text-xl font-black text-saffron-600">{clues.length}/{clues.length}</span>
            </div>
            <div className="p-3 bg-cream-50 rounded-2xl border border-cream-200">
              <span className="text-[11px] font-bold text-navy-500 uppercase block">Incorrect</span>
              <span className="text-xl font-black text-navy-900">{totalAttempts}</span>
            </div>
            <div className="p-3 bg-cream-50 rounded-2xl border border-cream-200">
              <span className="text-[11px] font-bold text-navy-500 uppercase block">Hints</span>
              <span className="text-xl font-black text-amber-600">{hintsUsed}</span>
            </div>
          </div>

          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-left mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <h4 className="font-bold text-xs text-navy-900 uppercase tracking-wider">Heritage Dossier Complete</h4>
            </div>
            <p className="text-xs text-navy-700 leading-relaxed">
              Your investigation connected Golconda’s acoustic science, Ramappa’s earthquake-resistant floating bricks, Charminar’s cardinal symmetry, and the diamond legacy of Kollur.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-saffron-600 to-amber-600 hover:brightness-105 transition-all shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
            <button
              onClick={handleExit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-800 bg-cream-100 hover:bg-gold-50 border border-cream-300 transition-all"
            >
              Close Investigation
            </button>
          </div>
        </div>
      </div>
    );
  }

  const clue = clues[currentClue];

  /* ── Investigation Clue Screen ── */
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleExit}
    >
      <div
        className="relative w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border-2 border-gold-400 overflow-y-auto max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar: Back / Exit */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-cream-200">
          <div className="flex items-center gap-2">
            {currentClue > 0 ? (
              <button
                type="button"
                onClick={() => {
                  setCurrentClue((prev) => prev - 1);
                  setSelected('');
                  setAttempts(0);
                  setShowHint(false);
                  setFeedback('');
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-navy-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Clue</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-saffron-500" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-700">
                  Case File #TG-1591
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-navy-500">
              Clue {currentClue + 1} of {clues.length}
            </span>
            <button
              type="button"
              onClick={handleExit}
              className="p-1.5 rounded-xl text-navy-400 hover:text-navy-900 hover:bg-cream-100 transition-colors"
              title="Exit Investigation"
              aria-label="Exit Investigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header & Progress */}
        <div className="mb-4">
          <h2 className="font-display font-black text-xl sm:text-2xl text-navy-900 mb-2">
            The Whispers of Golconda Citadel
          </h2>
          <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-saffron-500 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Current Clue Content */}
        <div
          className={`space-y-4 transition-all duration-300 ${
            unlockAnim ? 'opacity-50 scale-98' : 'opacity-100 scale-100'
          }`}
        >
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-2 mb-1">
              <Key className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Clue #{currentClue + 1}: {clue.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-medium">
              {clue.question}
            </p>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-3 bg-amber-100/80 border border-amber-300 text-amber-950 text-xs rounded-xl flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Investigator Hint:</strong> {clue.hint}
              </div>
            </div>
          )}

          {/* Options Form */}
          <form onSubmit={handleMultipleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-2.5">
              {clue.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelected(option.value);
                    setFeedback('');
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    selected === option.value
                      ? 'border-saffron-500 bg-saffron-50/80 text-navy-900 shadow-xs font-semibold'
                      : 'border-cream-300 bg-white hover:border-gold-400 hover:bg-cream-50 text-navy-800'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Feedback alert */}
            {feedback && (
              <div
                className={`p-3 rounded-xl text-xs font-medium ${
                  feedback.startsWith('Correct!')
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-300'
                }`}
              >
                {feedback}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              {!showHint ? (
                <button
                  type="button"
                  onClick={handleHint}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 underline transition-colors"
                >
                  💡 Show Clue Hint
                </button>
              ) : (
                <span className="text-[11px] text-navy-500">Hint active</span>
              )}

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-saffron-600 to-amber-600 hover:brightness-105 active:scale-98 transition-all shadow-sm"
              >
                Submit Deciphered Clue
              </button>
            </div>
          </form>

          {attempts > 0 && !feedback.startsWith('Correct!') && (
            <p className="text-[11px] text-rose-600 font-medium">
              Incorrect attempts on this clue: {attempts}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}