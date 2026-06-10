import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, TriangleAlert } from "lucide-react";
import { LockrsLogo } from "@/components/lockrs-logo";
import { TrustBadgeRow } from "@/components/trust-badge";
import {
  AUTHOR_DISCORD_URL,
  BTN_DISCORD_URL,
  GITHUB_ORG_URL,
  ORIGIN_PARAGRAPHS,
  PANIC_PARAGRAPHS,
  SECURITY_CLAIMS,
  TRUST_BADGES,
  TRUST_PARAGRAPHS,
} from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — lockrs",
  description:
    "lockrs is built by a small team that believes your passwords are none of our business. Learn about the project, the tech stack, and the people behind it.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About — lockrs",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <article className="about-page">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <Link href="/" className="about-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to home
        </Link>

        <header className="about-hero animate-fade-up">
          <LockrsLogo size={80} className="mx-auto mb-6 shadow-glow" />
          <h1 className="about-hero__title">Trust &amp; security</h1>
          <p className="about-hero__lead">
            Why Lockrs exists, what it protects, and what you can verify yourself
            in the repository.
          </p>
          <TrustBadgeRow badges={TRUST_BADGES} className="mt-8" />
        </header>

        <div className="about-flow">
          <section className="about-section">
            <h2 className="about-section__title">Why Lockrs exists</h2>
            <div className="about-section__body">
              {ORIGIN_PARAGRAPHS.map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
              <p className="about-section__meta">
                Built by{" "}
                <a href={AUTHOR_DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  St3ix
                </a>
                , with{" "}
                <a href={BTN_DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  2btn
                </a>{" "}
                — independent developers, open source only.
              </p>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Why open source matters</h2>
            <ul className="about-checklist">
              {TRUST_PARAGRAPHS.map((text) => (
                <li key={text.slice(0, 40)}>{text}</li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Can someone else read my passwords?</h2>
            <ul className="about-claims">
              {SECURITY_CLAIMS.map((claim) => (
                <li key={claim.title} className="about-claim">
                  <span className="about-claim__badge">{claim.title}</span>
                  <p>{claim.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="about-highlight">
            <div className="about-highlight__icon">
              <TriangleAlert className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="about-highlight__title">Panic button</h2>
              {PANIC_PARAGRAPHS.map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
            </div>
          </section>
        </div>

        <footer className="about-footer">
          <p className="about-footer__stack">
            Rust · Tauri · Argon2id · AES-256-GCM · zeroize
          </p>
          <a
            href={GITHUB_ORG_URL}
            className="btn-secondary mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" aria-hidden />
            Read the source on GitHub
          </a>
        </footer>
      </div>
    </article>
  );
}
