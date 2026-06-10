import type { LucideIcon } from "lucide-react";
import {
  EyeOff,
  KeyRound,
  Lock,
  Shield,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

export const GITHUB_ORG_URL = "https://github.com/Lockrsorg";

export const AUTHOR_DISCORD_URL =
  "https://discord.com/users/1451891299396616206";

export const BTN_DISCORD_URL =
  "https://discord.com/users/1459198464457048250";

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
      "Everything stays on your device. No cloud, accounts, or telemetry.",
  },
  {
    icon: KeyRound,
    title: "Master password",
    description:
      "Argon2id fingerprint only — your plain master password is never stored.",
  },
  {
    icon: Lock,
    title: "Encrypted vault",
    description:
      "Every entry is encrypted with AES-256-GCM before it is saved on your device.",
  },
  {
    icon: EyeOff,
    title: "Wiped from RAM",
    description:
      "Copied passwords are overwritten in memory with zeroize right after use.",
  },
  {
    icon: Sparkles,
    title: "Offline",
    description:
      "Core features work without a network. Your secrets never leave this machine.",
  },
  {
    icon: TriangleAlert,
    title: "Panic button",
    description:
      "Instantly lock your vault — no confirmation, no delay. Data stays on disk.",
  },
];

export const HOME_HIGHLIGHTS = [
  "Open source you can audit",
  "Rust + Tauri desktop app",
  "Argon2id · AES-256-GCM · zeroize",
];

export const BENEFITS: Benefit[] = [
  {
    title: "No corporate vault on their servers",
    description:
      "Your encrypted blob is not a recurring revenue asset sitting in someone else's datacenter, waiting for a breach notice email.",
  },
  {
    title: "No \"trust our security team\" theater",
    description:
      "Marketing pages love words like \"military-grade\" and \"zero-knowledge.\" Lockrs gives you the repo. Read it or fork it.",
  },
  {
    title: "No subscription ransom for your own passwords",
    description:
      "You already own the hardware. You should not rent access to secrets that never needed the cloud in the first place.",
  },
  {
    title: "No silent updates you cannot review",
    description:
      "When the client is open source, a shady build is a community problem — not a buried changelog footnote.",
  },
  {
    title: "Panic when reality walks through the door",
    description:
      "Big products optimize for sync and sharing. Lockrs optimizes for locking instantly when you need to disappear.",
  },
  {
    title: "Built by two developers, not a compliance department",
    description:
      "No investor deck demanding growth metrics on your credential graph. Just software that does one job on your machine.",
  },
];

export const COMPETITORS: Competitor[] = [
  {
    name: "Proton Pass",
    type: "Privacy-branded cloud vault",
    summary:
      "Better marketing than most, still a company holding the keys to your sync story.",
    rows: [
      {
        label: "Vault location",
        lockrs: "Only on your disk",
        them: "Proton servers when sync is on",
      },
      {
        label: "Client code",
        lockrs: "Fully open — audit the app",
        them: "Open core; hosted stack is their product",
      },
      {
        label: "Business model",
        lockrs: "No account required",
        them: "Subscription tiers, ecosystem upsell",
      },
      {
        label: "Offline by default",
        lockrs: "Yes — network optional",
        them: "Cloud features are the point",
      },
    ],
    critique:
      "Proton sells trust in a brand. That is still trust — just with nicer Swiss typography. If their server-side code misbehaves, your local client cannot save you from what already left your machine.",
  },
  {
    name: "1Password",
    type: "Enterprise darling",
    summary:
      "Polished, expensive, and utterly opaque where it counts.",
    rows: [
      {
        label: "Source code",
        lockrs: "Public repository",
        them: "Closed source",
      },
      {
        label: "Who can verify crypto?",
        lockrs: "Anyone with Git and patience",
        them: "Their internal team and NDAs",
      },
      {
        label: "Pricing",
        lockrs: "Free software — you pay nothing to them",
        them: "Monthly tax on your identity",
      },
      {
        label: "Incident history",
        lockrs: "No cloud to breach",
        them: "Remember when enterprise vendors email you apologies?",
      },
    ],
    critique:
      "1Password is a company first and a vault second. Their incentives are seats, families plans, and enterprise contracts — not your ability to prove what the binary does at 2 a.m.",
  },
];

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
    body: "Only an Argon2id fingerprint is kept to verify unlock attempts.",
  },
  {
    title: "Encrypted at rest",
    body: "Entries use AES-256-GCM. Without your master password, copied vault data is unreadable.",
  },
  {
    title: "Keys wiped from RAM",
    body: "Session keys are cleared when you lock or hit Panic. Copy uses zeroize in Rust after clipboard write.",
  },
  {
    title: "Unlocked session honesty",
    body: "If someone uses your PC while Lockrs is open, they see what you see — that is why Panic exists.",
  },
];

