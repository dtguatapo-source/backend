import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchasePayload>;
export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type PurchaseAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type PurchaseSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type PurchaseMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    invoiceNumber: string | null;
    provider: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type PurchaseMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    invoiceNumber: string | null;
    provider: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type PurchaseCountAggregateOutputType = {
    id: number;
    userId: number;
    invoiceNumber: number;
    provider: number;
    date: number;
    createdAt: number;
    _all: number;
};
export type PurchaseAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type PurchaseSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type PurchaseMinAggregateInputType = {
    id?: true;
    userId?: true;
    invoiceNumber?: true;
    provider?: true;
    date?: true;
    createdAt?: true;
};
export type PurchaseMaxAggregateInputType = {
    id?: true;
    userId?: true;
    invoiceNumber?: true;
    provider?: true;
    date?: true;
    createdAt?: true;
};
export type PurchaseCountAggregateInputType = {
    id?: true;
    userId?: true;
    invoiceNumber?: true;
    provider?: true;
    date?: true;
    createdAt?: true;
    _all?: true;
};
export type PurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseCountAggregateInputType;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase[P]> : Prisma.GetScalarType<T[P], AggregatePurchase[P]>;
};
export type PurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithAggregationInput | Prisma.PurchaseOrderByWithAggregationInput[];
    by: Prisma.PurchaseScalarFieldEnum[] | Prisma.PurchaseScalarFieldEnum;
    having?: Prisma.PurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseCountAggregateInputType | true;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type PurchaseGroupByOutputType = {
    id: number;
    userId: number;
    invoiceNumber: string;
    provider: string;
    date: Date;
    createdAt: Date | null;
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
}>>;
export type PurchaseWhereInput = {
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    id?: Prisma.IntFilter<"Purchase"> | number;
    userId?: Prisma.IntFilter<"Purchase"> | number;
    invoiceNumber?: Prisma.StringFilter<"Purchase"> | string;
    provider?: Prisma.StringFilter<"Purchase"> | string;
    date?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.PurchaseItemListRelationFilter;
};
export type PurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.PurchaseItemOrderByRelationAggregateInput;
};
export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    userId?: Prisma.IntFilter<"Purchase"> | number;
    invoiceNumber?: Prisma.StringFilter<"Purchase"> | string;
    provider?: Prisma.StringFilter<"Purchase"> | string;
    date?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.PurchaseItemListRelationFilter;
}, "id">;
export type PurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PurchaseCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseSumOrderByAggregateInput;
};
export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Purchase"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Purchase"> | number;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    provider?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Purchase"> | Date | string;
    createdAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null;
};
export type PurchaseCreateInput = {
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    items?: Prisma.PurchaseItemCreateNestedManyWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateInput = {
    id?: number;
    userId: number;
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
    items?: Prisma.PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type PurchaseUpdateInput = {
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    items?: Prisma.PurchaseItemUpdateManyWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type PurchaseCreateManyInput = {
    id?: number;
    userId: number;
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
};
export type PurchaseUpdateManyMutationInput = {
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseListRelationFilter = {
    every?: Prisma.PurchaseWhereInput;
    some?: Prisma.PurchaseWhereInput;
    none?: Prisma.PurchaseWhereInput;
};
export type PurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type PurchaseScalarRelationFilter = {
    is?: Prisma.PurchaseWhereInput;
    isNot?: Prisma.PurchaseWhereInput;
};
export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type PurchaseCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutItemsInput, Prisma.PurchaseUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutItemsInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutItemsInput, Prisma.PurchaseUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.PurchaseUpsertWithoutItemsInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutItemsInput, Prisma.PurchaseUpdateWithoutItemsInput>, Prisma.PurchaseUncheckedUpdateWithoutItemsInput>;
};
export type PurchaseCreateWithoutUserInput = {
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
    items?: Prisma.PurchaseItemCreateNestedManyWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: number;
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
    items?: Prisma.PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseCreateManyUserInputEnvelope = {
    data: Prisma.PurchaseCreateManyUserInput | Prisma.PurchaseCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
};
export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutUserInput>;
};
export type PurchaseScalarWhereInput = {
    AND?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    OR?: Prisma.PurchaseScalarWhereInput[];
    NOT?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    id?: Prisma.IntFilter<"Purchase"> | number;
    userId?: Prisma.IntFilter<"Purchase"> | number;
    invoiceNumber?: Prisma.StringFilter<"Purchase"> | string;
    provider?: Prisma.StringFilter<"Purchase"> | string;
    date?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
};
export type PurchaseCreateWithoutItemsInput = {
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
};
export type PurchaseUncheckedCreateWithoutItemsInput = {
    id?: number;
    userId: number;
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
};
export type PurchaseCreateOrConnectWithoutItemsInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutItemsInput, Prisma.PurchaseUncheckedCreateWithoutItemsInput>;
};
export type PurchaseUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutItemsInput, Prisma.PurchaseUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutItemsInput, Prisma.PurchaseUncheckedCreateWithoutItemsInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutItemsInput, Prisma.PurchaseUncheckedUpdateWithoutItemsInput>;
};
export type PurchaseUpdateWithoutItemsInput = {
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type PurchaseUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseCreateManyUserInput = {
    id?: number;
    invoiceNumber: string;
    provider: string;
    date: Date | string;
    createdAt?: Date | string | null;
};
export type PurchaseUpdateWithoutUserInput = {
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.PurchaseItemUpdateManyWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PurchaseCountOutputType = {
    items: number;
};
export type PurchaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | PurchaseCountOutputTypeCountItemsArgs;
};
export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseCountOutputTypeSelect<ExtArgs> | null;
};
export type PurchaseCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseItemWhereInput;
};
export type PurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    invoiceNumber?: boolean;
    provider?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Purchase$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    invoiceNumber?: boolean;
    provider?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    invoiceNumber?: boolean;
    provider?: boolean;
    date?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectScalar = {
    id?: boolean;
    userId?: boolean;
    invoiceNumber?: boolean;
    provider?: boolean;
    date?: boolean;
    createdAt?: boolean;
};
export type PurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "invoiceNumber" | "provider" | "date" | "createdAt", ExtArgs["result"]["purchase"]>;
export type PurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Purchase$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        items: Prisma.$PurchaseItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        invoiceNumber: string;
        provider: string;
        date: Date;
        createdAt: Date | null;
    }, ExtArgs["result"]["purchase"]>;
    composites: {};
};
export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchasePayload, S>;
export type PurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseCountAggregateInputType | true;
};
export interface PurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase'];
        meta: {
            name: 'Purchase';
        };
    };
    findUnique<T extends PurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseCreateArgs>(args: Prisma.SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseCountArgs>(args?: Prisma.Subset<T, PurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseAggregateArgs>(args: Prisma.Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;
    groupBy<T extends PurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseFieldRefs;
}
export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Purchase$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase", 'Int'>;
    readonly userId: Prisma.FieldRef<"Purchase", 'Int'>;
    readonly invoiceNumber: Prisma.FieldRef<"Purchase", 'String'>;
    readonly provider: Prisma.FieldRef<"Purchase", 'String'>;
    readonly date: Prisma.FieldRef<"Purchase", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
}
export type PurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
};
export type PurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
    include?: Prisma.PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
};
export type PurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type Purchase$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
};
