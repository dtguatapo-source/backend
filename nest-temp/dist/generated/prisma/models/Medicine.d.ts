import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicineModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicinePayload>;
export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null;
    _avg: MedicineAvgAggregateOutputType | null;
    _sum: MedicineSumAggregateOutputType | null;
    _min: MedicineMinAggregateOutputType | null;
    _max: MedicineMaxAggregateOutputType | null;
};
export type MedicineAvgAggregateOutputType = {
    stock: number | null;
    purchasePrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
};
export type MedicineSumAggregateOutputType = {
    stock: number | null;
    purchasePrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
};
export type MedicineMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    laboratory: string | null;
    category: string | null;
    description: string | null;
    keywords: string | null;
    stock: number | null;
    purchasePrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
    status: $Enums.EstadoMedicamento | null;
};
export type MedicineMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    laboratory: string | null;
    category: string | null;
    description: string | null;
    keywords: string | null;
    stock: number | null;
    purchasePrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
    status: $Enums.EstadoMedicamento | null;
};
export type MedicineCountAggregateOutputType = {
    id: number;
    name: number;
    laboratory: number;
    category: number;
    description: number;
    keywords: number;
    stock: number;
    purchasePrice: number;
    salePrice: number;
    status: number;
    _all: number;
};
export type MedicineAvgAggregateInputType = {
    stock?: true;
    purchasePrice?: true;
    salePrice?: true;
};
export type MedicineSumAggregateInputType = {
    stock?: true;
    purchasePrice?: true;
    salePrice?: true;
};
export type MedicineMinAggregateInputType = {
    id?: true;
    name?: true;
    laboratory?: true;
    category?: true;
    description?: true;
    keywords?: true;
    stock?: true;
    purchasePrice?: true;
    salePrice?: true;
    status?: true;
};
export type MedicineMaxAggregateInputType = {
    id?: true;
    name?: true;
    laboratory?: true;
    category?: true;
    description?: true;
    keywords?: true;
    stock?: true;
    purchasePrice?: true;
    salePrice?: true;
    status?: true;
};
export type MedicineCountAggregateInputType = {
    id?: true;
    name?: true;
    laboratory?: true;
    category?: true;
    description?: true;
    keywords?: true;
    stock?: true;
    purchasePrice?: true;
    salePrice?: true;
    status?: true;
    _all?: true;
};
export type MedicineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicineWhereInput;
    orderBy?: Prisma.MedicineOrderByWithRelationInput | Prisma.MedicineOrderByWithRelationInput[];
    cursor?: Prisma.MedicineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicineCountAggregateInputType;
    _avg?: MedicineAvgAggregateInputType;
    _sum?: MedicineSumAggregateInputType;
    _min?: MedicineMinAggregateInputType;
    _max?: MedicineMaxAggregateInputType;
};
export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicine[P]> : Prisma.GetScalarType<T[P], AggregateMedicine[P]>;
};
export type MedicineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicineWhereInput;
    orderBy?: Prisma.MedicineOrderByWithAggregationInput | Prisma.MedicineOrderByWithAggregationInput[];
    by: Prisma.MedicineScalarFieldEnum[] | Prisma.MedicineScalarFieldEnum;
    having?: Prisma.MedicineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicineCountAggregateInputType | true;
    _avg?: MedicineAvgAggregateInputType;
    _sum?: MedicineSumAggregateInputType;
    _min?: MedicineMinAggregateInputType;
    _max?: MedicineMaxAggregateInputType;
};
export type MedicineGroupByOutputType = {
    id: string;
    name: string;
    laboratory: string;
    category: string | null;
    description: string;
    keywords: string | null;
    stock: number;
    purchasePrice: runtime.Decimal;
    salePrice: runtime.Decimal;
    status: $Enums.EstadoMedicamento;
    _count: MedicineCountAggregateOutputType | null;
    _avg: MedicineAvgAggregateOutputType | null;
    _sum: MedicineSumAggregateOutputType | null;
    _min: MedicineMinAggregateOutputType | null;
    _max: MedicineMaxAggregateOutputType | null;
};
export type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicineGroupByOutputType[P]>;
}>>;
export type MedicineWhereInput = {
    AND?: Prisma.MedicineWhereInput | Prisma.MedicineWhereInput[];
    OR?: Prisma.MedicineWhereInput[];
    NOT?: Prisma.MedicineWhereInput | Prisma.MedicineWhereInput[];
    id?: Prisma.StringFilter<"Medicine"> | string;
    name?: Prisma.StringFilter<"Medicine"> | string;
    laboratory?: Prisma.StringFilter<"Medicine"> | string;
    category?: Prisma.StringNullableFilter<"Medicine"> | string | null;
    description?: Prisma.StringFilter<"Medicine"> | string;
    keywords?: Prisma.StringNullableFilter<"Medicine"> | string | null;
    stock?: Prisma.IntFilter<"Medicine"> | number;
    purchasePrice?: Prisma.DecimalFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFilter<"Medicine"> | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemListRelationFilter;
    saleItems?: Prisma.SaleItemListRelationFilter;
};
export type MedicineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    laboratory?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseItems?: Prisma.PurchaseItemOrderByRelationAggregateInput;
    saleItems?: Prisma.SaleItemOrderByRelationAggregateInput;
};
export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MedicineWhereInput | Prisma.MedicineWhereInput[];
    OR?: Prisma.MedicineWhereInput[];
    NOT?: Prisma.MedicineWhereInput | Prisma.MedicineWhereInput[];
    name?: Prisma.StringFilter<"Medicine"> | string;
    laboratory?: Prisma.StringFilter<"Medicine"> | string;
    category?: Prisma.StringNullableFilter<"Medicine"> | string | null;
    description?: Prisma.StringFilter<"Medicine"> | string;
    keywords?: Prisma.StringNullableFilter<"Medicine"> | string | null;
    stock?: Prisma.IntFilter<"Medicine"> | number;
    purchasePrice?: Prisma.DecimalFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFilter<"Medicine"> | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemListRelationFilter;
    saleItems?: Prisma.SaleItemListRelationFilter;
}, "id">;
export type MedicineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    laboratory?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.MedicineCountOrderByAggregateInput;
    _avg?: Prisma.MedicineAvgOrderByAggregateInput;
    _max?: Prisma.MedicineMaxOrderByAggregateInput;
    _min?: Prisma.MedicineMinOrderByAggregateInput;
    _sum?: Prisma.MedicineSumOrderByAggregateInput;
};
export type MedicineScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicineScalarWhereWithAggregatesInput | Prisma.MedicineScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicineScalarWhereWithAggregatesInput | Prisma.MedicineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medicine"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Medicine"> | string;
    laboratory?: Prisma.StringWithAggregatesFilter<"Medicine"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"Medicine"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"Medicine"> | string;
    keywords?: Prisma.StringNullableWithAggregatesFilter<"Medicine"> | string | null;
    stock?: Prisma.IntWithAggregatesFilter<"Medicine"> | number;
    purchasePrice?: Prisma.DecimalWithAggregatesFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalWithAggregatesFilter<"Medicine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoWithAggregatesFilter<"Medicine"> | $Enums.EstadoMedicamento;
};
export type MedicineCreateInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemCreateNestedManyWithoutMedicineInput;
    saleItems?: Prisma.SaleItemCreateNestedManyWithoutMedicineInput;
};
export type MedicineUncheckedCreateInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUncheckedCreateNestedManyWithoutMedicineInput;
    saleItems?: Prisma.SaleItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUpdateManyWithoutMedicineNestedInput;
    saleItems?: Prisma.SaleItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUncheckedUpdateManyWithoutMedicineNestedInput;
    saleItems?: Prisma.SaleItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicineCreateManyInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
};
export type MedicineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
};
export type MedicineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
};
export type MedicineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    laboratory?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MedicineAvgOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
};
export type MedicineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    laboratory?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MedicineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    laboratory?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MedicineSumOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
};
export type MedicineScalarRelationFilter = {
    is?: Prisma.MedicineWhereInput;
    isNot?: Prisma.MedicineWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumEstadoMedicamentoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoMedicamento;
};
export type MedicineCreateNestedOneWithoutPurchaseItemsInput = {
    create?: Prisma.XOR<Prisma.MedicineCreateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedCreateWithoutPurchaseItemsInput>;
    connectOrCreate?: Prisma.MedicineCreateOrConnectWithoutPurchaseItemsInput;
    connect?: Prisma.MedicineWhereUniqueInput;
};
export type MedicineUpdateOneRequiredWithoutPurchaseItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MedicineCreateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedCreateWithoutPurchaseItemsInput>;
    connectOrCreate?: Prisma.MedicineCreateOrConnectWithoutPurchaseItemsInput;
    upsert?: Prisma.MedicineUpsertWithoutPurchaseItemsInput;
    connect?: Prisma.MedicineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicineUpdateToOneWithWhereWithoutPurchaseItemsInput, Prisma.MedicineUpdateWithoutPurchaseItemsInput>, Prisma.MedicineUncheckedUpdateWithoutPurchaseItemsInput>;
};
export type MedicineCreateNestedOneWithoutSaleItemsInput = {
    create?: Prisma.XOR<Prisma.MedicineCreateWithoutSaleItemsInput, Prisma.MedicineUncheckedCreateWithoutSaleItemsInput>;
    connectOrCreate?: Prisma.MedicineCreateOrConnectWithoutSaleItemsInput;
    connect?: Prisma.MedicineWhereUniqueInput;
};
export type MedicineUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MedicineCreateWithoutSaleItemsInput, Prisma.MedicineUncheckedCreateWithoutSaleItemsInput>;
    connectOrCreate?: Prisma.MedicineCreateOrConnectWithoutSaleItemsInput;
    upsert?: Prisma.MedicineUpsertWithoutSaleItemsInput;
    connect?: Prisma.MedicineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicineUpdateToOneWithWhereWithoutSaleItemsInput, Prisma.MedicineUpdateWithoutSaleItemsInput>, Prisma.MedicineUncheckedUpdateWithoutSaleItemsInput>;
};
export type MedicineCreateWithoutPurchaseItemsInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    saleItems?: Prisma.SaleItemCreateNestedManyWithoutMedicineInput;
};
export type MedicineUncheckedCreateWithoutPurchaseItemsInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    saleItems?: Prisma.SaleItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicineCreateOrConnectWithoutPurchaseItemsInput = {
    where: Prisma.MedicineWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicineCreateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedCreateWithoutPurchaseItemsInput>;
};
export type MedicineUpsertWithoutPurchaseItemsInput = {
    update: Prisma.XOR<Prisma.MedicineUpdateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedUpdateWithoutPurchaseItemsInput>;
    create: Prisma.XOR<Prisma.MedicineCreateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedCreateWithoutPurchaseItemsInput>;
    where?: Prisma.MedicineWhereInput;
};
export type MedicineUpdateToOneWithWhereWithoutPurchaseItemsInput = {
    where?: Prisma.MedicineWhereInput;
    data: Prisma.XOR<Prisma.MedicineUpdateWithoutPurchaseItemsInput, Prisma.MedicineUncheckedUpdateWithoutPurchaseItemsInput>;
};
export type MedicineUpdateWithoutPurchaseItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    saleItems?: Prisma.SaleItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicineUncheckedUpdateWithoutPurchaseItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    saleItems?: Prisma.SaleItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicineCreateWithoutSaleItemsInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemCreateNestedManyWithoutMedicineInput;
};
export type MedicineUncheckedCreateWithoutSaleItemsInput = {
    id: string;
    name: string;
    laboratory: string;
    category?: string | null;
    description: string;
    keywords?: string | null;
    stock: number;
    purchasePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicineCreateOrConnectWithoutSaleItemsInput = {
    where: Prisma.MedicineWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicineCreateWithoutSaleItemsInput, Prisma.MedicineUncheckedCreateWithoutSaleItemsInput>;
};
export type MedicineUpsertWithoutSaleItemsInput = {
    update: Prisma.XOR<Prisma.MedicineUpdateWithoutSaleItemsInput, Prisma.MedicineUncheckedUpdateWithoutSaleItemsInput>;
    create: Prisma.XOR<Prisma.MedicineCreateWithoutSaleItemsInput, Prisma.MedicineUncheckedCreateWithoutSaleItemsInput>;
    where?: Prisma.MedicineWhereInput;
};
export type MedicineUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: Prisma.MedicineWhereInput;
    data: Prisma.XOR<Prisma.MedicineUpdateWithoutSaleItemsInput, Prisma.MedicineUncheckedUpdateWithoutSaleItemsInput>;
};
export type MedicineUpdateWithoutSaleItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicineUncheckedUpdateWithoutSaleItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    laboratory?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumEstadoMedicamentoFieldUpdateOperationsInput | $Enums.EstadoMedicamento;
    purchaseItems?: Prisma.PurchaseItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicineCountOutputType = {
    purchaseItems: number;
    saleItems: number;
};
export type MedicineCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseItems?: boolean | MedicineCountOutputTypeCountPurchaseItemsArgs;
    saleItems?: boolean | MedicineCountOutputTypeCountSaleItemsArgs;
};
export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineCountOutputTypeSelect<ExtArgs> | null;
};
export type MedicineCountOutputTypeCountPurchaseItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseItemWhereInput;
};
export type MedicineCountOutputTypeCountSaleItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
};
export type MedicineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    laboratory?: boolean;
    category?: boolean;
    description?: boolean;
    keywords?: boolean;
    stock?: boolean;
    purchasePrice?: boolean;
    salePrice?: boolean;
    status?: boolean;
    purchaseItems?: boolean | Prisma.Medicine$purchaseItemsArgs<ExtArgs>;
    saleItems?: boolean | Prisma.Medicine$saleItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicineCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicine"]>;
