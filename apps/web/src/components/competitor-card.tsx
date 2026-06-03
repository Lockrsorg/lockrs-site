import type { Competitor } from "@/lib/content";

interface CompetitorCardProps {
  competitor: Competitor;
}

export function CompetitorCard({ competitor }: CompetitorCardProps) {
  return (
    <article className="glass-card flex flex-col p-6 md:p-8">
      <div className="relative z-10 flex flex-1 flex-col">
        <header className="mb-5 border-b border-white/10 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-400/90">
            {competitor.type}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
            vs. {competitor.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {competitor.summary}
          </p>
        </header>

        <div className="overflow-hidden rounded-lg border border-white/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="px-3 py-2.5 font-medium text-muted" scope="col" />
                <th className="px-3 py-2.5 font-semibold text-foreground" scope="col">
                  Lockrs
                </th>
                <th className="px-3 py-2.5 font-medium text-muted" scope="col">
                  {competitor.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {competitor.rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-white/5 last:border-0"
                >
                  <th
                    className="px-3 py-3 align-top font-medium text-muted"
                    scope="row"
                  >
                    {row.label}
                  </th>
                  <td className="px-3 py-3 align-top text-foreground/95">
                    {row.lockrs}
                  </td>
                  <td className="px-3 py-3 align-top text-muted">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted/95 italic">
          {competitor.critique}
        </p>
      </div>
    </article>
  );
}
