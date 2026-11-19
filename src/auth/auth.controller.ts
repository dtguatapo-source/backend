import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { LoginThrottleGuard } from './guards/login-throttle.guard';
import type { AuthenticatedUser } from './jwt.strategy';

interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Limita los intentos por IP; corre antes del pipe, así que un body
  // inválido también cuenta como intento
  @UseGuards(LoginThrottleGuard)
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // El guard global ya exige token: no hace falta @UseGuards acá
  @Get('me')
  me(@Req() request: AuthenticatedRequest): AuthenticatedUser {
    return request.user;
  }
}
