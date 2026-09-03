import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export enum EstadoMedicamento {
  DISPONIBLE = 'DISPONIBLE',
  AGOTADO = 'AGOTADO',
  VENCIDO = 'VENCIDO',
}

export class CreateMedicineDto {
  @IsNotEmpty({ message: 'El ID es obligatorio (ej. MED-001)' })
  @IsString()
  id!: string;

  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: 'El laboratorio es obligatorio' })
  @IsString()
  laboratory!: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  keywords?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  purchasePrice!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  salePrice!: number;

  @IsNotEmpty()
  @IsEnum(EstadoMedicamento, { message: 'El estado debe ser DISPONIBLE, AGOTADO o VENCIDO' })
  status!: EstadoMedicamento;
}