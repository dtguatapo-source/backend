import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePurchaseDto } from './dto/create-purchase.dto.js';
export declare class PurchasesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPurchaseDto: CreatePurchaseDto): Promise<{
        supplier: {
            id: number;
            createdAt: Date;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
        };
        items: ({
            medicine: {
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
            };
        } & {
            id: number;
            purchasePrice: import("@prisma/client-runtime-utils").Decimal;
            salePrice: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        userId: number | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            username: string;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").UserRole;
            createdAt: Date | null;
        } | null;
        supplier: {
            id: number;
            createdAt: Date;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
        };
        items: ({
            medicine: {
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
            };
        } & {
            id: number;
            purchasePrice: import("@prisma/client-runtime-utils").Decimal;
            salePrice: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        userId: number | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            username: string;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").UserRole;
            createdAt: Date | null;
        } | null;
        supplier: {
            id: number;
            createdAt: Date;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
        };
        items: ({
            medicine: {
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
            };
        } & {
            id: number;
            purchasePrice: import("@prisma/client-runtime-utils").Decimal;
            salePrice: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        userId: number | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
    }>;
}
