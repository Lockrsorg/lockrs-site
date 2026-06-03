# Contributing to the Lockrs website

Thanks for helping with the public site. This repository is **only** the marketing website. The Tauri desktop app is in [Lockrsorg/lockrs](https://github.com/Lockrsorg/lockrs).

Stay aligned on **facts**, **links**, and **security claims** with the desktop app.

## Before you start

| Topic | Rule |
|-------|------|
| Scope | Marketing UI and copy only — no vault crypto in this repo |
| Language | English for all user-facing strings |
| Tone | Critical of **corporate incentives**, never of users who picked another tool |
| Downloads | Home shows **Coming soon** — no fake URLs or waitlist funnels |

## Development environment

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ |
| npm | 9+ |
| Docker | Optional — production preview |

### Setup

```bash
git clone https://github.com/Lockrsorg/website.git
cd website
npm install
npm run dev
```

### Windows dev errors (`ENOENT` / `_buildManifest.js.tmp`)

Stop the dev server (Ctrl+C), then:

```bash
npm run dev:clean
```

Removes `.next` and `.turbo`, disables Turbopack (`TURBOPACK=0` in `apps/web/.env.development`). Do not pass `--turbopack`.

### Docker

```bash
docker build -t lockrs-website .
docker run --rm -p 3000:3000 lockrs-website
```

## Commands

Run from the **repository root**:

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on port 3000 |
| `npm run dev:clean` | Clean caches, then dev |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with auto-fix |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | Production build |
| `npm run check` | lint + typecheck + build — **required before PR** |
| `npm run clean` | Remove `apps/web/.next` and `.turbo` |

## Repository layout

```
.
├── apps/web/src/
│   ├── app/           # Routes — thin pages only
│   ├── components/    # Reusable UI (one component per file)
│   └── lib/           # content.ts — copy and URLs
├── .github/
│   ├── workflows/ci.yml
│   ├── dependabot.yml
│   └── pull_request_template.md
├── Dockerfile
└── turbo.json
```

### Files & structure

- **One file, one responsibility** — split past ~150 lines.
- **`app/**/page.tsx`** — compose components; no long copy inline.
- **Copy** in `apps/web/src/lib/content.ts` only.
- **No business logic** in `layout.tsx` beyond layout.

### Naming

| Context | Convention | Example |
|---------|------------|---------|
| Component files | kebab-case | `competitor-card.tsx` |
| Component names | PascalCase | `CompetitorCard` |
| Functions / vars | camelCase | `formatWebsiteLabel` |
| Types | PascalCase | `Competitor` |
| Constants | SCREAMING_SNAKE | `GITHUB_ORG_URL` |

### TypeScript

- `strict` on — no `any` without a short justification.
- Prefer `interface` for objects; `type` for unions.
- Avoid non-null assertions (`!`) — use optional chaining.

### React / Next.js

- App Router; Server Components by default.
- `"use client"` only for hooks or browser APIs.
- `next/link` internal, `<a>` external.

### Styling

- Tailwind + tokens in `apps/web/src/app/globals.css`.
- Dark glassmorphism — consistent with the desktop app mood.

### Comments

- Explain **why**, not **what**.
- No commented-out code.

### Dependencies

- No new packages without PR justification.
- Icons: `lucide-react` only.

### Links (`apps/web/src/lib/content.ts`)

| Constant | URL |
|----------|-----|
| `GITHUB_ORG_URL` | https://github.com/Lockrsorg |
| `DISCORD_SUPPORT_URL` | https://discord.gg/DhaSM9FAZE |
| `AUTHOR_DISCORD_URL` | https://discord.com/users/1451891299396616206 |

### Git

- Branches: `feature/…`, `fix/…`, `chore/…`
- Commits: English, imperative — `feat: add competitor section`
- One logical change per PR; do not commit directly to `main`.

## Pull requests

1. Branch from `main`.
2. Run **`npm run check`**.
3. Fill out [`.github/pull_request_template.md`](.github/pull_request_template.md).
4. Describe **what / why / how to test**.
5. Security claim changes must match [Lockrsorg/lockrs](https://github.com/Lockrsorg/lockrs) or be discussed in an issue there first.

CI runs automatically via [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## What we welcome

- Copy and layout improvements
- Accessibility fixes
- CI / Docker / lint tooling
- Factual corrections

## What to avoid

- Unrelated refactors mixed with content edits
- Attacks on users of other password managers
- Analytics or trackers without discussion
- `.env` secrets, `node_modules`, `.next` in commits

## Questions

- Issues: [Lockrsorg/website](https://github.com/Lockrsorg/website/issues)
- Desktop app: [Lockrsorg/lockrs](https://github.com/Lockrsorg/lockrs)
