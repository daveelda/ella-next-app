"use client";

import Link from "next/link";
import { useActionState } from "react";
import { cleanTags } from "./actions";

export default function TagsPage() {
  const [tags, formAction, isPending] = useActionState(cleanTags, []);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            <span className="text-violet-400">D</span>ave Elda
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      <main className="bg-radial-hero bg-grid relative flex flex-1 flex-col items-center px-6 pt-32 pb-20">
        <div className="pointer-events-none absolute top-24 right-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-[120px]" />

        <section className="relative z-10 w-full max-w-2xl">
          <div className="mb-8 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-violet-400 uppercase">
              <span className="glow-dot h-1.5 w-1.5 rounded-full bg-violet-400" />
              Tag Cleaner
            </span>
            <h1 className="glow-text text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tidy up your{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                tags
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Separate tags with commas. We&apos;ll trim whitespace, lowercase
              them, and remove duplicates.
            </p>
          </div>

          <div className="glow-border rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8">
            <form action={formAction} className="space-y-5">
              <div>
                <label
                  htmlFor="tags"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Comma-separated tags
                </label>
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  placeholder="React, Next.js, TypeScript, react"
                  className="w-full rounded-xl border border-white/10 bg-[#08070c] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="glow-btn inline-flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {isPending ? "Cleaning..." : "Clean"}
              </button>
            </form>

            <section
              aria-live="polite"
              aria-atomic="true"
              className="mt-8 border-t border-white/5 pt-6"
            >
              <h2 className="text-sm font-semibold text-zinc-200">
                Cleaned tags
              </h2>
              {tags.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-violet-500/15 bg-violet-500/[0.06] px-3 py-1.5 text-sm text-violet-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-zinc-500">
                  Your cleaned tags will appear here.
                </p>
              )}
            </section>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-6 text-center text-sm text-zinc-600">
        <Link href="/" className="transition-colors hover:text-violet-400">
          Back to Home
        </Link>
      </footer>
    </>
  );
}
