# Deploy enablement (backend): CORS por entorno

Alcance: backend NestJS. El trabajo de frontend de este mismo bloque vive en el repo
`Drugstore`, documento `odd/tasks/deploy-enablement.md`.

## Specs

- **S1** — El origen permitido por CORS no se hardcodea: se lee de `CORS_ORIGIN`, con
  varios orígenes separados por coma, y acepta `http://localhost:4200` junto a los
  orígenes de producción.
  Requisito textual del usuario: "parametriza `CORS_ORIGIN` en `src/main.ts` del backend
  para que acepte tanto `http://localhost:4200` como los orígenes de producción".
- **S2** — Sin `CORS_ORIGIN` configurado se mantiene el comportamiento actual de
  desarrollo (`http://localhost:4200`), para no romper a nadie que hoy corre el backend
  sin variables nuevas.
- **S3** — El comodín `*` se rechaza con error explícito, porque `credentials: true` lo
  vuelve inaplicable en el navegador.

## Tasks

- **T1** — S1-S3 — `src/cors.config.ts` + `src/cors.config.spec.ts` + `src/main.ts` — inline — commit `feat(cors): read the allowed origins from CORS_ORIGIN`

## Estado de verificación

- `npx vitest run src/cors.config.spec.ts`: 6/6 en verde (RED observado antes: módulo ausente).
- `npm test`: 15 archivos, 39 tests en verde.
- `npm run build`: sin errores.
- `npm run test:e2e`: **en rojo por un defecto preexistente**, ajeno a este cambio:
  `test/app.e2e-spec.ts:20-23` espera `GET /` → 200 y recibe 401 porque el `JwtAuthGuard`
  global (`src/app.module.ts:31`) protege `AppController.getHello`, que no es `@Public()`.
  El e2e bootea `AppModule` directamente y nunca ejecuta `src/main.ts`, así que el cambio
  de CORS no puede influir en ese resultado.

## Log

- **L1** — Pedido del usuario, textual: "parametriza `CORS_ORIGIN` en `src/main.ts` del
  backend para que acepte tanto `http://localhost:4200` como los orígenes de producción"
  dentro del bloque "Desbloqueo de despliegue (API env + CORS)", con la instrucción de
  "verifica con build/tests y haz los commits correspondientes en cada rama".
- **L2** — Punto de partida: `src/main.ts:23-26` fijaba `origin: 'http://localhost:4200'`
  y no existía ninguna variable de entorno para orígenes.
- **L3** — Decisión de diseño: la lista se resuelve en una función pura
  (`getCorsOrigins`) y no inline en `bootstrap`, para poder testearla; mismo patrón que
  `src/auth/jwt.config.ts`.
