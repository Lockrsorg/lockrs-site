import { Check } from "lucide-react";

interface TrustBadgeProps {
  children: string;
}

export function TrustBadge({ children }: TrustBadgeProps) {
  return (
    <span className="trust-badge">
      <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {children}
    </span>
  );
}

export function TrustBadgeRow({
  badges,
  className = "",
}: {
  badges: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-2 md:gap-2.5 ${className}`.trim()}
    >
      {badges.map((label) => (
        <TrustBadge key={label}>{label}</TrustBadge>
      ))}
    </div>
  );
}
