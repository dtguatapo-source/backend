import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Restringe una ruta —o un controlador entero— a los roles indicados.
 * Se evalúa después del guard de JWT, que es el que llena `request.user`.
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
