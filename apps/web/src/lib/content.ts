import type { LucideIcon } from "lucide-react";
import {
  EyeOff,
  Hash,
  Import,
  KeyRound,
  Lock,
  Shield,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

export const GITHUB_ORG_URL = "https://github.com/Lockrsorg";

export const DISCORD_SUPPORT_URL = "https://discord.gg/DhaSM9FAZE";

export const AUTHOR_DISCORD_URL =
  "https://discord.com/users/1451891299396616206";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
  lockrs: string;
  them: string;
}

export interface Competitor {
  name: string;
  type: string;
  summary: string;
  rows: ComparisonRow[];
  critique: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Local-first",
    description:
      "The vault lives on your machine. No account, no sync server, no telemetry.",
  },
  {
    icon: KeyRound,
    title: "Master password",
    description:
      "Lockrs stores an Argon2id fingerprint, not your password.",
  },
  {
    icon: Lock,
    title: "Encrypted vault",
    description:
      "Entries are AES-256-GCM encrypted before they are written to disk.",
  },
  {
    icon: Import,
    title: "Import",
    description:
      "Move passwords in from another manager instead of typing them again.",
  },
  {
    icon: Hash,
    title: "Hashes",
    description:
      "Save hashes for API keys and tokens — not only login passwords.",
  },
  {
    icon: EyeOff,
    title: "Wiped from RAM",
    description:
      "Copied values are overwritten in memory with zeroize after use.",
  },
  {
    icon: Sparkles,
    title: "Offline",
    description:
      "No network required. Data stays on the device.",
  },
  {
    icon: TriangleAlert,
    title: "Panic button",
    description:
      "Locks instantly. No prompt. Your file on disk is untouched.",
  },
];

export const HOME_HIGHLIGHTS = [
  "Open source",
  "Rust + Tauri",
  "Argon2id · AES-256-GCM · zeroize",
];

export const BENEFITS: Benefit[] = [
  {
    title: "No server copy",
    description:
      "The vault is a file on your drive. Nobody else hosts it for you.",
  },
  {
    title: "Readable source",
    description:
      "Check the repo if you want proof, not a landing page promise.",
  },
  {
    title: "No subscription",
    description:
      "Free software. You own the hardware; you should not pay monthly to access your own passwords.",
  },
  {
    title: "Reviewable updates",
    description:
      "See what changed before you install a new build.",
  },
  {
    title: "Panic button",
    description:
      "One click to lock when someone is at your desk.",
  },
  {
    title: "Small project",
    description:
      "Built by one developer. No enterprise upsell path.",
  },
];

export const COMPETITORS: Competitor[] = [
  {
    name: "Proton Pass",
    type: "Privacy-branded cloud vault",
    summary:
      "Good privacy story. Still built around sync when you turn it on.",
    rows: [
      {
        label: "Vault location",
        lockrs: "Your disk",
        them: "Proton when sync is on",
      },
      {
        label: "Client code",
        lockrs: "Open repo",
        them: "Open core only",
      },
      {
        label: "Account",
        lockrs: "Not required",
        them: "Proton account",
      },
      {
        label: "Offline default",
        lockrs: "Yes",
        them: "Sync is the main path",
      },
    ],
    critique:
      "Anything that syncs still depends on their servers. Local-only is a different tradeoff.",
  },
  {
    name: "1Password",
    type: "Enterprise password manager",
    summary:
      "Polished app, closed source, paid plans.",
    rows: [
      {
        label: "Source code",
        lockrs: "Public",
        them: "Closed",
      },
      {
        label: "Verify crypto",
        lockrs: "Clone the repo",
        them: "Trust the vendor",
      },
      {
        label: "Price",
        lockrs: "Free software",
        them: "Subscription",
      },
      {
        label: "Hosted vault",
        lockrs: "None",
        them: "Yes",
      },
    ],
    critique:
      "Their business is subscriptions and teams. You get a product; you do not get full transparency.",
  },
];

