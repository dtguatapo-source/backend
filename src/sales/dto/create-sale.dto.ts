import {
  IsArray,
  IsNumber,
  IsOptional,
  ValidateNested,
  Min,
  IsInt,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSaleItemDto {
  @IsString()
  medicineId!: string;

  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity!: number;
}

export class CreateSaleDto {
  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  discount?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSaleItemDto)
  items!: CreateSaleItemDto[];
}