
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreatePurchaseItemDto } from './create-purchase-item.dto.js';

export class CreatePurchaseDto {
  @IsNotEmpty()
  @IsNumber()
  supplierId!: number;

  @IsOptional()
  @IsString()
  invoiceNumber?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseItemDto)
  items!: CreatePurchaseItemDto[];
}

