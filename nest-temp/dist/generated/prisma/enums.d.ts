export declare const EstadoMedicamento: {
    readonly DISPONIBLE: "DISPONIBLE";
    readonly AGOTADO: "AGOTADO";
    readonly VENCIDO: "VENCIDO";
};
export type EstadoMedicamento = (typeof EstadoMedicamento)[keyof typeof EstadoMedicamento];
