import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';

// Support running the app from either the repository root or nest-temp.
dotenv.config();
dotenv.config({ path: '../.env', override: false });
import { AppModule, ObserveInstrument } from './app.module.js';
import { getCorsOrigins } from './cors.config.js';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Detrás del proxy de Railway la IP real del cliente llega en X-Forwarded-For.
  // Sin esto, request.ip sería siempre la del proxy y el límite de intentos de
  // login terminaría siendo un presupuesto global compartido por todos.
  app.set('trust proxy', 1);

  // Cabeceras de seguridad. La CSP se desactiva porque esta API no sirve HTML
  // (la del frontend se define en nginx) y crossOriginResourcePolicy se abre a
  // "cross-origin" porque el frontend vive en otro dominio: el acceso sigue
  // restringido por la allowlist de CORS, no por esta cabecera.
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      // Mismo criterio que el nginx del frontend, para no tener dos políticas distintas.
      frameguard: { action: 'deny' },
    }),
  );

  // Orígenes permitidos por entorno: en local cae en http://localhost:4200 y en
  // producción se listan en CORS_ORIGIN separados por comas.
  app.enableCors({
    origin: getCorsOrigins(),
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
