export declare enum EstadoMedicamento {
    DISPONIBLE = "DISPONIBLE",
    AGOTADO = "AGOTADO",
    VENCIDO = "VENCIDO"
}
export declare class CreateMedicineDto {
    id: string;
    name: string;
    laboratory: string;
    category?: string;
    description: string;
    keywords?: string;
    stock: number;
    purchasePrice: number;
    salePrice: number;
    status: EstadoMedicamento;
}
