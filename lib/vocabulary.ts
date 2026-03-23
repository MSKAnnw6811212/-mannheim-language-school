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

  // ══════════════════════════════════════════════════
  // A1 — 45 cards
  // ══════════════════════════════════════════════════

  // Food & Drink
  { id: 1,  word: 'Weck',        article: 'der', emoji: '🍞', english: 'bread roll (Mannheim word)',  level: 'A1' },
  { id: 2,  word: 'Brezel',      article: 'die', emoji: '🥨', english: 'pretzel',                     level: 'A1' },
  { id: 3,  word: 'Brot',        article: 'das', emoji: '🍞', english: 'bread',                       level: 'A1' },
  { id: 4,  word: 'Kaffee',      article: 'der', emoji: '☕', english: 'coffee',                      level: 'A1' },
  { id: 5,  word: 'Milch',       article: 'die', emoji: '🥛', english: 'milk',                        level: 'A1' },
  { id: 6,  word: 'Wasser',      article: 'das', emoji: '💧', english: 'water',                       level: 'A1' },
  { id: 7,  word: 'Apfel',       article: 'der', emoji: '🍎', english: 'apple',                       level: 'A1' },
  { id: 8,  word: 'Banane',      article: 'die', emoji: '🍌', english: 'banana',                      level: 'A1' },
  { id: 9,  word: 'Käse',        article: 'der', emoji: '🧀', english: 'cheese',                      level: 'A1' },
  { id: 10, word: 'Wurst',       article: 'die', emoji: '🌭', english: 'sausage',                     level: 'A1' },

  // Mannheim & Transit
  { id: 11, word: 'Bahnhof',     article: 'der', emoji: '🚉', english: 'train station',               level: 'A1' },
  { id: 12, word: 'Straßenbahn', article: 'die', emoji: '🚊', english: 'tram',                        level: 'A1' },
  { id: 13, word: 'Ticket',      article: 'das', emoji: '🎫', english: 'ticket',                      level: 'A1' },
  { id: 14, word: 'Markt',       article: 'der', emoji: '🏪', english: 'market',                      level: 'A1' },
  { id: 15, word: 'Straße',      article: 'die', emoji: '🛣️',  english: 'street',                     level: 'A1' },
  { id: 16, word: 'Schloss',     article: 'das', emoji: '🏰', english: 'palace (Mannheim castle)',    level: 'A1' },
  { id: 17, word: 'Kirche',      article: 'die', emoji: '⛪', english: 'church',                      level: 'A1' },
  { id: 18, word: 'Stadt',       article: 'die', emoji: '🏙️', english: 'city / town',                level: 'A1' },

  // Home
  { id: 31, word: 'Haus',        article: 'das', emoji: '🏠', english: 'house',                       level: 'A1' },
  { id: 32, word: 'Wohnung',     article: 'die', emoji: '🏢', english: 'apartment / flat',            level: 'A1' },
  { id: 33, word: 'Zimmer',      article: 'das', emoji: '🛋️', english: 'room',                        level: 'A1' },
  { id: 34, word: 'Küche',       article: 'die', emoji: '🍳', english: 'kitchen',                     level: 'A1' },
  { id: 35, word: 'Bett',        article: 'das', emoji: '🛏️', english: 'bed',                         level: 'A1' },
  { id: 36, word: 'Tisch',       article: 'der', emoji: '🪑', english: 'table',                       level: 'A1' },
  { id: 37, word: 'Fenster',     article: 'das', emoji: '🪟', english: 'window',                      level: 'A1' },
  { id: 38, word: 'Tür',         article: 'die', emoji: '🚪', english: 'door',                        level: 'A1' },

  // Family & People
  { id: 39, word: 'Mutter',      article: 'die', emoji: '👩', english: 'mother',                      level: 'A1' },
  { id: 40, word: 'Vater',       article: 'der', emoji: '👨', english: 'father',                      level: 'A1' },
  { id: 41, word: 'Kind',        article: 'das', emoji: '👶', english: 'child',                       level: 'A1' },
  { id: 42, word: 'Bruder',      article: 'der', emoji: '👦', english: 'brother',                     level: 'A1' },
  { id: 43, word: 'Schwester',   article: 'die', emoji: '👧', english: 'sister',                      level: 'A1' },
  { id: 44, word: 'Mann',        article: 'der', emoji: '🧑', english: 'man / husband',               level: 'A1' },

  // Animals
  { id: 45, word: 'Hund',        article: 'der', emoji: '🐕', english: 'dog',                         level: 'A1' },
  { id: 46, word: 'Katze',       article: 'die', emoji: '🐈', english: 'cat',                         level: 'A1' },

  // School & Objects
  { id: 47, word: 'Schule',      article: 'die', emoji: '🏫', english: 'school',                      level: 'A1' },
  { id: 48, word: 'Buch',        article: 'das', emoji: '📚', english: 'book',                        level: 'A1' },
  { id: 49, word: 'Telefon',     article: 'das', emoji: '📱', english: 'phone',                       level: 'A1' },
  { id: 50, word: 'Uhr',         article: 'die', emoji: '⏰', english: 'clock / watch',               level: 'A1' },

  // Time & Weather
  { id: 51, word: 'Tag',         article: 'der', emoji: '📅', english: 'day',                         level: 'A1' },
  { id: 52, word: 'Nacht',       article: 'die', emoji: '🌙', english: 'night',                       level: 'A1' },
  { id: 53, word: 'Sonne',       article: 'die', emoji: '☀️', english: 'sun',                         level: 'A1' },
  { id: 54, word: 'Regen',       article: 'der', emoji: '🌧️', english: 'rain',                        level: 'A1' },

  // More Transport
  { id: 55, word: 'Bus',         article: 'der', emoji: '🚌', english: 'bus',                         level: 'A1' },
  { id: 56, word: 'Fahrrad',     article: 'das', emoji: '🚲', english: 'bicycle',                     level: 'A1' },
  { id: 57, word: 'Geld',        article: 'das', emoji: '💰', english: 'money',                       level: 'A1' },

  // ══════════════════════════════════════════════════
  // A2 — 55 cards
  // ══════════════════════════════════════════════════

  // Food & Dining
  { id: 19, word: 'Spargel',          article: 'der', emoji: '🌱', english: 'asparagus',              level: 'A2' },
  { id: 20, word: 'Schnitzel',        article: 'das', emoji: '🍖', english: 'schnitzel',              level: 'A2' },
  { id: 21, word: 'Currywurst',       article: 'die', emoji: '🍛', english: 'currywurst',             level: 'A2' },
  { id: 22, word: 'Bier',             article: 'das', emoji: '🍺', english: 'beer',                   level: 'A2' },
  { id: 23, word: 'Wein',             article: 'der', emoji: '🍷', english: 'wine',                   level: 'A2' },
  { id: 24, word: 'Saft',             article: 'der', emoji: '🧃', english: 'juice',                  level: 'A2' },
  { id: 58, word: 'Restaurant',       article: 'das', emoji: '🍽️', english: 'restaurant',             level: 'A2' },
  { id: 59, word: 'Speisekarte',      article: 'die', emoji: '📋', english: 'menu',                   level: 'A2' },
  { id: 60, word: 'Trinkgeld',        article: 'das', emoji: '🪙', english: 'tip / gratuity',         level: 'A2' },
  { id: 61, word: 'Frühstück',        article: 'das', emoji: '🥐', english: 'breakfast',              level: 'A2' },
  { id: 62, word: 'Mittagessen',      article: 'das', emoji: '🍜', english: 'lunch',                  level: 'A2' },
  { id: 63, word: 'Abendessen',       article: 'das', emoji: '🍽️', english: 'dinner',                 level: 'A2' },
  { id: 64, word: 'Suppe',            article: 'die', emoji: '🍲', english: 'soup',                   level: 'A2' },
  { id: 65, word: 'Kuchen',           article: 'der', emoji: '🎂', english: 'cake',                   level: 'A2' },
  { id: 66, word: 'Salat',            article: 'der', emoji: '🥗', english: 'salad',                  level: 'A2' },

  // Mannheim & Local
  { id: 25, word: 'Wasserturm',       article: 'der', emoji: '🗼', english: 'water tower (landmark)', level: 'A2' },
  { id: 26, word: 'Quadrat',          article: 'das', emoji: '⬛', english: 'city block (grid system)',level: 'A2' },
  { id: 27, word: 'Zug',              article: 'der', emoji: '🚆', english: 'train',                  level: 'A2' },
  { id: 28, word: 'Gleis',            article: 'das', emoji: '🛤️',  english: 'platform / track',      level: 'A2' },
  { id: 29, word: 'Apotheke',         article: 'die', emoji: '💊', english: 'pharmacy',               level: 'A2' },
  { id: 30, word: 'Supermarkt',       article: 'der', emoji: '🛒', english: 'supermarket',            level: 'A2' },
  { id: 67, word: 'Planken',          article: 'die', emoji: '🛍️', english: 'Mannheim main shopping street', level: 'A2' },
  { id: 68, word: 'Neckar',           article: 'der', emoji: '🏞️', english: 'Neckar river',           level: 'A2' },
  { id: 69, word: 'Rhein',            article: 'der', emoji: '🌊', english: 'Rhine river',            level: 'A2' },
  { id: 70, word: 'Park',             article: 'der', emoji: '🌳', english: 'park',                   level: 'A2' },
  { id: 71, word: 'Schwimmbad',       article: 'das', emoji: '🏊', english: 'swimming pool',          level: 'A2' },
  { id: 72, word: 'Bibliothek',       article: 'die', emoji: '📚', english: 'library',                level: 'A2' },

  // Transport & Travel
  { id: 73, word: 'Auto',             article: 'das', emoji: '🚗', english: 'car',                    level: 'A2' },
  { id: 74, word: 'Parkplatz',        article: 'der', emoji: '🅿️', english: 'parking space',          level: 'A2' },
  { id: 75, word: 'Ampel',            article: 'die', emoji: '🚦', english: 'traffic light',          level: 'A2' },
  { id: 76, word: 'Urlaub',           article: 'der', emoji: '🏖️', english: 'holiday / vacation',     level: 'A2' },
  { id: 77, word: 'Hotel',            article: 'das', emoji: '🏨', english: 'hotel',                  level: 'A2' },
  { id: 78, word: 'Koffer',           article: 'der', emoji: '🧳', english: 'suitcase',               level: 'A2' },
  { id: 79, word: 'Flugzeug',         article: 'das', emoji: '✈️', english: 'airplane',               level: 'A2' },

  // Health & Appointments
  { id: 80, word: 'Krankenhaus',      article: 'das', emoji: '🏥', english: 'hospital',               level: 'A2' },
  { id: 81, word: 'Arzt',             article: 'der', emoji: '👨‍⚕️', english: 'doctor',                level: 'A2' },
  { id: 82, word: 'Rezept',           article: 'das', emoji: '💊', english: 'prescription / recipe',  level: 'A2' },
  { id: 83, word: 'Termin',           article: 'der', emoji: '📅', english: 'appointment',            level: 'A2' },
  { id: 84, word: 'Versicherung',     article: 'die', emoji: '🛡️', english: 'insurance',              level: 'A2' },

  // Work & Shopping
  { id: 85, word: 'Beruf',            article: 'der', emoji: '💼', english: 'profession / job',       level: 'A2' },
  { id: 86, word: 'Arbeit',           article: 'die', emoji: '🏢', english: 'work',                   level: 'A2' },
  { id: 87, word: 'Chef',             article: 'der', emoji: '👔', english: 'boss',                   level: 'A2' },
  { id: 88, word: 'Gehalt',           article: 'das', emoji: '💰', english: 'salary',                 level: 'A2' },
  { id: 89, word: 'Kreditkarte',      article: 'die', emoji: '💳', english: 'credit card',            level: 'A2' },
  { id: 90, word: 'Kasse',            article: 'die', emoji: '🛒', english: 'checkout / cash register',level: 'A2' },
  { id: 91, word: 'Einkaufszentrum',  article: 'das', emoji: '🏬', english: 'shopping centre',        level: 'A2' },

  // Communication & Media
  { id: 92, word: 'Brief',            article: 'der', emoji: '✉️', english: 'letter',                 level: 'A2' },
  { id: 93, word: 'Post',             article: 'die', emoji: '📬', english: 'post office / mail',     level: 'A2' },
  { id: 94, word: 'Paket',            article: 'das', emoji: '📦', english: 'parcel / package',       level: 'A2' },
  { id: 95, word: 'Zeitung',          article: 'die', emoji: '📰', english: 'newspaper',              level: 'A2' },

  // Everyday
  { id: 96, word: 'Frage',            article: 'die', emoji: '❓', english: 'question',               level: 'A2' },
  { id: 97, word: 'Antwort',          article: 'die', emoji: '💬', english: 'answer',                 level: 'A2' },
  { id: 98, word: 'Problem',          article: 'das', emoji: '😕', english: 'problem',                level: 'A2' },
  { id: 99, word: 'Lösung',           article: 'die', emoji: '✅', english: 'solution',               level: 'A2' },
  { id: 100,word: 'Kurs',             article: 'der', emoji: '🎓', english: 'course / class',         level: 'A2' },

  // ══════════════════════════════════════════════════
  // B1 — 50 cards
  // ══════════════════════════════════════════════════

  // Renting & Housing
  { id: 101, word: 'Mietvertrag',          article: 'der', emoji: '📄', english: 'rental contract',           level: 'B1' },
  { id: 102, word: 'Nebenkosten',          article: 'die', emoji: '💡', english: 'utilities / running costs (pl.)', level: 'B1' },
  { id: 103, word: 'Vermieter',            article: 'der', emoji: '🔑', english: 'landlord',                   level: 'B1' },
  { id: 104, word: 'Kaution',              article: 'die', emoji: '💰', english: 'security deposit',           level: 'B1' },
  { id: 105, word: 'Kündigung',            article: 'die', emoji: '📨', english: 'notice / termination',       level: 'B1' },
  { id: 106, word: 'Miete',               article: 'die', emoji: '🏠', english: 'rent',                        level: 'B1' },
  { id: 107, word: 'Wohngemeinschaft',     article: 'die', emoji: '🏠', english: 'shared flat (WG)',           level: 'B1' },
  { id: 108, word: 'Mitbewohner',          article: 'der', emoji: '🧑', english: 'flatmate / housemate',       level: 'B1' },
  { id: 109, word: 'Umzug',               article: 'der', emoji: '📦', english: 'move / relocation',          level: 'B1' },
  { id: 110, word: 'Makler',              article: 'der', emoji: '🏘️', english: 'estate agent',               level: 'B1' },
  { id: 111, word: 'Heizung',             article: 'die', emoji: '🔥', english: 'heating',                    level: 'B1' },
  { id: 112, word: 'Strom',               article: 'der', emoji: '⚡', english: 'electricity',                level: 'B1' },

  // Official Documents & Bureaucracy
  { id: 113, word: 'Personalausweis',      article: 'der', emoji: '🪪', english: 'ID card',                   level: 'B1' },
  { id: 114, word: 'Reisepass',            article: 'der', emoji: '🛂', english: 'passport',                  level: 'B1' },
  { id: 115, word: 'Aufenthaltserlaubnis', article: 'die', emoji: '📋', english: 'residence permit',          level: 'B1' },
  { id: 116, word: 'Einwohnermeldeamt',    article: 'das', emoji: '🏛️', english: 'registration office',       level: 'B1' },
  { id: 117, word: 'Finanzamt',            article: 'das', emoji: '💼', english: 'tax office',                level: 'B1' },
  { id: 118, word: 'Bürgeramt',            article: 'das', emoji: '🏛️', english: 'citizens\' office',          level: 'B1' },
  { id: 119, word: 'Antrag',              article: 'der', emoji: '📋', english: 'application / request',      level: 'B1' },
  { id: 120, word: 'Formular',            article: 'das', emoji: '📝', english: 'form',                       level: 'B1' },
  { id: 121, word: 'Genehmigung',         article: 'die', emoji: '✅', english: 'permit / approval',          level: 'B1' },
  { id: 122, word: 'Bescheinigung',       article: 'die', emoji: '📄', english: 'official certificate',       level: 'B1' },

  // Health & Insurance
  { id: 123, word: 'Krankenversicherung',  article: 'die', emoji: '🏥', english: 'health insurance',          level: 'B1' },
  { id: 124, word: 'Krankenkasse',         article: 'die', emoji: '💊', english: 'health insurance fund',     level: 'B1' },
  { id: 125, word: 'Krankschreibung',      article: 'die', emoji: '📋', english: 'sick note',                 level: 'B1' },
  { id: 126, word: 'Arzttermin',           article: 'der', emoji: '🩺', english: 'doctor\'s appointment',     level: 'B1' },
  { id: 127, word: 'Praxis',              article: 'die', emoji: '🏥', english: 'doctor\'s surgery',          level: 'B1' },
  { id: 128, word: 'Symptom',             article: 'das', emoji: '🤒', english: 'symptom',                    level: 'B1' },
  { id: 129, word: 'Diagnose',            article: 'die', emoji: '🩻', english: 'diagnosis',                  level: 'B1' },
  { id: 130, word: 'Medikament',          article: 'das', emoji: '💊', english: 'medication',                 level: 'B1' },

  // Work & Career
  { id: 131, word: 'Bewerbung',           article: 'die', emoji: '📝', english: 'job application',            level: 'B1' },
  { id: 132, word: 'Lebenslauf',          article: 'der', emoji: '📋', english: 'CV / résumé',                level: 'B1' },
  { id: 133, word: 'Vorstellungsgespräch',article: 'das', emoji: '🤝', english: 'job interview',              level: 'B1' },
  { id: 134, word: 'Ausbildung',          article: 'die', emoji: '🎓', english: 'apprenticeship / training',  level: 'B1' },
  { id: 135, word: 'Feierabend',          article: 'der', emoji: '🎉', english: 'end of the working day',     level: 'B1' },
  { id: 136, word: 'Arbeitsstelle',       article: 'die', emoji: '💼', english: 'job / position',             level: 'B1' },
  { id: 137, word: 'Vertrag',             article: 'der', emoji: '📄', english: 'contract',                   level: 'B1' },
  { id: 138, word: 'Gewerkschaft',        article: 'die', emoji: '🤝', english: 'trade union',                level: 'B1' },

  // Education
  { id: 139, word: 'Studium',             article: 'das', emoji: '📚', english: 'university studies',         level: 'B1' },
  { id: 140, word: 'Abschluss',           article: 'der', emoji: '🎓', english: 'qualification / degree',     level: 'B1' },
  { id: 141, word: 'Zeugnis',             article: 'das', emoji: '📜', english: 'certificate / report',       level: 'B1' },
  { id: 142, word: 'Volkshochschule',     article: 'die', emoji: '🏫', english: 'adult education centre (VHS)',level: 'B1' },

  // Finance & Banking
  { id: 143, word: 'Steuer',              article: 'die', emoji: '💰', english: 'tax',                        level: 'B1' },
  { id: 144, word: 'Steuererklärung',     article: 'die', emoji: '📝', english: 'tax return',                 level: 'B1' },
  { id: 145, word: 'Girokonto',           article: 'das', emoji: '🏦', english: 'current account',            level: 'B1' },
  { id: 146, word: 'Überweisung',         article: 'die', emoji: '💸', english: 'bank transfer',              level: 'B1' },
  { id: 147, word: 'Kredit',              article: 'der', emoji: '💵', english: 'loan / credit',              level: 'B1' },
  { id: 148, word: 'Konto',              article: 'das', emoji: '🏦', english: 'bank account',                level: 'B1' },
  { id: 149, word: 'Beitrag',             article: 'der', emoji: '💵', english: 'contribution / membership fee', level: 'B1' },
  { id: 150, word: 'Einkommen',           article: 'das', emoji: '💰', english: 'income / earnings',          level: 'B1' },
];
