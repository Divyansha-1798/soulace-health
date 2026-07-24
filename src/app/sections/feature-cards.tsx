import Image from "next/image";

const cards = [
  {
    label: "Real-time response",
    title: "Reads you. Answers you.",
    body: "Most wearables stop at a chart. Soulace senses the spike and answers it in the moment — a gentle pulse at the wrist that helps steer your nervous system back down, hands-free.",
    src: "/lifestyle-portrait.jpg",
    alt: "Woman wearing the Soulace band, resting calmly",
  },
  {
    label: "Not a buzz. A settle.",
    title: "A calm you can feel.",
    body: "Not a beep, not a notification. A low, felt infrasonic pulse designed to meet your body's stress response where it starts and help bring it back toward balance.",
    src: "/sensor-macro.jpg",
    alt: "Macro detail of the Soulace sensor array",
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-20 sm:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col gap-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-sage-deep">
              {card.label}
            </span>
          </div>
          <div>
            <h3 className="font-display text-xl uppercase tracking-[-0.01em] text-ink">
              {card.title}
            </h3>
            <p className="mt-2 text-base leading-7 text-ink/70">
              {card.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
