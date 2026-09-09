import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
export declare class SalesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSaleDto: CreateSaleDto): Promise<{
        customer: {
            id: number;
            name: string;
            idNumber: string;
        } | null;
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
                status: import("../generated/prisma/enums").EstadoMedicamento;
            };
        } & {
            id: number;
            medicineId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            saleId: number;
        })[];
    } & {
        id: number;
        date: Date | null;
        userId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        customerName: string | null;
        customerIdNumber: string | null;
        customerId: number | null;
        discount: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    findAll(): Promise<({
        customer: {
            id: number;
            name: string;
            idNumber: string;
        } | null;
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
                status: import("../generated/prisma/enums").EstadoMedicamento;
            };
        } & {
            id: number;
            medicineId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            saleId: number;
        })[];
    } & {
        id: number;
        date: Date | null;
        userId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        customerName: string | null;
        customerIdNumber: string | null;
        customerId: number | null;
        discount: import("@prisma/client-runtime-utils").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        customer: {
            id: number;
            name: string;
            idNumber: string;
        } | null;
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
                status: import("../generated/prisma/enums").EstadoMedicamento;
            };
        } & {
            id: number;
            medicineId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            saleId: number;
        })[];
    } & {
        id: number;
        date: Date | null;
        userId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        customerName: string | null;
        customerIdNumber: string | null;
        customerId: number | null;
        discount: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
}
