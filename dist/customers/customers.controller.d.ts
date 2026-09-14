import { CustomersService } from './customers.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
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
