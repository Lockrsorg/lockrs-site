import type { Feature } from "@/lib/content";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article
      className="glass-card group p-6 transition duration-300 hover:border-white/20 hover:shadow-glow md:p-7"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative z-10">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition group-hover:border-white/20 group-hover:bg-white/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
