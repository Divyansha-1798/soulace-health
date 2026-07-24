import Reveal from "../reveal";

const quotes = [
  {
    quote:
      "The first thing I noticed wasn't calm — it was that I noticed my heart rate at all before it spiralled.",
    attribution: "Early tester · wrist wear, 6 weeks",
  },
  {
    quote:
      "I stopped opening the app mid-panic. The band just does its thing, and I check the trends later.",
    attribution: "Early tester · daily wear",
  },
  {
    quote:
      "My therapist actually asked to see the weekly export. That changed how our sessions started.",
    attribution: "Early tester · 3 months",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          From early wear-testers
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          What people notice first.
        </h2>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-ink/40">
          Illustrative feedback for prototype purposes — to be replaced with
          verified customer reviews at launch.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {quotes.map((item, i) => (
          <Reveal key={item.attribution} delay={i * 0.1}>
            <span className="font-display text-4xl text-sage-light" aria-hidden>
              &ldquo;
            </span>
            <p className="-mt-4 text-lg leading-8 text-ink">
              {item.quote}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink/40">
              {item.attribution}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
