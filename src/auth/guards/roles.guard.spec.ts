import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Roles } from '../decorators/roles.decorator';
import { RolesGuard } from './roles.guard';

interface UsuarioDePrueba {
  id: number;
  username: string;
  role: string;
}

function contextoConUsuario(user?: UsuarioDePrueba): ExecutionContext {
  return {
    getHandler: () => function handler() {},
    getClass: () => class Controlador {},
    switchToHttp: () => ({ getRequest: () => ({ user }) })
  } as unknown as ExecutionContext;
}

function reflectorConRoles(roles: string[] | undefined): Reflector {
  return { getAllAndOverride: () => roles } as unknown as Reflector;
}

class ControladorConRutaProtegida {
  @Roles('ADMIN')
  listar() {}
}

describe('RolesGuard', () => {
  it('permite el paso cuando la ruta no exige ningún rol', () => {
    const guard = new RolesGuard(reflectorConRoles(undefined));

    expect(guard.canActivate(contextoConUsuario())).toBe(true);
  });

  it('permite el paso al rol exigido', () => {
    const guard = new RolesGuard(reflectorConRoles(['ADMIN']));

    expect(guard.canActivate(contextoConUsuario({ id: 1, username: 'ana', role: 'ADMIN' }))).toBe(
      true
    );
  });

  it('rechaza un rol distinto del exigido', () => {
    const guard = new RolesGuard(reflectorConRoles(['ADMIN']));

    expect(() =>
      guard.canActivate(contextoConUsuario({ id: 2, username: 'beto', role: 'CAJERO' }))
    ).toThrow(ForbiddenException);
  });

  it('falla cerrado cuando no hay usuario autenticado', () => {
    const guard = new RolesGuard(reflectorConRoles(['ADMIN']));

    expect(() => guard.canActivate(contextoConUsuario(undefined))).toThrow(ForbiddenException);
  });

  it('admite una lista de roles', () => {
    const guard = new RolesGuard(reflectorConRoles(['ADMIN', 'CAJERO']));

    expect(guard.canActivate(contextoConUsuario({ id: 3, username: 'carla', role: 'CAJERO' }))).toBe(
      true
    );
  });

  it('lee el decorador aplicado a un handler', () => {
    expect(Reflect.getMetadata(ROLES_KEY, ControladorConRutaProtegida.prototype.listar)).toEqual([
      'ADMIN'
    ]);
  });
});
