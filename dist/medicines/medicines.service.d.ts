import { CreateMedicineDto } from './dto/create-medicine.dto.js';
import { UpdateMedicineDto } from './dto/update-medicine.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class MedicinesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMedicineDto: CreateMedicineDto): Promise<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal;
        salePrice: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/prisma/enums.js").EstadoMedicamento;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal;
        salePrice: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/prisma/enums.js").EstadoMedicamento;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal;
        salePrice: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/prisma/enums.js").EstadoMedicamento;
    }>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal;
        salePrice: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/prisma/enums.js").EstadoMedicamento;
    }>;
    remove(id: string): Promise<void>;
    findLowStock(): Promise<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal;
        salePrice: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/prisma/enums.js").EstadoMedicamento;
    }[]>;
}
