import 'dotenv/config';

import { hashPassword } from '../auth/password';
import { UserRole } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Lee las credenciales de la dueña desde el entorno. Falla con un mensaje claro
 * y en español: nunca hay usuario ni contraseña por defecto.
 */
function credencialesDeEntorno(): { username: string; password: string } {
  const username = process.env.OWNER_USERNAME?.trim();
  const password = process.env.OWNER_PASSWORD;

  if (!username || !password) {
    const faltantes = [
      !username && 'OWNER_USERNAME',
      !password && 'OWNER_PASSWORD',
    ]
      .filter(Boolean)
      .join(', ');

    throw new Error(
      `Faltan variables de entorno: ${faltantes}. Definilas antes de correr el seed (no hay contraseña por defecto).`,
    );
  }

  return { username, password };
}

/**
 * Crea la cuenta de la dueña/administradora a partir de `OWNER_USERNAME` y
 * `OWNER_PASSWORD`.
 *
 * Es idempotente: si el usuario ya existe no lo toca, así que correrlo dos veces
 * no duplica la cuenta ni pisa la contraseña guardada. Nunca hay contraseña por
 * defecto: sin las dos variables falla antes de consultar la base.
 *
 * Devuelve `true` si creó la cuenta y `false` si ya existía.
 */
export async function seedOwner(prisma: PrismaService): Promise<boolean> {
  const { username, password } = credencialesDeEntorno();

  const existente = await prisma.user.findUnique({ where: { username } });

  if (existente) {
    console.log(`La cuenta "${username}" ya existe: no se modificó nada.`);
    return false;
  }

  const passwordHash = await hashPassword(password);

  const creada = await prisma.user.create({
    data: {
      username,
      passwordHash,
      role: UserRole.ADMIN,
    },
  });

  console.log(
    `Cuenta de administradora creada: ${creada.username} (rol ${creada.role}).`,
  );
  return true;
}

async function main(): Promise<void> {
  // Primero el entorno y después la conexión: un despliegue sin OWNER_*
  // tiene que fallar con este mensaje y sin abrir conexión a la base.
  credencialesDeEntorno();

  const prisma = new PrismaService();

  try {
    await prisma.$connect();
    await seedOwner(prisma);
  } finally {
    // Se desconecta siempre, incluso si el seed falló, para no dejar el pool
    // abierto y que el proceso termine.
    await prisma.$disconnect();
  }
}

// Solo corre como entrypoint (`node dist/tools/seed-owner.js`): importarlo desde
// un test no toca la base ni el proceso.
if (require.main === module) {
  void main().catch((error: unknown) => {
    const mensaje = error instanceof Error ? error.message : String(error);
    console.error(
      `No se pudo sembrar la cuenta de la administradora: ${mensaje}`,
    );
    process.exitCode = 1;
  });
}
