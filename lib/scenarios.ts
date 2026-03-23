export interface Option {
  text: string;
  translation: string;
  correct: boolean;
  feedback: string;
}

export type Step =
  | { type: 'scene'; text: string; translation: string; emoji: string }
  | { type: 'npc'; speaker: string; speakerEmoji: string; text: string; translation: string }
  | { type: 'choice'; options: Option[] };

export interface Scenario {
  id: string;
  title: string;
  emoji: string;
  setting: string;
  level: 'A1' | 'A2' | 'B1';
  steps: Step[];
}

export const scenarios: Scenario[] = [
  {
    id: 'ticket-kaufen',
    title: 'Ein Ticket kaufen',
    emoji: '🎫',
    setting: 'Hauptbahnhof Mannheim — Fahrkartenschalter',
    level: 'A1',
    steps: [
      {
        type: 'scene',
        emoji: '🚉',
        text: 'Du bist am Hauptbahnhof Mannheim. Du möchtest nach Heidelberg fahren. Ein Mitarbeiter wartet am Schalter.',
        translation: 'You are at Mannheim Central Station. You want to travel to Heidelberg. An employee is waiting at the counter.',
      },
      {
        type: 'npc',
        speaker: 'Mitarbeiter',
        speakerEmoji: '👨‍💼',
        text: 'Guten Tag! Was darf es sein?',
        translation: 'Good day! What can I do for you?',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Einmal nach Heidelberg, bitte.',
            translation: 'One ticket to Heidelberg, please.',
            correct: true,
            feedback: 'Perfekt! "Einmal nach [Ort], bitte" is the standard way to ask for a single ticket.',
          },
          {
            text: 'Heidelberg! Ticket! Schnell!',
            translation: 'Heidelberg! Ticket! Fast!',
            correct: false,
            feedback: 'Too abrupt. Always use "bitte" and a complete sentence.',
          },
          {
            text: 'Ich will fahren Heidelberg.',
            translation: 'I want drive Heidelberg.',
            correct: false,
            feedback: 'The verb order is wrong. Say "Ich möchte nach Heidelberg fahren, bitte."',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Mitarbeiter',
        speakerEmoji: '👨‍💼',
        text: 'Einfache Fahrt oder Hin- und Rückfahrt?',
        translation: 'Single journey or return trip?',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Einfache Fahrt, bitte.',
            translation: 'Single journey, please.',
            correct: true,
            feedback: '"Einfache Fahrt" = single. "Hin- und Rückfahrt" = return. Good use of bitte!',
          },
          {
            text: 'Nur einmal. Nicht zweimal.',
            translation: 'Only once. Not twice.',
            correct: false,
            feedback: 'Technically understandable but not natural. Use "Einfache Fahrt, bitte."',
          },
          {
            text: 'Ja, bitte.',
            translation: 'Yes, please.',
            correct: false,
            feedback: '"Ja" alone is ambiguous — you need to say which option you want.',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Mitarbeiter',
        speakerEmoji: '👨‍💼',
        text: 'Das macht 5,40 Euro, bitte.',
        translation: 'That comes to €5.40, please.',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Hier, bitte. Vielen Dank!',
            translation: 'Here you go. Thank you very much!',
            correct: true,
            feedback: '"Hier, bitte" when handing something over, plus "Vielen Dank" — polite and natural.',
          },
          {
            text: 'Warum so teuer?',
            translation: 'Why so expensive?',
            correct: false,
            feedback: 'Relatable, but impolite! For questions try "Entschuldigung, ist das der normale Preis?"',
          },
          {
            text: 'OK. Danke.',
            translation: 'OK. Thanks.',
            correct: false,
            feedback: '"Danke" works but "Vielen Dank" sounds more natural and warm in this context.',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Mitarbeiter',
        speakerEmoji: '👨‍💼',
        text: 'Bitte schön! Gute Fahrt nach Heidelberg!',
        translation: 'Here you go! Have a good trip to Heidelberg!',
      },
    ],
  },
  {
    id: 'verspaetung',
    title: 'Zugverspätung',
    emoji: '⏱️',
    setting: 'Hauptbahnhof Mannheim — Gleis 3',
    level: 'A1',
    steps: [
      {
        type: 'scene',
        emoji: '😤',
        text: 'Du stehst auf Gleis 3. Es ist 10:05 Uhr. Dein Zug sollte um 10:00 Uhr fahren. Eine Durchsage beginnt...',
        translation: 'You are on Platform 3. It is 10:05. Your train was supposed to leave at 10:00. An announcement begins...',
      },
      {
        type: 'npc',
        speaker: 'Lautsprecher',
        speakerEmoji: '📢',
        text: 'Achtung! Der RE 4 nach Karlsruhe hat heute voraussichtlich 20 Minuten Verspätung. Wir bitten um Entschuldigung.',
        translation: 'Attention! The RE 4 to Karlsruhe is expected to be 20 minutes late. We apologise for the inconvenience.',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Entschuldigung, wissen Sie warum der Zug Verspätung hat?',
            translation: 'Excuse me, do you know why the train is delayed?',
            correct: true,
            feedback: 'Great! "Entschuldigung" to get attention, "wissen Sie" for polite "do you know" — very natural.',
          },
          {
            text: 'Verspätung?! Das ist unmöglich!',
            translation: 'A delay?! That\'s impossible!',
            correct: false,
            feedback: 'Relatable, but not useful German! Try asking a practical question instead.',
          },
          {
            text: 'Wo ist mein Zug?',
            translation: 'Where is my train?',
            correct: false,
            feedback: 'You already know from the announcement. Ask why, or ask about alternatives.',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Reisender',
        speakerEmoji: '🧑',
        text: 'Es gibt eine Streckenstörung bei Mannheim-Waldhof. Der Zug kommt von dort.',
        translation: 'There\'s a track disruption near Mannheim-Waldhof. The train is coming from there.',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Ah, ich verstehe. Vielen Dank für die Information!',
            translation: 'Ah, I understand. Thank you very much for the information!',
            correct: true,
            feedback: '"Ich verstehe" = I understand. "Vielen Dank für die Information" is a very useful phrase.',
          },
          {
            text: 'Ich verstehe nicht.',
            translation: 'I don\'t understand.',
            correct: false,
            feedback: 'If you genuinely don\'t understand, say "Könnten Sie das bitte wiederholen?" (Could you repeat that?)',
          },
          {
            text: 'Das ist nicht gut.',
            translation: 'That\'s not good.',
            correct: false,
            feedback: 'True, but not very communicative! Thank them for the info instead.',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Reisender',
        speakerEmoji: '🧑',
        text: 'Kein Problem! Gute Reise!',
        translation: 'No problem! Have a good journey!',
      },
    ],
  },
  {
    id: 'strassenbahn',
    title: 'Straßenbahn finden',
    emoji: '🚊',
    setting: 'Haltestelle Wasserturm, Mannheim',
    level: 'A1',
    steps: [
      {
        type: 'scene',
        emoji: '🗼',
        text: 'Du stehst am Wasserturm. Du möchtest zum Hauptbahnhof fahren, weißt aber nicht, welche Linie du nehmen sollst.',
        translation: 'You are at the Wasserturm. You want to go to the main station but don\'t know which tram line to take.',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Entschuldigung, welche Straßenbahn fährt zum Hauptbahnhof?',
            translation: 'Excuse me, which tram goes to the main station?',
            correct: true,
            feedback: 'Perfect! "Welche Straßenbahn fährt zum [Ort]?" is the key transit question to memorise.',
          },
          {
            text: 'Hauptbahnhof? Welcher Bus?',
            translation: 'Main station? Which bus?',
            correct: false,
            feedback: 'The Straßenbahn (tram) is the right word here, not Bus. Also use a full sentence!',
          },
          {
            text: 'Ich bin verloren.',
            translation: 'I am lost.',
            correct: false,
            feedback: 'You know where you want to go! Ask specifically: "Welche Linie fährt zum Hauptbahnhof?"',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Passantin',
        speakerEmoji: '👩',
        text: 'Die Linie 1 fährt direkt zum Hauptbahnhof. Die hält hier in zwei Minuten.',
        translation: 'Line 1 goes directly to the main station. It stops here in two minutes.',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Super, danke! Richtung Schönau oder Rheinau?',
            translation: 'Great, thanks! Towards Schönau or Rheinau?',
            correct: true,
            feedback: 'Excellent! You used real Mannheim VRN destinations. "Richtung [Endstation]?" is exactly how locals ask.',
          },
          {
            text: 'Danke. Tschüss.',
            translation: 'Thanks. Bye.',
            correct: false,
            feedback: 'Confirm the direction first! Line 1 runs both ways — you could board the wrong one.',
          },
          {
            text: 'Linie Eins? Warum nicht Linie Zwei?',
            translation: 'Line One? Why not Line Two?',
            correct: false,
            feedback: 'Trust the local! Line 1 does go to the Hauptbahnhof from the Wasserturm.',
          },
        ],
      },
      {
        type: 'npc',
        speaker: 'Passantin',
        speakerEmoji: '👩',
        text: 'Richtung Schönau! Die Straßenbahn kommt gerade — da ist sie!',
        translation: 'Towards Schönau! The tram is just coming — there it is!',
      },
      {
        type: 'choice',
        options: [
          {
            text: 'Perfekt! Vielen Dank für Ihre Hilfe!',
            translation: 'Perfect! Thank you very much for your help!',
            correct: true,
            feedback: '"Vielen Dank für Ihre Hilfe" = Thank you very much for your help. A polite, natural ending!',
          },
          {
            text: 'Ja. OK.',
            translation: 'Yes. OK.',
            correct: false,
            feedback: 'A bit abrupt! Show appreciation — "Vielen Dank!" at minimum.',
          },
          {
            text: 'Ich muss jetzt gehen.',
            translation: 'I have to go now.',
            correct: false,
            feedback: 'True, but thank them first: "Danke sehr! Auf Wiedersehen!"',
          },
        ],
      },
    ],
  },
];