export const COMPANY_CRITIQUE = {
  headline: "Big Tech and VC-backed vendors are not on your side",
  intro:
    "Password managers became a category because companies realized your credentials are recurring revenue. They will never show you the same urgency about local-only storage that they show about growth charts.",
  points: [
    {
      title: "Closed source is a confession",
      body: "If the security story were bulletproof, they would ship the code. Hiding implementation is not humility — it is liability management for them, risk absorption for you.",
    },
    {
      title: "Cloud sync is a feature and a liability",
      body: "Every server copy is another place a misconfiguration, insider, subpoena, or breach can surface. \"Encrypted\" on their disk still means you are betting on their ops team forever.",
    },
    {
      title: "Audits are not your audits",
      body: "SOC 2 PDFs and bug-bounty badges are marketing for buyers, not reproducible proof for users. You get a logo; they get a checklist.",
    },
    {
      title: "Free tiers are onboarding, not charity",
      body: "If you are not paying, you are still the product — habituated into a vault format that becomes painful to leave once your life is inside.",
    },
    {
      title: "Corporations optimize for retention, not paranoia",
      body: "Lockrs does not need your email, your family plan upsell, or your enterprise SSO deal. It needs to encrypt a file on your SSD and get out of the way.",
    },
  ],
};

export const DOWNLOAD = {
  headline: "Download Lockrs",
  subline:
    "Desktop builds for Windows, macOS, and Linux are in active development.",
  status: "Coming soon",
  note: "Follow development on GitHub until installers are published. No waitlist, no account — we are not building another funnel.",
};

export const ORIGIN_PARAGRAPHS = [
  "I did not trust most password managers — closed source, run by large companies, built by teams I cannot verify. I had no way to know what they actually do with my secrets.",
  "Lockrs is the alternative I wanted: local, open source, and written so every security claim can be checked in the repository — not just believed from a landing page.",
];

export const TRUST_PARAGRAPHS = [
  "When code is hidden, you are trusting a brand — not proof. You cannot audit encryption, logging, sync behavior, or backdoors. You only get promises.",
  "Proprietary password managers ask you to hand over the keys to your digital life while showing you nothing about how those keys are handled.",
  "Open source does not guarantee perfection, but it guarantees visibility. Anyone can inspect the code, report issues, and verify that Lockrs does what it claims — or fork it if they disagree.",
  'Lockrs uses proven algorithms (Argon2id, AES-256-GCM) and keeps them in plain sight. Nothing critical is "trust us, we handled it." Either it is documented, or it is in the code.',
];

export const PANIC_PARAGRAPHS = [
  "The red Panic button instantly locks your vault and sends you back to the unlock screen — no confirmation, no delay.",
  "Use it when someone walks in, you need to hide that Lockrs is open, or you want the app locked immediately. Your saved data stays on your device; nothing is deleted.",
  "After panic, your master password is required again — the same as closing and reopening the app while unlocked.",
];

export const SECURITY_PARAGRAPHS = [
  "Lockrs never saves your master password as plain text. Only an Argon2id fingerprint is kept to verify unlock attempts.",
  "Your entries are encrypted with AES-256-GCM. Without the master password, saved data is unreadable — even if someone copies it off your machine.",
  "When you unlock, a temporary key is derived in memory and wiped when you lock or hit Panic. Guessing that key means guessing your master password, which is designed to be slow and costly to brute-force.",
  "When you copy a password, Lockrs handles it entirely in Rust: the value is written to your clipboard, then immediately overwritten in RAM with zeroize.",
  "If Lockrs is already unlocked while someone uses your computer, they could view what you can see — that is why Panic exists. No password manager can fully protect an active, unlocked session.",
];
