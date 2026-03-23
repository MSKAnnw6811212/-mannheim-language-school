import Link from 'next/link';

const features = [
  {
    href: '/marktplatz',
    emoji: '🛒',
    title: 'Marktplatz Sprint',
    subtitle: 'Meistere der, die, das',
    active: true,
  },
  {
    href: '#',
    emoji: '🚊',
    title: 'VRN Survival Mode',
    subtitle: 'Transit-Deutsch',
    active: false,
  },
  {
    href: '#',
    emoji: '🗺️',
    title: 'Quadrate Navigator',
    subtitle: 'Richtungen spielen',
    active: false,
  },
  {
    href: '#',
    emoji: '🎤',
    title: 'Audio-Bestellung',
    subtitle: 'Sprich Deutsch',
    active: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center px-4 py-16 max-w-md mx-auto">
      <div className="text-center mb-12">
        <div className="text-6xl mb-5">🏫</div>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          Mannheim<br />Deutsch
        </h1>
        <p className="text-zinc-500 mt-3 text-base">Dein Deutsch. Deine Stadt.</p>
      </div>

      <div className="w-full space-y-3">
        {features.map((f) =>
          f.active ? (
            <Link key={f.title} href={f.href}>
              <div className="bg-amber-500 rounded-2xl p-5 flex items-center gap-4 active:scale-95 transition-transform duration-100 shadow-lg shadow-amber-500/20">
                <span className="text-4xl">{f.emoji}</span>
                <div className="flex-1">
                  <div className="font-bold text-black text-lg leading-tight">{f.title}</div>
                  <div className="text-black/60 text-sm mt-0.5">{f.subtitle}</div>
                </div>
                <span className="text-black/70 text-xl font-light">›</span>
              </div>
            </Link>
          ) : (
            <div key={f.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4">
              <span className="text-4xl opacity-40">{f.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-zinc-500 text-lg leading-tight">{f.title}</div>
                <div className="text-zinc-600 text-sm mt-0.5">{f.subtitle}</div>
              </div>
              <span className="text-zinc-600 text-xs font-medium bg-zinc-800 px-2 py-1 rounded-full">Bald</span>
            </div>
          )
        )}
      </div>
    </main>
  );
}
