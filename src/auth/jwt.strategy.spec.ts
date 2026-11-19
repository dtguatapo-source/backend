import { UnauthorizedException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy (S2)', () => {
  const original = process.env.JWT_SECRET;
  const prisma = { user: { findUnique: vi.fn() } };

  beforeAll(() => {
    process.env.JWT_SECRET = 'test-secret';
  });

  afterAll(() => {
    if (original === undefined) {
      delete process.env.JWT_SECRET;
    } else {
      process.env.JWT_SECRET = original;
    }
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('validates a payload into { id, username, role }', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 1,
      username: 'tatiana',
      role: 'ADMIN',
    });
    const strategy = new JwtStrategy(prisma as unknown as PrismaService);

    await expect(
      strategy.validate({ sub: 1, username: 'tatiana', role: 'ADMIN' }),
    ).resolves.toEqual({ id: 1, username: 'tatiana', role: 'ADMIN' });
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('rejects a token whose user no longer exists', async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    const strategy = new JwtStrategy(prisma as unknown as PrismaService);

    await expect(
      strategy.validate({ sub: 999, username: 'ghost', role: 'USER' }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
