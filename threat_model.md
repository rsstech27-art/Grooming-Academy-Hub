# Threat Model

## Project Overview

This project is a pnpm monorepo with two production-relevant artifacts: a public React + Vite landing site at `artifacts/grooming-academy` and an Express 5 API at `artifacts/api-server`, deployed publicly on Replit autoscale. The frontend is a marketing site with a non-submitting contact form and static legal pages. The API currently exposes only `/api/healthz` according to `artifacts/api-server/src/routes/*` and `lib/api-spec/openapi.yaml`.

Production assumptions for this scan:
- Replit terminates TLS for deployed traffic.
- `NODE_ENV=production` in production.
- `artifacts/mockup-sandbox` is dev-only and not deployed unless future evidence shows otherwise.
- The current deployment visibility is public, so all production-routed paths must be treated as internet reachable.

## Assets

- **Deployment availability** — the public landing page and API health endpoint must remain available because they are internet-facing.
- **Future user contact data** — the landing page advertises collection of name, phone number, and contact preference, so any future backend that handles the form would process personal data.
- **Application secrets** — environment variables such as `DATABASE_URL`, logging configuration, and future auth or third-party API credentials used by the API server.
- **Database connectivity** — the shared database package can connect directly to PostgreSQL and would become high impact if any production route begins using it insecurely.

## Trust Boundaries

- **Browser → frontend bundle** — all client-side state and navigation are attacker-controlled; the frontend must not trust user-controlled values.
- **Browser → API (`/api`)** — every request to the Express service crosses an untrusted network boundary.
- **API → database** — `lib/db` has direct PostgreSQL access through `DATABASE_URL`; any future route using this layer must prevent injection and unauthorized data access.
- **Production artifacts → dev-only sandbox** — `artifacts/mockup-sandbox` is intentionally excluded from production scope unless deployment wiring changes.

## Scan Anchors

- Production entry points: `artifacts/grooming-academy/src/main.tsx`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`
- Public surfaces: `/` static SPA routes in `artifacts/grooming-academy/src/pages/*`, `/api/healthz` in `artifacts/api-server/src/routes/health.ts`
- Highest-risk shared code for future changes: `lib/api-client-react/src/custom-fetch.ts`, `lib/db/src/index.ts`, `lib/db/src/schema/index.ts`
- Dev-only area to ignore unless routing changes: `artifacts/mockup-sandbox/**`

## Threat Categories

### Spoofing

There is no implemented production authentication flow today, so the main spoofing concern is future expansion of the API without adding proper server-side authentication. Any new endpoint that exposes user-specific or administrative data must require verified authentication on the server; frontend-only assumptions or optional bearer headers are insufficient.

### Tampering

The deployed frontend is mostly static, but all browser input remains untrusted. If the contact form is later connected to a backend or third-party service, the server-side receiver must validate and constrain all submitted fields rather than relying on client-side controls. Any future database access through `lib/db` must use parameterized Drizzle queries and server-side business rules.

### Information Disclosure

The main disclosure risks are accidental exposure of secrets, verbose errors, or future personal data handled by the contact flow. Logs must continue to redact credentials and cookies, API responses must avoid stack traces or internal connection details, and any future contact-form backend must return only the minimum data necessary.

### Denial of Service

Because the deployment is public, even low-functionality endpoints can be abused for resource consumption. Any future public POST endpoints, expensive API operations, or external-service calls must enforce input size limits, timeouts, and rate limiting appropriate to the endpoint’s cost.

### Elevation of Privilege

There are currently no user roles or privileged application actions in production. The key future guarantee is that any new authenticated or administrative functionality must enforce authorization server-side on every request and not inherit trust from client state, generated API clients, or route naming conventions.
