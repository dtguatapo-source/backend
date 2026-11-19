import { ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { AuthController } from '../auth.controller';
import { AuthModule } from '../auth.module';
import { LoginThrottleGuard } from './login-throttle.guard';

const VENTANA_MS = 60_000;
const MAX_INTENTOS = 5;
const INICIO = new Date('2024-01-01T12:00:00.000Z');

interface RequestDePrueba {
  ip?: string;
  socket?: { remoteAddress?: string };
}

/** Contexto falso: el guard solo mira `switchToHttp().getRequest()`. */
function contextoCon(request: RequestDePrueba): ExecutionContext {
  return {
    switchToHttp: () => ({ getRequest: () => request }),
  } as unknown as ExecutionContext;
}

function contextoDesdeIp(ip: string): ExecutionContext {
  return contextoCon({ ip, socket: { remoteAddress: ip } });
}

/** Ejecuta un intento y devuelve el error lanzado (o undefined si pasó). */
function intentar(
  guard: LoginThrottleGuard,
  context: ExecutionContext,
): unknown {
  try {
    guard.canActivate(context);
    return undefined;
  } catch (error) {
    return error;
  }
}

function avanzar(ms: number): void {
  vi.setSystemTime(new Date(INICIO.getTime() + ms));
}

function proveedoresDe(modulo: object): unknown[] {
  return (Reflect.getMetadata('providers', modulo) as unknown[]) ?? [];
}

function guardAplicadoA(handler: unknown): unknown[] | undefined {
  return Reflect.getMetadata('__guards__', handler) as unknown[] | undefined;
}

describe('LoginThrottleGuard', () => {
  let guard: LoginThrottleGuard;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(INICIO);
    guard = new LoginThrottleGuard();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('allows the first 5 attempts from the same IP', () => {
    const context = contextoDesdeIp('10.0.0.1');

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, context)).toBeUndefined();
    }
  });

  it('rejects the 6th attempt with 429 and a non-negative retryAfter', () => {
    const context = contextoDesdeIp('10.0.0.1');

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, context)).toBeUndefined();
    }

    const error = intentar(guard, context);

    expect(error).toBeInstanceOf(HttpException);
    const excepcion = error as HttpException;
    expect(excepcion.getStatus()).toBe(HttpStatus.TOO_MANY_REQUESTS);

    const cuerpo = excepcion.getResponse() as {
      statusCode?: number;
      message?: unknown;
      retryAfter?: unknown;
    };

    expect(cuerpo.statusCode).toBe(HttpStatus.TOO_MANY_REQUESTS);
    expect(typeof cuerpo.message).toBe('string');
    expect((cuerpo.message as string).length).toBeGreaterThan(0);
    expect(typeof cuerpo.retryAfter).toBe('number');
    expect(cuerpo.retryAfter as number).toBeGreaterThanOrEqual(0);
    expect(cuerpo.retryAfter as number).toBeLessThanOrEqual(VENTANA_MS / 1000);

    // El rechazo no reinicia la cuenta: el intento siguiente sigue bloqueado
    const siguiente = intentar(guard, context);
    expect(siguiente).toBeInstanceOf(HttpException);
    expect((siguiente as HttpException).getStatus()).toBe(
      HttpStatus.TOO_MANY_REQUESTS,
    );
  });

  it('allows the same IP again after the window elapses', () => {
    const context = contextoDesdeIp('10.0.0.1');

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, context)).toBeUndefined();
    }
    expect(intentar(guard, context)).toBeInstanceOf(HttpException);

    avanzar(VENTANA_MS + 1_000);

    expect(intentar(guard, context)).toBeUndefined();
  });

  it('does not share the counter between two different IPs', () => {
    const primera = contextoDesdeIp('10.0.0.1');
    const segunda = contextoDesdeIp('10.0.0.2');

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, primera)).toBeUndefined();
    }
    expect(intentar(guard, primera)).toBeInstanceOf(HttpException);

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, segunda)).toBeUndefined();
    }
    expect(intentar(guard, segunda)).toBeInstanceOf(HttpException);
  });

  it('throttles a request without a usable IP instead of crashing', () => {
    const sinIp = contextoCon({ socket: {} });

    expect(intentar(guard, sinIp)).toBeUndefined();

    const sinNada = contextoCon({});

    for (let intento = 2; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, sinNada)).toBeUndefined();
    }

    const error = intentar(guard, sinNada);
    expect(error).toBeInstanceOf(HttpException);
    expect((error as HttpException).getStatus()).toBe(
      HttpStatus.TOO_MANY_REQUESTS,
    );
  });

  it('falls back to socket.remoteAddress when request.ip is missing', () => {
    const context = contextoCon({ socket: { remoteAddress: '192.168.0.7' } });

    for (let intento = 1; intento <= MAX_INTENTOS; intento += 1) {
      expect(intentar(guard, context)).toBeUndefined();
    }
    expect(intentar(guard, context)).toBeInstanceOf(HttpException);
  });
});

describe('LoginThrottleGuard wiring', () => {
  it('applies the guard to login() only and keeps the public/200 decorators', () => {
    expect(guardAplicadoA(AuthController.prototype.login)).toEqual([
      LoginThrottleGuard,
    ]);
    expect(guardAplicadoA(AuthController.prototype.me)).toBeUndefined();
    expect(
      Reflect.getMetadata('__httpCode__', AuthController.prototype.login),
    ).toBe(HttpStatus.OK);
  });

  it('registers the guard as a provider of AuthModule', () => {
    expect(proveedoresDe(AuthModule)).toContain(LoginThrottleGuard);
  });
});
