import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

/**
 * Guard de JWT registrado como APP_GUARD en AppModule: toda la API queda
 * cerrada por defecto y solo las rutas con @Public() pasan sin token.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // El decorador puede estar en el handler o en el controlador entero
    const esPublica = this.reflector?.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (esPublica) {
      return true;
    }

    return super.canActivate(context);
  }
}
