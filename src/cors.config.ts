const ORIGEN_LOCAL = 'http://localhost:4200';

/**
 * Orígenes permitidos por CORS, leídos de CORS_ORIGIN como lista separada por comas.
 * Así el mismo build sirve en local y en producción sin tocar código.
 */
export function getCorsOrigins(): string[] {
  const configurado = process.env.CORS_ORIGIN;

  if (!configurado || configurado.trim().length === 0) {
    return [ORIGEN_LOCAL];
  }

  const origenes = configurado
    .split(',')
    .map((origen) => origen.trim())
    .filter((origen) => origen.length > 0);

  if (origenes.length === 0) {
    return [ORIGEN_LOCAL];
  }

  if (origenes.includes('*')) {
    throw new Error(
      'CORS_ORIGIN cannot be "*" because CORS runs with credentials: true. ' +
        'List the allowed origins explicitly, separated by commas.',
    );
  }

  return origenes;
}
