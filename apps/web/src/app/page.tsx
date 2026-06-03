import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Github,
  KeyRound,
  Shield,
  Sparkles,
  XCircle,
} from "lucide-react";
import { CompetitorCard } from "@/components/competitor-card";
import { ContributeSection } from "@/components/contribute-section";
import { DownloadSection } from "@/components/download-section";
import { FeatureCard } from "@/components/feature-card";
import {
  BENEFITS,
  COMPANY_CRITIQUE,
  COMPETITORS,
  COMPARISON_FOOTNOTE,
  FEATURES,
  GITHUB_ORG_URL,
  HOME_HIGHLIGHTS,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Open source · Offline · No telemetry
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.05]">
            <span className="text-gradient">A password vault</span>
            <br />
            <span className="text-gradient">on your machine.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Local vault, AES-256-GCM, open source. Read the repo if you want to
            see how it is built.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#download" className="btn-primary">
              Download
              <span className="rounded-full bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Soon
              </span>
            </a>
            <Link href="/about" className="btn-secondary">
              Trust & security
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={GITHUB_ORG_URL}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden />
              Source
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {HOME_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 shrink-0 text-white/40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mx-auto mt-16 max-w-4xl animate-fade-up glass-card p-1 md:mt-20"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-4px)] border border-white/5 bg-black/40 p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-glow">
                <KeyRound className="h-8 w-8" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  One encrypted file on your disk
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                  Master password to unlock. Import from other tools. Hashes for
                  API keys. Panic when you need to hide the vault fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-white/5 bg-white/[0.02] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Benefits</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Why local matters
            </h2>
            <p className="mt-4 text-muted md:text-lg">
              Your vault stays on your drive. No sync server required.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit.title}
                className="glass-card p-6 transition hover:border-white/20"
              >
                <div className="relative z-10">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="section-label">How it works</p>
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
          What the app does
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
          >
            Trust & security details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Company critique */}
      <section className="border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:max-w-md lg:shrink-0">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-400/90">
                <Building2 className="h-4 w-4" aria-hidden />
                Industry reality
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {COMPANY_CRITIQUE.headline}
              </h2>
              <p className="mt-4 text-muted md:text-lg leading-relaxed">
                {COMPANY_CRITIQUE.intro}
              </p>
            </div>

            <ul className="grid flex-1 gap-4 sm:grid-cols-2">
              {COMPANY_CRITIQUE.points.map((point) => (
                <li
                  key={point.title}
                  className="glass-card flex gap-4 p-5 md:p-6"
                >
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400/80"
                    aria-hidden
                  />
                  <div className="relative z-10">
                    <h3 className="font-semibold tracking-tight">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competitor comparison */}
      <section className="border-t border-white/5 bg-white/[0.02] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Comparison</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Compared to cloud vaults
            </h2>
            <p className="mt-4 text-muted md:text-lg">
              Quick look at how Lockrs differs from two common cloud options.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
            {COMPETITORS.map((competitor) => (
              <CompetitorCard key={competitor.name} competitor={competitor} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            {COMPARISON_FOOTNOTE}
          </p>
        </div>
      </section>

      <ContributeSection />

      <DownloadSection />
    </>
  );
}
