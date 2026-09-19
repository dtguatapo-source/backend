export declare const EstadoMedicamento: {
    readonly DISPONIBLE: "DISPONIBLE";
    readonly AGOTADO: "AGOTADO";
    readonly VENCIDO: "VENCIDO";
};
export type EstadoMedicamento = (typeof EstadoMedicamento)[keyof typeof EstadoMedicamento];
export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
