import Link from "next/link";
import { LockrsLogo } from "@/components/lockrs-logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#contribute", label: "Contribute" },
  { href: "/#download", label: "Download" },
  { href: "/about", label: "Trust & security" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight transition hover:opacity-90"
        >
          <LockrsLogo size={40} variant="logo" priority />
          Lockrs
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
