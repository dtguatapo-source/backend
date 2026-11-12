import { Test, TestingModule } from '@nestjs/testing';
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
