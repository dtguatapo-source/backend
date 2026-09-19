import { CreatePurchaseDto } from './dto/create-purchase.dto.js';
import { PurchasesService } from './purchases.service.js';
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    create(createPurchaseDto: CreatePurchaseDto): Promise<{
        supplier: {
            id: number;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
            createdAt: Date;
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
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
        userId: number | null;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            createdAt: Date | null;
            username: string;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").UserRole;
        } | null;
        supplier: {
            id: number;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
            createdAt: Date;
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
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
        userId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            createdAt: Date | null;
            username: string;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").UserRole;
        } | null;
        supplier: {
            id: number;
            name: string;
            nit: string;
            phone: string | null;
            email: string | null;
            address: string | null;
            createdAt: Date;
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
            medicineId: string;
            quantity: number;
            expiryDate: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date | null;
        supplierId: number;
        invoiceNumber: string;
        date: Date;
        userId: number | null;
    }>;
}
