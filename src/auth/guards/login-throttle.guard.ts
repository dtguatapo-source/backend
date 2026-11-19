import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

/** Ventana de conteo: 60 segundos. */
const VENTANA_MS = 60_000;
/** Intentos permitidos por IP dentro de la ventana. */
const MAX_INTENTOS = 5;
/** Clave para los pedidos sin IP utilizable: se cuentan todos juntos. */
const IP_DESCONOCIDA = 'ip-desconocida';
/** Tope de IPs recordadas a la vez, para que el Map no crezca sin límite. */
const MAX_IPS = 10_000;

interface Ventana {
  intentos: number;
  inicio: number;
}

interface SolicitudDeLogin {
  ip?: string;
  socket?: { remoteAddress?: string };
}

/**
 * Limita los intentos de `POST /auth/login` por IP de origen: máximo 5 en 60
 * segundos y el intento siguiente responde 429 con `retryAfter` en segundos.
 *
 * Se cuenta por IP y no por usuario a propósito: rotar el nombre de usuario
 * esquivaría un contador por usuario. Como los guards corren antes de los
 * pipes de validación, un body inválido también cuenta como intento.
 *
 * El reloj se lee de `Date.now()` y no se inyecta: un parámetro con valor por
 * defecto `() => number` rompería la inyección de dependencias de Nest. Los
 * tests controlan el tiempo con `vi.setSystemTime()`.
 */
@Injectable()
export class LoginThrottleGuard implements CanActivate {
  private readonly ventanas = new Map<string, Ventana>();

  canActivate(context: ExecutionContext): boolean {
    const solicitud = context.switchToHttp().getRequest<SolicitudDeLogin>();
    const ip = this.ipDe(solicitud);
    const ahora = Date.now();

    const ventana = this.ventanas.get(ip);

    if (!ventana || ahora - ventana.inicio >= VENTANA_MS) {
      this.registrar(ip, ahora);
      return true;
    }

    ventana.intentos += 1;

    if (ventana.intentos > MAX_INTENTOS) {
      // El rechazo no reinicia la ventana: sigue bloqueado hasta que expire
      const restanteMs = ventana.inicio + VENTANA_MS - ahora;
      const retryAfter = Math.max(0, Math.ceil(restanteMs / 1000));

      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message:
            'Demasiados intentos de inicio de sesión desde esta dirección. Intente nuevamente más tarde.',
          retryAfter,
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    return true;
  }

  /** IP de origen: `request.ip`, luego el socket, y si no hay ninguna, una fija. */
  private ipDe(solicitud: SolicitudDeLogin | undefined): string {
    const ip = solicitud?.ip ?? solicitud?.socket?.remoteAddress;

    return typeof ip === 'string' && ip.length > 0 ? ip : IP_DESCONOCIDA;
  }

  /** Abre una ventana nueva y mantiene el Map acotado. */
  private registrar(ip: string, ahora: number): void {
    this.ventanas.set(ip, { intentos: 1, inicio: ahora });

    if (this.ventanas.size <= MAX_IPS) {
      return;
    }

    this.purgarVencidas(ahora);

    if (this.ventanas.size > MAX_IPS) {
      this.desalojarLaMasVieja();
    }
  }

  private purgarVencidas(ahora: number): void {
    for (const [ip, ventana] of this.ventanas) {
      if (ahora - ventana.inicio >= VENTANA_MS) {
        this.ventanas.delete(ip);
      }
    }
  }

  private desalojarLaMasVieja(): void {
    let masVieja: string | undefined;
    let inicio = Number.POSITIVE_INFINITY;

    for (const [ip, ventana] of this.ventanas) {
      if (ventana.inicio < inicio) {
        inicio = ventana.inicio;
        masVieja = ip;
      }
    }

    if (masVieja !== undefined) {
      this.ventanas.delete(masVieja);
    }
  }
}
