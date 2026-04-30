import { PartialType } from '@nestjs/swagger';
import { CreateProductMeasurementDto } from './create-product-measurement.dto';

export class UpdateProductMeasurementDto extends PartialType(CreateProductMeasurementDto) {}
