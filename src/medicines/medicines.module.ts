import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service.js';
import { MedicinesController } from './medicines.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [MedicinesController],
  providers: [MedicinesService],
})
export class MedicinesModule {}
