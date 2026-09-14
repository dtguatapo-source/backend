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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const client_js_1 = require("../generated/prisma/client.js");
let SuppliersService = class SuppliersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSupplierDto) {
        try {
            return await this.prisma.supplier.create({
                data: createSupplierDto,
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un proveedor registrado con esos datos (NIT o email duplicado).');
            }
            throw error;
        }
    }
    async findAll() {
        return await this.prisma.supplier.findMany({
            include: { purchases: true },
        });
    }
    async findOne(id) {
        const supplier = await this.prisma.supplier.findUnique({
            where: { id },
            include: { purchases: true },
        });
        if (!supplier) {
            throw new common_1.NotFoundException(`Proveedor con ID #${id} no encontrado.`);
        }
        return supplier;
    }
    async update(id, updateSupplierDto) {
        try {
            return await this.prisma.supplier.update({
                where: { id },
                data: updateSupplierDto,
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Proveedor con ID #${id} no encontrado.`);
                }
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('El NIT o email ingresado entra en conflicto con otro proveedor.');
                }
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.prisma.supplier.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof client_js_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Proveedor con ID #${id} no encontrado.`);
                }
                if (error.code === 'P2003') {
                    throw new common_1.ConflictException('No se puede eliminar el proveedor porque tiene compras registradas asociadas.');
                }
            }
            throw error;
        }
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map