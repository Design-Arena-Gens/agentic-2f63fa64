'use client';

import { useMemo, useState } from "react";

const tones = [
  { id: "friendly", label: "Friendly", emoji: "😊" },
  { id: "professional", label: "Professional", emoji: "💼" },
  { id: "playful", label: "Playful", emoji: "🎉" },
];

const closings = [
  { id: "cheers", label: "Cheers" },
  { id: "best", label: "Best regards" },
  { id: "talk", label: "Talk soon" },
];

export function GreetingComposer() {
  const [name, setName] = useState("Friend");
  const [tone, setTone] = useState(tones[0].id);
  const [closing, setClosing] = useState(closings[0].id);

  const preview = useMemo(() => {
    const toneLabel = tones.find((item) => item.id === tone)?.label ?? "";
    const closingLabel =
      closings.find((item) => item.id === closing)?.label ?? "";

    return `${toneLabel} hello, ${name}! ${closingLabel}!`;
  }, [name, tone, closing]);

  return (
    <section className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <header className="mb-6 space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">
          Personalize
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Craft a greeting in seconds
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Pick a tone, set a name, and we will preview how your hello sounds.
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row">
        <form className="flex-1 space-y-6">
          <label className="block space-y-2 text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Who are you greeting?
            </span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition focus:border-fuchsia-500 focus:ring focus:ring-fuchsia-200 dark:border-white/20 dark:bg-white/10 dark:text-slate-100 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-500/40"
              placeholder="Friend"
            />
          </label>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Tone
            </legend>
            <div className="grid gap-3 md:grid-cols-3">
              {tones.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTone(item.id)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition hover:border-fuchsia-500 hover:text-fuchsia-700 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-300 ${
                    tone === item.id
                      ? "border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-400 dark:bg-fuchsia-500/20 dark:text-fuchsia-200"
                      : "border-slate-300 text-slate-700 dark:border-white/10 dark:text-slate-200"
                  }`}
                >
                  <span className="mr-2 text-lg" aria-hidden>
                    {item.emoji}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Closing
            </legend>
            <div className="flex flex-wrap gap-3">
              {closings.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:border-fuchsia-500 hover:text-fuchsia-700 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-200 ${
                    closing === item.id
                      ? "border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-400 dark:bg-fuchsia-500/20 dark:text-fuchsia-200"
                      : "border-slate-300 text-slate-700 dark:border-white/10 dark:text-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="closing"
                    value={item.id}
                    checked={closing === item.id}
                    onChange={() => setClosing(item.id)}
                    className="hidden"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <aside className="flex-1 rounded-2xl border border-dashed border-fuchsia-400 bg-gradient-to-br from-fuchsia-100 via-white to-purple-100 p-6 dark:border-fuchsia-500 dark:from-fuchsia-900/50 dark:via-transparent dark:to-purple-900/40">
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-600 dark:text-fuchsia-300">
            Preview
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug text-fuchsia-950 dark:text-fuchsia-100">
            {preview}
          </p>
          <p className="mt-4 text-sm text-fuchsia-700/80 dark:text-fuchsia-200/80">
            Switch the inputs on the left to watch the message update in real
            time.
          </p>
        </aside>
      </div>
    </section>
  );
}
