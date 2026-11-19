import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
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
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ReportsModule } from './reports/reports.module';

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
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Toda la API queda cerrada por defecto: solo las rutas con @Public()
    // pasan sin token, y un controlador nuevo nace protegido.
    // No hay guard de roles: la droguería tiene una sola administradora, así que
    // cualquier usuario autenticado accede a todos los módulos.
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ]
})
export class AppModule {}