
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePurchaseDto } from './dto/create-purchase.dto.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear una compra y aumentar el stock
  async create(createPurchaseDto: CreatePurchaseDto) {
    const { supplierId, invoiceNumber, items } = createPurchaseDto;

    try {
      return await this.prisma.$transaction(async (tx) => {
        const purchase = await tx.purchase.create({
          data: {
            supplierId,
            invoiceNumber: invoiceNumber || `FAC-${Date.now()}`,
            date: new Date(),
            items: {
              create: items.map((item) => ({
                medicineId: item.medicineId,
                quantity: item.quantity,
                purchasePrice: item.purchasePrice,
                salePrice: item.salePrice,
                expiryDate: item.expiryDate
                  ? new Date(item.expiryDate)
                  : null,
                total: item.quantity * item.purchasePrice,
              })),
            },
          },
          include: {
            items: true,
            supplier: true,
          },
        });

        // Actualizar stock y precios actuales de cada medicamento
        for (const item of items) {
          await tx.medicine.update({
            where: { id: item.medicineId },
            data: {
              stock: {
                increment: item.quantity,
              },
              purchasePrice: item.purchasePrice,
              salePrice: item.salePrice,
              status: 'DISPONIBLE',
            },
          });
        }

        return purchase;
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Proveedor o medicamento inexistente
        if (error.code === 'P2003') {
          throw new NotFoundException(
            'El proveedor o uno de los medicamentos especificados no existe.',
          );
        }

        // Registro relacionado no encontrado
        if (error.code === 'P2025') {
          throw new NotFoundException(
            'El proveedor o uno de los medicamentos especificados no existe.',
          );
        }

        // Número de factura duplicado
        if (error.code === 'P2002') {
          throw new ConflictException(
            'El número de factura ya está registrado en el sistema.',
          );
        }
      }

      throw error;
    }
  }

  // Obtener todas las compras
  async findAll() {
    return await this.prisma.purchase.findMany({
      include: {
        supplier: true,
        user: true,
        items: {
          include: {
            medicine: true,
          },
        },
      },
    });
  }

  // Obtener una compra por ID
  async findOne(id: number) {
    const purchase = await this.prisma.purchase.findUnique({
      where: { id },
      include: {
        supplier: true,
        user: true,
        items: {
          include: {
            medicine: true,
          },
        },
      },
    });

    if (!purchase) {
      throw new NotFoundException(
        `La compra con ID #${id} no fue encontrada.`,
      );
    }

    return purchase;
  }
}

