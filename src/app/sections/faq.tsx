import Reveal from "../reveal";
import FaqAccordion from "../faq-accordion";

export default function Faq() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-24">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
          Questions
        </span>
        <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          Before you wear one.
        </h2>

        <FaqAccordion />
      </Reveal>
    </section>
  );
}
