import WaitlistForm from "./waitlist-form";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-white to-zinc-50 px-6 dark:from-black dark:to-zinc-950">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-32 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Soulace Health
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          A calmer way to care for your health.
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We&apos;re building something new. Sign up to be the first to know
          when we launch.
        </p>
        <WaitlistForm />
      </main>
    </div>
  );
}
