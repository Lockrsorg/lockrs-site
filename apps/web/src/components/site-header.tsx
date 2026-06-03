import Link from "next/link";
import { Shield } from "lucide-react";

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
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight transition hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Shield className="h-4 w-4" aria-hidden />
          </span>
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
