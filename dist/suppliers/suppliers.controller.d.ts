import { SuppliersService } from './suppliers.service.js';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
    }>;
    findAll(): Promise<({
        purchases: {
            id: number;
            createdAt: Date | null;
            userId: number | null;
            supplierId: number;
            invoiceNumber: string;
            date: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
    })[]>;
    findOne(id: number): Promise<{
        purchases: {
            id: number;
            createdAt: Date | null;
            userId: number | null;
            supplierId: number;
            invoiceNumber: string;
            date: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
    }>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
    }>;
    remove(id: number): Promise<void>;
}
