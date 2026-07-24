"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to a waitlist backend (e.g. Formspree, a Google
    // Sheet, or a mailing list) once one is chosen — no submissions are
    // stored yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-full border border-sage-light bg-sage-light/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-sage-deep">
        You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="h-12 flex-1 rounded-full border border-ink/15 bg-white px-5 text-sm text-ink outline-none focus:border-sage"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-sage-deep"
      >
        Join the waitlist
      </button>
    </form>
  );
}
