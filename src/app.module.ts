import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MedicinesModule } from './medicines/medicines.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { PurchasesModule } from './purchases/purchases.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    PrismaModule,
    MedicinesModule,
    CustomersModule,
    SuppliersModule,
    PurchasesModule,
    SalesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}