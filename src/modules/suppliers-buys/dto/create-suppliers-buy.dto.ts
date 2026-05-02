import { ApiProperty } from '@nestjs/swagger';
import { State } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSuppliersBuyDto {


    @ApiProperty({example: `COM-123456789`, description: 'Supplier Buys Id'})
  @IsString()
  @IsOptional()
  billId?: string;

  @ApiProperty({example: `0.56`, description: 'Percentage of discount'})
  @IsNumber()
  @IsOptional()
  discount?: number;

  @ApiProperty({example: `2024-05-02T10:00:00Z`, description: 'Date of the buy'})
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  billDate?: Date;

  @ApiProperty({example: `Got a discount because products where close to expiring`, description: 'Date of the buy'})
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({example: `Completed`, description: 'State of the buy'})
  @IsString()
  @IsOptional()
  state?: State;

  @IsBoolean()
  @IsOptional()
  active?: boolean

  @ApiProperty({example: `13`, description: 'Supplier Id'})
  @IsNumber()
  supplierId: number;
}

// model SupplierBuys {
//   id Int @id @default(autoincrement())
//   billId   String?
//   discount Int?
//   billDate DateTime?
//   notes    String?
//   state    State     @default(Completed)

//   active Boolean @default(true)

//   supplier   Supplier @relation(fields: [supplierId], references: [id])
//   supplierId Int

//   createdAt            DateTime              @default(now())
//   updatedAt            DateTime              @default(now()) @updatedAt
//   supplierBuysProducts SupplierBuysProduct[]
// }
