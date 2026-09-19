export declare class CreateSaleItemDto {
    medicineId: string;
    quantity: number;
}
export declare class CreateSaleDto {
    customerId?: number;
    discount?: number;
    items: CreateSaleItemDto[];
}
