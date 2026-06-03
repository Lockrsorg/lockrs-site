import { Download, Github } from "lucide-react";
import { DOWNLOAD, GITHUB_ORG_URL } from "@/lib/content";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="glass-card mx-auto max-w-3xl overflow-hidden p-8 text-center md:p-12">
        <div className="relative z-10">
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
            <Download className="h-7 w-7" aria-hidden />
          </span>

          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {DOWNLOAD.headline}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-muted md:text-lg">
            {DOWNLOAD.subline}
          </p>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            {DOWNLOAD.status}
          </p>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">
            {DOWNLOAD.note}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              disabled
              className="btn-primary cursor-not-allowed opacity-50"
              aria-disabled="true"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download — coming soon
            </button>
            <a
              href={GITHUB_ORG_URL}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden />
              Track on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
