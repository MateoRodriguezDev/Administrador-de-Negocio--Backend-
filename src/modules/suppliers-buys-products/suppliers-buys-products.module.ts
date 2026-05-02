import { Module } from '@nestjs/common';
import { SuppliersBuysProductsService } from './suppliers-buys-products.service';
import { SuppliersBuysProductsController } from './suppliers-buys-products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SuppliersBuysProductsController],
  providers: [SuppliersBuysProductsService],
})
export class SuppliersBuysProductsModule {}
