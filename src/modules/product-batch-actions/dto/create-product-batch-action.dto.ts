import { ApiProperty } from '@nestjs/swagger';
import { ProductBatchActionType } from '@prisma/client';
import { IsBoolean, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { CanActivate } from '@nestjs/common';

export class CreateProductBatchActionDto {
  @ApiProperty({
    enum: ProductBatchActionType,
    example: ProductBatchActionType.Add,
  })
  @IsEnum(ProductBatchActionType)
  type: ProductBatchActionType;

  @ApiProperty({
    example: 10,
    description: 'Cantidad de unidades a agregar o remover del lote',
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    example: 1,
    description: 'ID del lote al que pertenece la acción',
  })
  @IsNumber()
  productBatchId: number;

  @IsBoolean()
  @IsOptional()
  active: boolean;
}

// model ProductBatchAction {
//   id Int @id @default(autoincrement())

//   type ProductBatchActionType
//   quantity Int

//   active Boolean @default(true)

//   productBatch   ProductBatch @relation(fields: [productBatchId], references: [id])
//   productBatchId Int

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
// }
