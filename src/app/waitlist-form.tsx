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
      <p className="rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
        Thanks — we&apos;ll be in touch when we launch.
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
        className="h-12 flex-1 rounded-full border border-black/10 bg-white px-5 text-sm text-zinc-900 outline-none focus:border-zinc-400 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-50"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Join the waitlist
      </button>
    </form>
  );
}
