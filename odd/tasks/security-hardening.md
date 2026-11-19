# Security hardening: límite de intentos de login, cabeceras y documentación veraz

Alcance: backend NestJS (repo `C:\Users\derll\backend`, rama
`feature/correcciones-seguridad-reportes`) y una edición chica en el frontend
(`nginx.conf.template`) más correcciones de documentación en ambos repos.

## Specs

- **S1** — `POST /auth/login` limita los intentos por IP de origen: como máximo 5 en una
  ventana de 60 segundos; el intento siguiente responde **429** con un mensaje claro y un
  `retryAfter` en segundos. Sin esto no hay ninguna protección contra fuerza bruta.
  Motivo registrado en L2 (hallazgo B1 de la revisión de esta sesión).
- **S2** — Las respuestas del backend llevan cabeceras de seguridad
  (`X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`,
  `Cross-Origin-Resource-Policy` y `Strict-Transport-Security`) **sin romper CORS**: el
  header `Access-Control-Allow-Origin` para un origen permitido tiene que seguir presente.
  `Permissions-Policy` se aplica sólo en nginx porque es una cabecera a nivel de documento y
  esta API no sirve HTML.
- **S3** — El `nginx.conf.template` del frontend agrega las mismas cabeceras al servir los
  archivos estáticos.
- **S4** — Documentación que no mienta: `AGENTS.md` del frontend (el guard ya está cableado
  en `app.routes.ts`), README del frontend (no existe `ng e2e`), README del backend (no se
  despliega con `mau deploy`, se despliega con Docker/Railway).
- **S5** — `odd/tasks/security-reports-fixes.md` del backend queda versionado, como el resto
  de los documentos ODD.

## Tasks

- **T1** — S1 — `LoginThrottleGuard` + spec + cableado en `AuthController`/`AuthModule` y
  `trust proxy` en `main.ts` — delegado a worker — commit backend
- **T2** — S2 — `helmet` configurado explícitamente en `main.ts` — inline — commit backend
- **T3** — S3 — cabeceras en `nginx.conf.template` — inline — commit frontend
- **T4** — S4-S5 — correcciones de documentación y versionado del doc ODD pendiente — inline

## Decisiones

- El límite se cuenta **por IP**, no por IP+usuario: si se contara por usuario, rotar el
  nombre de usuario esquivaría el límite y el ataque seguiría siendo trivial.
- El guard cuenta también los intentos con body inválido, porque los guards corren antes de
  los pipes de validación y lo que se quiere medir es el intento, no el resultado.
- Se agrega `app.set('trust proxy', 1)` para que `request.ip` sea la IP del cliente real y no
  la del proxy de Railway; sin eso el límite agruparía a todos los clientes en una sola IP.
- Se eligió `helmet` en lugar de escribir las cabeceras a mano, pero configurado de forma
  explícita para no romper CORS entre dos orígenes distintos.

## Log

- **L1** — Pedido del usuario, textual: "si empieza" — aceptando el bloque recomendado por el
  agente en el mensaje anterior.
- **L2** — Alcance aceptado, textual del agente: "primero **A** completo (es lo que impide que
  la app se vea funcionando), después **B1 + B2** (rate limit y cabeceras, que son 30 líneas y
  suben muchísimo el puntaje de seguridad), y recién después **C1** (paginación), que es la más
  larga." y "Si querés la más barata y visible: pego **B1 + B2 + C4 + D** en un solo bloque".
  Este documento cubre B1, B2, C4 y D. El bloque A queda fuera porque depende de datos del
  usuario (dominio real de la API y variables de Railway).
- **L3** — Estado de partida verificado: `helmet` no instalado; `POST /auth/login` sin ningún
  límite de intentos (`src/auth/auth.controller.ts:24-28`).
