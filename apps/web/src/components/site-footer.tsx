import Link from "next/link";
import { Shield } from "lucide-react";
import {
  AUTHOR_DISCORD_URL,
  DISCORD_SUPPORT_URL,
  GITHUB_ORG_URL,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Shield className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="font-display font-semibold">Lockrs</p>
            <p className="text-sm text-muted">
              Local password manager · open source
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
            href={DISCORD_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            Discord
          </a>
          <a
            href={AUTHOR_DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            St3ix
          </a>
        </div>

        <p className="text-xs text-muted/80">
          Rust · Tauri · Argon2id · AES-256-GCM · zeroize
        </p>
      </div>
    </footer>
  );
}
