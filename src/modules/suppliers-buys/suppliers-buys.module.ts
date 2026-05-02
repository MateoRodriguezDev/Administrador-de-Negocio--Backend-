import { Module } from '@nestjs/common';
import { SuppliersBuysService } from './suppliers-buys.service';
import { SuppliersBuysController } from './suppliers-buys.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SuppliersBuysController],
  providers: [SuppliersBuysService],
})
export class SuppliersBuysModule {}