export type MedicineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    laboratory?: boolean;
    category?: boolean;
    description?: boolean;
    keywords?: boolean;
    stock?: boolean;
    purchasePrice?: boolean;
    salePrice?: boolean;
    status?: boolean;
}, ExtArgs["result"]["medicine"]>;
export type MedicineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    laboratory?: boolean;
    category?: boolean;
    description?: boolean;
    keywords?: boolean;
    stock?: boolean;
    purchasePrice?: boolean;
    salePrice?: boolean;
    status?: boolean;
}, ExtArgs["result"]["medicine"]>;
export type MedicineSelectScalar = {
    id?: boolean;
    name?: boolean;
    laboratory?: boolean;
    category?: boolean;
    description?: boolean;
    keywords?: boolean;
    stock?: boolean;
    purchasePrice?: boolean;
    salePrice?: boolean;
    status?: boolean;
};
export type MedicineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "laboratory" | "category" | "description" | "keywords" | "stock" | "purchasePrice" | "salePrice" | "status", ExtArgs["result"]["medicine"]>;
export type MedicineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseItems?: boolean | Prisma.Medicine$purchaseItemsArgs<ExtArgs>;
    saleItems?: boolean | Prisma.Medicine$saleItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicineCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MedicineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MedicinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medicine";
    objects: {
        purchaseItems: Prisma.$PurchaseItemPayload<ExtArgs>[];
        saleItems: Prisma.$SaleItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        laboratory: string;
        category: string | null;
        description: string;
        keywords: string | null;
        stock: number;
        purchasePrice: runtime.Decimal;
        salePrice: runtime.Decimal;
        status: $Enums.EstadoMedicamento;
    }, ExtArgs["result"]["medicine"]>;
    composites: {};
};
export type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicinePayload, S>;
export type MedicineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicineCountAggregateInputType | true;
};
export interface MedicineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medicine'];
        meta: {
            name: 'Medicine';
        };
    };
    findUnique<T extends MedicineFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicineFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicineFindManyArgs>(args?: Prisma.SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicineCreateArgs>(args: Prisma.SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicineCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MedicineDeleteArgs>(args: Prisma.SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicineUpdateArgs>(args: Prisma.SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicineDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicineUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MedicineUpsertArgs>(args: Prisma.SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicineCountArgs>(args?: Prisma.Subset<T, MedicineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicineCountAggregateOutputType> : number>;
    aggregate<T extends MedicineAggregateArgs>(args: Prisma.Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>;
    groupBy<T extends MedicineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicineGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicineGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicineFieldRefs;
}
export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseItems<T extends Prisma.Medicine$purchaseItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicine$purchaseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    saleItems<T extends Prisma.Medicine$saleItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicine$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicineFieldRefs {
    readonly id: Prisma.FieldRef<"Medicine", 'String'>;
    readonly name: Prisma.FieldRef<"Medicine", 'String'>;
    readonly laboratory: Prisma.FieldRef<"Medicine", 'String'>;
    readonly category: Prisma.FieldRef<"Medicine", 'String'>;
    readonly description: Prisma.FieldRef<"Medicine", 'String'>;
    readonly keywords: Prisma.FieldRef<"Medicine", 'String'>;
    readonly stock: Prisma.FieldRef<"Medicine", 'Int'>;
    readonly purchasePrice: Prisma.FieldRef<"Medicine", 'Decimal'>;
    readonly salePrice: Prisma.FieldRef<"Medicine", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Medicine", 'EstadoMedicamento'>;
}
export type MedicineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where: Prisma.MedicineWhereUniqueInput;
};
export type MedicineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where: Prisma.MedicineWhereUniqueInput;
};
export type MedicineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where?: Prisma.MedicineWhereInput;
    orderBy?: Prisma.MedicineOrderByWithRelationInput | Prisma.MedicineOrderByWithRelationInput[];
    cursor?: Prisma.MedicineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicineScalarFieldEnum | Prisma.MedicineScalarFieldEnum[];
};
export type MedicineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where?: Prisma.MedicineWhereInput;
    orderBy?: Prisma.MedicineOrderByWithRelationInput | Prisma.MedicineOrderByWithRelationInput[];
    cursor?: Prisma.MedicineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicineScalarFieldEnum | Prisma.MedicineScalarFieldEnum[];
};
export type MedicineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where?: Prisma.MedicineWhereInput;
    orderBy?: Prisma.MedicineOrderByWithRelationInput | Prisma.MedicineOrderByWithRelationInput[];
    cursor?: Prisma.MedicineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicineScalarFieldEnum | Prisma.MedicineScalarFieldEnum[];
};
export type MedicineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicineCreateInput, Prisma.MedicineUncheckedCreateInput>;
};
export type MedicineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicineCreateManyInput | Prisma.MedicineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    data: Prisma.MedicineCreateManyInput | Prisma.MedicineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicineUpdateInput, Prisma.MedicineUncheckedUpdateInput>;
    where: Prisma.MedicineWhereUniqueInput;
};
export type MedicineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicineUpdateManyMutationInput, Prisma.MedicineUncheckedUpdateManyInput>;
    where?: Prisma.MedicineWhereInput;
    limit?: number;
};
export type MedicineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicineUpdateManyMutationInput, Prisma.MedicineUncheckedUpdateManyInput>;
    where?: Prisma.MedicineWhereInput;
    limit?: number;
};
export type MedicineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where: Prisma.MedicineWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicineCreateInput, Prisma.MedicineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicineUpdateInput, Prisma.MedicineUncheckedUpdateInput>;
};
export type MedicineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
    where: Prisma.MedicineWhereUniqueInput;
};
export type MedicineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicineWhereInput;
    limit?: number;
};
export type Medicine$purchaseItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseItemInclude<ExtArgs> | null;
    where?: Prisma.PurchaseItemWhereInput;
    orderBy?: Prisma.PurchaseItemOrderByWithRelationInput | Prisma.PurchaseItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseItemScalarFieldEnum | Prisma.PurchaseItemScalarFieldEnum[];
};
export type Medicine$saleItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where?: Prisma.SaleItemWhereInput;
    orderBy?: Prisma.SaleItemOrderByWithRelationInput | Prisma.SaleItemOrderByWithRelationInput[];
    cursor?: Prisma.SaleItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleItemScalarFieldEnum | Prisma.SaleItemScalarFieldEnum[];
};
export type MedicineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicineSelect<ExtArgs> | null;
    omit?: Prisma.MedicineOmit<ExtArgs> | null;
    include?: Prisma.MedicineInclude<ExtArgs> | null;
};
