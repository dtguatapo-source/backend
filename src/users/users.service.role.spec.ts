import { UsersService } from './users.service';

describe('UsersService.create — rol del registro público', () => {
  it('crea un USER y nunca un ADMIN', async () => {
    let capturado: Record<string, unknown> | undefined;

    const prisma = {
      user: {
        findUnique: async () => null,
        create: async ({ data }: { data: Record<string, unknown> }) => {
          capturado = data;
          return { id: 1, ...data };
        }
      }
    };

    const servicio = new UsersService(prisma as never);

    await servicio.create({
      username: 'nuevo',
      password: 'secreto123',
      confirmPassword: 'secreto123'
    });

    expect(capturado?.role).toBe('USER');
    expect(capturado?.passwordHash).toBeDefined();
    expect(capturado?.passwordHash).not.toBe('secreto123');
  });
});
