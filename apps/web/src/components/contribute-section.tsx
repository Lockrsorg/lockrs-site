import { Check, Github, MessageCircle } from "lucide-react";
import {
  CONTRIBUTE,
  DISCORD_SUPPORT_URL,
  GITHUB_ORG_URL,
} from "@/lib/content";

export function ContributeSection() {
  return (
    <section
      id="contribute"
      className="scroll-mt-24 border-t border-white/5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-card overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="section-label">{CONTRIBUTE.label}</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {CONTRIBUTE.headline}
              </h2>
              <p className="mt-4 max-w-xl text-muted md:text-lg leading-relaxed">
                {CONTRIBUTE.lead}
              </p>

              <ul className="mt-8 space-y-3">
                {CONTRIBUTE.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/90"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={GITHUB_ORG_URL}
                className="btn-primary mt-8 inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" aria-hidden />
                {CONTRIBUTE.githubCta}
              </a>
            </div>

            <aside className="flex flex-col justify-between gap-6 border-t border-white/10 bg-indigo-500/[0.07] p-8 md:p-10 lg:border-l lg:border-t-0">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200/90">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  Discord
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {CONTRIBUTE.discordTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {CONTRIBUTE.discordBody}
                </p>
              </div>

              <a
                href={DISCORD_SUPPORT_URL}
                className="btn-secondary w-full justify-center sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {CONTRIBUTE.discordCta}
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
