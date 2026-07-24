import LogoMark from "../logo-mark";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div>
          <LogoMark />
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">
            AI sensing and infrasonic vibration, built to meet anxiety at the
            moment it starts.
          </p>
        </div>

        <p className="max-w-3xl text-xs leading-relaxed text-ink/50">
          Soulace Health products are designed to support relaxation and
          general stress resilience. They are not medical devices and are not
          intended to diagnose, treat, cure, or prevent anxiety, panic
          disorder, or any other medical or mental health condition. Sensor
          readings are wellness indicators, not clinical diagnostics. If you
          are experiencing anxiety that affects your daily life, please
          consult a doctor or licensed mental health professional. In a
          crisis, contact your local emergency services or a crisis helpline.
        </p>

        <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink/30">
          © 2026 Soulace Health
        </p>
      </div>
    </footer>
  );
}
