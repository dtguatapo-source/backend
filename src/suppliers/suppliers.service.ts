import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class SuppliersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSupplierDto: CreateSupplierDto) {
    try {
      return await this.prisma.supplier.create({
        data: createSupplierDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Ya existe un proveedor registrado con esos datos (NIT o email duplicado).',
        );
      }
      throw error; // Re-lanzar error si no es P2002 (Guía 9)
    }
  }

  async findAll() {
    return await this.prisma.supplier.findMany({
      include: { purchases: true },
    });
  }

  async findOne(id: number) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id },
      include: { purchases: true },
    });

    if (!supplier) {
      throw new NotFoundException(`Proveedor con ID #${id} no encontrado.`);
    }

    return supplier;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    try {
      return await this.prisma.supplier.update({
        where: { id },
        data: updateSupplierDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Proveedor con ID #${id} no encontrado.`);
        }
        if (error.code === 'P2002') {
          throw new ConflictException(
            'El NIT o email ingresado entra en conflicto con otro proveedor.',
          );
        }
      }
      throw error; // Re-lanzar error no reconocido (Guía 9)
    }
  }

  async remove(id: number): Promise<void> {
  try {
    await this.prisma.supplier.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Proveedor con ID #${id} no encontrado.`);
      }
      if (error.code === 'P2003') {
        throw new ConflictException(
          'No se puede eliminar el proveedor porque tiene compras registradas asociadas.',
        );
      }
    }
    throw error; // Re-lanzar error si no es P2025 ni P2003 (Guía 9)
  }
}
}