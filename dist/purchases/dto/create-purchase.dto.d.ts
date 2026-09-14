import { CreatePurchaseItemDto } from './create-purchase-item.dto.js';
export declare class CreatePurchaseDto {
    supplierId: number;
    invoiceNumber?: string;
    items: CreatePurchaseItemDto[];
}
