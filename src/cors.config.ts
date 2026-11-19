const ORIGEN_LOCAL = 'http://localhost:4200';

/**
 * Interpreta una variable de entorno como lista de orígenes separados por coma.
 * Devuelve null cuando la variable no aporta nada, para poder pasar a la siguiente.
 */
function leerLista(valor: string | undefined): string[] | null {
  if (!valor || valor.trim().length === 0) {
    return null;
  }

  const origenes = valor
    .split(',')
    .map((origen) => origen.trim())
    .filter((origen) => origen.length > 0);

  return origenes.length > 0 ? origenes : null;
}

/**
 * Orígenes permitidos por CORS.
 *
 * Se lee primero FRONTEND_URL y, si no está definida, CORS_ORIGIN (nombre anterior,
 * se mantiene por compatibilidad). Sin ninguna de las dos se usan los orígenes locales,
 * para que el ciclo de desarrollo siga funcionando sin configurar nada.
 */
export function getCorsOrigins(): string[] {
  const fuentes: Array<[nombre: string, valor: string | undefined]> = [
    ['FRONTEND_URL', process.env.FRONTEND_URL],
    ['CORS_ORIGIN', process.env.CORS_ORIGIN],
  ];

  for (const [nombre, valor] of fuentes) {
    const origenes = leerLista(valor);

    if (!origenes) {
      continue;
    }

    if (origenes.includes('*')) {
      throw new Error(
        `${nombre} cannot be "*" because CORS runs with credentials: true. ` +
          'List the allowed origins explicitly, separated by commas.',
      );
    }

    return origenes;
  }

  return [ORIGEN_LOCAL];
}
