import { Module } from '@nestjs/common';
import { ProductMeasurementsService } from './product-measurements.service';
import { ProductMeasurementsController } from './product-measurements.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:  [PrismaModule],
  controllers: [ProductMeasurementsController],
  providers: [ProductMeasurementsService],
})
export class ProductMeasurementsModule {}
