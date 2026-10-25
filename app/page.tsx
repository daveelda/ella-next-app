import Link from "next/link";
import { CopyrightYear } from "./components/copyright-year";

/* ─── Reusable tiny components ─────────────────────────────────── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:h-16 sm:flex-nowrap sm:px-6 sm:py-0">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
        >
          <span className="text-violet-400">D</span>ave Elda
        </Link>

        <div className="flex w-full items-center justify-center gap-4 sm:w-auto sm:justify-end sm:gap-8">
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
          <Link
            href="/tags"
            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-300 transition-all hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-white"
          >
            Tag Cleaner
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-violet-500/40 px-4 py-1.5 text-sm text-violet-300 transition-all hover:bg-violet-500/10 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-violet-400 uppercase">
      <span className="glow-dot h-1.5 w-1.5 rounded-full bg-violet-400" />
      {children}
    </span>
  );
}

function SkillCard({
  icon,
  title,
  items,
  delay,
}: {
  icon: string;
  title: string;
  items: string[];
  delay: string;
}) {
  return (
    <div
      className={`animate-fade-in-up ${delay} glow-border group rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/[0.03]`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-violet-500/15 bg-violet-500/[0.06] px-3 py-1.5 text-sm text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  delay,
  liveUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  delay: string;
  liveUrl?: string;
  githubUrl?: string;
}) {
  return (
    <div
      className={`animate-fade-in-up ${delay} glow-border group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-violet-500/30`}
    >
      {/* decorative gradient corner */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>
      {(liveUrl || githubUrl) && (
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-violet-500"
            >
              View Live Site
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-violet-500/40 hover:text-white"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-radial-hero bg-grid relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
        {/* floating decorative orbs */}
        <div className="animate-float pointer-events-none absolute top-32 left-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="animate-float delay-300 pointer-events-none absolute bottom-40 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="animate-fade-in-up relative z-10">
          <SectionLabel>Welcome to my world</SectionLabel>
        </div>

        <h1 className="animate-fade-in-up delay-100 glow-text relative z-10 mt-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            David Emmanuella
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Software Engineer — designing and building clean, modern, and
          functional digital experiences.
        </p>

        <div className="animate-fade-in-up delay-300 relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/about"
            className="glow-btn inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500"
          >
            About Me
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-white/5 hover:text-white"
          >
            View Projects
          </Link>
        </div>

        {/* scroll indicator */}
        <div className="animate-fade-in delay-700 absolute bottom-10 flex flex-col items-center gap-2 text-xs text-zinc-600">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-violet-500/50 to-transparent" />
        </div>
      </section>

      {/* ── Introduction ──────────────────────────────────── */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Introduction</SectionLabel>
          <h2 className="animate-fade-in-up mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Software Engineer{" "}
            <span className="text-violet-400">at Work</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I design and build clean, modern, and functional digital
            experiences, turning ideas into thoughtful web applications.
          </p>
        </div>
      </section>

      {/* ── Skills / Interests ────────────────────────────── */}
      <section className="relative px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Technical Skills</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Technical <span className="text-violet-400">Skills</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              icon="⚡"
              title="Languages & Frameworks"
              items={[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
              ]}
              delay="delay-100"
            />
            <SkillCard
              icon="⌘"
              title="Version Control"
              items={["Git", "GitHub"]}
              delay="delay-200"
            />
            <SkillCard
              icon="☁"
              title="Deployment & Hosting"
              items={["Vercel", "Netlify"]}
              delay="delay-300"
            />
            <SkillCard
              icon="⌨"
              title="Development Tools"
              items={["Visual Studio Code"]}
              delay="delay-400"
            />
          </div>
        </div>
      </section>

      {/* ── Projects / Highlights ─────────────────────────── */}
      <section id="projects" className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Projects</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured{" "}
              <span className="text-violet-400">Highlights</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              A selection of projects that showcase my skills and passion for
              building great software.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <ProjectCard
              title="Pepito Health"
              description="A healthcare platform designed to make healthcare enquiries and consultation requests easier, featuring a dedicated consultation form."
              tags={["React", "JavaScript", "Node.js", "Tailwind CSS"]}
              delay="delay-100"
            />
            <ProjectCard
              title="PEPTIVA BUSINESS"
              description="A professional website for a peptide-focused business, designed to present the business and its offerings through a clean, modern interface."
              tags={["React", "Vite", "TanStack Start"]}
              delay="delay-200"
              liveUrl="https://peptide-business.netlify.app/"
            />
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="relative px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-600/[0.04] to-transparent" />
        <div className="relative mx-auto max-w-2xl text-center">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s{" "}
            <span className="text-violet-400">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Whether you have a project in mind, a question, or just want to say
            hello — I&apos;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:daveelda10@gmail.com"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500"
            >
              <span>✉️</span> Send an Email
            </a>
            <a
              href="https://github.com/daveelda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-white/5 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-white/5 px-6 py-10">
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
            <a href="#contact" className="transition-colors hover:text-violet-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
