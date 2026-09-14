"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMedicineDto = exports.EstadoMedicamento = void 0;
const class_validator_1 = require("class-validator");
var EstadoMedicamento;
(function (EstadoMedicamento) {
    EstadoMedicamento["DISPONIBLE"] = "DISPONIBLE";
    EstadoMedicamento["AGOTADO"] = "AGOTADO";
    EstadoMedicamento["VENCIDO"] = "VENCIDO";
})(EstadoMedicamento || (exports.EstadoMedicamento = EstadoMedicamento = {}));
class CreateMedicineDto {
    id;
    name;
    laboratory;
    category;
    description;
    keywords;
    stock;
    purchasePrice;
    salePrice;
    status;
}
exports.CreateMedicineDto = CreateMedicineDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID es obligatorio (ej. MED-001)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El laboratorio es obligatorio' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "laboratory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "keywords", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'El stock no puede ser negativo' }),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "purchasePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "salePrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(EstadoMedicamento, {
        message: 'El estado debe ser DISPONIBLE, AGOTADO o VENCIDO',
    }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "status", void 0);
//# sourceMappingURL=create-medicine.dto.js.map