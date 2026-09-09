import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const { supplierId, invoiceNumber, items } = createPurchaseDto;

    // 1. Verificar proveedor solo si envían un ID
    if (supplierId) {
      const supplier = await this.prisma.supplier.findUnique({
        where: { id: supplierId },
      });
      if (!supplier) {
        throw new NotFoundException(`El proveedor con ID #${supplierId} no existe`);
      }
    }

    // 2. Transacción para crear la compra e incrementar stock
    return await this.prisma.$transaction(async (tx) => {
      const purchase = await tx.purchase.create({
        data: {
          supplierId: supplierId || null,
          invoiceNumber: invoiceNumber || `FAC-${Date.now()}`,
          date: new Date(),
          items: {
            create: items.map((item) => ({
              medicineId: item.medicineId,
              quantity: item.quantity,
              purchasePrice: item.unitPrice,
              salePrice: item.unitPrice,
              total: item.quantity * item.unitPrice,
            })),
          },
        },
        include: {
          items: true,
          supplier: true,
        },
      });

      // Incrementar el stock de cada medicamento procesado
      for (const item of items) {
        await tx.medicine.update({
          where: { id: item.medicineId },
          data: {
            stock: {
              increment: item.quantity,
            },
          },
        });
      }

      return purchase;
    });
  }

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
      throw new NotFoundException(`La compra con ID #${id} no fue encontrada`);
    }

    return purchase;
  }
}