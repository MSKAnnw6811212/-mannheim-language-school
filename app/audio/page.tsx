'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { orders } from '@/lib/orders';
import type { OrderScenario } from '@/lib/orders';
import { markPracticeToday } from '@/lib/streak';

type LevelFilter = 'A1' | 'A2' | 'all';
type Phase = 'pick' | 'game' | 'done';
type MicState = 'idle' | 'listening' | 'result';

export default function AudioBestellung() {
  const [phase, setPhase] = useState<Phase>('pick');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('A1');
  const [index, setIndex] = useState(0);
  const [micState, setMicState] = useState<MicState>('idle');
  const [transcript, setTranscript] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [gotItRight, setGotItRight] = useState(false); // ever correct this scenario
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const recRef = useRef<any>(null);

  const deck: OrderScenario[] =
    selectedLevel === 'all' ? orders : orders.filter(o => o.level === selectedLevel);

  const scenario = deck[index];

  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      try { recRef.current?.abort(); } catch {}
    };
  }, []);

  const startLevel = (level: LevelFilter) => {
    setSelectedLevel(level);
    setIndex(0);
    setCorrect(0);
    setTotal(0);
    setMicState('idle');
    setTranscript('');
    setIsCorrect(false);
    setGotItRight(false);
    setPhase('game');
  };

  const startListening = () => {
    if (micState !== 'idle') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SR) {
      setTranscript('Spracherkennung nicht verfügbar — nutze Chrome auf Android');
      setIsCorrect(false);
      setMicState('result');
      return;
    }

    setMicState('listening');

    const rec = new SR();
    recRef.current = rec;
    rec.lang = 'de-DE';
    rec.interimResults = false;
    rec.maxAlternatives = 3;

    let handled = false;

    rec.onresult = (event: any) => {
      handled = true;
      // Collect all recognition alternatives to maximise keyword matching
      const texts: string[] = [];
      for (let i = 0; i < event.results[0].length; i++) {
        texts.push(event.results[0][i].transcript.toLowerCase());
      }
      const combined = texts.join(' ');
      const displayText = (event.results[0][0].transcript as string);
      setTranscript(displayText);

      const allMatched = scenario.keywords.every(kw => combined.includes(kw));
      setIsCorrect(allMatched);
      if (allMatched) setGotItRight(true);
      setMicState('result');
    };

    rec.onerror = (event: any) => {
      handled = true;
      const msgs: Record<string, string> = {
        'no-speech': 'Nichts gehört — versuch es nochmal',
        'not-allowed': 'Mikrofon-Zugriff verweigert — Einstellungen prüfen',
        'network': 'Netzwerkfehler — WLAN prüfen',
        'audio-capture': 'Kein Mikrofon gefunden',
      };
      setTranscript(msgs[event.error] ?? `Fehler: ${event.error}`);
      setIsCorrect(false);
      setMicState('result');
    };

    rec.onend = () => {
      if (!handled) {
        setTranscript('Nichts erkannt — tippe nochmal');
        setIsCorrect(false);
        setMicState('result');
      }
    };

    rec.start();
  };

  const advance = () => {
    // Count this scenario in the score
    setTotal(t => t + 1);
    if (gotItRight) setCorrect(c => c + 1);

    const next = index + 1;
    setMicState('idle');
    setTranscript('');
    setIsCorrect(false);
    setGotItRight(false);

    if (next >= deck.length) {
      markPracticeToday();
      setPhase('done');
    } else {
      setIndex(next);
    }
  };

  const retry = () => {
    setMicState('idle');
    setTranscript('');
    setIsCorrect(false);
    // gotItRight stays true if they already got it once
  };

  // ── Level picker ──
  if (phase === 'pick') {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6">
        <Link href="/" className="absolute top-12 left-5 text-zinc-500 text-sm font-medium">
          ← Zurück
        </Link>
        <div className="text-6xl mb-4">🎤</div>
        <h1 className="text-3xl font-bold mb-2 text-center">Audio-Bestellung</h1>
        <p className="text-zinc-400 text-base mb-1 text-center">Sprich Deutsch laut aus</p>
        <p className="text-zinc-600 text-sm mb-10 text-center">Mikrofon-Zugriff erforderlich</p>

        <div className="w-full max-w-xs space-y-3">
          <button
            onClick={() => startLevel('A1')}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-5 text-left active:scale-95 transition-transform"
          >
            <div className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full inline-block mb-2">
              A1
            </div>
            <div className="font-bold text-white text-lg">Einfache Bestellungen</div>
            <div className="text-zinc-500 text-sm">Einen Kaffee, bitte…</div>
          </button>

          <button
            onClick={() => startLevel('A2')}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-5 text-left active:scale-95 transition-transform"
          >
            <div className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full inline-block mb-2">
              A2
            </div>
            <div className="font-bold text-white text-lg">Komplexere Sätze</div>
            <div className="text-zinc-500 text-sm">Ein Schnitzel und ein Bier…</div>
          </button>

          <button
            onClick={() => startLevel('all')}
            className="w-full bg-amber-500 rounded-2xl p-5 text-left active:scale-95 transition-transform"
          >
            <div className="text-xs font-semibold text-black/60 bg-black/10 px-2 py-0.5 rounded-full inline-block mb-2">
              A1 + A2
            </div>
            <div className="font-bold text-black text-lg">Alles auf einmal</div>
            <div className="text-black/60 text-sm">Alle 8 Bestellungen</div>
          </button>
        </div>
      </div>
    );
  }

  // ── Results screen ──
  if (phase === 'done') {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚';
    const msg = pct >= 80 ? 'Ausgezeichnet!' : pct >= 50 ? 'Gut gemacht!' : 'Weiter üben!';
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <div className="text-7xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold mb-2">{msg}</h2>
        <p className="text-zinc-400 text-lg mb-1">
          {correct} von {total} richtig
        </p>
        <p className="text-amber-400 text-5xl font-bold mb-10">{pct}%</p>
        <button
          onClick={() => {
            setIndex(0);
            setCorrect(0);
            setTotal(0);
            setMicState('idle');
            setTranscript('');
            setIsCorrect(false);
            setGotItRight(false);
            setPhase('game');
          }}
          className="w-full max-w-xs bg-amber-500 text-black font-bold py-4 rounded-2xl text-lg mb-3"
        >
          Nochmal spielen
        </button>
        <button
          onClick={() => setPhase('pick')}
          className="w-full max-w-xs bg-zinc-900 border border-zinc-700 text-white font-semibold py-4 rounded-2xl text-lg mb-6"
        >
          Niveau wählen
        </button>
        <Link href="/" className="text-zinc-500 text-sm">
          ← Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  // ── Game screen ──
  const levelLabel = selectedLevel === 'all' ? 'A1 + A2' : selectedLevel;
  const levelColour =
    selectedLevel === 'A1'
      ? 'text-green-400 bg-green-400/10'
      : selectedLevel === 'A2'
      ? 'text-amber-400 bg-amber-500/10'
      : 'text-blue-400 bg-blue-400/10';

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-3">
        <Link href="/" className="text-zinc-500 text-sm font-medium">
          ← Zurück
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-zinc-500">
            {index + 1} / {deck.length}
          </span>
          <span className="text-amber-400 font-bold">{correct} ✓</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-5 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${(index / deck.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Level badge */}
        <div className={`text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider ${levelColour}`}>
          {levelLabel} NIVEAU
        </div>

        {/* Scenario card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-sm"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{scenario.emoji}</span>
                <p className="text-zinc-400 text-sm font-medium">{scenario.setting}</p>
              </div>
              <p className="text-white text-xl font-semibold mb-4 leading-snug">
                {scenario.prompt}
              </p>
              <div className="bg-zinc-800/60 rounded-2xl px-4 py-3 border border-zinc-700">
                <p className="text-xs text-zinc-500 font-semibold tracking-wider mb-1">
                  SAG AUF DEUTSCH:
                </p>
                <p className="text-amber-400 text-lg font-bold leading-snug">
                  {scenario.targetPhrase}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mic area */}
        <div className="mt-8 w-full max-w-sm flex flex-col items-center gap-4">
          {micState === 'idle' && (
            <>
              <button
                onClick={startListening}
                className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 active:scale-95 transition-transform"
              >
                <span className="text-4xl">🎤</span>
              </button>
              <p className="text-zinc-600 text-sm">Tippe auf das Mikrofon und sprich</p>
            </>
          )}

          {micState === 'listening' && (
            <div className="flex flex-col items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30"
              >
                <span className="text-4xl">🎤</span>
              </motion.div>
              <p className="text-zinc-400 text-sm">Ich höre zu…</p>
            </div>
          )}

          {micState === 'result' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              {/* Feedback box */}
              <div
                className={`rounded-2xl p-4 border mb-4 ${
                  isCorrect
                    ? 'bg-green-500/10 border-green-500/40'
                    : 'bg-red-500/10 border-red-500/40'
                }`}
              >
                <p
                  className={`text-sm font-bold mb-1 ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isCorrect ? '✓ Sehr gut!' : '✗ Nochmal versuchen'}
                </p>
                {transcript ? (
                  <p className="text-zinc-300 text-sm italic">„{transcript}"</p>
                ) : null}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={retry}
                  className="flex-1 py-4 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-semibold text-base active:scale-95 transition-transform"
                >
                  Nochmal 🎤
                </button>
                <button
                  onClick={advance}
                  className="flex-1 py-4 rounded-2xl bg-amber-500 text-black font-bold text-base active:scale-95 transition-transform"
                >
                  Weiter →
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
