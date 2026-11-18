import { afterEach, describe, expect, it } from 'vitest';
import { getCorsOrigins } from './cors.config.js';

const FRONTEND_ORIGINAL = process.env.FRONTEND_URL;
const CORS_ORIGINAL = process.env.CORS_ORIGIN;

function restaurar(
  nombre: 'FRONTEND_URL' | 'CORS_ORIGIN',
  valor: string | undefined,
) {
  if (valor === undefined) {
    delete process.env[nombre];
  } else {
    process.env[nombre] = valor;
  }
}

afterEach(() => {
  restaurar('FRONTEND_URL', FRONTEND_ORIGINAL);
  restaurar('CORS_ORIGIN', CORS_ORIGINAL);
});

describe('getCorsOrigins', () => {
  it('usa FRONTEND_URL cuando está definido', () => {
    process.env.FRONTEND_URL = 'https://drogueria.example.com';
    delete process.env.CORS_ORIGIN;

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('acepta FRONTEND_URL como lista separada por comas, recortando espacios', () => {
    process.env.FRONTEND_URL =
      ' http://localhost:4200 , https://drogueria.example.com ';

    expect(getCorsOrigins()).toEqual([
      'http://localhost:4200',
      'https://drogueria.example.com',
    ]);
  });

  it('cae en CORS_ORIGIN cuando FRONTEND_URL no está definido', () => {
    delete process.env.FRONTEND_URL;
    process.env.CORS_ORIGIN = 'https://drogueria.example.com';

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('le da prioridad a FRONTEND_URL cuando las dos están definidas', () => {
    process.env.FRONTEND_URL = 'https://nuevo.example.com';
    process.env.CORS_ORIGIN = 'https://viejo.example.com';

    expect(getCorsOrigins()).toEqual(['https://nuevo.example.com']);
  });

  it('ignora FRONTEND_URL vacío o con sólo espacios y sigue con CORS_ORIGIN', () => {
    process.env.FRONTEND_URL = '   ';
    process.env.CORS_ORIGIN = 'https://drogueria.example.com';

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('cae en el origen local cuando no está definida ninguna de las dos', () => {
    delete process.env.FRONTEND_URL;
    delete process.env.CORS_ORIGIN;

    expect(getCorsOrigins()).toEqual(['http://localhost:4200']);
  });

  it('descarta las entradas vacías que dejan las comas de más', () => {
    process.env.FRONTEND_URL = 'https://drogueria.example.com,,  ,';
    delete process.env.CORS_ORIGIN;

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('rechaza el comodín, que con credentials:true el navegador siempre rechaza', () => {
    process.env.FRONTEND_URL = '*';
    delete process.env.CORS_ORIGIN;

    expect(() => getCorsOrigins()).toThrow(/FRONTEND_URL/);
  });
});
