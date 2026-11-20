import { Test, TestingModule } from '@nestjs/testing';
import { IS_PUBLIC_KEY } from '../auth/decorators/public.decorator';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const usersService = {
    create: async (dto: { username: string }) => ({ id: 1, username: dto.username, role: 'USER' })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: usersService }]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('queda pública: el registro no exige JWT', () => {
    expect(
      Reflect.getMetadata(IS_PUBLIC_KEY, UsersController.prototype.create)
    ).toBe(true);
  });

  it('delegates the registration to the service', async () => {
    const dto = {
      username: 'nuevo',
      password: 'secreto123',
      confirmPassword: 'secreto123'
    };

    await expect(controller.create(dto)).resolves.toEqual({
      id: 1,
      username: 'nuevo',
      role: 'USER'
    });
  });
});
