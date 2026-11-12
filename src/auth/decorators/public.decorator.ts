import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Marca una ruta como pública. El guard global de JWT la deja pasar sin token:
 * todo lo que no esté marcado así queda cerrado por defecto.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
