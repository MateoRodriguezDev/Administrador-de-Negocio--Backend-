import { Module } from '@nestjs/common';
import { ProductBatchActionsService } from './product-batch-actions.service';
import { ProductBatchActionsController } from './product-batch-actions.controller';

@Module({
  controllers: [ProductBatchActionsController],
  providers: [ProductBatchActionsService],
})
export class ProductBatchActionsModule {}
