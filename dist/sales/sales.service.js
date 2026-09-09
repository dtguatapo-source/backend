"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalesService = class SalesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSaleDto) {
        const { customerName, customerIdNumber, customerId, discount = 0, items } = createSaleDto;
        if (!items || items.length === 0) {
            throw new common_1.BadRequestException('La venta debe contener al menos un producto.');
        }
        const medicineUpdates = [];
        let calculatedTotal = 0;
        for (const item of items) {
            const medicine = await this.prisma.medicine.findUnique({
                where: { id: item.medicineId },
            });
            if (!medicine) {
                throw new common_1.NotFoundException(`El medicamento con ID "${item.medicineId}" no existe.`);
            }
            if (medicine.stock < item.quantity) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${medicine.name}". Stock disponible: ${medicine.stock}, solicitado: ${item.quantity}.`);
            }
            const unitPrice = Number(medicine.salePrice);
            const subtotal = unitPrice * item.quantity;
            calculatedTotal += subtotal;
            medicineUpdates.push({
                id: medicine.id,
                newStock: medicine.stock - item.quantity,
                unitPrice,
                subtotal,
                quantity: item.quantity,
            });
        }
        const finalTotal = Math.max(0, calculatedTotal - discount);
        return await this.prisma.$transaction(async (tx) => {
            const sale = await tx.sale.create({
                data: {
                    customerName: customerName || 'Cliente Mostrador',
                    customerIdNumber: customerIdNumber || null,
                    customerId: customerId || null,
                    discount: discount,
                    total: finalTotal,
                    items: {
                        create: medicineUpdates.map((item) => ({
                            medicineId: item.id,
                            quantity: item.quantity,
                            unitPrice: item.unitPrice,
                            subtotal: item.subtotal,
                        })),
                    },
                },
                include: {
                    items: {
                        include: {
                            medicine: true,
                        },
                    },
                    customer: true,
                },
            });
            for (const update of medicineUpdates) {
                const isAgotado = update.newStock === 0;
                await tx.medicine.update({
                    where: { id: update.id },
                    data: {
                        stock: update.newStock,
                        ...(isAgotado && { status: 'AGOTADO' }),
                    },
                });
            }
            return sale;
        });
    }
    async findAll() {
        return await this.prisma.sale.findMany({
            include: {
                items: {
                    include: {
                        medicine: true,
                    },
                },
                customer: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
    }
    async findOne(id) {
        const sale = await this.prisma.sale.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        medicine: true,
                    },
                },
                customer: true,
            },
        });
        if (!sale) {
            throw new common_1.NotFoundException(`La venta con ID #${id} no fue encontrada.`);
        }
        return sale;
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesService);
//# sourceMappingURL=sales.service.js.map