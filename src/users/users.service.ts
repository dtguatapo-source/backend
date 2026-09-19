import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from '../auth/password';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password, confirmPassword } = createUserDto;

    // 1. Validar coincidencia de contraseñas
    if (password !== confirmPassword) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    // 2. Verificar si el nombre de usuario ya existe
    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      throw new ConflictException('El nombre de usuario ya está registrado');
    }

    // 3. Hashear la contra  con scrypt
    const passwordHash = await hashPassword(password);

    // 4. Crear el usuario en Prisma (sin guardar confirmPassword)
    const user = await this.prisma.user.create({
      data: {
        username,
        passwordHash,
      },
    });

    // 5. Excluir el hash de la contra de la respuesta
    const { passwordHash: _, ...result } = user;
    return result;
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}