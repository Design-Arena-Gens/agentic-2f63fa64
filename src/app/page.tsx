import { GreetingComposer } from "@/components/GreetingComposer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100 px-6 py-16 font-sans text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950 dark:text-slate-50 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-24 flex justify-center">
        <div className="h-64 w-[40rem] rounded-full bg-fuchsia-400/20 blur-[120px] dark:bg-fuchsia-500/10" />
      </div>
      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-16">
        <Hero />
        <div id="composer">
          <GreetingComposer />
        </div>
      </main>
    </div>
  );
}
