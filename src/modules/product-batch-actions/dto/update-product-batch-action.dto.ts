import { PartialType } from '@nestjs/swagger';
import { CreateProductBatchActionDto } from './create-product-batch-action.dto';

export class UpdateProductBatchActionDto extends PartialType(CreateProductBatchActionDto) {}
