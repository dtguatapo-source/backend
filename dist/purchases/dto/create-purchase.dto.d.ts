import { CreatePurchaseItemDto } from './create-purchase-item.dto';
export declare class CreatePurchaseDto {
    supplierId: number;
    invoiceNumber?: string;
    items: CreatePurchaseItemDto[];
}
