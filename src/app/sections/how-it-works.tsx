import Reveal from "../reveal";

const steps = [
  {
    number: "01",
    title: "Sense",
    body: "Optical and electrodermal sensors track heart rate and skin conductance continuously from the wrist.",
  },
  {
    number: "02",
    title: "Detect",
    body: "An onboard AI model compares live readings to your personal baseline to catch early signs of anxiety onset.",
  },
  {
    number: "03",
    title: "Respond",
    body: "The band delivers a low, steady infrasonic pulse designed to help calm the nervous system and support autonomic balance.",
  },
  {
    number: "04",
    title: "Learn",
    body: "A short, optional check-in afterwards refines what anxious looks like for you, so detection sharpens over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-4">
      <Reveal className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          How it works
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          Four steps, running quietly on your wrist.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/70">
          Soulace doesn&apos;t ask you to manage anything mid-episode. It
          senses, decides, and responds automatically — you only reflect once
          things have settled.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 divide-y divide-ink/10 border-y border-ink/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {steps.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 0.08}
            className={`group relative overflow-hidden px-2 py-8 sm:px-6 ${
              i < 2 ? "sm:border-b sm:border-ink/10" : ""
            }`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl uppercase text-ink/[0.04] transition-colors duration-500 group-hover:text-sage/10 sm:text-9xl"
            >
              {step.number}
            </span>
            <p className="relative font-mono text-xs text-sage-deep">
              {step.number}
            </p>
            <h3 className="relative mt-3 font-display text-lg uppercase tracking-[-0.01em] text-ink">
              {step.title}
            </h3>
            <p className="relative mt-2 text-sm leading-6 text-ink/70">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
