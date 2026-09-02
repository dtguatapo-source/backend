import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Medicine: "Medicine";
    readonly Customer: "Customer";
    readonly Purchase: "Purchase";
    readonly PurchaseItem: "PurchaseItem";
    readonly Sale: "Sale";
    readonly SaleItem: "SaleItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const MedicineScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly laboratory: "laboratory";
    readonly category: "category";
    readonly description: "description";
    readonly keywords: "keywords";
    readonly stock: "stock";
    readonly purchasePrice: "purchasePrice";
    readonly salePrice: "salePrice";
    readonly status: "status";
};
export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly idNumber: "idNumber";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const PurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly invoiceNumber: "invoiceNumber";
    readonly provider: "provider";
    readonly date: "date";
    readonly createdAt: "createdAt";
};
export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];
export declare const PurchaseItemScalarFieldEnum: {
    readonly id: "id";
    readonly purchaseId: "purchaseId";
    readonly medicineId: "medicineId";
    readonly quantity: "quantity";
    readonly purchasePrice: "purchasePrice";
    readonly salePrice: "salePrice";
    readonly expiryDate: "expiryDate";
    readonly total: "total";
};
export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum];
export declare const SaleScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly customerId: "customerId";
    readonly customerName: "customerName";
    readonly customerIdNumber: "customerIdNumber";
    readonly date: "date";
    readonly discount: "discount";
    readonly total: "total";
};
export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum];
export declare const SaleItemScalarFieldEnum: {
    readonly id: "id";
    readonly saleId: "saleId";
    readonly medicineId: "medicineId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly subtotal: "subtotal";
};
export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
