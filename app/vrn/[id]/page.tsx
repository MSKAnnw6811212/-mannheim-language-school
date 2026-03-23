'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '@/lib/scenarios';
import type { Option } from '@/lib/scenarios';
import { markPracticeToday } from '@/lib/streak';

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const scenario = scenarios.find(s => s.id === params.id);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!scenario) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400">Szenario nicht gefunden.</p>
          <Link href="/vrn" className="text-amber-400 mt-4 block">← Zurück</Link>
        </div>
      </div>
    );
  }

  const currentStep = scenario.steps[stepIndex];
  const isLastStep = stepIndex === scenario.steps.length - 1;
  const totalChoices = scenario.steps.filter(s => s.type === 'choice').length;

  const saveScore = (pct: number) => {
    try {
      const stored = localStorage.getItem('vrn-completions');
      const comps = stored ? JSON.parse(stored) : {};
      if (comps[scenario.id] === undefined || pct > comps[scenario.id]) {
        comps[scenario.id] = pct;
        localStorage.setItem('vrn-completions', JSON.stringify(comps));
      }
    } catch {}
  };

  const advance = () => {
    setSelectedOption(null);
    if (isLastStep) {
      const pct = Math.round((correctCount / totalChoices) * 100);
      saveScore(pct);
      markPracticeToday();
      setFinished(true);
    } else {
      setStepIndex(i => i + 1);
    }
  };

  const handleSelect = (option: Option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option.correct) setCorrectCount(c => c + 1);
  };

  if (finished) {
    const pct = Math.round((correctCount / totalChoices) * 100);
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="text-7xl mb-4">{pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</div>
        <h2 className="text-2xl font-bold mb-2">Szenario abgeschlossen!</h2>
        <p className="text-zinc-400 mb-1">{correctCount} von {totalChoices} richtig</p>
        <p className="text-amber-400 text-5xl font-bold mb-8">{pct}%</p>
        <Link href="/vrn" className="w-full max-w-xs bg-amber-500 text-black font-bold py-4 rounded-2xl text-lg text-center block mb-4">
          Weitere Szenarien
        </Link>
        <button
          onClick={() => { setStepIndex(0); setSelectedOption(null); setCorrectCount(0); setFinished(false); }}
          className="text-zinc-500 text-sm"
        >
          Nochmal versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <div className="flex items-center justify-between px-5 pt-12 pb-3">
        <Link href="/vrn" className="text-zinc-500 text-sm">← Zurück</Link>
        <div className="text-sm text-zinc-500">{stepIndex + 1} / {scenario.steps.length}</div>
      </div>

      <div className="mx-5 h-1 bg-zinc-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${(stepIndex / scenario.steps.length) * 100}%` }}
        />
      </div>

      <div className="mx-5 mb-4">
        <span className="text-xs text-zinc-600 font-medium tracking-wider uppercase">{scenario.setting}</span>
      </div>

      <div className="flex-1 px-5 pb-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep.type === 'scene' && (
              <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 mb-4">
                <div className="text-3xl mb-3">{currentStep.emoji}</div>
                <p className="text-white font-medium leading-relaxed">{currentStep.text}</p>
                <p className="text-zinc-500 text-sm mt-2 italic">{currentStep.translation}</p>
              </div>
            )}
            {currentStep.type === 'npc' && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{currentStep.speakerEmoji}</span>
                  <span className="text-zinc-400 text-sm font-medium">{currentStep.speaker}</span>
                </div>
                <div className="bg-zinc-800 rounded-2xl rounded-tl-sm p-4">
                  <p className="text-white text-lg font-medium leading-relaxed">&ldquo;{currentStep.text}&rdquo;</p>
                  <p className="text-zinc-500 text-sm mt-2 italic">{currentStep.translation}</p>
                </div>
              </div>
            )}
            {currentStep.type === 'choice' && (
              <div className="space-y-3">
                <p className="text-zinc-500 text-sm mb-3">Wie antwortest du?</p>
                {currentStep.options.map((option, i) => {
                  const isSelected = selectedOption?.text === option.text;
                  const revealed = selectedOption !== null;
                  let style = 'bg-zinc-900 border-zinc-700 text-white';
                  if (revealed && isSelected && option.correct) style = 'bg-green-500/20 border-green-500 text-green-300';
                  if (revealed && isSelected && !option.correct) style = 'bg-red-500/20 border-red-500 text-red-300';
                  if (revealed && !isSelected && option.correct) style = 'bg-green-500/10 border-green-500/40 text-green-400/70';
                  return (
                    <button key={i} onClick={() => handleSelect(option)} disabled={!!selectedOption}
                      className={`w-full text-left p-4 rounded-2xl border transition-all ${style}`}>
                      <div className="font-medium leading-snug">{option.text}</div>
                      <div className="text-sm opacity-60 mt-0.5">{option.translation}</div>
                    </button>
                  );
                })}
              </div>
            )}
            {selectedOption && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-2xl border ${selectedOption.correct ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                <p className={`font-bold mb-1 ${selectedOption.correct ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedOption.correct ? '✓ Richtig!' : '✗ Nicht ganz'}
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">{selectedOption.feedback}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {(currentStep.type !== 'choice' || selectedOption) && (
        <div className="px-5 pb-10">
          <button onClick={advance}
            className="w-full bg-amber-500 text-black font-bold py-4 rounded-2xl active:scale-95 transition-transform">
            {isLastStep ? 'Fertig! →' : 'Weiter →'}
          </button>
        </div>
      )}
    </div>
  );
}
