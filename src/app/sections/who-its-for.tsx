import Image from "next/image";
import Reveal from "../reveal";

const cases = [
  {
    title: "Work pressure",
    body: "A presentation, a deadline, a hard conversation. Soulace catches the climb in heart rate and skin conductance before it crests, and answers it in the moment.",
    src: "/band-hero.jpg",
    alt: "A hand resting calmly, wearing the Soulace band",
  },
  {
    title: "Social settings",
    body: "Crowds, calls, the build-up before you walk in. The band meets the onset where it starts, so you can stay present instead of bracing.",
    src: "/lifestyle-window.jpg",
    alt: "Woman sitting calmly by a window",
  },
  {
    title: "Restless nights",
    body: "Pulse still up when the lights go out. The infrasonic pulse cues the wind-down your body doesn't always find on its own.",
    src: "/lifestyle-portrait.jpg",
    alt: "Woman wearing the Soulace band, resting calmly",
  },
];

export default function WhoItsFor() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          Who it&apos;s for
        </span>
        <h2 className="mt-4 max-w-2xl font-display font-black text-3xl uppercase leading-tight text-ink sm:text-4xl">
          Built for the moments your body reacts first.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {cases.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
            <h3 className="mt-4 font-display font-black text-lg uppercase text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
