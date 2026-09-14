import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreatePurchaseItemDto {
  @IsNotEmpty()
  @IsString()
  medicineId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  purchasePrice: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  salePrice: number;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de vencimiento debe tener un formato válido' },
  )
  expiryDate?: string;
}

