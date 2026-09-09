"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.ObserveInstrument = exports.ObserveModule = void 0;
const common_1 = require("@nestjs/common");
const observe_1 = require("@nestjs/observe");
const app_controller_js_1 = require("./app.controller.js");
const app_service_js_1 = require("./app.service.js");
const prisma_module_js_1 = require("./prisma/prisma.module.js");
const medicines_module_js_1 = require("./medicines/medicines.module.js");
const customers_module_1 = require("./customers/customers.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const purchases_module_1 = require("./purchases/purchases.module");
const sales_module_1 = require("./sales/sales.module");
_a = (0, observe_1.createObserveModule)(), exports.ObserveModule = _a.ObserveModule, exports.ObserveInstrument = _a.ObserveInstrument;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_js_1.PrismaModule,
            medicines_module_js_1.MedicinesModule,
            customers_module_1.CustomersModule,
            suppliers_module_1.SuppliersModule,
            purchases_module_1.PurchasesModule,
            sales_module_1.SalesModule,
        ],
        controllers: [app_controller_js_1.AppController],
        providers: [app_service_js_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map