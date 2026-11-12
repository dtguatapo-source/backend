import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MedicinesService } from './medicines.service.js';
import { CreateMedicineDto } from './dto/create-medicine.dto.js';
import { UpdateMedicineDto } from './dto/update-medicine.dto.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

// Lectura abierta a cualquier usuario autenticado (el cajero busca productos),
// escritura reservada a administración.
@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Roles('ADMIN')
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }

  @Get()
  findAll() {
    return this.medicinesService.findAll();
  }

  @Get('low-stock')
  findLowStock() {
    return this.medicinesService.findLowStock();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicinesService.findOne(id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicinesService.update(id, updateMedicineDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.medicinesService.remove(id);
  }
}