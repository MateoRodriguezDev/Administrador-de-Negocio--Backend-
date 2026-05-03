import { ApiProperty } from '@nestjs/swagger';
import { BatchState } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductBatchDto {
  @ApiProperty({
    example: `2024-05-02T10:00:00Z`,
    description: 'Date of the buy',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  expireDate: Date;

  @ApiProperty({
    example: `Batch Bought With Credit`,
    description: 'Notes for the batch',
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({ example: `123`, description: 'Amount of the Product' })
  @IsNumber()
  productQuantity: number;

  @ApiProperty({ example: `Expired`, description: 'State of the batch' })
  @IsEnum(BatchState)
  @IsOptional()
  state?: BatchState;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @ApiProperty({ example: `23`, description: 'Id of the Product' })
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: `12`,
    description:
      'Id of the SupplierBuysProductId if batch was bought from a supplier',
  })
  @IsNumber()
  @IsOptional()
  supplierBuysProductId?: number;
}

// model ProductBatch {
//   id Int @id @default(autoincrement())

//   expireDate DateTime
//   notes      String?
//   productQuantity Int
//   state BatchState @default(Active)

//   active Boolean @default(true)

//   product   Product @relation(fields: [productId], references: [id])
//   productId Int

//   supplierBuysProduct   SupplierBuysProduct? @relation(fields: [supplierBuysProductId], references: [id])
//   supplierBuysProductId Int?

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
//   productBatchActions ProductBatchAction[]
// }
