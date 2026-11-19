import { APP_GUARD } from '@nestjs/core';
import type { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AppModule } from '../app.module';

/** Providers declarados por un módulo, sin levantar la aplicación. */
function providersDe(modulo: object): unknown[] {
  return (Reflect.getMetadata('providers', modulo) as unknown[]) ?? [];
}

describe('Auth guard wiring', () => {
  it('registers the JWT guard as the only global guard', () => {
    const globales = providersDe(AppModule)
      .filter(
        (provider) =>
          typeof provider === 'object' &&
          provider !== null &&
          (provider as { provide?: unknown }).provide === APP_GUARD,
      )
      .map((provider) => (provider as { useClass?: unknown }).useClass);

    // Una sola administradora: el acceso depende del JWT, no del rol
    expect(globales).toEqual([JwtAuthGuard]);
  });

  it('leaves POST /auth/login public so a user can obtain a token', () => {
    expect(Reflect.getMetadata(IS_PUBLIC_KEY, AuthController.prototype.login)).toBe(true);
  });

  it('does not mark GET /auth/me public, so the global guard protects it', () => {
    expect(Reflect.getMetadata(IS_PUBLIC_KEY, AuthController.prototype.me)).toBeUndefined();
  });

  it('returns the authenticated user from me()', () => {
    const controller = new AuthController({} as unknown as AuthService);
    const user = { id: 1, username: 'tatiana', role: 'ADMIN' };

    expect(controller.me({ user } as never)).toEqual(user);
  });
});
