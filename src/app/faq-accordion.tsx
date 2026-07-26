"use client";

import { useState } from "react";

const items = [
  {
    q: "Is Soulace a medical device?",
    a: "No. Soulace is a wellness product designed to support relaxation and stress resilience through sensing, vibration, and personalised tracking. It is not approved to diagnose, treat, prevent, or cure anxiety or any other condition, and it isn't a replacement for therapy, medication, or professional care. If anxiety is affecting your daily life, please speak with a doctor or licensed therapist.",
  },
  {
    q: "How does the band know I'm anxious, not just exercising?",
    a: "The on-device model learns your personal baseline across rest, movement, and daily activity, then looks for the specific combined pattern of a heart-rate rise alongside a skin-conductance shift (the signature of sympathetic arousal) rather than heart rate alone, which also rises during exercise.",
  },
  {
    q: 'What does "infrasonic" actually mean here?',
    a: "Infrasonic refers to a low-frequency vibration below the range most people consciously hear as sound. Instead of a buzz or notification, it's delivered as a felt, steady pulse at the wrist.",
  },
  {
    q: "What happens to my sensor data?",
    a: "Your sensor and symptom data stays yours. It's exportable and deletable at any time, and it is never sold to third parties.",
  },
  {
    q: "Do I need the app for the band to work?",
    a: "No. The band senses, detects, and responds on its own. The app is optional. It's there if you want to see trends over time or share a summary with a therapist.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8 border-t border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <span
                className="shrink-0 font-mono text-lg text-sage-deep"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 text-sm leading-6 text-ink/70">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
