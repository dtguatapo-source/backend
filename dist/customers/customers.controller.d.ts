import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        idNumber: string;
    }>;
}
