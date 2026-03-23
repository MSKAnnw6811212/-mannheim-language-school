export interface OrderScenario {
  id: string;
  emoji: string;
  setting: string;      // location context
  prompt: string;       // English instruction shown to learner
  targetPhrase: string; // German phrase they should say
  keywords: string[];   // lowercase words that must appear in transcript
  level: 'A1' | 'A2';
}

export const orders: OrderScenario[] = [
  // ── A1: Simple single-item orders ──
  {
    id: 'kaffee',
    emoji: '☕',
    setting: 'Café am Wasserturm',
    prompt: 'Order a coffee',
    targetPhrase: 'Einen Kaffee, bitte.',
    keywords: ['kaffee'],
    level: 'A1',
  },
  {
    id: 'weck',
    emoji: '🍞',
    setting: 'Bäckerei in der Innenstadt',
    prompt: 'Order a bread roll',
    targetPhrase: 'Einen Weck, bitte.',
    keywords: ['weck'],
    level: 'A1',
  },
  {
    id: 'wasser',
    emoji: '💧',
    setting: 'Restaurant am Paradeplatz',
    prompt: 'Order a glass of water',
    targetPhrase: 'Ein Wasser, bitte.',
    keywords: ['wasser'],
    level: 'A1',
  },
  {
    id: 'rechnung',
    emoji: '🧾',
    setting: 'Restaurant im Quadrat C4',
    prompt: 'Ask for the bill',
    targetPhrase: 'Die Rechnung, bitte.',
    keywords: ['rechnung'],
    level: 'A1',
  },

  // ── A2: Multi-item orders and questions ──
  {
    id: 'kaffee-brezel',
    emoji: '☕',
    setting: 'Café neben dem Schloss',
    prompt: 'Order a coffee and a pretzel',
    targetPhrase: 'Einen Kaffee und eine Brezel, bitte.',
    keywords: ['kaffee', 'brezel'],
    level: 'A2',
  },
  {
    id: 'schnitzel-bier',
    emoji: '🍖',
    setting: 'Biergarten am Neckar',
    prompt: 'Order a schnitzel and a beer',
    targetPhrase: 'Ein Schnitzel und ein Bier, bitte.',
    keywords: ['schnitzel', 'bier'],
    level: 'A2',
  },
  {
    id: 'spargel',
    emoji: '🌱',
    setting: 'Markt am Quadrat E5',
    prompt: 'Ask if they have asparagus',
    targetPhrase: 'Haben Sie Spargel?',
    keywords: ['spargel'],
    level: 'A2',
  },
  {
    id: 'empfehlung',
    emoji: '👨‍🍳',
    setting: 'Restaurant in der Kunststraße',
    prompt: 'Ask what they recommend',
    targetPhrase: 'Was empfehlen Sie?',
    keywords: ['empfehlen'],
    level: 'A2',
  },
];
