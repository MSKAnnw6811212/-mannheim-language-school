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
  // ─── A1 ───────────────────────────────────────────────────────
  {
    id: 'ticket-kaufen',
    title: 'Ein Ticket kaufen',
    emoji: '🎫',
    setting: 'Hauptbahnhof Mannheim — Fahrkartenschalter',
    level: 'A1',
    steps: [
      { type: 'scene', emoji: '🚉', text: 'Du bist am Hauptbahnhof Mannheim. Du möchtest nach Heidelberg fahren. Ein Mitarbeiter wartet am Schalter.', translation: 'You are at Mannheim Central Station. You want to travel to Heidelberg. An employee is waiting at the counter.' },
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '👨‍💼', text: 'Guten Tag! Was darf es sein?', translation: 'Good day! What can I do for you?' },
      { type: 'choice', options: [
        { text: 'Einmal nach Heidelberg, bitte.', translation: 'One ticket to Heidelberg, please.', correct: true, feedback: 'Perfekt! "Einmal nach [Ort], bitte" is the standard way to ask for a single ticket.' },
        { text: 'Heidelberg! Ticket! Schnell!', translation: 'Heidelberg! Ticket! Fast!', correct: false, feedback: 'Too abrupt. Always use "bitte" and a complete sentence.' },
        { text: 'Ich will fahren Heidelberg.', translation: 'I want drive Heidelberg.', correct: false, feedback: 'The verb order is wrong. Say "Ich möchte nach Heidelberg fahren, bitte."' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '👨‍💼', text: 'Einfache Fahrt oder Hin- und Rückfahrt?', translation: 'Single journey or return trip?' },
      { type: 'choice', options: [
        { text: 'Einfache Fahrt, bitte.', translation: 'Single journey, please.', correct: true, feedback: '"Einfache Fahrt" = single. "Hin- und Rückfahrt" = return. Good use of bitte!' },
        { text: 'Nur einmal. Nicht zweimal.', translation: 'Only once. Not twice.', correct: false, feedback: 'Technically understandable but unnatural. Use "Einfache Fahrt, bitte."' },
        { text: 'Ja, bitte.', translation: 'Yes, please.', correct: false, feedback: '"Ja" alone is ambiguous here — you need to specify which option.' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '👨‍💼', text: 'Das macht 5,40 Euro, bitte.', translation: 'That comes to €5.40, please.' },
      { type: 'choice', options: [
        { text: 'Hier, bitte. Vielen Dank!', translation: 'Here you go. Thank you very much!', correct: true, feedback: '"Hier, bitte" when handing something over, plus "Vielen Dank" — polite and natural.' },
        { text: 'Warum so teuer?', translation: 'Why so expensive?', correct: false, feedback: 'Relatable, but impolite! For questions try "Entschuldigung, ist das der normale Preis?"' },
        { text: 'OK. Danke.', translation: 'OK. Thanks.', correct: false, feedback: '"Danke" works but "Vielen Dank" sounds more natural and warm in this context.' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '👨‍💼', text: 'Bitte schön! Gute Fahrt nach Heidelberg!', translation: 'Here you go! Have a good trip to Heidelberg!' },
    ],
  },
  {
    id: 'verspaetung',
    title: 'Zugverspätung',
    emoji: '⏱️',
    setting: 'Hauptbahnhof Mannheim — Gleis 3',
    level: 'A1',
    steps: [
      { type: 'scene', emoji: '😤', text: 'Du stehst auf Gleis 3. Es ist 10:05 Uhr. Dein Zug sollte um 10:00 Uhr fahren. Eine Durchsage beginnt...', translation: 'You are on Platform 3. It is 10:05. Your train was supposed to leave at 10:00. An announcement begins...' },
      { type: 'npc', speaker: 'Lautsprecher', speakerEmoji: '📢', text: 'Achtung! Der RE 4 nach Karlsruhe hat heute voraussichtlich 20 Minuten Verspätung. Wir bitten um Entschuldigung.', translation: 'Attention! The RE 4 to Karlsruhe is expected to be 20 minutes late. We apologise for the inconvenience.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, wissen Sie warum der Zug Verspätung hat?', translation: 'Excuse me, do you know why the train is delayed?', correct: true, feedback: 'Great! "Entschuldigung" to get attention, "wissen Sie" for polite "do you know" — very natural.' },
        { text: 'Verspätung?! Das ist unmöglich!', translation: 'A delay?! That\'s impossible!', correct: false, feedback: 'Relatable, but not useful German! Try asking a practical question instead.' },
        { text: 'Wo ist mein Zug?', translation: 'Where is my train?', correct: false, feedback: 'You already know from the announcement. Ask why, or ask about alternatives.' },
      ]},
      { type: 'npc', speaker: 'Reisender', speakerEmoji: '🧑', text: 'Es gibt eine Streckenstörung bei Mannheim-Waldhof. Der Zug kommt von dort.', translation: 'There\'s a track disruption near Mannheim-Waldhof. The train is coming from there.' },
      { type: 'choice', options: [
        { text: 'Ah, ich verstehe. Vielen Dank für die Information!', translation: 'Ah, I understand. Thank you very much for the information!', correct: true, feedback: '"Ich verstehe" = I understand. "Vielen Dank für die Information" is a very useful phrase.' },
        { text: 'Ich verstehe nicht.', translation: 'I don\'t understand.', correct: false, feedback: 'If genuine, say "Könnten Sie das bitte wiederholen?" (Could you repeat that?)' },
        { text: 'Das ist nicht gut.', translation: 'That\'s not good.', correct: false, feedback: 'True, but not very communicative! Thank them for the info instead.' },
      ]},
      { type: 'npc', speaker: 'Reisender', speakerEmoji: '🧑', text: 'Kein Problem! Gute Reise!', translation: 'No problem! Have a good journey!' },
    ],
  },
  {
    id: 'strassenbahn',
    title: 'Straßenbahn finden',
    emoji: '🚊',
    setting: 'Haltestelle Wasserturm, Mannheim',
    level: 'A1',
    steps: [
      { type: 'scene', emoji: '🗼', text: 'Du stehst am Wasserturm. Du möchtest zum Hauptbahnhof fahren, weißt aber nicht, welche Linie du nehmen sollst.', translation: 'You are at the Wasserturm. You want to go to the main station but don\'t know which tram line to take.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, welche Straßenbahn fährt zum Hauptbahnhof?', translation: 'Excuse me, which tram goes to the main station?', correct: true, feedback: 'Perfect! "Welche Straßenbahn fährt zum [Ort]?" is the key transit question to memorise.' },
        { text: 'Hauptbahnhof? Welcher Bus?', translation: 'Main station? Which bus?', correct: false, feedback: 'The Straßenbahn (tram) is the right word here, not Bus. Also use a full sentence!' },
        { text: 'Ich bin verloren.', translation: 'I am lost.', correct: false, feedback: 'You know where you want to go! Ask specifically: "Welche Linie fährt zum Hauptbahnhof?"' },
      ]},
      { type: 'npc', speaker: 'Passantin', speakerEmoji: '👩', text: 'Die Linie 1 fährt direkt zum Hauptbahnhof. Die hält hier in zwei Minuten.', translation: 'Line 1 goes directly to the main station. It stops here in two minutes.' },
      { type: 'choice', options: [
        { text: 'Super, danke! Richtung Schönau oder Rheinau?', translation: 'Great, thanks! Towards Schönau or Rheinau?', correct: true, feedback: 'Excellent! You used real Mannheim VRN destinations. "Richtung [Endstation]?" is exactly how locals ask.' },
        { text: 'Danke. Tschüss.', translation: 'Thanks. Bye.', correct: false, feedback: 'Confirm the direction first! Line 1 runs both ways — you could board the wrong one.' },
        { text: 'Linie Eins? Warum nicht Linie Zwei?', translation: 'Line One? Why not Line Two?', correct: false, feedback: 'Trust the local! Line 1 does go to the Hauptbahnhof from the Wasserturm.' },
      ]},
      { type: 'npc', speaker: 'Passantin', speakerEmoji: '👩', text: 'Richtung Schönau! Die Straßenbahn kommt gerade — da ist sie!', translation: 'Towards Schönau! The tram is just coming — there it is!' },
      { type: 'choice', options: [
        { text: 'Perfekt! Vielen Dank für Ihre Hilfe!', translation: 'Perfect! Thank you very much for your help!', correct: true, feedback: '"Vielen Dank für Ihre Hilfe" = Thank you very much for your help. A polite, natural ending!' },
        { text: 'Ja. OK.', translation: 'Yes. OK.', correct: false, feedback: 'A bit abrupt! Show appreciation — "Vielen Dank!" at minimum.' },
        { text: 'Ich muss jetzt gehen.', translation: 'I have to go now.', correct: false, feedback: 'True, but thank them first: "Danke sehr! Auf Wiedersehen!"' },
      ]},
    ],
  },

  // ─── A2 ───────────────────────────────────────────────────────
  {
    id: 'streik',
    title: 'Warnstreik heute',
    emoji: '🚫',
    setting: 'Hauptbahnhof Mannheim — Informationsschalter',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '📢', text: 'Es ist Montagmorgen. Die RNV streikt heute. Alle Straßenbahnen und Busse fallen aus. Du brauchst dringend Informationen, um zur Arbeit zu kommen.', translation: 'It\'s Monday morning. The RNV is on strike today. All trams and buses are cancelled. You urgently need information to get to work.' },
      { type: 'npc', speaker: 'Lautsprecher', speakerEmoji: '📢', text: 'Achtung: Aufgrund eines ganztägigen Warnstreiks der RNV fallen heute alle Straßenbahn- und Buslinien aus. Schienenersatzverkehr wird eingerichtet.', translation: 'Attention: Due to an all-day warning strike by RNV, all tram and bus services are cancelled today. Replacement bus services are being set up.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, wo fährt der Ersatzbus ab?', translation: 'Excuse me, where does the replacement bus depart from?', correct: true, feedback: '"Ersatzbus" or "SEV-Bus" (Schienenersatzverkehr) — essential strike vocabulary. Good practical question!' },
        { text: 'Das ist doch nicht möglich! Ich beschwere mich!', translation: 'That can\'t be right! I\'m going to complain!', correct: false, feedback: 'Understandable frustration, but not practical right now. Find your route first.' },
        { text: 'Wann ist der Streik vorbei?', translation: 'When is the strike over?', correct: false, feedback: 'Reasonable, but you need to get somewhere now! Ask about the replacement bus first.' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiterin', speakerEmoji: '👩‍💼', text: 'Der SEV-Bus hält direkt vor dem Haupteingang, Ausgang West. Die Busse fahren ungefähr alle 15 Minuten zu den wichtigsten Haltestellen.', translation: 'The SEV bus stops right in front of the main entrance, West exit. Buses run approximately every 15 minutes to the main stops.' },
      { type: 'choice', options: [
        { text: 'Fährt der Bus auch zum Wasserturm?', translation: 'Does the bus also go to the Wasserturm?', correct: true, feedback: 'Specific, practical question. "Fährt der Bus auch nach/zum [Ort]?" is exactly the right structure.' },
        { text: 'Ja, danke.', translation: 'Yes, thanks.', correct: false, feedback: 'Get more specific info first! Ask where the bus goes before heading to the exit.' },
        { text: 'Warum streiken die eigentlich?', translation: 'Why are they actually striking?', correct: false, feedback: 'Interesting question for later — right now you have a bus to catch!' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiterin', speakerEmoji: '👩‍💼', text: 'Ja, der Bus hält am Wasserturm. Schauen Sie auf die Anzeigentafel draußen — dort steht der aktuelle Fahrplan.', translation: 'Yes, the bus stops at the Wasserturm. Check the display board outside — the current timetable is there.' },
      { type: 'choice', options: [
        { text: 'Vielen Dank für Ihre Hilfe! Das ist sehr nett von Ihnen.', translation: 'Thank you very much for your help! That\'s very kind of you.', correct: true, feedback: '"Das ist sehr nett von Ihnen" adds warmth to your thanks. A great phrase to have ready.' },
        { text: 'OK, ich schaue nach.', translation: 'OK, I\'ll check.', correct: false, feedback: 'Functional, but cold. In German culture, a warm "Vielen Dank" goes a long way.' },
        { text: 'Wissen Sie, ob der Streik morgen auch noch gilt?', translation: 'Do you know if the strike applies tomorrow too?', correct: false, feedback: 'Smart to ask, but thank them first! "Danke — und noch eine kurze Frage..."' },
      ]},
    ],
  },
  {
    id: 'kontrolle',
    title: 'Fahrkartenkontrolle',
    emoji: '🎟️',
    setting: 'Straßenbahn Linie 1 — Richtung Hauptbahnhof',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '😰', text: 'Du fährst mit der Linie 1. Ein Kontrolleur kommt durch die Bahn. Du hast eine gültige Tageskarte — aber du hast vergessen, sie zu entwerten.', translation: 'You\'re on Line 1. A ticket inspector is coming through the tram. You have a valid day ticket — but you forgot to validate it.' },
      { type: 'npc', speaker: 'Kontrolleur', speakerEmoji: '🕵️', text: 'Guten Tag. Fahrkartenkontrolle. Darf ich Ihre Fahrkarte sehen?', translation: 'Good day. Ticket inspection. May I see your ticket?' },
      { type: 'choice', options: [
        { text: 'Ja, natürlich. Einen Moment, ich suche sie kurz.', translation: 'Yes, of course. One moment, let me just find it.', correct: true, feedback: 'Calm and cooperative — exactly right. "Einen Moment" buys you time politely.' },
        { text: 'Was wollen Sie von mir?', translation: 'What do you want from me?', correct: false, feedback: 'This sounds aggressive and will make the situation worse. Stay calm and cooperative.' },
        { text: 'Ich habe keine Fahrkarte.', translation: 'I don\'t have a ticket.', correct: false, feedback: 'You DO have one! Never admit to not having a ticket if you do.' },
      ]},
      { type: 'npc', speaker: 'Kontrolleur', speakerEmoji: '🕵️', text: 'Ihre Fahrkarte ist nicht entwertet. Das gilt leider als Schwarzfahren und kostet 60 Euro erhöhtes Beförderungsentgelt.', translation: 'Your ticket has not been validated. Unfortunately this counts as fare evasion and costs €60 as an increased transport fee.' },
      { type: 'choice', options: [
        { text: 'Das tut mir sehr leid — ich habe es vergessen. Kann ich die Karte jetzt noch entwerten?', translation: 'I\'m very sorry — I forgot. Can I validate the card now?', correct: true, feedback: 'Honest and apologetic. "Das tut mir leid" + explaining is the best approach. It won\'t waive the fine, but it\'s the right tone.' },
        { text: 'Das ist unfair! Ich habe eine gültige Karte!', translation: 'That\'s unfair! I have a valid card!', correct: false, feedback: 'The rule exists for a reason. Arguing makes things worse — apologise and accept the process.' },
        { text: 'Ich weiß nicht, was "entwertet" bedeutet.', translation: 'I don\'t know what "validated" means.', correct: false, feedback: 'Could work if true, but it\'s better to apologise directly and ask what happens next.' },
      ]},
      { type: 'npc', speaker: 'Kontrolleur', speakerEmoji: '🕵️', text: 'Leider nicht mehr. Das Entwerten muss beim Einsteigen erfolgen. Ich brauche jetzt Ihren Ausweis für das Protokoll.', translation: 'Unfortunately not anymore. Validation must happen when boarding. I now need your ID for the report.' },
      { type: 'choice', options: [
        { text: 'Verstehe. Hier ist mein Ausweis. Wie kann ich das Bußgeld bezahlen?', translation: 'I understand. Here is my ID. How can I pay the fine?', correct: true, feedback: '"Wie kann ich bezahlen?" — cooperative and practical. You\'ll receive a payment slip. "Bußgeld" = fine.' },
        { text: 'Nein, meinen Ausweis gebe ich Ihnen nicht.', translation: 'No, I won\'t give you my ID.', correct: false, feedback: 'Inspectors have the right to check your ID. Refusing escalates the situation significantly.' },
        { text: 'Kann ich das Bußgeld sofort in bar zahlen?', translation: 'Can I pay the fine immediately in cash?', correct: false, feedback: 'Reasonable later, but hand over your ID first as requested.' },
      ]},
    ],
  },
  {
    id: 'anschluss',
    title: 'Anschluss verpasst',
    emoji: '🏃',
    setting: 'Hauptbahnhof Mannheim — Gleis 6',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '😱', text: 'Du bist gerade am Hauptbahnhof angekommen, aber dein Anschlusszug nach Frankfurt ist genau vor deiner Nase abgefahren.', translation: 'You\'ve just arrived at the main station, but your connecting train to Frankfurt just left right before your eyes.' },
      { type: 'npc', speaker: 'DB-Mitarbeiter', speakerEmoji: '👷', text: 'Kann ich Ihnen helfen?', translation: 'Can I help you?' },
      { type: 'choice', options: [
        { text: 'Ja, bitte. Ich habe meinen Anschluss nach Frankfurt verpasst. Wann fährt der nächste Zug?', translation: 'Yes, please. I\'ve missed my connection to Frankfurt. When does the next train go?', correct: true, feedback: '"Ich habe meinen Anschluss verpasst" — key travel vocabulary. Clear and direct.' },
        { text: 'Der Zug ist weg! Was mache ich jetzt?', translation: 'The train is gone! What do I do now?', correct: false, feedback: 'Be specific. "Ich habe meinen Anschluss nach [Ort] verpasst" gives them the info they need to help.' },
        { text: 'Wegen der Verspätung habe ich den Zug verpasst. Ich möchte eine Entschädigung.', translation: 'Because of the delay I missed the train. I want compensation.', correct: false, feedback: 'If a delay caused it you may be entitled to compensation — but first find the next train!' },
      ]},
      { type: 'npc', speaker: 'DB-Mitarbeiter', speakerEmoji: '👷', text: 'Der nächste ICE nach Frankfurt Hauptbahnhof fährt in 18 Minuten von Gleis 4. Ihre Fahrkarte gilt auch für diesen Zug.', translation: 'The next ICE to Frankfurt Central Station departs in 18 minutes from Platform 4. Your ticket is also valid for this train.' },
      { type: 'choice', options: [
        { text: 'Super. Komme ich damit noch rechtzeitig zu meinem Termin um 16 Uhr an?', translation: 'Great. Will I still arrive in time for my 4pm appointment?', correct: true, feedback: '"Komme ich rechtzeitig an?" = Will I arrive in time? Very natural follow-up.' },
        { text: 'Warum hat der Zug Verspätung gehabt?', translation: 'Why was the train delayed?', correct: false, feedback: 'You can ask later. Right now, confirm you\'ll make your appointment!' },
        { text: 'Gleis 4? Wo ist das?', translation: 'Platform 4? Where is that?', correct: false, feedback: '"Wo ist Gleis 4?" is useful, but first confirm you can make your appointment — that\'s the key info.' },
      ]},
      { type: 'npc', speaker: 'DB-Mitarbeiter', speakerEmoji: '👷', text: 'Sie kommen um 15:47 Uhr in Frankfurt an. Das sollte reichen. Gleis 4 ist rechts, zweite Unterführung.', translation: 'You arrive in Frankfurt at 15:47. That should be enough time. Platform 4 is to the right, second underpass.' },
      { type: 'choice', options: [
        { text: 'Perfekt, vielen Dank! Sie haben mir sehr geholfen.', translation: 'Perfect, thank you very much! You\'ve helped me a lot.', correct: true, feedback: '"Sie haben mir sehr geholfen" = You\'ve helped me a lot. A warm, natural sign-off.' },
        { text: 'OK.', translation: 'OK.', correct: false, feedback: 'A missed opportunity! "Vielen Dank für Ihre Hilfe" costs nothing and leaves a great impression.' },
        { text: 'Können Sie das aufschreiben?', translation: 'Can you write that down?', correct: false, feedback: 'You could ask, but it\'s faster to just remember "Gleis 4, rechts". You have 18 minutes — go!' },
      ]},
    ],
  },
];
