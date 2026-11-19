import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const LOW_STOCK_THRESHOLD = 10;
const TOP_MEDICINES_LIMIT = 10;

interface SalesByDateRow {
  date: string;
  total: unknown;
  count: bigint;
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary() {
    const [sales, soldItems, purchases, purchasedItems, lowStock] =
      await Promise.all([
        this.prisma.sale.aggregate({
          _sum: { total: true },
          _count: { _all: true },
        }),
        this.prisma.saleItem.aggregate({
          _sum: { quantity: true },
        }),
        this.prisma.purchase.aggregate({
          _count: { _all: true },
        }),
        this.prisma.purchaseItem.aggregate({
          _sum: { total: true, quantity: true },
        }),
        this.prisma.medicine.count({
          where: { stock: { lte: LOW_STOCK_THRESHOLD } },
        }),
      ]);

    return {
      sales: {
        total: Number(sales._sum.total ?? 0),
        count: sales._count._all,
        items: soldItems._sum.quantity ?? 0,
      },
      purchases: {
        total: Number(purchasedItems._sum.total ?? 0),
        count: purchases._count._all,
        items: purchasedItems._sum.quantity ?? 0,
      },
      lowStock,
    };
  }

  async getSalesByDate() {
    const rows = await this.prisma.$queryRaw<SalesByDateRow[]>`
      SELECT
        TO_CHAR(DATE("date"), 'YYYY-MM-DD') AS date,
        SUM("total") AS total,
        COUNT(*) AS count
      FROM "sales"
      GROUP BY DATE("date")
      ORDER BY DATE("date") ASC
    `;

    return rows.map((row) => ({
      date: row.date,
      total: Number(row.total ?? 0),
      count: Number(row.count),
    }));
  }

  async getTopMedicines() {
    const grouped = await this.prisma.saleItem.groupBy({
      by: ['medicineId'],
      _sum: { quantity: true, subtotal: true },
      orderBy: { _sum: { quantity: 'desc' } },
      take: TOP_MEDICINES_LIMIT,
    });

    const medicines = await this.prisma.medicine.findMany({
      where: { id: { in: grouped.map((item) => item.medicineId) } },
      select: { id: true, name: true, laboratory: true },
    });

    const medicinesById = new Map(
      medicines.map((medicine) => [medicine.id, medicine]),
    );

    return grouped.map((item) => {
      const medicine = medicinesById.get(item.medicineId);

      return {
        medicineId: item.medicineId,
        name: medicine?.name ?? null,
        laboratory: medicine?.laboratory ?? null,
        quantity: item._sum.quantity ?? 0,
        total: Number(item._sum.subtotal ?? 0),
      };
    });
  }
}
