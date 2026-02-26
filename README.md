# Portfolio Monorepo

Next.js frontend + Node.js backend portfolio website with bilingual content (TH/EN), dark tech visual style, GSAP motion, and PostgreSQL contact API.

## Structure
- `apps/web`: Next.js app (portfolio, resume, contact)
- `apps/api`: Express API (`/api/health`, `/api/contact`)
- `packages/shared`: Shared TypeScript types
- `infra`: SQL schema and deployment docs

## Quick Start
1. Install dependencies:
```bash
npm install
```
2. Setup backend env:
```bash
cp apps/api/.env.example apps/api/.env
```
3. Setup frontend env:
```bash
cp apps/web/.env.example apps/web/.env.local
```
4. Run both apps:
```bash
npm run dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:4000`

## Resume and Photo Assets
- Resume PDF is served from:
  - `/apps/web/public/resume/KittipitChanthataweesup_Resume.pdf`
- Replace profile photo with your real image at:
  - `/apps/web/public/profile/profile.jpg`
- Current UI uses placeholder file:
  - `/apps/web/public/profile/profile-placeholder.svg`

To switch to the real photo, update `src` in `apps/web/src/components/profile-photo-card.tsx`.

## Test
```bash
npm run test
```

## Notes
- Content is data-driven from:
  - `apps/web/src/content/resume.en.json`
  - `apps/web/src/content/resume.th.json`
- Update these JSON files when you add missing page 2 resume details.
# MyPortFolio
