import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicinesService } from './medicines.service.js';
import { CreateMedicineDto } from './dto/create-medicine.dto.js';
import { UpdateMedicineDto } from './dto/update-medicine.dto.js';

@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  // 1. Crear un medicamento
  @Post()
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }

  // 2. Obtener todos los medicamentos
  @Get()
  findAll() {
    return this.medicinesService.findAll();
  }

  // 3. Consulta extra: Filtrar medicamentos con bajo stock (<= 10)
  @Get('low-stock')
  findLowStock() {
    return this.medicinesService.findLowStock();
  }

  // 4. Buscar un medicamento por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicinesService.findOne(id); 
  }

  // 5. Actualizar un medicamento por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicineDto: UpdateMedicineDto) {
    return this.medicinesService.update(id, updateMedicineDto);
  }

  // 6. Eliminar un medicamento por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicinesService.remove(id); 
  }
}