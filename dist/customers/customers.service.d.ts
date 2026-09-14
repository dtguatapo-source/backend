import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
    remove(id: number): Promise<void>;
}
