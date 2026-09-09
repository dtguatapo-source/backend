import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    const { customerName, customerIdNumber, customerId, discount = 0, items } = createSaleDto;

    if (!items || items.length === 0) {
      throw new BadRequestException('La venta debe contener al menos un producto.');
    }

    // 1. Validar existencia de medicamentos y stock disponible
    const medicineUpdates: { id: string; newStock: number; unitPrice: number; subtotal: number; quantity: number }[] = [];
    let calculatedTotal = 0;

    for (const item of items) {
      const medicine = await this.prisma.medicine.findUnique({
        where: { id: item.medicineId },
      });

      if (!medicine) {
        throw new NotFoundException(`El medicamento con ID "${item.medicineId}" no existe.`);
      }

      if (medicine.stock < item.quantity) {
        throw new BadRequestException(
          `Stock insuficiente para "${medicine.name}". Stock disponible: ${medicine.stock}, solicitado: ${item.quantity}.`
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

    // 2. Transacción atómica: Crear venta, guardar detalles y descontar stock
    return await this.prisma.$transaction(async (tx) => {
      const sale = await tx.sale.create({
        data: {
          customerName: customerName || 'Cliente Mostrador',
          customerIdNumber: customerIdNumber || null,
          customerId: customerId || null,
          discount: discount,
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
          items: {
            include: {
              medicine: true,
            },
          },
          customer: true,
        },
      });

      // Descontar stock y marcar AGOTADO si llega a 0
      for (const update of medicineUpdates) {
        const isAgotado = update.newStock === 0;

        await tx.medicine.update({
          where: { id: update.id },
          data: {
            stock: update.newStock,
            ...(isAgotado && { status: 'AGOTADO' }),
          },
        });
      }

      return sale;
    });
  }

  async findAll() {
    return await this.prisma.sale.findMany({
      include: {
        items: {
          include: {
            medicine: true,
          },
        },
        customer: true,
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
        items: {
          include: {
            medicine: true,
          },
        },
        customer: true,
      },
    });

    if (!sale) {
      throw new NotFoundException(`La venta con ID #${id} no fue encontrada.`);
    }

    return sale;
  }
}