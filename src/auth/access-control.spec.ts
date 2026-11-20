import type { INestApplication } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { PrismaService } from '../prisma/prisma.service';

// El módulo lee JWT_SECRET al construirse: el spec no depende del .env para
// correr, y el token se firma con el mismo secreto que valida la estrategia.
process.env.JWT_SECRET ??= 'clave-secreta-para-el-spec-de-acceso';

/**
 * Contrato de acceso de la API: es una sola dueña/administradora, así que
 * cualquier usuario con un JWT válido entra a todos los módulos. La seguridad
 * de JWT sigue intacta: sin token todo sigue cerrado salvo las rutas públicas.
 *
 * Usa un PrismaService falso para no leer ni escribir en la base remota: acá se
 * verifica la cadena de guards, no la persistencia.
 */
function prismaFalso(): PrismaService {
  const usuario = { id: 1, username: 'pili', role: 'USER' };

  /** Respuestas de los métodos de modelo que estos tests ejercitan. */
  const resultados: Record<string, () => Promise<unknown>> = {
    findMany: async () => [],
    findUnique: async () => null,
    findFirst: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
    aggregate: async () => ({ _sum: {}, _count: { _all: 0 } }),
    groupBy: async () => [],
    count: async () => 0,
  };

  // Un método de modelo sin respuesta declarada explota en vez de devolver []:
  // si mañana un servicio usa un método nuevo, el test lo delata en lugar de
  // dejarlo pasar en silencio.
  const modelo = new Proxy(
    {},
    {
      get: (_destino, propiedad) => {
        if (typeof propiedad === 'symbol') {
          return undefined;
        }

        const respuesta = resultados[propiedad];

        if (!respuesta) {
          throw new Error(
            `prismaFalso() no implementa "${propiedad}": agregalo a \`resultados\` para que el test siga verificando algo real.`,
          );
        }

        return respuesta;
      },
    },
  );

  const base = new Proxy(
    {},
    {
      get: (_destino, propiedad) => {
        if (propiedad === 'user') {
          return { findUnique: async () => usuario };
        }

        if (propiedad === '$queryRaw') {
          return async () => [];
        }

        // Las compras se crean dentro de una transacción: se ejecuta el callback
        // con este mismo doble como `tx` (con sus modelos y sus métodos).
        if (propiedad === '$transaction') {
          return async (callback: (tx: unknown) => Promise<unknown>) =>
            callback(base);
        }

        return modelo;
      },
    },
  );

  return base as unknown as PrismaService;
}

/** Rutas de lectura de los seis módulos que antes exigían el rol ADMIN. */
const RUTAS_DE_MODULOS = [
  '/medicines',
  '/customers',
  '/suppliers',
  '/purchases',
  '/sales',
  '/reports/summary',
];

/**
 * Escrituras que estaban reservadas a ADMIN por el guard de rol ya eliminado:
 * medicinas (handler por handler) y las puertas de clase de proveedores y
 * compras. El cuerpo es el mínimo para llegar al servicio; no se fija el código
 * esperado (ver el aserto del test).
 */
const ESCRITURAS_SIN_ROL: [string, string, Record<string, unknown>][] = [
  ['post', '/medicines', {}],
  ['patch', '/medicines/MED-001', {}],
  ['delete', '/medicines/MED-001', {}],
  ['post', '/suppliers', { name: 'Proveedor de prueba', nit: '900123456' }],
  ['post', '/purchases', { supplierId: 1, invoiceNumber: 'FAC-1', items: [] }],
];

describe('Acceso a los módulos con JWT válido', () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const modulo = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaFalso())
      .compile();

    app = modulo.createNestApplication();
    await app.init();

    token = await app
      .get(JwtService)
      .signAsync({ sub: 1, username: 'pili', role: 'USER' });
  });

  afterAll(async () => {
    await app.close();
  });

  for (const ruta of RUTAS_DE_MODULOS) {
    it(`${ruta} responde 200 con el JWT de un usuario que no es ADMIN`, async () => {
      await request(app.getHttpServer())
        .get(ruta)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    });

    it(`${ruta} sigue cerrada sin token`, async () => {
      await request(app.getHttpServer()).get(ruta).expect(401);
    });
  }

  for (const [metodo, ruta, cuerpo] of ESCRITURAS_SIN_ROL) {
    it(`${metodo.toUpperCase()} ${ruta} no queda reservada a un rol`, async () => {
      const peticion = request(app.getHttpServer()) as unknown as Record<
        string,
        (ruta: string) => request.Test
      >;

      const respuesta = await peticion[metodo](ruta)
        .set('Authorization', `Bearer ${token}`)
        .send(cuerpo);

      // No se fija el código exacto: depende de si el ValidationPipe global está
      // registrado en este arranque (acá no lo está). Lo que importa es que la
      // autorización no rechace la petición, y que un fallo real (5xx) falle.
      expect([401, 403]).not.toContain(respuesta.status);
      expect(respuesta.status).toBeLessThan(500);
    });
  }

  it('GET /health sigue siendo pública', async () => {
    await request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({ status: 'ok' });
  });

  it('GET /auth/me sigue exigiendo token', async () => {
    await request(app.getHttpServer()).get('/auth/me').expect(401);
  });

  it('GET /auth/me devuelve el usuario autenticado', async () => {
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect({ id: 1, username: 'pili', role: 'USER' });
  });

  it('rechaza un token con formato inválido', async () => {
    await request(app.getHttpServer())
      .get('/medicines')
      .set('Authorization', 'Bearer esto-no-es-un-jwt')
      .expect(401);
  });
});
