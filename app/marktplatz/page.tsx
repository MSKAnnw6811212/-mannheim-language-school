'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';
import { vocabulary } from '@/lib/vocabulary';
import type { VocabCard } from '@/lib/vocabulary';
import { markPracticeToday } from '@/lib/streak';

const DECK = vocabulary.filter(v => v.level === 'A1');

export default function MarktplatzSprint() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);
  const [swiping, setSwiping] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const greenOpacity = useTransform(x, [40, 130], [0, 0.55]);
  const redOpacity = useTransform(x, [-130, -40], [0.55, 0]);

  const card: VocabCard = DECK[index];

  const doSwipe = (direction: 'right' | 'left') => {
    if (swiping) return;
    setSwiping(true);
    const target = direction === 'right' ? 600 : -600;
    animate(x, target, {
      duration: 0.3,
      onComplete: () => {
        if (direction === 'right') setCorrect(c => c + 1);
        setTotal(t => t + 1);
        const next = index + 1;
        x.set(0);
        setFlipped(false);
        setSwiping(false);
        if (next >= DECK.length) {
          markPracticeToday();
          setFinished(true);
        } else {
          setIndex(next);
        }
      },
    });
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (!flipped) { animate(x, 0, { type: 'spring', stiffness: 400, damping: 30 }); return; }
    if (info.offset.x > 100) doSwipe('right');
    else if (info.offset.x < -100) doSwipe('left');
    else animate(x, 0, { type: 'spring', stiffness: 400, damping: 30 });
  };

  if (finished) {
    const pct = Math.round((correct / total) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚';
    const msg = pct >= 80 ? 'Ausgezeichnet!' : pct >= 50 ? 'Gut gemacht!' : 'Weiter üben!';
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="text-7xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold mb-2">{msg}</h2>
        <p className="text-zinc-400 text-lg mb-1">{correct} von {total} gewusst</p>
        <p className="text-amber-400 text-5xl font-bold mb-10">{pct}%</p>
        <button
          onClick={() => { setIndex(0); setCorrect(0); setTotal(0); setFinished(false); setFlipped(false); x.set(0); }}
          className="w-full max-w-xs bg-amber-500 text-black font-bold py-4 rounded-2xl text-lg mb-6"
        >
          Nochmal spielen
        </button>
        <Link href="/" className="text-zinc-500 text-sm">← Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col select-none" style={{ touchAction: 'none' }}>
      <div className="flex items-center justify-between px-5 pt-12 pb-3">
        <Link href="/" className="text-zinc-500 text-sm font-medium">← Zurück</Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-zinc-500">{index + 1} / {DECK.length}</span>
          <span className="text-amber-400 font-bold">{correct} ✓</span>
        </div>
      </div>

      <div className="mx-5 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${(index / DECK.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        <div className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-6 tracking-wider">
          A1 NIVEAU
        </div>

        <motion.div
          key={index}
          style={{ x, rotate }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          drag={flipped && !swiping ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
          onClick={() => { if (!flipped && !swiping) setFlipped(true); }}
          className="w-full max-w-sm relative"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl bg-green-500 pointer-events-none z-10"
            style={{ opacity: greenOpacity }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl bg-red-500 pointer-events-none z-10"
            style={{ opacity: redOpacity }}
          />
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 min-h-72 flex flex-col items-center justify-center gap-4 shadow-2xl cursor-pointer">
            <span className="text-8xl">{card.emoji}</span>
            {!flipped ? (
              <>
                <h2 className="text-4xl font-bold text-white mt-2">{card.word}</h2>
                <p className="text-zinc-600 text-sm mt-2">Tippe um den Artikel zu sehen</p>
              </>
            ) : (
              <>
                <div className="text-center mt-2">
                  <span className="text-amber-400 text-3xl font-bold">{card.article} </span>
                  <span className="text-4xl font-bold text-white">{card.word}</span>
                </div>
                <p className="text-zinc-400 text-base italic">&quot;{card.english}&quot;</p>
              </>
            )}
          </div>
        </motion.div>

        <div className="mt-8 h-12 flex items-center justify-center">
          {!flipped ? (
            <p className="text-zinc-700 text-sm">Was ist der Artikel?</p>
          ) : (
            <div className="flex items-center gap-6 text-sm">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl text-red-400">←</span>
                <span className="text-red-400 text-xs font-medium">Nochmal</span>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl text-green-400">→</span>
                <span className="text-green-400 text-xs font-medium">Gewusst!</span>
              </div>
            </div>
          )}
        </div>

        {flipped && !swiping && (
          <div className="flex gap-3 w-full max-w-sm mt-4">
            <button
              onClick={() => doSwipe('left')}
              className="flex-1 py-4 rounded-2xl bg-zinc-900 border border-zinc-700 text-red-400 font-semibold text-base active:scale-95 transition-transform"
            >
              Nochmal
            </button>
            <button
              onClick={() => doSwipe('right')}
              className="flex-1 py-4 rounded-2xl bg-amber-500 text-black font-bold text-base active:scale-95 transition-transform"
            >
              Gewusst! ✓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
