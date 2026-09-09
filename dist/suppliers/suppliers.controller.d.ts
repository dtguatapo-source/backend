import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
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
            supplierId: number | null;
            invoiceNumber: string;
            provider: string | null;
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
    searchByName(name: string): Promise<{
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }[]>;
    findByNit(nit: string): Promise<{
        purchases: {
            id: number;
            createdAt: Date | null;
            supplierId: number | null;
            invoiceNumber: string;
            provider: string | null;
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
    findOne(id: string): Promise<{
        purchases: {
            id: number;
            createdAt: Date | null;
            supplierId: number | null;
            invoiceNumber: string;
            provider: string | null;
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
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        nit: string;
        phone: string | null;
        email: string | null;
        address: string | null;
        createdAt: Date;
    }>;
}
