import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @IsString()
  @MinLength(6, { message: 'La confirmación de contraseña debe tener al menos 6 caracteres' })
  confirmPassword: string;
}