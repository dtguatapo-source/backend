# AGENTS.md

NestJS 12 + Prisma 7 (driver adapter) + PostgreSQL API for a drugstore: medicines/inventory, purchases, sales, customers, suppliers, users, JWT login. The Angular frontend is a **separate** project (dev server `http://localhost:4200`); this repo is API-only.

## Commands

| Task                     | Command                                                              |
| ------------------------ | -------------------------------------------------------------------- |
| Dev server (watch)       | `npm run start:dev` — listens on `PORT ?? 3000`                      |
| Build                    | `npm run build` (`nest build`, deletes `dist/`)                      |
| Run built output         | `npm run start:prod` (`node dist/main`)                              |
| Lint                     | `npm run lint` → **oxlint** (there is no ESLint config in this repo) |
| Format                   | `npm run format` → Prettier (`singleQuote`, `trailingComma: all`)    |
| Typecheck                | `npx tsc --noEmit -p tsconfig.json` (no npm script exists for this)  |
| Unit tests               | `npm test` → `vitest run` (`**/*.spec.ts`)                           |
| One test file            | `npx vitest run src/sales/sales.service.spec.ts`                     |
| E2E tests                | `npm run test:e2e` (separate config, `**/*.e2e-spec.ts`)             |
| Regenerate Prisma client | `npx prisma generate`                                                |
| New migration            | `npx prisma migrate dev --name <name>`                               |
| Seed owner account       | `npm run seed` — requires `OWNER_USERNAME` + `OWNER_PASSWORD`; builds and runs `dist/tools/seed-owner.js` (idempotent, no default password) |
| DB browser               | `npx prisma studio`                                                  |

Verification order used in this repo: `npm run lint` → `npx tsc --noEmit` → `npm test`. There is no CI workflow and no pre-commit hook.

## Prisma 7 specifics (biggest gotcha)

- The client is generated to `src/generated/prisma` (new `prisma-client` generator, CJS) and **is committed to git**. After editing `prisma/schema.prisma`: run `npx prisma generate` and commit the regenerated output, otherwise types and runtime disagree.
- `.gitignore` lists `/generated/prisma` — a stale path from when the output was at the repo root. It does **not** ignore `src/generated/prisma`.
- `prisma/schema.prisma`'s `datasource db` has **no `url`**. The URL comes from `prisma.config.ts` (`process.env.DATABASE_URL`) for CLI runs and from the `PrismaPg` adapter in `src/prisma/prisma.service.ts` at runtime. Do not add a `url` to the schema.
- `PrismaService` extends the generated `PrismaClient` and requires a driver adapter; its constructor throws when `DATABASE_URL` is unset. It reads the `?schema=` query param (currently `proyecto24`).
- Error mapping convention: services import `Prisma` from `../generated/prisma/client` and translate `P2002` (conflict) / `P2003` (FK) / `P2025` (not found) into Nest HTTP exceptions. Follow that pattern in new services.
- Price/total columns are `Decimal`. Prisma returns a decimal.js object, so **JSON responses serialize money as strings** (`"6000"`), not numbers, and arithmetic must wrap with `Number(...)` (see `src/sales/sales.service.ts:73`).

## Database

- Postgres is **remote** (Railway); credentials live in the gitignored `.env` as `DATABASE_URL`. `npx prisma migrate status` currently reports the schema up to date with the 4 migrations in `prisma/migrations`.
- Never run `prisma migrate reset` or `db push` — that wipes the shared remote database. Use `prisma migrate dev` for schema changes.

## Tests

`npm test` (vitest) covers `**/*.spec.ts` and does not need the database: unit specs that need data must supply a stub `PrismaService`. `src/auth/access-control.spec.ts` is the reference (a `Proxy`-based stub, so the guard chain is exercised over the real `AppModule` without touching the remote database). Do not add scaffolding-style specs that instantiate a service without its dependencies, and never point a test at the live remote database for writes. `npm run test:e2e` boots the real `AppModule`, so it **needs `DATABASE_URL` and connectivity to the remote database**. Vitest globals are enabled (`describe`/`it`/`expect` need no import).

## Layout and conventions

- Feature folders under `src/`: `auth`, `users`, `medicines`, `customers`, `suppliers`, `purchases`, `sales`, plus `prisma`. Each holds `*.controller.ts`, `*.service.ts`, `*.module.ts`, `dto/`, and sometimes `entities/` — those entity files are plain Prisma-shaped classes (this project does **not** use TypeORM).
- Routes have **no global prefix**: `/auth/login`, `/users` (POST only), `/medicines` (+ `GET /medicines/low-stock`), `/customers`, `/suppliers`, `/purchases`, `/sales`.
- `Medicine.id` is a **String** (`MED-001`) and medicine routes take no `ParseIntPipe`; every other model uses int ids with `ParseIntPipe`.
- `EstadoMedicamento` is defined twice: `prisma/schema.prisma` and `src/medicines/dto/create-medicine.dto.ts` (the DTO copy is what request validation uses). Keep both in sync.
- Business rules live in services, not controllers: creating a sale validates stock, decrements it and flips status to `AGOTADO` inside `prisma.$transaction`; creating a purchase increments stock and sets `DISPONIBLE`.
- The global `ValidationPipe({ whitelist: true, transform: true })` strips unknown body properties, so DTOs must declare every accepted field; use class-validator decorators plus `@Type()` for nested objects.
- Auth: `JwtModule` is registered globally (15m expiry) and `getJwtSecret()` makes `JWT_SECRET` **mandatory** — the app throws at startup when it is unset. `JwtAuthGuard` is registered as `APP_GUARD`, so **the whole API is closed by default**: only routes marked `@Public()` bypass it (`GET /health`, `POST /auth/login`). `GET /auth/me` and `POST /users` deliberately have no `@Public()`: `/auth/me` returns the authenticated user and registration is closed (the single owner account is created by the seed: `npm run seed`, env `OWNER_USERNAME`/`OWNER_PASSWORD`, scrypt hash, role `ADMIN`, idempotent). There is **no role-based authorization**: the drugstore has a single owner/administrator, so any valid JWT reaches every module (no `RolesGuard`, no `@Roles()` decorator, and `role` survives only as a JWT/`User` field).
- Passwords use scrypt (`src/auth/password.ts`), stored as `scrypt$16384$8$1$salt$key`.
- CORS origin is hardcoded to `http://localhost:4200` in `src/main.ts`; change it there when the frontend moves.
- `src/main.ts` loads dotenv twice (`.` then `../.env`) so the app also boots from a parent folder containing `backend/`. Keep both calls if you edit it.
- User-facing errors, DTO validation messages, and comments are in **Spanish**; identifiers are English. Match that. Relative imports are inconsistently `.js`-suffixed; both forms compile (CommonJS), so don't churn unrelated files.

## Repo oddities — do not "fix" blindly

- `/dist` and `*.tsbuildinfo` are gitignored and untracked: build output stays out of the repository and each `npm run build` leaves the tree clean.
- `dist/backend/` and `dist/generated/prisma` are stale leftovers from an older layout (the project used to live in a `backend/` subfolder). `nest build` uses `tsconfig.build.json` (`rootDir: ./src`), so real output is flat in `dist/`; the root `tsconfig.json` has `rootDir: "../"`, so running bare `tsc` nests output under `dist/backend/`.

## Reference material

- Prisma skills are vendored locally in `.claude/skills/`, `.agents/skills/`, `.windsurf/skills/` (see `skills-lock.json`). Read them for CLI and client-API details instead of guessing.
- `prisma/schema.prisma` is the authoritative data model; `src/generated/prisma/*` is generated output and must not be hand-edited.
