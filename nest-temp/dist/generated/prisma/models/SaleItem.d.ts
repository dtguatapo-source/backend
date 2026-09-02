import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SaleItemModel = runtime.Types.Result.DefaultSelection<Prisma.$SaleItemPayload>;
export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null;
    _avg: SaleItemAvgAggregateOutputType | null;
    _sum: SaleItemSumAggregateOutputType | null;
    _min: SaleItemMinAggregateOutputType | null;
    _max: SaleItemMaxAggregateOutputType | null;
};
export type SaleItemAvgAggregateOutputType = {
    id: number | null;
    saleId: number | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type SaleItemSumAggregateOutputType = {
    id: number | null;
    saleId: number | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type SaleItemMinAggregateOutputType = {
    id: number | null;
    saleId: number | null;
    medicineId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type SaleItemMaxAggregateOutputType = {
    id: number | null;
    saleId: number | null;
    medicineId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type SaleItemCountAggregateOutputType = {
    id: number;
    saleId: number;
    medicineId: number;
    quantity: number;
    unitPrice: number;
    subtotal: number;
    _all: number;
};
export type SaleItemAvgAggregateInputType = {
    id?: true;
    saleId?: true;
    quantity?: true;
    unitPrice?: true;
    subtotal?: true;
};
export type SaleItemSumAggregateInputType = {
    id?: true;
    saleId?: true;
    quantity?: true;
    unitPrice?: true;
    subtotal?: true;
};
export type SaleItemMinAggregateInputType = {
    id?: true;
    saleId?: true;
    medicineId?: true;
    quantity?: true;
    unitPrice?: true;
    subtotal?: true;
};
export type SaleItemMaxAggregateInputType = {
    id?: true;
    saleId?: true;
    medicineId?: true;
    quantity?: true;
    unitPrice?: true;
    subtotal?: true;
};
export type SaleItemCountAggregateInputType = {
    id?: true;
    saleId?: true;
    medicineId?: true;
    quantity?: true;
    unitPrice?: true;
    subtotal?: true;
    _all?: true;
};
export type SaleItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
    orderBy?: Prisma.SaleItemOrderByWithRelationInput | Prisma.SaleItemOrderByWithRelationInput[];
    cursor?: Prisma.SaleItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SaleItemCountAggregateInputType;
    _avg?: SaleItemAvgAggregateInputType;
    _sum?: SaleItemSumAggregateInputType;
    _min?: SaleItemMinAggregateInputType;
    _max?: SaleItemMaxAggregateInputType;
};
export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
    [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaleItem[P]> : Prisma.GetScalarType<T[P], AggregateSaleItem[P]>;
};
export type SaleItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
    orderBy?: Prisma.SaleItemOrderByWithAggregationInput | Prisma.SaleItemOrderByWithAggregationInput[];
    by: Prisma.SaleItemScalarFieldEnum[] | Prisma.SaleItemScalarFieldEnum;
    having?: Prisma.SaleItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SaleItemCountAggregateInputType | true;
    _avg?: SaleItemAvgAggregateInputType;
    _sum?: SaleItemSumAggregateInputType;
    _min?: SaleItemMinAggregateInputType;
    _max?: SaleItemMaxAggregateInputType;
};
export type SaleItemGroupByOutputType = {
    id: number;
    saleId: number;
    medicineId: string;
    quantity: number;
    unitPrice: runtime.Decimal;
    subtotal: runtime.Decimal;
    _count: SaleItemCountAggregateOutputType | null;
    _avg: SaleItemAvgAggregateOutputType | null;
    _sum: SaleItemSumAggregateOutputType | null;
    _min: SaleItemMinAggregateOutputType | null;
    _max: SaleItemMaxAggregateOutputType | null;
};
export type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SaleItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SaleItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SaleItemGroupByOutputType[P]>;
}>>;
export type SaleItemWhereInput = {
    AND?: Prisma.SaleItemWhereInput | Prisma.SaleItemWhereInput[];
    OR?: Prisma.SaleItemWhereInput[];
    NOT?: Prisma.SaleItemWhereInput | Prisma.SaleItemWhereInput[];
    id?: Prisma.IntFilter<"SaleItem"> | number;
    saleId?: Prisma.IntFilter<"SaleItem"> | number;
    medicineId?: Prisma.StringFilter<"SaleItem"> | string;
    quantity?: Prisma.IntFilter<"SaleItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale?: Prisma.XOR<Prisma.SaleScalarRelationFilter, Prisma.SaleWhereInput>;
    medicine?: Prisma.XOR<Prisma.MedicineScalarRelationFilter, Prisma.MedicineWhereInput>;
};
export type SaleItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    medicineId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    sale?: Prisma.SaleOrderByWithRelationInput;
    medicine?: Prisma.MedicineOrderByWithRelationInput;
};
export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SaleItemWhereInput | Prisma.SaleItemWhereInput[];
    OR?: Prisma.SaleItemWhereInput[];
    NOT?: Prisma.SaleItemWhereInput | Prisma.SaleItemWhereInput[];
    saleId?: Prisma.IntFilter<"SaleItem"> | number;
    medicineId?: Prisma.StringFilter<"SaleItem"> | string;
    quantity?: Prisma.IntFilter<"SaleItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale?: Prisma.XOR<Prisma.SaleScalarRelationFilter, Prisma.SaleWhereInput>;
    medicine?: Prisma.XOR<Prisma.MedicineScalarRelationFilter, Prisma.MedicineWhereInput>;
}, "id">;
export type SaleItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    medicineId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    _count?: Prisma.SaleItemCountOrderByAggregateInput;
    _avg?: Prisma.SaleItemAvgOrderByAggregateInput;
    _max?: Prisma.SaleItemMaxOrderByAggregateInput;
    _min?: Prisma.SaleItemMinOrderByAggregateInput;
    _sum?: Prisma.SaleItemSumOrderByAggregateInput;
};
export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.SaleItemScalarWhereWithAggregatesInput | Prisma.SaleItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.SaleItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SaleItemScalarWhereWithAggregatesInput | Prisma.SaleItemScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SaleItem"> | number;
    saleId?: Prisma.IntWithAggregatesFilter<"SaleItem"> | number;
    medicineId?: Prisma.StringWithAggregatesFilter<"SaleItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"SaleItem"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateInput = {
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale: Prisma.SaleCreateNestedOneWithoutItemsInput;
    medicine: Prisma.MedicineCreateNestedOneWithoutSaleItemsInput;
};
export type SaleItemUncheckedCreateInput = {
    id?: number;
    saleId: number;
    medicineId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale?: Prisma.SaleUpdateOneRequiredWithoutItemsNestedInput;
    medicine?: Prisma.MedicineUpdateOneRequiredWithoutSaleItemsNestedInput;
};
export type SaleItemUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.IntFieldUpdateOperationsInput | number;
    medicineId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateManyInput = {
    id?: number;
    saleId: number;
    medicineId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.IntFieldUpdateOperationsInput | number;
    medicineId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemListRelationFilter = {
    every?: Prisma.SaleItemWhereInput;
    some?: Prisma.SaleItemWhereInput;
    none?: Prisma.SaleItemWhereInput;
};
export type SaleItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SaleItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    medicineId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type SaleItemAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type SaleItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    medicineId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type SaleItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    medicineId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type SaleItemSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type SaleItemCreateNestedManyWithoutMedicineInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput> | Prisma.SaleItemCreateWithoutMedicineInput[] | Prisma.SaleItemUncheckedCreateWithoutMedicineInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutMedicineInput | Prisma.SaleItemCreateOrConnectWithoutMedicineInput[];
    createMany?: Prisma.SaleItemCreateManyMedicineInputEnvelope;
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
};
export type SaleItemUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput> | Prisma.SaleItemCreateWithoutMedicineInput[] | Prisma.SaleItemUncheckedCreateWithoutMedicineInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutMedicineInput | Prisma.SaleItemCreateOrConnectWithoutMedicineInput[];
    createMany?: Prisma.SaleItemCreateManyMedicineInputEnvelope;
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
};
export type SaleItemUpdateManyWithoutMedicineNestedInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput> | Prisma.SaleItemCreateWithoutMedicineInput[] | Prisma.SaleItemUncheckedCreateWithoutMedicineInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutMedicineInput | Prisma.SaleItemCreateOrConnectWithoutMedicineInput[];
    upsert?: Prisma.SaleItemUpsertWithWhereUniqueWithoutMedicineInput | Prisma.SaleItemUpsertWithWhereUniqueWithoutMedicineInput[];
    createMany?: Prisma.SaleItemCreateManyMedicineInputEnvelope;
    set?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    disconnect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    delete?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    update?: Prisma.SaleItemUpdateWithWhereUniqueWithoutMedicineInput | Prisma.SaleItemUpdateWithWhereUniqueWithoutMedicineInput[];
    updateMany?: Prisma.SaleItemUpdateManyWithWhereWithoutMedicineInput | Prisma.SaleItemUpdateManyWithWhereWithoutMedicineInput[];
    deleteMany?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
};
export type SaleItemUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput> | Prisma.SaleItemCreateWithoutMedicineInput[] | Prisma.SaleItemUncheckedCreateWithoutMedicineInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutMedicineInput | Prisma.SaleItemCreateOrConnectWithoutMedicineInput[];
    upsert?: Prisma.SaleItemUpsertWithWhereUniqueWithoutMedicineInput | Prisma.SaleItemUpsertWithWhereUniqueWithoutMedicineInput[];
    createMany?: Prisma.SaleItemCreateManyMedicineInputEnvelope;
    set?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    disconnect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    delete?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    update?: Prisma.SaleItemUpdateWithWhereUniqueWithoutMedicineInput | Prisma.SaleItemUpdateWithWhereUniqueWithoutMedicineInput[];
    updateMany?: Prisma.SaleItemUpdateManyWithWhereWithoutMedicineInput | Prisma.SaleItemUpdateManyWithWhereWithoutMedicineInput[];
    deleteMany?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
};
export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput> | Prisma.SaleItemCreateWithoutSaleInput[] | Prisma.SaleItemUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutSaleInput | Prisma.SaleItemCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.SaleItemCreateManySaleInputEnvelope;
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
};
export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput> | Prisma.SaleItemCreateWithoutSaleInput[] | Prisma.SaleItemUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutSaleInput | Prisma.SaleItemCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.SaleItemCreateManySaleInputEnvelope;
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
};
export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput> | Prisma.SaleItemCreateWithoutSaleInput[] | Prisma.SaleItemUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutSaleInput | Prisma.SaleItemCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput | Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.SaleItemCreateManySaleInputEnvelope;
    set?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    disconnect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    delete?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    update?: Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput | Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput | Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
};
export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput> | Prisma.SaleItemCreateWithoutSaleInput[] | Prisma.SaleItemUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.SaleItemCreateOrConnectWithoutSaleInput | Prisma.SaleItemCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput | Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.SaleItemCreateManySaleInputEnvelope;
    set?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    disconnect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    delete?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    connect?: Prisma.SaleItemWhereUniqueInput | Prisma.SaleItemWhereUniqueInput[];
    update?: Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput | Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput | Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
};
export type SaleItemCreateWithoutMedicineInput = {
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale: Prisma.SaleCreateNestedOneWithoutItemsInput;
};
export type SaleItemUncheckedCreateWithoutMedicineInput = {
    id?: number;
    saleId: number;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateOrConnectWithoutMedicineInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput>;
};
export type SaleItemCreateManyMedicineInputEnvelope = {
    data: Prisma.SaleItemCreateManyMedicineInput | Prisma.SaleItemCreateManyMedicineInput[];
    skipDuplicates?: boolean;
};
export type SaleItemUpsertWithWhereUniqueWithoutMedicineInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleItemUpdateWithoutMedicineInput, Prisma.SaleItemUncheckedUpdateWithoutMedicineInput>;
    create: Prisma.XOR<Prisma.SaleItemCreateWithoutMedicineInput, Prisma.SaleItemUncheckedCreateWithoutMedicineInput>;
};
export type SaleItemUpdateWithWhereUniqueWithoutMedicineInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleItemUpdateWithoutMedicineInput, Prisma.SaleItemUncheckedUpdateWithoutMedicineInput>;
};
export type SaleItemUpdateManyWithWhereWithoutMedicineInput = {
    where: Prisma.SaleItemScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleItemUpdateManyMutationInput, Prisma.SaleItemUncheckedUpdateManyWithoutMedicineInput>;
};
export type SaleItemScalarWhereInput = {
    AND?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
    OR?: Prisma.SaleItemScalarWhereInput[];
    NOT?: Prisma.SaleItemScalarWhereInput | Prisma.SaleItemScalarWhereInput[];
    id?: Prisma.IntFilter<"SaleItem"> | number;
    saleId?: Prisma.IntFilter<"SaleItem"> | number;
    medicineId?: Prisma.StringFilter<"SaleItem"> | string;
    quantity?: Prisma.IntFilter<"SaleItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"SaleItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateWithoutSaleInput = {
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medicine: Prisma.MedicineCreateNestedOneWithoutSaleItemsInput;
};
export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: number;
    medicineId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput>;
};
export type SaleItemCreateManySaleInputEnvelope = {
    data: Prisma.SaleItemCreateManySaleInput | Prisma.SaleItemCreateManySaleInput[];
    skipDuplicates?: boolean;
};
export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleItemUpdateWithoutSaleInput, Prisma.SaleItemUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.SaleItemCreateWithoutSaleInput, Prisma.SaleItemUncheckedCreateWithoutSaleInput>;
};
export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: Prisma.SaleItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleItemUpdateWithoutSaleInput, Prisma.SaleItemUncheckedUpdateWithoutSaleInput>;
};
export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: Prisma.SaleItemScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleItemUpdateManyMutationInput, Prisma.SaleItemUncheckedUpdateManyWithoutSaleInput>;
};
export type SaleItemCreateManyMedicineInput = {
    id?: number;
    saleId: number;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUpdateWithoutMedicineInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    sale?: Prisma.SaleUpdateOneRequiredWithoutItemsNestedInput;
};
export type SaleItemUncheckedUpdateWithoutMedicineInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUncheckedUpdateManyWithoutMedicineInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    saleId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemCreateManySaleInput = {
    id?: number;
    medicineId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUpdateWithoutSaleInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medicine?: Prisma.MedicineUpdateOneRequiredWithoutSaleItemsNestedInput;
};
export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    medicineId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    medicineId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SaleItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    medicineId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    subtotal?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleItem"]>;
export type SaleItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    medicineId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    subtotal?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleItem"]>;
export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    saleId?: boolean;
    medicineId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    subtotal?: boolean;
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleItem"]>;
export type SaleItemSelectScalar = {
    id?: boolean;
    saleId?: boolean;
    medicineId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    subtotal?: boolean;
};
export type SaleItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "saleId" | "medicineId" | "quantity" | "unitPrice" | "subtotal", ExtArgs["result"]["saleItem"]>;
export type SaleItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
};
export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
};
export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sale?: boolean | Prisma.SaleDefaultArgs<ExtArgs>;
    medicine?: boolean | Prisma.MedicineDefaultArgs<ExtArgs>;
};
export type $SaleItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SaleItem";
    objects: {
        sale: Prisma.$SalePayload<ExtArgs>;
        medicine: Prisma.$MedicinePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        saleId: number;
        medicineId: string;
        quantity: number;
        unitPrice: runtime.Decimal;
        subtotal: runtime.Decimal;
    }, ExtArgs["result"]["saleItem"]>;
    composites: {};
};
export type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SaleItemPayload, S>;
export type SaleItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SaleItemCountAggregateInputType | true;
};
export interface SaleItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'];
        meta: {
            name: 'SaleItem';
        };
    };
    findUnique<T extends SaleItemFindUniqueArgs>(args: Prisma.SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SaleItemFindFirstArgs>(args?: Prisma.SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SaleItemFindManyArgs>(args?: Prisma.SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SaleItemCreateArgs>(args: Prisma.SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SaleItemCreateManyArgs>(args?: Prisma.SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SaleItemDeleteArgs>(args: Prisma.SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SaleItemUpdateArgs>(args: Prisma.SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SaleItemUpdateManyArgs>(args: Prisma.SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SaleItemUpsertArgs>(args: Prisma.SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma.Prisma__SaleItemClient<runtime.Types.Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SaleItemCountArgs>(args?: Prisma.Subset<T, SaleItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SaleItemCountAggregateOutputType> : number>;
    aggregate<T extends SaleItemAggregateArgs>(args: Prisma.Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>;
    groupBy<T extends SaleItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SaleItemGroupByArgs['orderBy'];
    } : {
        orderBy?: SaleItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SaleItemFieldRefs;
}
export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sale<T extends Prisma.SaleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SaleDefaultArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    medicine<T extends Prisma.MedicineDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MedicineDefaultArgs<ExtArgs>>): Prisma.Prisma__MedicineClient<runtime.Types.Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SaleItemFieldRefs {
    readonly id: Prisma.FieldRef<"SaleItem", 'Int'>;
    readonly saleId: Prisma.FieldRef<"SaleItem", 'Int'>;
    readonly medicineId: Prisma.FieldRef<"SaleItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"SaleItem", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"SaleItem", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"SaleItem", 'Decimal'>;
}
export type SaleItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where: Prisma.SaleItemWhereUniqueInput;
};
export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where: Prisma.SaleItemWhereUniqueInput;
};
export type SaleItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleItemCreateInput, Prisma.SaleItemUncheckedCreateInput>;
};
export type SaleItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SaleItemCreateManyInput | Prisma.SaleItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SaleItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    data: Prisma.SaleItemCreateManyInput | Prisma.SaleItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SaleItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SaleItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleItemUpdateInput, Prisma.SaleItemUncheckedUpdateInput>;
    where: Prisma.SaleItemWhereUniqueInput;
};
export type SaleItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SaleItemUpdateManyMutationInput, Prisma.SaleItemUncheckedUpdateManyInput>;
    where?: Prisma.SaleItemWhereInput;
    limit?: number;
};
export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleItemUpdateManyMutationInput, Prisma.SaleItemUncheckedUpdateManyInput>;
    where?: Prisma.SaleItemWhereInput;
    limit?: number;
    include?: Prisma.SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SaleItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where: Prisma.SaleItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleItemCreateInput, Prisma.SaleItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SaleItemUpdateInput, Prisma.SaleItemUncheckedUpdateInput>;
};
export type SaleItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
    where: Prisma.SaleItemWhereUniqueInput;
};
export type SaleItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleItemWhereInput;
    limit?: number;
};
export type SaleItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleItemSelect<ExtArgs> | null;
    omit?: Prisma.SaleItemOmit<ExtArgs> | null;
    include?: Prisma.SaleItemInclude<ExtArgs> | null;
};
