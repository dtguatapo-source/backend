import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import type { AuthenticatedUser } from '../jwt.strategy';

/**
 * Guard de roles registrado como APP_GUARD después del guard de JWT.
 * Sin `@Roles()` alcanza con estar autenticado; con `@Roles()` el rol del token
 * tiene que estar en la lista, y si falta el usuario falla cerrado.
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requeridos = this.reflector?.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requeridos || requeridos.length === 0) {
      return true;
    }

    const usuario = context.switchToHttp().getRequest<{ user?: AuthenticatedUser }>().user;

    if (!usuario || !requeridos.includes(usuario.role)) {
      throw new ForbiddenException('No tiene permisos para realizar esta acción');
    }

    return true;
  }
}
