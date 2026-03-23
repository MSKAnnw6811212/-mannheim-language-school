import Link from 'next/link';
import { scenarios } from '@/lib/scenarios';

const levelColours: Record<string, string> = {
  A1: 'bg-green-500/10 text-green-400 border border-green-500/20',
  A2: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  B1: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
};

export default function VRNPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col px-4 py-12 max-w-md mx-auto">
      <Link href="/" className="text-zinc-500 text-sm mb-8 block">← Zurück</Link>
      <div className="mb-8">
        <div className="text-4xl mb-3">🚊</div>
        <h1 className="text-3xl font-bold">VRN Survival Mode</h1>
        <p className="text-zinc-500 mt-2 text-sm">Meistere den öffentlichen Nahverkehr in Mannheim.</p>
      </div>
      <div className="space-y-3">
        {scenarios.map((scenario) => (
          <Link key={scenario.id} href={`/vrn/${scenario.id}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4 active:scale-95 transition-transform">
              <span className="text-4xl">{scenario.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-white text-lg leading-tight">{scenario.title}</div>
                <div className="text-zinc-500 text-sm mt-0.5">{scenario.setting}</div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${levelColours[scenario.level]}`}>
                {scenario.level}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
