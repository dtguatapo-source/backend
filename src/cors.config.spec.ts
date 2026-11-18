import { afterEach, describe, expect, it } from 'vitest';
import { getCorsOrigins } from './cors.config.js';

const ORIGEN_ORIGINAL = process.env.CORS_ORIGIN;

afterEach(() => {
  if (ORIGEN_ORIGINAL === undefined) {
    delete process.env.CORS_ORIGIN;
  } else {
    process.env.CORS_ORIGIN = ORIGEN_ORIGINAL;
  }
});

describe('getCorsOrigins', () => {
  it('cae en el origen local cuando CORS_ORIGIN no está definido', () => {
    delete process.env.CORS_ORIGIN;

    expect(getCorsOrigins()).toEqual(['http://localhost:4200']);
  });

  it('cae en el origen local cuando CORS_ORIGIN está vacío o con espacios', () => {
    process.env.CORS_ORIGIN = '   ';

    expect(getCorsOrigins()).toEqual(['http://localhost:4200']);
  });

  it('acepta un único origen de producción', () => {
    process.env.CORS_ORIGIN = 'https://drogueria.example.com';

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('acepta localhost y producción en la misma lista, recortando espacios', () => {
    process.env.CORS_ORIGIN =
      ' http://localhost:4200 , https://drogueria.example.com ,https://admin.example.com ';

    expect(getCorsOrigins()).toEqual([
      'http://localhost:4200',
      'https://drogueria.example.com',
      'https://admin.example.com',
    ]);
  });

  it('descarta las entradas vacías que dejan las comas de más', () => {
    process.env.CORS_ORIGIN = 'https://drogueria.example.com,,  ,';

    expect(getCorsOrigins()).toEqual(['https://drogueria.example.com']);
  });

  it('rechaza el comodín, que con credentials:true el navegador siempre rechaza', () => {
    process.env.CORS_ORIGIN = '*';

    expect(() => getCorsOrigins()).toThrow(/CORS_ORIGIN/);
  });
});
