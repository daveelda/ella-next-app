import Link from "next/link";
import { CopyrightYear } from "../components/copyright-year";

export default function AboutPage() {
  return (
    <>
      {/* ── Navbar ──────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            <span className="text-violet-400">D</span>ave Elda
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero header ─────────────────────────────────── */}
      <section className="bg-radial-hero bg-grid relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center">
        <div className="animate-float pointer-events-none absolute top-20 right-1/3 h-64 w-64 rounded-full bg-violet-600/10 blur-[120px]" />

        <span className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-violet-400 uppercase">
          <span className="glow-dot h-1.5 w-1.5 rounded-full bg-violet-400" />
          About Me
        </span>

        <h1 className="animate-fade-in-up delay-100 glow-text max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          The Story{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Behind the Code
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          A little more about who I am, what drives me, and why I love building
          for the web.
        </p>
      </section>

      {/* ── Biography ───────────────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in-up glow-border rounded-2xl border border-card-border bg-card-bg p-8 sm:p-12">
            {/* avatar placeholder */}
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-5xl font-bold text-white shadow-lg shadow-violet-500/20">
              DE
            </div>

            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              David Emmanuella
            </h2>
            <p className="mt-1 text-center text-sm text-violet-400">
              Software Engineer
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400">
              <p>
                Hello! I&apos;m David Emmanuella, a Software Engineer focused
                on designing and building clean, modern, and functional digital
                experiences.
              </p>
              <p>
                I work with React, JavaScript, TypeScript, Next.js, and Tailwind
                CSS to create responsive web experiences.
              </p>
              <p>
                I value clear, functional solutions and continue to build my
                skills through practical work.
              </p>
            </div>

            {/* quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {(
                [
                  ["📍", "Location", "Nigeria"],
                  ["💻", "Focus", "Software Engineering"],
                  ["🎯", "Goal", "Build & Ship"],
                  ["☕", "Fuel", "Coffee & Tea"],
                ] as const
              ).map(([icon, label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-card-border bg-violet-500/[0.03] p-4 text-center"
                >
                  <div className="text-xl">{icon}</div>
                  <div className="mt-1 text-xs text-zinc-500">{label}</div>
                  <div className="mt-0.5 text-sm font-medium text-zinc-200">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* back link */}
          <div className="animate-fade-in-up delay-300 mt-12 text-center">
            <Link
              href="/"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="mt-auto border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-zinc-600">
            © <CopyrightYear /> David Emmanuella. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-zinc-600">
            <Link href="/" className="transition-colors hover:text-violet-400">
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-violet-400"
            >
              About
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
