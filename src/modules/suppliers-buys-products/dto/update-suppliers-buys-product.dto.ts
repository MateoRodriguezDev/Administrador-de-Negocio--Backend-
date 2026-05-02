import { PartialType } from '@nestjs/swagger';
import { CreateSuppliersBuysProductDto } from './create-suppliers-buys-product.dto';

export class UpdateSuppliersBuysProductDto extends PartialType(CreateSuppliersBuysProductDto) {}
