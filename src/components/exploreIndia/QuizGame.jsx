import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ChevronRight,
  Award
} from 'lucide-react';
import { getQuizQuestions } from '../../data/stateQuizQuestions';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizGame({ state }) {
  const questions = useMemo(() => getQuizQuestions(state.id), [state.id]);

  const [phase, setPhase] = useState('intro'); // 'intro' | 'playing' | 'results'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedIndex !== null;
  const isCorrect = isAnswered && selectedIndex === currentQuestion?.correctIndex;

  const handleStart = () => {
    setPhase('playing');
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setScore(0);
  };

  const handleSelect = (optionIndex) => {
    if (isAnswered) return;
    setSelectedIndex(optionIndex);
    const correct = optionIndex === currentQuestion.correctIndex;
    setAnswers((prev) => [...prev, { questionIndex: currentIndex, selected: optionIndex, correct }]);
    if (correct) setScore((s) => s + currentQuestion.points);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
    } else {
      setPhase('results');
    }
  };

  const handleRestart = () => {
    setPhase('intro');
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setScore(0);
  };

  const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
  const percentage = Math.round((score / maxScore) * 100);
  const correctCount = answers.filter((a) => a.correct).length;

  const getGrade = () => {
    if (percentage >= 80) return { label: 'State Scholar', color: 'text-emerald-600', bg: 'bg-emerald-100' };
    if (percentage >= 60) return { label: 'Heritage Explorer', color: 'text-amber-600', bg: 'bg-amber-100' };
    return { label: 'Culture Cadet', color: 'text-navy-600', bg: 'bg-cream-200' };
  };

  /* ── Intro Screen ── */
  if (phase === 'intro') {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cream-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {state.games.quiz.badge}
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">
              {state.games.quiz.title}: {state.games.quiz.subtitle}
            </h3>
            <p className="text-sm text-navy-600 mt-1 max-w-2xl">{state.games.quiz.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Questions</span>
            <span className="font-display font-bold text-base text-navy-900 block mt-1">{questions.length} Questions</span>
            <p className="text-xs text-emerald-900/80 mt-1">{state.games.quiz.rounds}</p>
          </div>
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Max Score</span>
            <span className="font-display font-bold text-base text-navy-900 block mt-1">{maxScore} XP</span>
            <p className="text-xs text-emerald-900/80 mt-1">Earn the State Scholar badge at 80%+</p>
          </div>
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Topics</span>
            <div className="mt-1 space-y-0.5">
              {state.games.quiz.topics.slice(0, 2).map((t, i) => (
                <p key={i} className="text-[11px] text-emerald-900/80 truncate">{t}</p>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2"
        >
          <HelpCircle className="w-4 h-4" />
          {state.games.quiz.ctaText}
        </button>
      </div>
    );
  }

  /* ── Results Screen ── */
  if (phase === 'results') {
    const grade = getGrade();
    return (
      <div className="space-y-6 animate-in fade-in duration-200 text-center py-4">
        <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <Trophy className="w-10 h-10" />
        </div>

        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">Quiz Complete!</h3>
          <p className="text-sm text-navy-600 mt-1">{state.name} Heritage Challenge</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="bg-white rounded-2xl border-2 border-emerald-300 px-6 py-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Score</span>
            <span className="font-display font-black text-3xl text-navy-900">{score}<span className="text-lg text-navy-400">/{maxScore}</span></span>
          </div>
          <div className="bg-white rounded-2xl border-2 border-gold-300 px-6 py-4">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block">Accuracy</span>
            <span className="font-display font-black text-3xl text-navy-900">{percentage}%</span>
          </div>
          <div className="bg-white rounded-2xl border-2 border-cream-300 px-6 py-4">
            <span className="text-xs font-bold text-navy-500 uppercase tracking-wider block">Correct</span>
            <span className="font-display font-black text-3xl text-navy-900">{correctCount}/{questions.length}</span>
          </div>
        </div>

        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${grade.bg}`}>
          <Award className={`w-5 h-5 ${grade.color}`} />
          <span className={`font-display font-bold text-sm ${grade.color}`}>{grade.label} Badge Earned</span>
        </div>

        {/* Answer Review */}
        <div className="text-left max-w-2xl mx-auto space-y-2 mt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-500 block mb-2">Answer Review</span>
          {questions.map((q, idx) => {
            const ans = answers[idx];
            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-xs ${
                  ans?.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  {ans?.correct ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold text-navy-900">{q.question}</p>
                    {!ans?.correct && (
                      <p className="text-emerald-700 mt-0.5">Correct: {q.options[q.correctIndex]}</p>
                    )}
                    <p className="text-navy-600 mt-0.5">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Play Again
        </button>
      </div>
    );
  }

  /* ── Playing Screen ── */
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-navy-500">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-xs font-bold text-emerald-700">{score} XP</span>
      </div>
      <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 rounded-2xl border-2 border-emerald-300 shadow-sm">
        <div className="flex items-center justify-between mb-4 text-xs">
          <span className="font-bold text-emerald-700 uppercase tracking-wider">{state.name} Quiz</span>
          <span className="text-navy-500 font-mono">{currentQuestion.points} Points</span>
        </div>

        <p className="font-display font-bold text-base sm:text-lg text-navy-900 mb-5">
          {currentQuestion.question}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentQuestion.options.map((option, idx) => {
            let optionStyle = 'bg-cream-50 border-cream-300 hover:border-emerald-300 hover:bg-emerald-50/50';
            if (isAnswered) {
              if (idx === currentQuestion.correctIndex) {
                optionStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900';
              } else if (idx === selectedIndex) {
                optionStyle = 'bg-red-50 border-red-300 text-red-800';
              } else {
                optionStyle = 'bg-cream-50 border-cream-200 opacity-60';
              }
            } else if (selectedIndex === idx) {
              optionStyle = 'bg-emerald-50 border-emerald-400';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`p-3 rounded-xl border font-semibold text-xs sm:text-sm text-navy-800 flex items-center gap-2 transition-all text-left ${optionStyle} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isAnswered && idx === currentQuestion.correctIndex
                    ? 'bg-emerald-600 text-white'
                    : isAnswered && idx === selectedIndex
                      ? 'bg-red-500 text-white'
                      : 'bg-cream-200 text-navy-700'
                }`}>
                  {OPTION_LABELS[idx]}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isAnswered && (
          <div className={`mt-4 p-3 rounded-xl text-xs flex items-start gap-2 ${
            isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-amber-50 border border-amber-200 text-amber-900'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-bold block mb-0.5">
                {isCorrect ? `Correct! +${currentQuestion.points} XP` : 'Not quite!'}
              </span>
              <span>{currentQuestion.explanation}</span>
            </div>
          </div>
        )}
      </div>

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 transition-all"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
