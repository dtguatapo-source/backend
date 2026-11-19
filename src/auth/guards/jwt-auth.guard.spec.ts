import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY, Public } from '../decorators/public.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

function contextoDeEjemplo(): ExecutionContext {
  return {
    getHandler: () => function handler() {},
    getClass: () => class ControladorDePrueba {},
    switchToHttp: () => ({
      getRequest: () => ({ headers: {} }),
      getResponse: () => ({}),
      getNext: () => undefined
    })
  } as unknown as ExecutionContext;
}

function reflectorQueResponde(valor: boolean | undefined): Reflector {
  return { getAllAndOverride: () => valor } as unknown as Reflector;
}

class ControladorConRutas {
  @Public()
  login() {}

  perfil() {}
}

describe('JwtAuthGuard', () => {
  it('deja pasar una ruta marcada con @Public sin consultar la estrategia', () => {
    const guard = new JwtAuthGuard(reflectorQueResponde(true));

    expect(guard.canActivate(contextoDeEjemplo())).toBe(true);
  });

  it('no deja pasar el resto: delega en la estrategia jwt', async () => {
    const guard = new JwtAuthGuard(reflectorQueResponde(undefined));

    // Sin estrategia registrada la delegación rechaza: lo importante es que NO
    // devuelve true por su cuenta, o sea que la ruta no queda abierta.
    await expect(guard.canActivate(contextoDeEjemplo()) as Promise<boolean>).rejects.toThrow();
  });

  it('lee el decorador del handler marcado', () => {
    expect(Reflect.getMetadata(IS_PUBLIC_KEY, ControladorConRutas.prototype.login)).toBe(true);
  });

  it('no marca como público un handler sin el decorador', () => {
    expect(Reflect.getMetadata(IS_PUBLIC_KEY, ControladorConRutas.prototype.perfil)).toBeUndefined();
  });
});
