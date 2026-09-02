import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto.js';
import { UpdateMedicineDto } from './dto/update-medicine.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MedicinesService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. Guardar un medicamento en PostgreSQL
  async create(createMedicineDto: CreateMedicineDto) {
    return await this.prisma.medicine.create({
      data: createMedicineDto,
    });
  }

  // 2. Obtener todos los medicamentos
  async findAll() {
    return await this.prisma.medicine.findMany();
  }

  // 3. Buscar por ID (ej. MED-001)
  async findOne(id: string) {
    const medicine = await this.prisma.medicine.findUnique({
      where: { id },
    });

    if (!medicine) {
      throw new NotFoundException(`El medicamento con ID "${id}" no existe`);
    }

    return medicine;
  }

  // 4. Actualizar medicamento
  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    await this.findOne(id);

    return await this.prisma.medicine.update({
      where: { id },
      data: updateMedicineDto,
    });
  }

  // 5. Eliminar medicamento
  async remove(id: string) {
    await this.findOne(id);

    return await this.prisma.medicine.delete({
      where: { id },
    });
  }
}