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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PurchasesService = class PurchasesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPurchaseDto) {
        const { supplierId, invoiceNumber, items } = createPurchaseDto;
        if (supplierId) {
            const supplier = await this.prisma.supplier.findUnique({
                where: { id: supplierId },
            });
            if (!supplier) {
                throw new common_1.NotFoundException(`El proveedor con ID #${supplierId} no existe`);
            }
        }
        return await this.prisma.$transaction(async (tx) => {
            const purchase = await tx.purchase.create({
                data: {
                    supplierId: supplierId || null,
                    invoiceNumber: invoiceNumber || `FAC-${Date.now()}`,
                    date: new Date(),
                    items: {
                        create: items.map((item) => ({
                            medicineId: item.medicineId,
                            quantity: item.quantity,
                            purchasePrice: item.unitPrice,
                            salePrice: item.unitPrice,
                            total: item.quantity * item.unitPrice,
                        })),
                    },
                },
                include: {
                    items: true,
                    supplier: true,
                },
            });
            for (const item of items) {
                await tx.medicine.update({
                    where: { id: item.medicineId },
                    data: {
                        stock: {
                            increment: item.quantity,
                        },
                    },
                });
            }
            return purchase;
        });
    }
    async findAll() {
        return await this.prisma.purchase.findMany({
            include: {
                supplier: true,
                user: true,
                items: {
                    include: {
                        medicine: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const purchase = await this.prisma.purchase.findUnique({
            where: { id },
            include: {
                supplier: true,
                user: true,
                items: {
                    include: {
                        medicine: true,
                    },
                },
            },
        });
        if (!purchase) {
            throw new common_1.NotFoundException(`La compra con ID #${id} no fue encontrada`);
        }
        return purchase;
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map