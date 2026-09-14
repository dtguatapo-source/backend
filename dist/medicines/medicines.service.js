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
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const client_js_1 = require("../generated/prisma/client.js");
let MedicinesService = class MedicinesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMedicineDto) {
        try {
            return await this.prisma.medicine.create({
                data: createMedicineDto,
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('El medicamento ya existe');
            }
            throw error;
        }
    }
    async findAll() {
        return await this.prisma.medicine.findMany();
    }
    async findOne(id) {
        const medicine = await this.prisma.medicine.findUnique({
            where: { id },
        });
        if (!medicine) {
            throw new common_1.NotFoundException(`El medicamento con ID "${id}" no existe`);
        }
        return medicine;
    }
    async update(id, updateMedicineDto) {
        try {
            return await this.prisma.medicine.update({
                where: { id },
                data: updateMedicineDto,
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Los datos a actualizar entran en conflicto con un registro existente');
                }
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`El medicamento con ID "${id}" no existe`);
                }
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.prisma.medicine.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2003') {
                    throw new common_1.ConflictException('No se puede eliminar el medicamento porque está enlazado a otros registros');
                }
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`El medicamento con ID "${id}" no existe`);
                }
            }
            throw error;
        }
    }
    async findLowStock() {
        return await this.prisma.medicine.findMany({
            where: {
                stock: {
                    lte: 10,
                },
            },
        });
    }
};
exports.MedicinesService = MedicinesService;
exports.MedicinesService = MedicinesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService])
], MedicinesService);
//# sourceMappingURL=medicines.service.js.map