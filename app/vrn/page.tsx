'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { scenarios } from '@/lib/scenarios';

const levelConfig = {
  A1: { label: 'A1 — Einsteiger', colour: 'text-green-400', badge: 'bg-green-500/10 text-green-400 border border-green-500/20' },
  A2: { label: 'A2 — Grundkenntnisse', colour: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20' },
  B1: { label: 'B1 — Fortgeschritten', colour: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20' },
} as const;

export default function VRNPage() {
  const [completions, setCompletions] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('vrn-completions');
      if (stored) setCompletions(JSON.parse(stored));
    } catch {}
  }, []);

  const levels = (['A1', 'A2', 'B1'] as const).map(level => ({
    level,
    config: levelConfig[level],
    items: scenarios.filter(s => s.level === level),
  })).filter(g => g.items.length > 0);

  return (
    <div className="bg-zinc-950 text-white" style={{ height: '100dvh', overflowY: 'scroll', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
      <main className="px-4 py-12 max-w-md mx-auto">
        <Link href="/" className="text-zinc-500 text-sm mb-8 block">← Zurück</Link>
        <div className="mb-8">
          <div className="text-4xl mb-3">🚊</div>
          <h1 className="text-3xl font-bold">VRN Survival Mode</h1>
          <p className="text-zinc-500 mt-2 text-sm">Meistere den öffentlichen Nahverkehr in Mannheim.</p>
        </div>

        <div className="space-y-8">
          {levels.map(({ level, config, items }) => (
            <div key={level}>
              <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${config.colour}`}>
                {config.label}
              </p>
              <div className="space-y-3">
                {items.map(scenario => {
                  const best = completions[scenario.id];
                  return (
                    <Link key={scenario.id} href={`/vrn/${scenario.id}`} className="block">
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4">
                        <span className="text-4xl">{scenario.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-white text-base leading-tight">{scenario.title}</div>
                          <div className="text-zinc-500 text-xs mt-0.5 truncate">{scenario.setting}</div>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${config.badge}`}>
                            {level}
                          </span>
                          {best !== undefined && (
                            <span className="text-xs text-amber-400 font-medium">✓ {best}%</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
