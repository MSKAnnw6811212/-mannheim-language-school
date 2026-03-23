export type Article = 'der' | 'die' | 'das';
export type Level = 'A1' | 'A2' | 'B1';

export interface VocabCard {
  id: number;
  word: string;
  article: Article;
  emoji: string;
  english: string;
  level: Level;
}

export const vocabulary: VocabCard[] = [
  // A1 — Bakery & Food
  { id: 1,  word: 'Weck',        article: 'der', emoji: '🍞', english: 'bread roll (Mannheim)', level: 'A1' },
  { id: 2,  word: 'Brezel',      article: 'die', emoji: '🥨', english: 'pretzel',                level: 'A1' },
  { id: 3,  word: 'Brot',        article: 'das', emoji: '🍞', english: 'bread',                  level: 'A1' },
  { id: 4,  word: 'Kaffee',      article: 'der', emoji: '☕', english: 'coffee',                 level: 'A1' },
  { id: 5,  word: 'Milch',       article: 'die', emoji: '🥛', english: 'milk',                   level: 'A1' },
  { id: 6,  word: 'Wasser',      article: 'das', emoji: '💧', english: 'water',                  level: 'A1' },
  { id: 7,  word: 'Apfel',       article: 'der', emoji: '🍎', english: 'apple',                  level: 'A1' },
  { id: 8,  word: 'Banane',      article: 'die', emoji: '🍌', english: 'banana',                 level: 'A1' },
  { id: 9,  word: 'Käse',        article: 'der', emoji: '🧀', english: 'cheese',                 level: 'A1' },
  { id: 10, word: 'Wurst',       article: 'die', emoji: '🌭', english: 'sausage',                level: 'A1' },
  // A1 — Mannheim & Transit
  { id: 11, word: 'Bahnhof',     article: 'der', emoji: '🚉', english: 'train station',          level: 'A1' },
  { id: 12, word: 'Straßenbahn', article: 'die', emoji: '🚊', english: 'tram',                   level: 'A1' },
  { id: 13, word: 'Ticket',      article: 'das', emoji: '🎫', english: 'ticket',                 level: 'A1' },
  { id: 14, word: 'Markt',       article: 'der', emoji: '🏪', english: 'market',                 level: 'A1' },
  { id: 15, word: 'Straße',      article: 'die', emoji: '🛣️',  english: 'street',                level: 'A1' },
  { id: 16, word: 'Schloss',     article: 'das', emoji: '🏰', english: 'palace (Mannheim)',      level: 'A1' },
  { id: 17, word: 'Kirche',      article: 'die', emoji: '⛪', english: 'church',                 level: 'A1' },
  { id: 18, word: 'Stadt',       article: 'die', emoji: '🏙️', english: 'city',                  level: 'A1' },
  // A2 — Food & Drink
  { id: 19, word: 'Spargel',     article: 'der', emoji: '🌱', english: 'asparagus',              level: 'A2' },
  { id: 20, word: 'Schnitzel',   article: 'das', emoji: '🍖', english: 'schnitzel',              level: 'A2' },
  { id: 21, word: 'Currywurst',  article: 'die', emoji: '🍛', english: 'currywurst',             level: 'A2' },
  { id: 22, word: 'Bier',        article: 'das', emoji: '🍺', english: 'beer',                   level: 'A2' },
  { id: 23, word: 'Wein',        article: 'der', emoji: '🍷', english: 'wine',                   level: 'A2' },
  { id: 24, word: 'Saft',        article: 'der', emoji: '🧃', english: 'juice',                  level: 'A2' },
  // A2 — Mannheim specific
  { id: 25, word: 'Wasserturm',  article: 'der', emoji: '🗼', english: 'water tower',            level: 'A2' },
  { id: 26, word: 'Quadrat',     article: 'das', emoji: '⬛', english: 'city block',             level: 'A2' },
  { id: 27, word: 'Zug',         article: 'der', emoji: '🚆', english: 'train',                  level: 'A2' },
  { id: 28, word: 'Gleis',       article: 'das', emoji: '🛤️',  english: 'platform / track',      level: 'A2' },
  { id: 29, word: 'Apotheke',    article: 'die', emoji: '💊', english: 'pharmacy',               level: 'A2' },
  { id: 30, word: 'Supermarkt',  article: 'der', emoji: '🛒', english: 'supermarket',            level: 'A2' },
];
