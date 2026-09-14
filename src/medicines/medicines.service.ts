import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto.js';
import { UpdateMedicineDto } from './dto/update-medicine.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
@Injectable()
export class MedicinesService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. Guardar un medicamento en PostgreSQL
  async create(createMedicineDto: CreateMedicineDto) {
    try {
      return await this.prisma.medicine.create({
        data: createMedicineDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('El medicamento ya existe');
      }
      throw error;
    }
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
    try {
      return await this.prisma.medicine.update({
        where: { id },
        data: updateMedicineDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Los datos a actualizar entran en conflicto con un registro existente');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`El medicamento con ID "${id}" no existe`);
        }
      }
      throw error;
    }
  }

  // 5. Eliminar medicamento
  async remove(id: string): Promise<void> {
    try {
      await this.prisma.medicine.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new ConflictException('No se puede eliminar el medicamento porque está enlazado a otros registros');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`El medicamento con ID "${id}" no existe`);
        }
      }
      throw error;
    }
  }

  // 6. Consulta extra: Buscar medicamentos con bajo stock (menor o igual a 10)
  async findLowStock() {
    return await this.prisma.medicine.findMany({
      where: {
        stock: {
          lte: 10,
        },
      },
    });
  }
}