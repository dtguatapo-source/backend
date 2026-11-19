import { Test, TestingModule } from '@nestjs/testing';
import { IS_PUBLIC_KEY } from './auth/decorators/public.decorator.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('health', () => {
    it('responde exactamente { status: "ok" }', () => {
      expect(appController.getHealth()).toEqual({ status: 'ok' });
    });

    it('queda marcada como pública para el guard global de JWT', () => {
      expect(Reflect.getMetadata(IS_PUBLIC_KEY, AppController.prototype.getHealth)).toBe(true);
    });
  });
});
