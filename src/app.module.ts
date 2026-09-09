import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { MedicinesModule } from './medicines/medicines.module.js';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { PurchasesModule } from './purchases/purchases.module';
import { SalesModule } from './sales/sales.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    PrismaModule,
    MedicinesModule,
    CustomersModule,
    SuppliersModule,
    PurchasesModule,
    SalesModule, // Registro correcto dentro del módulo principal
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}