import Link from "next/link";

const highlights = [
  {
    title: "Say hello beautifully",
    description:
      "A curated palette of greetings for every mood, from friendly to formal.",
  },
  {
    title: "Make it yours",
    description:
      "Personalize names, tones, and closings to match the moment exactly.",
  },
  {
    title: "Share instantly",
    description:
      "Copy the message or use it as inspiration for your next chat or email.",
  },
];

export function Hero() {
  return (
    <section className="space-y-10 rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-lg dark:border-white/10 dark:bg-white/5 sm:p-12">
      <header className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-700 dark:border-fuchsia-500/40 dark:bg-fuchsia-500/10 dark:text-fuchsia-200">
          Hello Studio
        </span>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
          Craft the perfect hello — warm, witty, and wonderfully you.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Whether you are greeting a new teammate, writing a newsletter intro,
          or kicking off a conversation with friends, Hello Studio helps you
          assemble a thoughtful welcome in seconds.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#composer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            Start crafting
          </Link>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-white/20 dark:text-slate-200 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-200"
          >
            Learn about the stack
          </a>
        </div>
      </header>

      <dl className="grid gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/40 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
          >
            <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-300">
              {item.title}
            </dt>
            <dd className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
