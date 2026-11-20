import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Registro cerrado: la droguería tiene una sola dueña/administradora y su
  // cuenta se siembra con `npm run seed`. Sin @Public() esta ruta pasa por el
  // guard global de JWT, así que nadie puede auto-registrarse.
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
