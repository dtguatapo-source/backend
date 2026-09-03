import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { MedicinesModule } from './medicines/medicines.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    PrismaModule,
    MedicinesModule, // Registro correcto dentro del módulo principal
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}