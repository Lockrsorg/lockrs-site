# Lockrs website

Public marketing site for [Lockrs](https://github.com/Lockrsorg) — local-first, open-source password manager.

**Repository:** [github.com/Lockrsorg/website](https://github.com/Lockrsorg/website)  
**Desktop app (separate repo):** [github.com/Lockrsorg/lockrs](https://github.com/Lockrsorg/lockrs)

Built with **Turborepo** and **Next.js**.

## Routes

| Path | Content |
|------|---------|
| `/` | Home — benefits, industry critique, comparisons, download (coming soon) |
| `/about` | Trust & security |

## Structure

```
.
├── apps/web/              # Next.js app
├── .github/               # CI, Dependabot, PR template
├── Dockerfile
├── docker-compose.yml
├── turbo.json
├── README.md
└── CONTRIBUTING.md
```

## Prerequisites

- Node.js **20+**
- npm **9+**

## Development

```bash
git clone https://github.com/Lockrsorg/website.git
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you see `ENOENT` / `_buildManifest.js.tmp` errors on Windows:

```bash
npm run dev:clean
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm run check      # lint + typecheck + build
```

## Docker

```bash
docker build -t lockrs-website .
docker run --rm -p 3000:3000 lockrs-website
```

Or:

```bash
docker compose up --build web
```

## CI

GitHub Actions: [`.github/workflows/ci.yml`](.github/workflows/ci.yml) — runs on every push and PR to `main`.

## Content

Edit `apps/web/src/lib/content.ts` for copy, comparisons, and links.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
