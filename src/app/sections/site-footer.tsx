import LogoMark from "../logo-mark";

const columns = [
  {
    title: "Product",
    links: [
      { label: "The band", href: "#band" },
      { label: "The app", href: "#app" },
      { label: "Sensors & accuracy", href: "#science" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "The science", href: "#science" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-ink/10 p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
          <div>
            <LogoMark />
            <p className="mt-3 max-w-xs text-sm leading-6 text-ink/60">
              AI sensing and infrasonic vibration, built to meet anxiety at
              the moment it starts.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink/40">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink/70 transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-2">
          <p className="max-w-3xl text-xs leading-relaxed text-ink/50">
            Soulace Health products are designed to support relaxation and
            general stress resilience. They are not medical devices and are
            not intended to diagnose, treat, cure, or prevent anxiety, panic
            disorder, or any other medical or mental health condition. Sensor
            readings are wellness indicators, not clinical diagnostics. If you
            are experiencing anxiety that affects your daily life, please
            consult a doctor or licensed mental health professional. In a
            crisis, contact your local emergency services or a crisis
            helpline.
          </p>

          <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink/30">
            © 2026 Soulace Health
          </p>
        </div>
      </div>
    </footer>
  );
}
