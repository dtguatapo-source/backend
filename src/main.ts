import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';

// Support running the app from either the repository root or nest-temp.
dotenv.config();
dotenv.config({ path: '../.env', override: false });
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
