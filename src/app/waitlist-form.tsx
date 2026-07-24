"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqpaaj";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-full border border-sage-light bg-sage-light/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-sage-deep">
        You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-12 flex-1 rounded-full border border-ink/15 bg-white px-5 text-sm text-ink outline-none focus:border-sage"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 shrink-0 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-sage-deep disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again in a moment.
        </p>
      )}
    </div>
  );
}
