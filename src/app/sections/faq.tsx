export default function Faq() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-20">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-sage-deep">
        Questions
      </span>
      <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
        Before you wear one.
      </h2>

      <div className="mt-8 border-t border-ink/10">
        <div className="border-b border-ink/10 py-6">
          <p className="font-medium text-ink">Is Soulace a medical device?</p>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            No. Soulace is a wellness product designed to support relaxation
            and stress resilience through sensing, vibration, and
            personalised tracking. It is not approved to diagnose, treat,
            prevent, or cure anxiety or any other condition, and it isn&apos;t
            a replacement for therapy, medication, or professional care. If
            anxiety is affecting your daily life, please speak with a doctor
            or licensed therapist.
          </p>
        </div>
      </div>
    </section>
  );
}
