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

  {
    id: 'haltestelle-fragen',
    title: 'Wo ist die Haltestelle?',
    emoji: '🚏',
    setting: 'Innenstadt Mannheim — Nähe Paradeplatz',
    level: 'A1',
    steps: [
      { type: 'scene', emoji: '🗺️', text: 'Du bist in der Innenstadt und möchtest zum Marktplatz. Du siehst keine Haltestelle. Ein älterer Herr steht in der Nähe.', translation: 'You are in the city centre and want to get to the Marktplatz. You can\'t see a stop. An elderly man is nearby.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, wo ist die nächste Haltestelle bitte?', translation: 'Excuse me, where is the nearest stop, please?', correct: true, feedback: '"Die nächste Haltestelle" = the nearest stop. Adding "bitte" is always polite and natural.' },
        { text: 'Haltestelle? Wo?', translation: 'Stop? Where?', correct: false, feedback: 'Too short and abrupt. Use a full sentence: "Entschuldigung, wo ist die Haltestelle?"' },
        { text: 'Ich suche den Bus.', translation: 'I am looking for the bus.', correct: false, feedback: 'Not specific enough. Ask directly: "Wo ist die nächste Haltestelle?"' },
      ]},
      { type: 'npc', speaker: 'Herr Klein', speakerEmoji: '👴', text: 'Die nächste Haltestelle ist am Paradeplatz, das ist etwa zwei Minuten zu Fuß geradeaus.', translation: 'The nearest stop is at Paradeplatz, that\'s about two minutes on foot straight ahead.' },
      { type: 'choice', options: [
        { text: 'Vielen Dank! Und welche Linie fährt zum Marktplatz?', translation: 'Thank you very much! And which line goes to the Marktplatz?', correct: true, feedback: 'Great follow-up! You thanked him and asked the next logical question.' },
        { text: 'OK danke.', translation: 'OK thanks.', correct: false, feedback: 'You still need to know which line to take! Ask: "Welche Linie fährt zum Marktplatz?"' },
        { text: 'Zwei Minuten? Das ist weit.', translation: 'Two minutes? That\'s far.', correct: false, feedback: 'Two minutes is very close! And it doesn\'t help you find the right tram.' },
      ]},
      { type: 'npc', speaker: 'Herr Klein', speakerEmoji: '👴', text: 'Zum Marktplatz? Da nehmen Sie die Linie 2 Richtung Neuostheim. Die fährt direkt dahin.', translation: 'To the Marktplatz? Take Line 2 towards Neuostheim. It goes directly there.' },
      { type: 'choice', options: [
        { text: 'Perfekt, vielen Dank! Auf Wiedersehen!', translation: 'Perfect, thank you very much! Goodbye!', correct: true, feedback: '"Auf Wiedersehen" is the polite formal goodbye — perfect here with a stranger.' },
        { text: 'Danke. Tschüss!', translation: 'Thanks. Bye!', correct: false, feedback: '"Tschüss" is informal. With a stranger (Sie-form), "Auf Wiedersehen" is more appropriate.' },
        { text: 'Linie 2? Sicher?', translation: 'Line 2? Are you sure?', correct: false, feedback: 'Don\'t doubt a local! Just say thank you and head to the stop.' },
      ]},
    ],
  },

  {
    id: 'fahrkartenautomat',
    title: 'Am Fahrkartenautomat',
    emoji: '🎰',
    setting: 'Haltestelle Hauptbahnhof — Fahrkartenautomat',
    level: 'A1',
    steps: [
      { type: 'scene', emoji: '🤔', text: 'Du stehst vor dem Fahrkartenautomat. Du möchtest ein Einzelticket kaufen, aber der Automat ist kompliziert. Eine junge Frau steht daneben.', translation: 'You are standing at the ticket machine. You want to buy a single ticket, but the machine is complicated. A young woman is standing next to it.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, können Sie mir helfen? Ich möchte ein Einzelticket kaufen.', translation: 'Excuse me, can you help me? I want to buy a single ticket.', correct: true, feedback: '"Können Sie mir helfen?" = Can you help me? Always a useful phrase. Clear and polite.' },
        { text: 'Dieser Automat ist kaputt!', translation: 'This machine is broken!', correct: false, feedback: 'It might not be broken — you just need help. Ask politely first.' },
        { text: 'Wie funktioniert das?', translation: 'How does this work?', correct: false, feedback: 'This works, but it\'s better to say what you need first: "Ich möchte ein Einzelticket kaufen."' },
      ]},
      { type: 'npc', speaker: 'Junge Frau', speakerEmoji: '👩', text: 'Natürlich! Drücken Sie zuerst auf "Einzelfahrt", dann wählen Sie Ihr Ziel.', translation: 'Of course! Press "single journey" first, then select your destination.' },
      { type: 'choice', options: [
        { text: 'Danke schön! Und wo bezahle ich?', translation: 'Thank you! And where do I pay?', correct: true, feedback: '"Danke schön" = Thank you very much. Following up with the next step shows good communication.' },
        { text: 'Ich verstehe nicht.', translation: 'I don\'t understand.', correct: false, feedback: 'If you genuinely don\'t understand, say "Können Sie das bitte wiederholen?" and point at the screen.' },
        { text: 'OK.', translation: 'OK.', correct: false, feedback: 'You still need to know where to pay! Ask: "Und wo kann ich zahlen?"' },
      ]},
      { type: 'npc', speaker: 'Junge Frau', speakerEmoji: '👩', text: 'Unten rechts. Sie können bar oder mit Karte zahlen.', translation: 'Bottom right. You can pay in cash or by card.' },
      { type: 'choice', options: [
        { text: 'Wunderbar! Vielen Dank für Ihre Hilfe!', translation: 'Wonderful! Thank you very much for your help!', correct: true, feedback: '"Wunderbar!" is a great reaction word. "Vielen Dank für Ihre Hilfe" is the ideal sign-off.' },
        { text: 'Bar oder Karte... ich nehme Karte.', translation: 'Cash or card... I\'ll take card.', correct: false, feedback: 'Correct decision, but thank her first before you start pressing buttons!' },
        { text: 'Danke.', translation: 'Thanks.', correct: false, feedback: 'A bit minimal! "Vielen Dank" or "Danke schön" shows more appreciation.' },
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
        { text: 'Das tut mir sehr leid — ich habe es vergessen. Kann ich die Karte jetzt noch entwerten?', translation: 'I\'m very sorry — I forgot. Can I validate the card now?', correct: true, feedback: 'Honest and apologetic. "Das tut mir leid" + explaining is the best approach.' },
        { text: 'Das ist unfair! Ich habe eine gültige Karte!', translation: 'That\'s unfair! I have a valid card!', correct: false, feedback: 'The rule exists for a reason. Arguing makes things worse — apologise and accept the process.' },
        { text: 'Ich weiß nicht, was "entwertet" bedeutet.', translation: 'I don\'t know what "validated" means.', correct: false, feedback: 'Could work if true, but it\'s better to apologise directly.' },
      ]},
      { type: 'npc', speaker: 'Kontrolleur', speakerEmoji: '🕵️', text: 'Leider nicht mehr. Das Entwerten muss beim Einsteigen erfolgen. Ich brauche jetzt Ihren Ausweis für das Protokoll.', translation: 'Unfortunately not anymore. Validation must happen when boarding. I now need your ID for the report.' },
      { type: 'choice', options: [
        { text: 'Verstehe. Hier ist mein Ausweis. Wie kann ich das Bußgeld bezahlen?', translation: 'I understand. Here is my ID. How can I pay the fine?', correct: true, feedback: '"Wie kann ich bezahlen?" — cooperative and practical. "Bußgeld" = fine.' },
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
        { text: 'Der Zug ist weg! Was mache ich jetzt?', translation: 'The train is gone! What do I do now?', correct: false, feedback: 'Be specific. "Ich habe meinen Anschluss nach [Ort] verpasst" gives them the info they need.' },
        { text: 'Wegen der Verspätung habe ich den Zug verpasst. Ich möchte eine Entschädigung.', translation: 'Because of the delay I missed the train. I want compensation.', correct: false, feedback: 'If a delay caused it you may be entitled — but first find the next train!' },
      ]},
      { type: 'npc', speaker: 'DB-Mitarbeiter', speakerEmoji: '👷', text: 'Der nächste ICE nach Frankfurt Hauptbahnhof fährt in 18 Minuten von Gleis 4. Ihre Fahrkarte gilt auch für diesen Zug.', translation: 'The next ICE to Frankfurt Central Station departs in 18 minutes from Platform 4. Your ticket is also valid for this train.' },
      { type: 'choice', options: [
        { text: 'Super. Komme ich damit noch rechtzeitig zu meinem Termin um 16 Uhr an?', translation: 'Great. Will I still arrive in time for my 4pm appointment?', correct: true, feedback: '"Komme ich rechtzeitig an?" = Will I arrive in time? Very natural follow-up.' },
        { text: 'Warum hat der Zug Verspätung gehabt?', translation: 'Why was the train delayed?', correct: false, feedback: 'You can ask later. Right now, confirm you\'ll make your appointment!' },
        { text: 'Gleis 4? Wo ist das?', translation: 'Platform 4? Where is that?', correct: false, feedback: '"Wo ist Gleis 4?" is useful, but first confirm you can make your appointment.' },
      ]},
      { type: 'npc', speaker: 'DB-Mitarbeiter', speakerEmoji: '👷', text: 'Sie kommen um 15:47 Uhr in Frankfurt an. Das sollte reichen. Gleis 4 ist rechts, zweite Unterführung.', translation: 'You arrive in Frankfurt at 15:47. That should be enough time. Platform 4 is to the right, second underpass.' },
      { type: 'choice', options: [
        { text: 'Perfekt, vielen Dank! Sie haben mir sehr geholfen.', translation: 'Perfect, thank you very much! You\'ve helped me a lot.', correct: true, feedback: '"Sie haben mir sehr geholfen" = You\'ve helped me a lot. A warm, natural sign-off.' },
        { text: 'OK.', translation: 'OK.', correct: false, feedback: 'A missed opportunity! "Vielen Dank für Ihre Hilfe" costs nothing and leaves a great impression.' },
        { text: 'Können Sie das aufschreiben?', translation: 'Can you write that down?', correct: false, feedback: 'You could ask, but it\'s faster to just remember "Gleis 4, rechts". You have 18 minutes — go!' },
      ]},
    ],
  },

  {
    id: 'monatskarte',
    title: 'Monatskarte kaufen',
    emoji: '🗓️',
    setting: 'RNV Kundencenter, Mannheim Hauptbahnhof',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '💳', text: 'Du fährst jeden Tag mit dem Bus und der Straßenbahn. Ein Mitarbeiter empfiehlt dir, eine Monatskarte zu kaufen, die günstiger ist.', translation: 'You travel by bus and tram every day. A staff member suggests buying a monthly pass, which is cheaper.' },
      { type: 'npc', speaker: 'Beraterin', speakerEmoji: '👩‍💼', text: 'Guten Tag! Wie kann ich Ihnen helfen?', translation: 'Good day! How can I help you?' },
      { type: 'choice', options: [
        { text: 'Ich möchte gerne eine Monatskarte für das gesamte RNV-Netz kaufen. Was kostet das?', translation: 'I\'d like to buy a monthly pass for the whole RNV network. How much does that cost?', correct: true, feedback: '"Monatskarte für das gesamte Netz" — precise and practical. Always ask about the price first.' },
        { text: 'Ich will billiger fahren.', translation: 'I want to travel cheaper.', correct: false, feedback: 'The intent is clear but vague. Be specific: "Ich möchte eine Monatskarte kaufen."' },
        { text: 'Tickets sind zu teuer.', translation: 'Tickets are too expensive.', correct: false, feedback: 'This starts a complaint, not a purchase. Ask directly about the monthly pass.' },
      ]},
      { type: 'npc', speaker: 'Beraterin', speakerEmoji: '👩‍💼', text: 'Das RNV-Monatsticket für alle Zonen kostet 89 Euro. Für Ihre Wabe — also den Stadtbereich Mannheim — kostet es 59 Euro. Haben Sie eine Kundenkarte?', translation: 'The RNV monthly ticket for all zones costs €89. For your Wabe — the Mannheim city area — it costs €59. Do you have a customer card?' },
      { type: 'choice', options: [
        { text: 'Nein, noch nicht. Wie bekomme ich eine Kundenkarte?', translation: 'No, not yet. How do I get a customer card?', correct: true, feedback: 'Good! "Noch nicht" (not yet) is better than just "nein". Asking how to get one shows initiative.' },
        { text: 'Ja, ich habe eine.', translation: 'Yes, I have one.', correct: false, feedback: 'Only say this if it\'s true! If you don\'t have one, ask how to get one.' },
        { text: '59 Euro ist immer noch teuer.', translation: '€59 is still expensive.', correct: false, feedback: 'For daily travel it\'s very cost-effective! Ask about the customer card for potential discounts.' },
      ]},
      { type: 'npc', speaker: 'Beraterin', speakerEmoji: '👩‍💼', text: 'Ich kann Ihnen hier direkt eine ausstellen. Dafür brauche ich ein Passfoto und Ihren Ausweis. Das dauert nur fünf Minuten.', translation: 'I can issue you one directly here. I\'ll need a passport photo and your ID. It only takes five minutes.' },
      { type: 'choice', options: [
        { text: 'Wunderbar! Ein Passfoto habe ich dabei. Hier ist auch mein Ausweis.', translation: 'Wonderful! I have a passport photo with me. Here is my ID too.', correct: true, feedback: '"Ein Passfoto habe ich dabei" = I have a passport photo with me. Great preparation and response!' },
        { text: 'Ich habe kein Passfoto.', translation: 'I don\'t have a passport photo.', correct: false, feedback: 'If true, ask: "Wo kann ich ein Passfoto machen?" — there are usually photo booths at the station.' },
        { text: 'Fünf Minuten? Das ist lang.', translation: 'Five minutes? That\'s long.', correct: false, feedback: 'Five minutes for a customer card is very fast! Just confirm you have the documents.' },
      ]},
    ],
  },

  {
    id: 'supermarkt',
    title: 'Im Supermarkt',
    emoji: '🛒',
    setting: 'Rewe, Quadrat P7, Mannheim',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '🥦', text: 'Du bist im REWE am Marktplatz. Du suchst Spargel, findest ihn aber nicht. Ein Mitarbeiter stapelt Waren in der Nähe.', translation: 'You are in the REWE at Marktplatz. You\'re looking for asparagus but can\'t find it. A staff member is stacking goods nearby.' },
      { type: 'choice', options: [
        { text: 'Entschuldigung, haben Sie auch weißen Spargel? Ich finde ihn leider nicht.', translation: 'Excuse me, do you have white asparagus? I\'m afraid I can\'t find it.', correct: true, feedback: '"Leider nicht" softens the statement politely. "Weißen Spargel" — white asparagus is the classic Mannheim variety!' },
        { text: 'Wo ist der Spargel?', translation: 'Where is the asparagus?', correct: false, feedback: 'Functional but abrupt. Use "Entschuldigung" and add "bitte" for a friendlier tone.' },
        { text: 'Haben Sie Gemüse?', translation: 'Do you have vegetables?', correct: false, feedback: 'Too vague — you can see the vegetables section. Ask specifically about asparagus.' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '🧑‍💼', text: 'Den weißen Spargel haben wir gerade in der Saisonabteilung, Gang 3, rechts. Aber ich glaube, wir haben nicht mehr viel — es ist kurz vor Feierabend.', translation: 'We have the white asparagus in the seasonal section right now, aisle 3, on the right. But I think we don\'t have much left — it\'s nearly closing time.' },
      { type: 'choice', options: [
        { text: 'Danke! Und wann öffnen Sie morgen? Ich komme dann lieber früher.', translation: 'Thanks! And when do you open tomorrow? I\'ll come earlier then.', correct: true, feedback: 'Smart question! "Ich komme lieber früher" = I\'d rather come earlier. Practical and natural.' },
        { text: 'OK danke.', translation: 'OK thanks.', correct: false, feedback: 'Ask about opening times while you have the chance — you want fresh asparagus tomorrow morning!' },
        { text: 'Das ist nicht gut.', translation: 'That\'s not good.', correct: false, feedback: 'Not very communicative! Ask when they restock or when they open tomorrow.' },
      ]},
      { type: 'npc', speaker: 'Mitarbeiter', speakerEmoji: '🧑‍💼', text: 'Wir öffnen morgen um 7 Uhr. Der Spargel kommt frisch vom Markt um halb acht.', translation: 'We open tomorrow at 7am. The asparagus comes fresh from the market at half past seven.' },
      { type: 'choice', options: [
        { text: 'Perfekt! Ich komme dann um 8 Uhr. Vielen Dank für den Tipp!', translation: 'Perfect! I\'ll come at 8am then. Thanks very much for the tip!', correct: true, feedback: '"Vielen Dank für den Tipp!" = Thanks for the tip! A warm, natural response that locals use often.' },
        { text: 'Sieben Uhr? So früh?', translation: 'Seven o\'clock? That early?', correct: false, feedback: 'German supermarkets open early! This is normal. Thank him for the helpful information.' },
        { text: 'Ich nehme jetzt, was noch da ist.', translation: 'I\'ll take what\'s left now.', correct: false, feedback: 'That works too — but thank him for the tip about tomorrow first!' },
      ]},
    ],
  },

  {
    id: 'apotheke',
    title: 'In der Apotheke',
    emoji: '💊',
    setting: 'Apotheke am Wasserturm, Mannheim',
    level: 'A2',
    steps: [
      { type: 'scene', emoji: '🤧', text: 'Du hast Erkältungssymptome — Husten, Schnupfen, leichtes Fieber. Du gehst in die Apotheke am Wasserturm.', translation: 'You have cold symptoms — cough, runny nose, slight fever. You go to the pharmacy at the Wasserturm.' },
      { type: 'npc', speaker: 'Apothekerin', speakerEmoji: '👩‍⚕️', text: 'Guten Tag! Was kann ich für Sie tun?', translation: 'Good day! What can I do for you?' },
      { type: 'choice', options: [
        { text: 'Guten Tag. Ich habe eine Erkältung — Husten, Schnupfen und leichtes Fieber. Können Sie mir etwas empfehlen?', translation: 'Good day. I have a cold — cough, runny nose and a slight fever. Can you recommend something?', correct: true, feedback: 'Perfect! Describing your symptoms clearly ("Husten, Schnupfen, Fieber") gives the pharmacist exactly what she needs.' },
        { text: 'Ich bin krank. Geben Sie mir ein Medikament.', translation: 'I am sick. Give me a medication.', correct: false, feedback: 'Too abrupt! Describe your symptoms first so the pharmacist can recommend the right thing.' },
        { text: 'Haben Sie etwas gegen Erkältung?', translation: 'Do you have something for a cold?', correct: false, feedback: 'This works but is vague. Mentioning your specific symptoms helps her find the best option.' },
      ]},
      { type: 'npc', speaker: 'Apothekerin', speakerEmoji: '👩‍⚕️', text: 'Ich empfehle Ihnen dieses Kombi-Präparat gegen Husten und Schnupfen. Gegen das Fieber können Sie zusätzlich Ibuprofen nehmen. Haben Sie schon Ibuprofen zu Hause?', translation: 'I recommend this combination product for cough and runny nose. For the fever you can additionally take Ibuprofen. Do you already have Ibuprofen at home?' },
      { type: 'choice', options: [
        { text: 'Nein, ich habe keines. Ich nehme beides, bitte. Wie oft muss ich das Kombi-Präparat nehmen?', translation: 'No, I don\'t have any. I\'ll take both, please. How often do I need to take the combination product?', correct: true, feedback: 'Excellent! You answered her question and asked the important follow-up about dosage. Very natural.' },
        { text: 'Ja, ich habe Ibuprofen.', translation: 'Yes, I have Ibuprofen.', correct: false, feedback: 'Good, if true! But you should still ask about the dosage for the new product.' },
        { text: 'Was kostet das alles?', translation: 'How much does all that cost?', correct: false, feedback: 'Good to ask, but first confirm you want both products and ask about dosage.' },
      ]},
      { type: 'npc', speaker: 'Apothekerin', speakerEmoji: '👩‍⚕️', text: 'Dreimal täglich nach den Mahlzeiten. Wenn das Fieber nach drei Tagen nicht besser wird, gehen Sie bitte zum Arzt.', translation: 'Three times daily after meals. If the fever doesn\'t improve after three days, please see a doctor.' },
      { type: 'choice', options: [
        { text: 'Verstanden. Vielen Dank für die Beratung!', translation: 'Understood. Thank you very much for the advice!', correct: true, feedback: '"Für die Beratung" = for the consultation/advice. Pharmacists provide expert advice — this phrase shows appreciation.' },
        { text: 'OK. Was kostet das?', translation: 'OK. How much does that cost?', correct: false, feedback: 'Thank her first! "Vielen Dank — und was kostet das zusammen?" flows much better.' },
        { text: 'Drei Tage? Das ist zu lang.', translation: 'Three days? That\'s too long.', correct: false, feedback: 'That\'s standard advice for a cold. Thank her for the recommendation before commenting.' },
      ]},
    ],
  },

  // ─── B1 ───────────────────────────────────────────────────────

  {
    id: 'einwohnermeldeamt',
    title: 'Anmeldung beim Bürgeramt',
    emoji: '🏛️',
    setting: 'Bürgeramt Mannheim — Innenstadt, Zimmer 12',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '📋', text: 'Du bist vor zwei Wochen nach Mannheim gezogen und musst dich jetzt offiziell anmelden. Du hast deinen Reisepass und den Mietvertrag dabei, aber kein spezielles Formular.', translation: 'You moved to Mannheim two weeks ago and now need to register officially. You have your passport and rental contract, but no specific form.' },
      { type: 'npc', speaker: 'Sachbearbeiterin', speakerEmoji: '👩‍💼', text: 'Guten Morgen! Womit kann ich Ihnen helfen?', translation: 'Good morning! How can I help you?' },
      { type: 'choice', options: [
        { text: 'Guten Morgen. Ich bin vor zwei Wochen nach Mannheim gezogen und möchte mich anmelden. Was brauche ich dafür?', translation: 'Good morning. I moved to Mannheim two weeks ago and would like to register. What do I need for that?', correct: true, feedback: '"Ich möchte mich anmelden" = I want to register. This is the key phrase. Asking "was brauche ich?" shows you\'re prepared.' },
        { text: 'Ich brauche eine Anmeldung.', translation: 'I need a registration.', correct: false, feedback: 'Close, but use the verb: "Ich möchte mich anmelden." This is more natural and shows you know the term.' },
        { text: 'Anmeldung bitte. Ich wohne jetzt hier.', translation: 'Registration please. I live here now.', correct: false, feedback: 'Too abrupt. Give a proper greeting and full sentence — this is an official office.' },
      ]},
      { type: 'npc', speaker: 'Sachbearbeiterin', speakerEmoji: '👩‍💼', text: 'Willkommen in Mannheim! Sie benötigen Ihren Reisepass oder Personalausweis, das ausgefüllte Anmeldeformular — das bekommen Sie am Eingang — und die Wohnungsgeberbestätigung von Ihrem Vermieter.', translation: 'Welcome to Mannheim! You need your passport or ID, the completed registration form — you can get that at the entrance — and the Wohnungsgeberbestätigung from your landlord.' },
      { type: 'choice', options: [
        { text: 'Den Reisepass und den Mietvertrag habe ich dabei. Aber was genau ist eine Wohnungsgeberbestätigung?', translation: 'I have my passport and rental contract with me. But what exactly is a Wohnungsgeberbestätigung?', correct: true, feedback: 'The Wohnungsgeberbestätigung is crucial for anyone renting in Germany. Asking what it is shows good language and life skills.' },
        { text: 'Ich habe alles dabei.', translation: 'I have everything with me.', correct: false, feedback: 'But you don\'t have the Wohnungsgeberbestätigung! Be honest and ask what you\'re missing.' },
        { text: 'Das ist sehr kompliziert.', translation: 'That is very complicated.', correct: false, feedback: 'German bureaucracy has a reputation! But just ask about the specific document you don\'t know.' },
      ]},
      { type: 'npc', speaker: 'Sachbearbeiterin', speakerEmoji: '👩‍💼', text: 'Das ist eine Bestätigung Ihres Vermieters, dass Sie bei ihm wohnen. Ihr Vermieter muss das Formular ausfüllen und unterschreiben. Ohne dieses Dokument kann ich die Anmeldung leider nicht durchführen.', translation: 'It\'s a confirmation from your landlord that you live there. Your landlord must fill in and sign the form. Without this document I\'m unfortunately unable to process the registration.' },
      { type: 'choice', options: [
        { text: 'Ich verstehe. Kann ich nächste Woche mit dem Dokument wiederkommen? Muss ich einen neuen Termin machen?', translation: 'I understand. Can I come back next week with the document? Do I need to make a new appointment?', correct: true, feedback: '"Kann ich wiederkommen?" = Can I come back? "Muss ich einen Termin machen?" is the exact right practical follow-up.' },
        { text: 'Das ist nicht fair!', translation: 'That\'s not fair!', correct: false, feedback: 'It is the law. Stay calm and ask what the next steps are.' },
        { text: 'Mein Vermieter spricht kein Deutsch.', translation: 'My landlord doesn\'t speak German.', correct: false, feedback: 'The form still needs to be completed. Ask if it\'s available in other languages, or ask about the process.' },
      ]},
    ],
  },

  {
    id: 'wohnungsbesichtigung',
    title: 'Wohnungsbesichtigung',
    emoji: '🔑',
    setting: 'Wohnung Quadrat C5, Mannheim — 3. Obergeschoss',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '🏠', text: 'Du besichtigst eine 2-Zimmer-Wohnung in der Innenstadt. Der Vermieter zeigt dir die Wohnung. Die Miete beträgt 850 Euro warm.', translation: 'You are viewing a 2-room apartment in the city centre. The landlord is showing you around. The rent is €850 warm (all-inclusive).' },
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑‍💼', text: 'Willkommen! Das ist also die Wohnung — 65 Quadratmeter, frisch renoviert. Die Warmmiete beträgt 850 Euro.', translation: 'Welcome! So this is the apartment — 65 square metres, freshly renovated. The warm rent is €850.' },
      { type: 'choice', options: [
        { text: 'Danke! Sind in der Warmmiete alle Nebenkosten enthalten — also Heizung, Wasser und Strom?', translation: 'Thanks! Are all the running costs included in the warm rent — so heating, water and electricity?', correct: true, feedback: 'Excellent question! In Germany, "warm" usually includes heating but NOT electricity. Always clarify what\'s included.' },
        { text: 'Okay, ich nehme die Wohnung.', translation: 'OK, I\'ll take the apartment.', correct: false, feedback: 'Way too fast! You don\'t even know what\'s included in the rent. Ask detailed questions first.' },
        { text: '850 Euro ist sehr teuer.', translation: '€850 is very expensive.', correct: false, feedback: 'Not a great start to a relationship with your potential landlord. Ask what\'s included first.' },
      ]},
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑‍💼', text: 'Heizung und Wasser sind inklusive. Strom und Internet müssen Sie selbst abschließen. Die Kaution beträgt drei Kaltmieten, also 2.100 Euro.', translation: 'Heating and water are included. Electricity and internet you need to arrange yourself. The deposit is three times the cold rent, so €2,100.' },
      { type: 'choice', options: [
        { text: 'Verstehe. Und wie lange läuft der Mietvertrag? Gibt es eine Mindestlaufzeit?', translation: 'I see. And how long does the rental contract run? Is there a minimum term?', correct: true, feedback: '"Gibt es eine Mindestlaufzeit?" — important to know before signing. Shows you understand German rental law.' },
        { text: '2.100 Euro Kaution? Das ist zu viel.', translation: '€2,100 deposit? That\'s too much.', correct: false, feedback: 'Three Kaltmieten is the legal maximum in Germany and very standard. Negotiating this would be unusual.' },
        { text: 'Kann ich früher ausziehen, wenn ich will?', translation: 'Can I move out earlier if I want?', correct: false, feedback: 'Important, but ask about the contract length first — that determines the answer.' },
      ]},
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑‍💼', text: 'Unbefristeter Mietvertrag, drei Monate Kündigungsfrist. Sie können also jederzeit mit dreimonatiger Frist kündigen.', translation: 'Open-ended rental contract, three months\' notice. So you can give notice at any time with three months\' notice.' },
      { type: 'choice', options: [
        { text: 'Das klingt fair. Ich melde mich bis Ende der Woche bei Ihnen. Könnten Sie mir Ihre Kontaktdaten geben?', translation: 'That sounds fair. I\'ll get back to you by the end of the week. Could you give me your contact details?', correct: true, feedback: '"Ich melde mich" = I\'ll be in touch. Professional and non-committal. Perfect for ending a viewing.' },
        { text: 'Gut. Wann kann ich einziehen?', translation: 'Good. When can I move in?', correct: false, feedback: 'You haven\'t committed yet! Conclude properly — "Ich melde mich" — before discussing move-in dates.' },
        { text: 'Ich brauche noch Zeit zum Nachdenken.', translation: 'I still need time to think.', correct: false, feedback: 'This is fine to say, but add "Ich melde mich bis [Datum]" — give a concrete timeline so the landlord knows.' },
      ]},
    ],
  },

  {
    id: 'bankkonto',
    title: 'Girokonto eröffnen',
    emoji: '🏦',
    setting: 'Sparkasse Mannheim — Beratungsschalter',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '💳', text: 'Du bist neu in Mannheim und brauchst ein deutsches Bankkonto. Du gehst zur Sparkasse in der Innenstadt.', translation: 'You are new to Mannheim and need a German bank account. You go to the Sparkasse in the city centre.' },
      { type: 'npc', speaker: 'Berater', speakerEmoji: '👨‍💼', text: 'Guten Tag! Was kann ich für Sie tun?', translation: 'Good day! What can I do for you?' },
      { type: 'choice', options: [
        { text: 'Guten Tag. Ich bin neu in Mannheim und möchte ein Girokonto eröffnen. Was brauche ich dafür?', translation: 'Good day. I am new to Mannheim and would like to open a current account. What do I need for that?', correct: true, feedback: '"Ich möchte ein Girokonto eröffnen" is the exact right phrase. Asking what you need shows you\'re prepared and organised.' },
        { text: 'Ich brauche ein Konto.', translation: 'I need an account.', correct: false, feedback: 'Be more specific — which type? "Ich möchte ein Girokonto eröffnen" is much clearer and more professional.' },
        { text: 'Kann ich hier ein Konto machen?', translation: 'Can I make an account here?', correct: false, feedback: '"Konto machen" is not standard. Use "ein Konto eröffnen" (to open an account).' },
      ]},
      { type: 'npc', speaker: 'Berater', speakerEmoji: '👨‍💼', text: 'Sie benötigen Ihren Reisepass oder Personalausweis, eine Meldebestätigung vom Bürgeramt und Ihre Steuer-Identifikationsnummer. Haben Sie sich schon in Mannheim angemeldet?', translation: 'You\'ll need your passport or ID, a registration confirmation from the citizens\' office, and your Tax ID number. Have you already registered in Mannheim?' },
      { type: 'choice', options: [
        { text: 'Ja, ich habe meine Meldebestätigung dabei. Die Steuer-ID habe ich noch nicht erhalten — ist das ein Problem?', translation: 'Yes, I have my registration confirmation with me. I haven\'t received my Tax ID yet — is that a problem?', correct: true, feedback: 'The Steuer-ID is sent automatically after registration. Explaining you\'ve registered but not received it yet is exactly the right answer.' },
        { text: 'Nein, ich bin noch nicht angemeldet.', translation: 'No, I haven\'t registered yet.', correct: false, feedback: 'You need to register first! Without a Meldebestätigung, most banks cannot open an account.' },
        { text: 'Ich habe alles dabei.', translation: 'I have everything with me.', correct: false, feedback: 'Only say this if it\'s true. If you\'re unsure about the Steuer-ID, ask whether it\'s required.' },
      ]},
      { type: 'npc', speaker: 'Berater', speakerEmoji: '👨‍💼', text: 'Kein Problem — die Steuer-ID können Sie nachreichen. Wären Sie an einem kostenlosen Girokonto interessiert? Das haben wir für unter 25-Jährige oder wenn Sie monatlich mindestens 700 Euro einzahlen.', translation: 'No problem — you can submit the Tax ID later. Would you be interested in a free current account? We have that for under-25s or if you deposit at least €700 monthly.' },
      { type: 'choice', options: [
        { text: 'Ja, das klingt interessant. Gibt es Kontoführungsgebühren, falls die Bedingungen nicht erfüllt sind? Und ist eine Debitkarte inklusive?', translation: 'Yes, that sounds interesting. Are there account management fees if the conditions aren\'t met? And is a debit card included?', correct: true, feedback: '"Gibt es Kontoführungsgebühren?" — essential question. "Ist eine Debitkarte inklusive?" shows you know what you need. Professional level!' },
        { text: 'Ja bitte, ich nehme das kostenlose Konto.', translation: 'Yes please, I\'ll take the free account.', correct: false, feedback: 'Before committing, ask about the conditions and what happens if you don\'t meet them.' },
        { text: 'Ich zahle nicht 700 Euro ein.', translation: 'I don\'t deposit €700.', correct: false, feedback: 'Ask first whether there\'s a monthly fee if you don\'t meet the threshold — you might still qualify.' },
      ]},
    ],
  },

  {
    id: 'arzttermin',
    title: 'Termin beim Arzt',
    emoji: '🩺',
    setting: 'Praxis Dr. Weber — Mannheim Innenstadt (Telefon)',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '📞', text: 'Du hast seit drei Tagen Halsschmerzen und Fieber über 38,5 Grad. Du rufst die Arztpraxis an, um einen Termin zu vereinbaren.', translation: 'You have had a sore throat and fever above 38.5°C for three days. You are calling the doctor\'s surgery to make an appointment.' },
      { type: 'npc', speaker: 'Arzthelferin', speakerEmoji: '👩‍⚕️', text: 'Praxis Dr. Weber, guten Morgen! Was kann ich für Sie tun?', translation: 'Dr Weber\'s surgery, good morning! What can I do for you?' },
      { type: 'choice', options: [
        { text: 'Guten Morgen. Mein Name ist [Name], ich bin Patient bei Dr. Weber. Ich habe seit drei Tagen Halsschmerzen und Fieber — könnte ich bitte so bald wie möglich einen Termin bekommen?', translation: 'Good morning. My name is [Name], I\'m a patient of Dr Weber\'s. I\'ve had a sore throat and fever for three days — could I please get an appointment as soon as possible?', correct: true, feedback: 'Excellent structure: name, patient status, symptoms, urgency. This is exactly how German medical appointments work on the phone.' },
        { text: 'Ich bin krank. Ich brauche einen Termin.', translation: 'I\'m sick. I need an appointment.', correct: false, feedback: 'Describe your symptoms! "Ich habe Halsschmerzen und Fieber" gives the receptionist the information she needs to prioritise.' },
        { text: 'Wann hat der Arzt Zeit für mich?', translation: 'When does the doctor have time for me?', correct: false, feedback: 'First introduce yourself and describe your symptoms — otherwise she can\'t judge the urgency.' },
      ]},
      { type: 'npc', speaker: 'Arzthelferin', speakerEmoji: '👩‍⚕️', text: 'Ich verstehe. Haben Sie Fieber über 39 Grad, oder ist es noch unter 39? Das ist für die Dringlichkeit wichtig.', translation: 'I understand. Is your fever above 39°C, or still under 39°C? That\'s important for the urgency.' },
      { type: 'choice', options: [
        { text: 'Gestern Abend hatte ich 38,8 Grad. Es schwankt ein bisschen, aber es geht nicht runter. Ich fühle mich sehr schlapp.', translation: 'Yesterday evening I had 38.8°C. It fluctuates a bit, but it\'s not going down. I feel very weak.', correct: true, feedback: '"Es schwankt" = it fluctuates. "Ich fühle mich schlapp" = I feel weak/run down. These are natural, useful phrases for describing illness.' },
        { text: 'Ich weiß nicht genau.', translation: 'I don\'t know exactly.', correct: false, feedback: 'If you\'ve been sick for three days, take your temperature before calling! Always have numbers ready for the receptionist.' },
        { text: 'Ungefähr 38 Grad.', translation: 'About 38°C.', correct: false, feedback: 'Good to specify, but add how you feel overall: "Ich fühle mich sehr schwach" to help her assess the urgency.' },
      ]},
      { type: 'npc', speaker: 'Arzthelferin', speakerEmoji: '👩‍⚕️', text: 'Okay. Ich kann Ihnen heute noch einen Termin um 16:30 Uhr geben. Bringen Sie bitte Ihre Krankenkassenkarte mit.', translation: 'OK. I can give you an appointment today at 4:30pm. Please bring your health insurance card.' },
      { type: 'choice', options: [
        { text: 'Wunderbar, vielen Dank! 16:30 Uhr passt mir gut. Ich bringe meine Krankenkassenkarte mit. Ich kenne die Adresse noch nicht — könnten Sie sie mir kurz nennen?', translation: 'Wonderful, thank you very much! 4:30pm works well for me. I\'ll bring my health insurance card. I don\'t know the address yet — could you tell me it quickly?', correct: true, feedback: 'Confirming the time, the card, and asking for the address all in one — efficient and polite. "Passt mir gut" = suits me well.' },
        { text: 'Ja, okay. Danke.', translation: 'Yes, OK. Thanks.', correct: false, feedback: 'If you don\'t know the address, ask now! "Wo ist die Praxis?" is essential information.' },
        { text: '16:30? Kann es nicht früher sein?', translation: '4:30pm? Can it not be earlier?', correct: false, feedback: 'If you\'re genuinely concerned about urgency, ask: "Ist das medizinisch okay, bis 16:30 zu warten?"' },
      ]},
    ],
  },

  {
    id: 'handyvertrag',
    title: 'Vertrag kündigen',
    emoji: '📱',
    setting: 'Telefonladen O2 — Breite Straße, Mannheim',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '📋', text: 'Dein Handyvertrag läuft seit zwei Jahren und du möchtest wechseln. Die Mindestvertragslaufzeit ist abgelaufen. Du gehst in den O2-Laden.', translation: 'Your phone contract has been running for two years and you want to switch. The minimum contract term has expired. You go to the O2 shop.' },
      { type: 'npc', speaker: 'Verkäufer', speakerEmoji: '🧑‍💼', text: 'Hallo! Was kann ich für Sie tun?', translation: 'Hello! What can I do for you?' },
      { type: 'choice', options: [
        { text: 'Guten Tag. Ich möchte meinen Mobilfunkvertrag kündigen. Die Mindestvertragslaufzeit ist abgelaufen und ich möchte zu einem anderen Anbieter wechseln.', translation: 'Good day. I would like to cancel my mobile contract. The minimum contract term has expired and I want to switch to another provider.', correct: true, feedback: '"Mindestvertragslaufzeit ist abgelaufen" — knowing this term shows legal awareness. "Zu einem anderen Anbieter wechseln" is the natural phrase for switching.' },
        { text: 'Kündigung bitte.', translation: 'Cancellation, please.', correct: false, feedback: 'Too abrupt for a contract cancellation. Use a full sentence and explain why.' },
        { text: 'Ich will kein O2 mehr haben.', translation: 'I don\'t want O2 anymore.', correct: false, feedback: 'This is informal and a bit rude. Use the formal phrasing: "Ich möchte meinen Vertrag kündigen."' },
      ]},
      { type: 'npc', speaker: 'Verkäufer', speakerEmoji: '🧑‍💼', text: 'Das verstehe ich. Darf ich fragen, was der Grund ist? Vielleicht kann ich Ihnen ein besseres Angebot machen, bevor Sie kündigen.', translation: 'I understand. May I ask what the reason is? Perhaps I can make you a better offer before you cancel.' },
      { type: 'choice', options: [
        { text: 'Der Preis ist mir zu hoch und ich bekomme woanders mehr Datenvolumen für weniger Geld. Aber ich bin offen für ein Angebot, wenn es deutlich besser ist.', translation: 'The price is too high for me and I can get more data for less money elsewhere. But I\'m open to an offer if it\'s significantly better.', correct: true, feedback: '"Ich bin offen für ein Angebot" = I\'m open to an offer. This is smart negotiating — you might get a better deal!' },
        { text: 'Nein danke, ich kündige.', translation: 'No thanks, I\'m cancelling.', correct: false, feedback: 'You could at least hear the offer! "Ich bin offen" is a stronger negotiating position.' },
        { text: 'Das ist meine Entscheidung.', translation: 'That\'s my decision.', correct: false, feedback: 'This sounds defensive. Explaining your reason professionally is better and might get you a deal.' },
      ]},
      { type: 'npc', speaker: 'Verkäufer', speakerEmoji: '🧑‍💼', text: 'Ich kann Ihnen einen neuen Tarif anbieten: 25 GB für 19,99 Euro monatlich, ohne neue Mindestlaufzeit. Was sagen Sie?', translation: 'I can offer you a new plan: 25 GB for €19.99 per month, with no new minimum term. What do you say?' },
      { type: 'choice', options: [
        { text: 'Das klingt interessant. Kann ich das kurz schriftlich haben, damit ich es mit meinem aktuellen Angebot vergleichen kann?', translation: 'That sounds interesting. Can I have that briefly in writing so I can compare it with my current offer?', correct: true, feedback: '"Schriftlich haben" = have it in writing. "Vergleichen" = compare. Never commit on the spot — always ask for written confirmation first.' },
        { text: 'Ja, ich nehme es!', translation: 'Yes, I\'ll take it!', correct: false, feedback: 'Don\'t decide immediately! Always compare offers. Ask for it in writing first.' },
        { text: 'Nein, ich kündige trotzdem.', translation: 'No, I\'m cancelling anyway.', correct: false, feedback: 'At least ask for the details in writing before deciding — it\'s a reasonable offer worth considering.' },
      ]},
    ],
  },

  {
    id: 'volkshochschule',
    title: 'VHS-Kurs anmelden',
    emoji: '📖',
    setting: 'VHS Mannheim — U1, Anmeldeschalter',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '🎓', text: 'Du möchtest dein Deutsch verbessern und dich für einen B2-Kurs an der Volkshochschule Mannheim anmelden. Du hast ein B1-Zertifikat.', translation: 'You want to improve your German and enrol in a B2 course at the Volkshochschule Mannheim. You have a B1 certificate.' },
      { type: 'npc', speaker: 'Kursleiterin', speakerEmoji: '👩‍🏫', text: 'Guten Tag! Wie kann ich Ihnen helfen?', translation: 'Good day! How can I help you?' },
      { type: 'choice', options: [
        { text: 'Guten Tag! Ich interessiere mich für einen Deutschkurs. Ich habe das B1-Zertifikat und möchte mein Niveau auf B2 verbessern. Haben Sie passende Kurse?', translation: 'Good day! I\'m interested in a German course. I have the B1 certificate and would like to improve my level to B2. Do you have suitable courses?', correct: true, feedback: 'Mentioning your certificate level helps the VHS find the right course immediately. "Passende Kurse" = suitable courses.' },
        { text: 'Ich suche einen Deutschkurs.', translation: 'I\'m looking for a German course.', correct: false, feedback: 'Too vague! Say your current level so they can place you in the right course.' },
        { text: 'Was für Kurse haben Sie?', translation: 'What kinds of courses do you have?', correct: false, feedback: 'Better to specify: "Ich habe B1 und suche einen B2-Kurs." Otherwise she\'ll need to ask you anyway.' },
      ]},
      { type: 'npc', speaker: 'Kursleiterin', speakerEmoji: '👩‍🏫', text: 'Wunderbar! Wir haben einen B2-Kurs, der dienstags und donnerstags von 18 bis 20 Uhr stattfindet. Der nächste Kurs beginnt am 8. April. Das Kursgeld beträgt 195 Euro pro Semester.', translation: 'Wonderful! We have a B2 course running on Tuesdays and Thursdays from 6 to 8pm. The next course starts on 8 April. The course fee is €195 per semester.' },
      { type: 'choice', options: [
        { text: 'Das klingt gut! Gibt es auch einen Intensivkurs, falls ich schneller lernen möchte? Und wie groß sind die Gruppen?', translation: 'That sounds good! Is there also an intensive course if I want to learn faster? And how large are the groups?', correct: true, feedback: 'Excellent follow-up questions! Group size matters for learning quality. Asking about intensive options shows you\'re motivated.' },
        { text: 'Gut, ich melde mich an.', translation: 'Good, I\'ll sign up.', correct: false, feedback: 'Before signing up, ask about group size and payment options — important details!' },
        { text: '195 Euro? Das ist teuer.', translation: '€195? That\'s expensive.', correct: false, feedback: 'For a semester course, that\'s actually very reasonable. Ask about what\'s included rather than complaining about price.' },
      ]},
      { type: 'npc', speaker: 'Kursleiterin', speakerEmoji: '👩‍🏫', text: 'Die Gruppen haben maximal 16 Personen. Ein Intensivkurs läuft täglich für drei Wochen — 350 Euro. Für die Anmeldung brauche ich Ihren Ausweis und das Kursgeld oder einen Nachweis der Banküberweisung.', translation: 'Groups have a maximum of 16 people. An intensive course runs daily for three weeks — €350. For registration I need your ID and the course fee or proof of bank transfer.' },
      { type: 'choice', options: [
        { text: 'Ich nehme den Abendkurs dienstags und donnerstags. Kann ich per Überweisung zahlen und Ihnen die Bestätigung per E-Mail schicken?', translation: 'I\'ll take the evening course on Tuesdays and Thursdays. Can I pay by bank transfer and send you the confirmation by email?', correct: true, feedback: '"Per Überweisung zahlen" = pay by bank transfer. Asking to send the confirmation by email is practical and shows familiarity with German processes.' },
        { text: 'Ich zahle bar. Hier.', translation: 'I\'ll pay in cash. Here.', correct: false, feedback: 'Cash works, but confirm they accept it first and ask for a receipt — "Kann ich eine Quittung bekommen?"' },
        { text: 'Ich überlege noch.', translation: 'I\'m still thinking.', correct: false, feedback: 'After getting all this information? Commit or ask one final question. "Ich melde mich morgen an" is better.' },
      ]},
    ],
  },

  {
    id: 'vermieter-heizung',
    title: 'Heizung defekt — Vermieter anrufen',
    emoji: '🔥',
    setting: 'Deine Wohnung, Quadrat B5, Mannheim (Telefonanruf)',
    level: 'B1',
    steps: [
      { type: 'scene', emoji: '🥶', text: 'Es ist Januar. Deine Heizung funktioniert seit heute Morgen nicht. Draußen sind minus vier Grad. Du rufst deinen Vermieter an.', translation: 'It\'s January. Your heating has not been working since this morning. It\'s minus four degrees outside. You call your landlord.' },
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑', text: 'Ja, hallo?', translation: 'Yes, hello?' },
      { type: 'choice', options: [
        { text: 'Guten Tag, hier spricht [Name] aus der Wohnung im 3. OG. Ich muss Ihnen leider mitteilen, dass meine Heizung seit heute Morgen komplett ausgefallen ist. Bei minus vier Grad ist das dringend.', translation: 'Good day, this is [Name] from the apartment on the 3rd floor. I\'m afraid I need to tell you that my heating has completely failed since this morning. At minus four degrees this is urgent.', correct: true, feedback: '"Ich muss Ihnen mitteilen" = I need to inform you. Mentioning the temperature underlines the urgency. This is exactly the right professional tone.' },
        { text: 'Meine Heizung ist kaputt. Kommen Sie bitte.', translation: 'My heating is broken. Please come.', correct: false, feedback: 'Too brief for a formal call. Introduce yourself, give your floor, describe the problem, and stress the urgency.' },
        { text: 'Ich habe ein Problem mit der Heizung.', translation: 'I have a problem with the heating.', correct: false, feedback: 'Better to be specific: "Die Heizung ist komplett ausgefallen" rather than "ein Problem haben".' },
      ]},
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑', text: 'Oh, das tut mir leid! Ist es in der ganzen Wohnung kalt, oder nur in einem Raum? Haben Sie schon die Thermostate überprüft?', translation: 'Oh, I\'m sorry about that! Is it cold throughout the whole apartment, or just in one room? Have you already checked the thermostats?' },
      { type: 'choice', options: [
        { text: 'Es ist in der ganzen Wohnung kalt. Die Thermostate sind auf 22 Grad eingestellt, aber die Heizkörper bleiben komplett kalt. Ich habe auch den Druckausgleich am Heizkessel geprüft — der Druck ist normal.', translation: 'It\'s cold throughout the whole apartment. The thermostats are set to 22 degrees, but the radiators remain completely cold. I also checked the pressure on the boiler — the pressure is normal.', correct: true, feedback: '"Heizkörper bleiben kalt" = radiators stay cold. Showing you\'ve already checked the basics (thermostats, pressure) is ideal — it saves the repairman a wasted trip.' },
        { text: 'Ja, alles kalt. Ich weiß nicht warum.', translation: 'Yes, everything cold. I don\'t know why.', correct: false, feedback: 'Before calling, check the thermostats and boiler pressure. Then you can give specific information.' },
        { text: 'Ich habe keine Ahnung von Heizungen.', translation: 'I have no idea about heating systems.', correct: false, feedback: 'Even without technical knowledge, you can say whether the whole flat is cold and whether the radiators are warm.' },
      ]},
      { type: 'npc', speaker: 'Vermieter', speakerEmoji: '🧑', text: 'Ich beauftrage sofort einen Heizungsnotdienst. Wären Sie morgen früh zwischen 8 und 12 Uhr zu Hause?', translation: 'I\'ll commission an emergency heating service right away. Would you be home tomorrow morning between 8am and 12pm?' },
      { type: 'choice', options: [
        { text: 'Morgen früh bin ich ab 9 Uhr zu Hause. Aber können Sie anfragen, ob noch heute jemand kommen kann? Bei dieser Temperatur ist es wirklich nicht zumutbar.', translation: 'Tomorrow morning I\'m at home from 9am. But could you ask whether someone can come today? At this temperature it\'s really not acceptable.', correct: true, feedback: '"Nicht zumutbar" = not acceptable / unreasonable. Tenants in Germany have the right to urgent repairs, especially with extreme temperatures. Asserting this right calmly is correct.' },
        { text: 'Ja, ich bin zu Hause.', translation: 'Yes, I\'m at home.', correct: false, feedback: 'Push for a same-day fix! In Germany, a broken heater in winter is considered an emergency — you have the right to ask.' },
        { text: 'Morgen? Das ist zu spät!', translation: 'Tomorrow? That\'s too late!', correct: false, feedback: 'Your frustration is understandable, but phrase it professionally: "Bei minus vier Grad ist das wirklich dringend."' },
      ]},
    ],
  },
];
