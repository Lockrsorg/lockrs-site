import Image from "next/image";

const SIZES = {
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72,
} as const;

/** Intrinsic aspect ratio of public/logo.svg (width / height). */
const LOGO_ASPECT = 116 / 169;

type LockrsLogoSize = keyof typeof SIZES;
type LockrsLogoVariant = "icon" | "logo";

interface LockrsLogoProps {
  size?: LockrsLogoSize | number;
  className?: string;
  priority?: boolean;
  /** Square app icon or vector brand mark from public/logo.svg */
  variant?: LockrsLogoVariant;
}

/** Lockrs mark — app icon (PNG) or navbar brand SVG. */
export function LockrsLogo({
  size = "md",
  className = "",
  priority = false,
  variant = "icon",
}: LockrsLogoProps) {
  const height = typeof size === "number" ? size : SIZES[size];

  if (variant === "logo") {
    const width = Math.round(height * LOGO_ASPECT);

    return (
      // eslint-disable-next-line @next/next/no-img-element -- static SVG from /public
      <img
        src="/logo.svg"
        alt=""
        width={width}
        height={height}
        className={`shrink-0 ${className}`.trim()}
        aria-hidden
      />
    );
  }

  return (
    <Image
      src="/icon.png"
      alt=""
      width={height}
      height={height}
      className={`shrink-0 rounded-[22%] ${className}`.trim()}
      priority={priority}
      aria-hidden
    />
  );
}
