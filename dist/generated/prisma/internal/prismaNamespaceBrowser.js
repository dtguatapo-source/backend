"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.SaleItemScalarFieldEnum = exports.SaleScalarFieldEnum = exports.PurchaseItemScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.SupplierScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.MedicineScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Medicine: 'Medicine',
    Customer: 'Customer',
    Supplier: 'Supplier',
    Purchase: 'Purchase',
    PurchaseItem: 'PurchaseItem',
    Sale: 'Sale',
    SaleItem: 'SaleItem'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
};
exports.MedicineScalarFieldEnum = {
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
exports.CustomerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    idNumber: 'idNumber'
};
exports.SupplierScalarFieldEnum = {
    id: 'id',
    name: 'name',
    nit: 'nit',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt'
};
exports.PurchaseScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    supplierId: 'supplierId',
    provider: 'provider',
    invoiceNumber: 'invoiceNumber',
    date: 'date',
    createdAt: 'createdAt'
};
exports.PurchaseItemScalarFieldEnum = {
    id: 'id',
    purchaseId: 'purchaseId',
    medicineId: 'medicineId',
    quantity: 'quantity',
    purchasePrice: 'purchasePrice',
    salePrice: 'salePrice',
    expiryDate: 'expiryDate',
    total: 'total'
};
exports.SaleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    customerName: 'customerName',
    customerIdNumber: 'customerIdNumber',
    date: 'date',
    discount: 'discount',
    total: 'total'
};
exports.SaleItemScalarFieldEnum = {
    id: 'id',
    saleId: 'saleId',
    medicineId: 'medicineId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map