export const COMPARISON_FOOTNOTE =
  "Sync across devices is coming to Lockrs — not available yet. For now, the vault stays on one machine.";

export const TRUST_BADGES = [
  "Open source",
  "Local-only vault",
  "Argon2id",
  "AES-256-GCM",
  "zeroize",
  "No telemetry",
] as const;

export interface SecurityClaim {
  title: string;
  body: string;
}

export const SECURITY_CLAIMS: SecurityClaim[] = [
  {
    title: "Master password never stored",
    body: "Only an Argon2id fingerprint is saved for unlock checks.",
  },
  {
    title: "Encrypted at rest",
    body: "AES-256-GCM on every entry. Copy the vault file without the password and it is useless.",
  },
  {
    title: "Keys cleared from RAM",
    body: "Lock or Panic drops session keys. Clipboard data is zeroized in Rust after copy.",
  },
  {
    title: "While unlocked",
    body: "Someone at your keyboard can see what you see. Use Panic.",
  },
];

export const COMPANY_CRITIQUE = {
  headline: "Why most vaults push the cloud",
  intro:
    "Subscriptions and sync are how the big products make money. A file on your SSD does not fit that model.",
  points: [
    {
      title: "Closed clients",
      body: "You get a binary and a FAQ. You do not get the full picture of what runs on your PC.",
    },
    {
      title: "Extra copies",
      body: "Sync puts ciphertext on someone else's hardware. That is another thing to protect forever.",
    },
    {
      title: "Audit PDFs",
      body: "Compliance reports help companies buy software. They are not a substitute for reading code.",
    },
    {
      title: "Free plans",
      body: "Cheap entry, painful exit once everything is already inside.",
    },
    {
      title: "Upsells",
      body: "Lockrs does not need your email or a family bundle. It writes an encrypted file and stops.",
    },
  ],
};

export const DOWNLOAD = {
  headline: "Download Lockrs",
  subline: "Windows, macOS, and Linux builds are on the way.",
  status: "Coming soon",
  note: "Installers will show up on GitHub. No waitlist.",
};

export const CONTRIBUTE = {
  label: "Contribute",
  headline: "Help build Lockrs",
  lead:
    "The project is open source. PRs, bug reports, and testing all help — and people who stick around can earn roles on our Discord.",
  items: [
    "Send a pull request on GitHub (Rust backend, Tauri UI)",
    "Open issues with clear repro steps",
    "Join the support server to test builds and talk through ideas",
  ],
  githubCta: "Open GitHub",
  discordTitle: "Discord roles for contributors",
  discordBody:
    "If you keep helping — code, docs, or community — you can get an official role on the Lockrs support server.",
  discordCta: "Join support server",
};

export const ORIGIN_PARAGRAPHS = [
  "Most password managers I tried were closed source and run by companies I cannot audit.",
  "I built Lockrs to keep the vault local, ship the code in public, and state security claims you can actually check.",
];

export const TRUST_PARAGRAPHS = [
  "With closed source you trust marketing. You cannot see how crypto, logging, or sync are implemented.",
  "Open source does not mean perfect. It means the behavior is visible — and forkable if you disagree.",
  "Lockrs uses Argon2id and AES-256-GCM. The docs and the repo are where those details live.",
];

export const PANIC_PARAGRAPHS = [
  "Panic sends you back to the unlock screen immediately.",
  "Use it when you need the app locked now. Nothing on disk is deleted.",
  "You will need your master password again, same as after a normal lock.",
];

export const SECURITY_PARAGRAPHS = [
  "The master password is never stored in plain text — only an Argon2id fingerprint.",
  "Entries are AES-256-GCM encrypted. Without the password, a copied vault file is garbage.",
  "Unlock derives a short-lived key in RAM. It is cleared on lock or Panic.",
  "Copy-to-clipboard runs in Rust and zeroizes the buffer right after the write.",
  "An unlocked session is visible to anyone at your machine. Panic is the mitigation.",
];
