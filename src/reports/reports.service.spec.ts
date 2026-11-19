import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ReportsService } from './reports.service';

describe('ReportsService', () => {
  let service: ReportsService;

  const prisma = {
    sale: { aggregate: vi.fn() },
    saleItem: { aggregate: vi.fn(), groupBy: vi.fn() },
    purchase: { aggregate: vi.fn() },
    purchaseItem: { aggregate: vi.fn() },
    medicine: { count: vi.fn(), findMany: vi.fn() },
    $queryRaw: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });

  it('converts Decimal totals to numbers in the summary', async () => {
    prisma.sale.aggregate.mockResolvedValue({
      _sum: { total: '1500.50' },
      _count: { _all: 3 },
    });
    prisma.saleItem.aggregate.mockResolvedValue({ _sum: { quantity: 7 } });
    prisma.purchase.aggregate.mockResolvedValue({ _count: { _all: 2 } });
    prisma.purchaseItem.aggregate.mockResolvedValue({
      _sum: { total: '900.00', quantity: 4 },
    });
    prisma.medicine.count.mockResolvedValue(5);

    await expect(service.getSummary()).resolves.toEqual({
      sales: { total: 1500.5, count: 3, items: 7 },
      purchases: { total: 900, count: 2, items: 4 },
      lowStock: 5,
    });
  });

  it('returns zeroed numeric values on an empty database', async () => {
    prisma.sale.aggregate.mockResolvedValue({
      _sum: { total: null },
      _count: { _all: 0 },
    });
    prisma.saleItem.aggregate.mockResolvedValue({ _sum: { quantity: null } });
    prisma.purchase.aggregate.mockResolvedValue({ _count: { _all: 0 } });
    prisma.purchaseItem.aggregate.mockResolvedValue({
      _sum: { total: null, quantity: null },
    });
    prisma.medicine.count.mockResolvedValue(0);

    await expect(service.getSummary()).resolves.toEqual({
      sales: { total: 0, count: 0, items: 0 },
      purchases: { total: 0, count: 0, items: 0 },
      lowStock: 0,
    });
  });

  it('uses a grouped Prisma query for sales by date and converts totals', async () => {
    prisma.$queryRaw.mockResolvedValue([
      { date: '2026-11-08', total: '150.00', count: 2n },
      { date: '2026-11-09', total: '25.50', count: 1n },
    ]);

    await expect(service.getSalesByDate()).resolves.toEqual([
      { date: '2026-11-08', total: 150, count: 2 },
      { date: '2026-11-09', total: 25.5, count: 1 },
    ]);
    expect(prisma.$queryRaw).toHaveBeenCalled();
  });

  it('returns top medicines with names and numeric totals', async () => {
    prisma.saleItem.groupBy.mockResolvedValue([
      { medicineId: 'MED-001', _sum: { quantity: 10, subtotal: '250.00' } },
    ]);
    prisma.medicine.findMany.mockResolvedValue([
      { id: 'MED-001', name: 'Ibuprofeno', laboratory: 'Genfar' },
    ]);

    await expect(service.getTopMedicines()).resolves.toEqual([
      {
        medicineId: 'MED-001',
        name: 'Ibuprofeno',
        laboratory: 'Genfar',
        quantity: 10,
        total: 250,
      },
    ]);
  });
});
