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

  const resultados: Record<string, () => Promise<unknown>> = {
    findMany: async () => [],
    findUnique: async () => null,
    findFirst: async () => null,
    aggregate: async () => ({ _sum: {}, _count: { _all: 0 } }),
    groupBy: async () => [],
    count: async () => 0,
  };

  const modelo = new Proxy(
    {},
    {
      get: (_destino, propiedad) =>
        resultados[propiedad as string] ?? (async () => []),
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

/** Escrituras de medicinas, con el código esperado, que estaban reservadas a ADMIN. */
const ESCRITURAS_DE_MEDICINAS: [string, string, number][] = [
  ['post', '/medicines', 201],
  ['patch', '/medicines/MED-001', 200],
  ['delete', '/medicines/MED-001', 204],
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

  for (const [metodo, ruta, esperado] of ESCRITURAS_DE_MEDICINAS) {
    it(`${metodo.toUpperCase()} ${ruta} no queda reservada a un rol`, async () => {
      const peticion = request(app.getHttpServer()) as unknown as Record<
        string,
        (ruta: string) => request.Test
      >;

      await peticion[metodo](ruta)
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(esperado);
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
