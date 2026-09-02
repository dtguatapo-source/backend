import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Medicine: 'Medicine',
    Customer: 'Customer',
    Purchase: 'Purchase',
    PurchaseItem: 'PurchaseItem',
    Sale: 'Sale',
    SaleItem: 'SaleItem'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
};
export const MedicineScalarFieldEnum = {
    id: 'id',
    name: 'name',
    laboratory: 'laboratory',
    category: 'category',
    description: 'description',
    keywords: 'keywords',
    stock: 'stock',
    purchasePrice: 'purchasePrice',
    salePrice: 'salePrice',
    status: 'status'
};
export const CustomerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    idNumber: 'idNumber'
};
export const PurchaseScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    invoiceNumber: 'invoiceNumber',
    provider: 'provider',
    date: 'date',
    createdAt: 'createdAt'
};
export const PurchaseItemScalarFieldEnum = {
    id: 'id',
    purchaseId: 'purchaseId',
    medicineId: 'medicineId',
    quantity: 'quantity',
    purchasePrice: 'purchasePrice',
    salePrice: 'salePrice',
    expiryDate: 'expiryDate',
    total: 'total'
};
export const SaleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    customerName: 'customerName',
    customerIdNumber: 'customerIdNumber',
    date: 'date',
    discount: 'discount',
    total: 'total'
};
export const SaleItemScalarFieldEnum = {
    id: 'id',
    saleId: 'saleId',
    medicineId: 'medicineId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map