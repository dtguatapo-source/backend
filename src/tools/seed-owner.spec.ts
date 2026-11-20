import { verifyPassword } from '../auth/password';
import { UserRole } from '../generated/prisma/enums';
import type { PrismaService } from '../prisma/prisma.service';
import { seedOwner } from './seed-owner';

const USUARIO = 'pili';
const CONTRASENA = 'secreto-de-la-duena';

interface UsuarioEnBase {
  id: number;
  username: string;
  role: string;
}

interface DatosDeCreacion {
  username: string;
  passwordHash: string;
  role: string;
}

/**
 * Doble mínimo de PrismaService: registra qué usuario se consultó y qué datos se
 * crearon, sin tocar la base remota.
 */
function prismaFalso(existente: UsuarioEnBase | null = null) {
  const creados: DatosDeCreacion[] = [];
  const consultados: string[] = [];

  const prisma = {
    user: {
      findUnique: async ({ where }: { where: { username: string } }) => {
        consultados.push(where.username);
        return existente;
      },
      create: async ({ data }: { data: DatosDeCreacion }) => {
        creados.push(data);
        return { id: 1, ...data };
      },
    },
  };

  return {
    prisma: prisma as unknown as PrismaService,
    creados,
    consultados,
  };
}

// Valores originales para no filtrar el entorno del proceso entre tests.
const entornoOriginal = {
  OWNER_USERNAME: process.env.OWNER_USERNAME,
  OWNER_PASSWORD: process.env.OWNER_PASSWORD,
};

let salida: string[] = [];

function restaurarEntorno(): void {
  for (const [clave, valor] of Object.entries(entornoOriginal)) {
    if (valor === undefined) {
      delete process.env[clave];
    } else {
      process.env[clave] = valor;
    }
  }
}

describe('seedOwner', () => {
  beforeEach(() => {
    salida = [];
    vi.spyOn(console, 'log').mockImplementation((...args: unknown[]) => {
      salida.push(args.map((arg) => String(arg)).join(' '));
    });
    process.env.OWNER_USERNAME = USUARIO;
    process.env.OWNER_PASSWORD = CONTRASENA;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    restaurarEntorno();
  });

  it('crea la administradora con la contraseña hasheada y el rol ADMIN', async () => {
    const { prisma, creados, consultados } = prismaFalso();

    await expect(seedOwner(prisma)).resolves.toBe(true);

    expect(consultados).toEqual([USUARIO]);
    expect(creados).toHaveLength(1);

    const [creado] = creados;
    expect(creado.username).toBe(USUARIO);
    expect(creado.role).toBe(UserRole.ADMIN);

    // Nunca guarda la contraseña en claro, y el hash es el de hashPassword.
    expect(creado.passwordHash).not.toBe(CONTRASENA);
    expect(creado.passwordHash).not.toContain(CONTRASENA);
    expect(creado.passwordHash).toMatch(/^scrypt\$16384\$8\$1\$[a-f0-9]{32}\$[a-f0-9]{128}$/);
    await expect(verifyPassword(CONTRASENA, creado.passwordHash)).resolves.toBe(true);
    await expect(verifyPassword('otra-contrasena', creado.passwordHash)).resolves.toBe(false);

    // La línea de resultado nunca incluye la contraseña.
    expect(salida.length).toBeGreaterThan(0);
    expect(salida.join('\n')).toContain(USUARIO);
    expect(salida.join('\n')).not.toContain(CONTRASENA);
  });

  it('no crea nada cuando el usuario ya existe', async () => {
    const { prisma, creados } = prismaFalso({
      id: 7,
      username: USUARIO,
      role: 'ADMIN',
    });

    await expect(seedOwner(prisma)).resolves.toBe(false);

    expect(creados).toHaveLength(0);
  });

  it('se niega a correr cuando falta OWNER_USERNAME', async () => {
    delete process.env.OWNER_USERNAME;
    const { prisma, creados, consultados } = prismaFalso();

    await expect(seedOwner(prisma)).rejects.toThrow(/OWNER_USERNAME/);

    expect(consultados).toHaveLength(0);
    expect(creados).toHaveLength(0);
  });

  it('se niega a correr cuando falta OWNER_PASSWORD', async () => {
    delete process.env.OWNER_PASSWORD;
    const { prisma, creados, consultados } = prismaFalso();

    await expect(seedOwner(prisma)).rejects.toThrow(/OWNER_PASSWORD/);

    expect(consultados).toHaveLength(0);
    expect(creados).toHaveLength(0);
  });

  it('no inventa una contraseña por defecto cuando falta el valor', async () => {
    process.env.OWNER_PASSWORD = '';
    const { prisma, creados } = prismaFalso();

    await expect(seedOwner(prisma)).rejects.toThrow(/OWNER_PASSWORD/);

    expect(creados).toHaveLength(0);
  });
});
