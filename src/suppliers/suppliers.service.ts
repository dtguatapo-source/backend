import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return await this.prisma.supplier.create({
      data: createSupplierDto,
    });
  }

  async findAll() {
    return await this.prisma.supplier.findMany({
      include: {
        purchases: true,
      },
    });
  }

  async findOne(id: number) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id },
      include: {
        purchases: true,
      },
    });

    if (!supplier) {
      throw new NotFoundException(`Proveedor con ID #${id} no encontrado`);
    }

    return supplier;
  }

  // 1. Buscar proveedor exacto por NIT
  async findByNit(nit: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { nit },
      include: {
        purchases: true,
      },
    });

    if (!supplier) {
      throw new NotFoundException(`Proveedor con NIT ${nit} no encontrado`);
    }

    return supplier;
  }

  // 2. Buscar proveedores por coincidencia en el nombre
  async searchByName(name: string) {
    return await this.prisma.supplier.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    await this.findOne(id);
    return await this.prisma.supplier.update({
      where: { id },
      data: updateSupplierDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.supplier.delete({
      where: { id },
    });
  }
}