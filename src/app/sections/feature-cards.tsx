import Image from "next/image";
import Reveal from "../reveal";

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
      {cards.map((card, i) => (
        <Reveal
          key={card.title}
          delay={i * 0.12}
          className="flex flex-col gap-5 rounded-3xl border border-ink/10 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="px-2 pb-3">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-sage-deep">
              {card.label}
            </p>
            <h3 className="mt-2 font-display font-black text-xl uppercase text-ink">
              {card.title}
            </h3>
            <p className="mt-2 text-base leading-7 text-ink/70">
              {card.body}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
