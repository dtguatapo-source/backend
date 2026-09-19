import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class SuppliersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        purchases: {
            id: number;
            createdAt: Date | null;
            supplierId: number;
            invoiceNumber: string;
            date: Date;
            userId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        purchases: {
            id: number;
            createdAt: Date | null;
            supplierId: number;
            invoiceNumber: string;
            date: Date;
            userId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }>;
    remove(id: number): Promise<void>;
}
