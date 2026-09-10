import React, { useState, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  ScrollText,
  UtensilsCrossed,
  Palette,
  Sparkles,
  CheckCircle2,
  Compass,
  RotateCcw
} from 'lucide-react';

const SECTION_ICONS = {
  intro: Compass,
  culture: Users,
  history: ScrollText,
  food: UtensilsCrossed,
  artCrafts: Palette,
  places: MapPin,
  gallery: Sparkles
};

function buildExploreSteps(state) {
  const hub = state.culturalHub;
  const steps = [];

  steps.push({
    id: 'intro',
    title: `Welcome to ${state.name}`,
    subtitle: state.tagline,
    content: hub?.introduction || state.fullIntro,
    image: state.heroImage,
    type: 'intro'
  });

  if (hub?.culture) {
    steps.push({
      id: 'culture',
      title: hub.culture.title,
      subtitle: 'Living Traditions',
      content: hub.culture.summary,
      highlights: hub.culture.highlights,
      type: 'info'
    });
  }

  if (hub?.history) {
    steps.push({
      id: 'history',
      title: hub.history.title,
      subtitle: 'Historical Legacy',
      content: hub.history.summary,
      highlights: hub.history.highlights,
      type: 'info'
    });
  }

  if (hub?.food) {
    steps.push({
      id: 'food',
      title: hub.food.title,
      subtitle: 'Culinary Heritage',
      content: hub.food.summary,
      highlights: hub.food.highlights,
      type: 'info'
    });
  }

  if (hub?.artCrafts) {
    steps.push({
      id: 'artCrafts',
      title: hub.artCrafts.title,
      subtitle: 'Artisan Mastery',
      content: hub.artCrafts.summary,
      highlights: hub.artCrafts.highlights,
      type: 'info'
    });
  }

  if (hub?.famousPlaces?.places?.length) {
    steps.push({
      id: 'places',
      title: hub.famousPlaces.title,
      subtitle: 'Landmarks & Monuments',
      content: hub.famousPlaces.summary,
      places: hub.famousPlaces.places,
      type: 'places'
    });
  }

  if (state.gallery?.length) {
    steps.push({
      id: 'gallery',
      title: 'Visual Gallery',
      subtitle: `${state.name} in Pictures`,
      content: `Explore curated photographs showcasing the heritage and landscapes of ${state.name}.`,
      gallery: state.gallery,
      type: 'gallery'
    });
  }

  steps.push({
    id: 'complete',
    title: 'Expedition Complete!',
    subtitle: `You have explored ${state.name}`,
    content: `Congratulations! You have completed the virtual heritage expedition through ${state.name}.`,
    features: state.games?.explore?.features || [],
    type: 'complete'
  });

  return steps;
}

export default function ExploreNowGame({ state }) {
  const steps = useMemo(() => buildExploreSteps(state), [state]);
  const [currentStep, setCurrentStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState(new Set([0]));

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const Icon = SECTION_ICONS[step.id] || Compass;

  const goTo = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
      setVisitedSteps((prev) => new Set([...prev, index]));
    }
  };

  const handleNext = () => goTo(currentStep + 1);
  const handlePrev = () => goTo(currentStep - 1);

  const handleRestart = () => {
    setCurrentStep(0);
    setVisitedSteps(new Set([0]));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cream-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
              {state.games.explore.badge}
            </span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-navy-900">
            {state.games.explore.title}: {state.games.explore.subtitle}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-navy-500">
            Step {currentStep + 1} of {steps.length}
          </span>
          <div className="w-40 h-2 bg-cream-200 rounded-full mt-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-saffron-500 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step Navigation Pills */}
      <div className="flex flex-wrap gap-1.5">
        {steps.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goTo(idx)}
            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
              idx === currentStep
                ? 'bg-saffron-600 text-white shadow-sm'
                : visitedSteps.has(idx)
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-cream-100 text-navy-600 border border-cream-300 hover:bg-gold-50'
            }`}
          >
            {visitedSteps.has(idx) && idx !== currentStep && (
              <CheckCircle2 className="w-3 h-3 inline mr-0.5 -mt-0.5" />
            )}
            {s.title.length > 20 ? s.title.slice(0, 18) + '…' : s.title}
          </button>
        ))}
      </div>

      {/* Main Step Content */}
      <div className="bg-cream-50/50 rounded-2xl border border-cream-300 overflow-hidden">
        {/* Intro step with hero image */}
        {step.type === 'intro' && (
          <div>
            <div className="relative h-48 sm:h-64">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-gold-300" />
                  <span className="text-xs font-bold text-gold-300 uppercase tracking-wider">{step.subtitle}</span>
                </div>
                <h4 className="font-display font-black text-xl sm:text-2xl">{step.title}</h4>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm text-navy-700/90 leading-relaxed">{step.content}</p>
            </div>
          </div>
        )}

        {/* Info steps (culture, history, food, art) */}
        {step.type === 'info' && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-saffron-600 uppercase tracking-wider">{step.subtitle}</span>
                <h4 className="font-display font-bold text-lg text-navy-900">{step.title}</h4>
              </div>
            </div>
            <p className="text-sm text-navy-700/90 leading-relaxed mb-4">{step.content}</p>
            {step.highlights && (
              <ul className="space-y-2">
                {step.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-navy-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Famous places step */}
        {step.type === 'places' && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{step.subtitle}</span>
                <h4 className="font-display font-bold text-lg text-navy-900">{step.title}</h4>
              </div>
            </div>
            <p className="text-sm text-navy-700/90 leading-relaxed mb-4">{step.content}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {step.places.map((place, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-cream-300 overflow-hidden">
                  {place.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-3">
                    <span className="text-[10px] font-bold text-saffron-600">{place.tag}</span>
                    <h5 className="font-display font-bold text-sm text-navy-900 mt-0.5">{place.name}</h5>
                    <p className="text-[11px] text-navy-600 mt-1 leading-relaxed">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery step */}
        {step.type === 'gallery' && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">{step.subtitle}</span>
                <h4 className="font-display font-bold text-lg text-navy-900">{step.title}</h4>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {step.gallery.map((photo, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden aspect-[4/3] border border-gold-300/60">
                  <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-navy-900/80 text-[10px] font-bold text-gold-300">
                    {photo.tag}
                  </span>
                  <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white">
                    {photo.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completion step */}
        {step.type === 'complete' && (
          <div className="p-5 sm:p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-black text-2xl text-navy-900 mb-1">{step.title}</h4>
            <p className="text-sm text-navy-600 mb-6">{step.content}</p>
            {step.features.length > 0 && (
              <div className="bg-white rounded-xl border border-gold-200 p-4 text-left max-w-lg mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 block mb-2">
                  Discovery Checklist
                </span>
                <div className="space-y-1.5">
                  {step.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-navy-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border border-cream-300 bg-white hover:bg-gold-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-saffron-600 to-amber-600 hover:brightness-105 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Restart Expedition
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-saffron-600 to-amber-600 hover:brightness-105 transition-all"
          >
            Next Stop
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
