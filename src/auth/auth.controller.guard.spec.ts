import { GUARDS_METADATA } from '@nestjs/common/constants';
import type { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

describe('Auth guard wiring (S3, S4)', () => {
  it('JwtAuthGuard is instantiable', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });

  it('protects GET /auth/me with JwtAuthGuard', () => {
    const guards = Reflect.getMetadata(
      GUARDS_METADATA,
      AuthController.prototype.me,
    );

    expect(guards).toContain(JwtAuthGuard);
  });

  it('returns the authenticated user from me()', () => {
    const controller = new AuthController({} as unknown as AuthService);
    const user = { id: 1, username: 'tatiana', role: 'ADMIN' };

    expect(controller.me({ user } as never)).toEqual(user);
  });
});
