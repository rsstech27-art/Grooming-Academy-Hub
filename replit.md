# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

- **grooming-academy** (`/`) — Landing page for grooming academy in Khabarovsk, franchise of Milord Academy. React + Vite, single-page dark-themed site.
- **api-server** (`/api`) — Express 5 backend API server.
- **mockup-sandbox** (`/__mockup`) — UI prototyping sandbox.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Grooming Academy Site

Single-page landing at `/` (`artifacts/grooming-academy/`).

**Brand tokens:**
- Background: #0C0C0C (HSL: 0 0% 5%)
- Primary (mint): #A4ECEA (HSL: 178 67% 81%)
- Secondary (hot pink): #EF1997 (HSL: 326 88% 51%)
- Font: Montserrat (Google Fonts)
- Buttons: no border-radius

**Sections:** Navbar, Hero, Stats strip, Courses (6 cards), Masterclasses (4 events), For-whom, About, Contact form, Footer

**TODO before launch:**
- Replace placeholder contact data (address, social links) in `src/pages/Home.tsx`
- Connect contact form to real backend or messaging service

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
