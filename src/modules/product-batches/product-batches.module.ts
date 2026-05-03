import { Module } from '@nestjs/common';
import { ProductBatchesService } from './product-batches.service';
import { ProductBatchesController } from './product-batches.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductBatchesController],
  providers: [ProductBatchesService],
})
export class ProductBatchesModule {}
