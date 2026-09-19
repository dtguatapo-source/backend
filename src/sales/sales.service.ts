import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    const { customerId, discount = 0, items } = createSaleDto;

    if (!items || items.length === 0) {
      throw new BadRequestException(
        'La venta debe contener al menos un producto.',
      );
    }

    try {
      // Validar cliente si se seleccionó uno
      if (customerId) {
        const customer = await this.prisma.customer.findUnique({
          where: { id: customerId },
        });

        if (!customer) {
          throw new NotFoundException(
            `El cliente con ID #${customerId} no existe.`,
          );
        }
      }

      const medicineUpdates: {
        id: string;
        newStock: number;
        unitPrice: number;
        subtotal: number;
        quantity: number;
      }[] = [];

      let calculatedTotal = 0;

      // Validar medicamentos y stock
      for (const item of items) {
        const medicine = await this.prisma.medicine.findUnique({
          where: { id: item.medicineId },
        });

        if (!medicine) {
          throw new NotFoundException(
            `El medicamento con ID "${item.medicineId}" no existe.`,
          );
        }

        if (medicine.status === 'VENCIDO') {
          throw new BadRequestException(
            `El medicamento "${medicine.name}" está vencido y no puede venderse.`,
          );
        }

        if (medicine.stock < item.quantity) {
          throw new BadRequestException(
            `Stock insuficiente para "${medicine.name}". Stock disponible: ${medicine.stock}, solicitado: ${item.quantity}.`,
          );
        }

        const unitPrice = Number(medicine.salePrice);
        const subtotal = unitPrice * item.quantity;

        calculatedTotal += subtotal;

        medicineUpdates.push({
          id: medicine.id,
          newStock: medicine.stock - item.quantity,
          unitPrice,
          subtotal,
          quantity: item.quantity,
        });
      }

      const finalTotal = Math.max(0, calculatedTotal - discount);

      // Crear venta y descontar stock en una sola transacción
      return await this.prisma.$transaction(async (tx) => {
        const sale = await tx.sale.create({
          data: {
            customerId: customerId || null,
            discount,
            total: finalTotal,
            items: {
              create: medicineUpdates.map((item) => ({
                medicineId: item.id,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                subtotal: item.subtotal,
              })),
            },
          },
          include: {
            customer: true,
            items: {
              include: {
                medicine: true,
              },
            },
          },
        });

        // Descontar stock
        for (const update of medicineUpdates) {
          const newStatus =
            update.newStock === 0 ? 'AGOTADO' : 'DISPONIBLE';

          await tx.medicine.update({
            where: { id: update.id },
            data: {
              stock: update.newStock,
              status: newStatus,
            },
          });
        }

        return sale;
      });
    } catch (error) {
      // Errores personalizados que ya generamos
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      // Errores conocidos de Prisma
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'El registro ya existe y entra en conflicto con otro.',
          );
        }

        if (error.code === 'P2003') {
          throw new NotFoundException(
            'El cliente o medicamento especificado no existe.',
          );
        }

        if (error.code === 'P2025') {
          throw new NotFoundException(
            'No se encontró uno de los registros relacionados con la venta.',
          );
        }
      }

      throw error;
    }
  }

  async findAll() {
    return await this.prisma.sale.findMany({
      include: {
        customer: true,
        items: {
          include: {
            medicine: true,
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: {
        customer: true,
        items: {
          include: {
            medicine: true,
          },
        },
      },
    });

    if (!sale) {
      throw new NotFoundException(
        `La venta con ID #${id} no fue encontrada.`,
      );
    }

    return sale;
  }
}