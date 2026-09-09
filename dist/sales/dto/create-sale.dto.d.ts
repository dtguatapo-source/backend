export declare class CreateSaleItemDto {
    medicineId: string;
    quantity: number;
}
export declare class CreateSaleDto {
    customerName?: string;
    customerIdNumber?: string;
    customerId?: number;
    discount?: number;
    items: CreateSaleItemDto[];
}
