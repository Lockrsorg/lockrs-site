import Link from "next/link";
import { LockrsLogo } from "@/components/lockrs-logo";
import {
  AUTHOR_DISCORD_URL,
  BTN_DISCORD_URL,
  GITHUB_ORG_URL,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <LockrsLogo size="lg" />
          <div>
            <p className="font-display font-semibold">Lockrs</p>
            <p className="text-sm text-muted">
              Local-first password manager · open source
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/about" className="transition hover:text-foreground">
            Trust & security
          </Link>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={AUTHOR_DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            St3ix
          </a>
          <span className="text-white/20">·</span>
          <a
            href={BTN_DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            2btn
          </a>
        </div>

        <p className="text-xs text-muted/80">
          Rust · Tauri · Argon2id · AES-256-GCM · zeroize
        </p>
      </div>
    </footer>
  );
}
