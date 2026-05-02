import { PartialType } from '@nestjs/swagger';
import { CreateSuppliersBuyDto } from './create-suppliers-buy.dto';

export class UpdateSuppliersBuyDto extends PartialType(CreateSuppliersBuyDto) {}
