import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateSuppliersBuysProductDto {
    
    @ApiProperty({example: '23', description: 'Amoun of the product'})
    @IsNumber()
    productAmount: number
    
    @ApiProperty({example: '54.18', description: 'Price of each product'})
    @IsNumber({maxDecimalPlaces: 2})
    costPerProduct: number
    
    @ApiProperty({example: '', description: ''})
    @IsString()
    @IsOptional()
    notes?: string
    
    @ApiProperty({example: '2', description: 'Id of the product'})
    @IsNumber()
    productId: number
    
    @ApiProperty({example: '7', description: 'Id of the buy'})
    @IsNumber()
    supplierBuysId: number

      @IsBoolean()
      @IsOptional()
      active?: boolean



}


// model SupplierBuysProduct {
//   id Int @id @default(autoincrement())

//   productAmount  Int
//   costPerProduct Decimal
//   notes          String?

//   active Boolean @default(true)

//   product   Product @relation(fields: [productId], references: [id])
//   productId Int

//   supplierBuys   SupplierBuys @relation(fields: [supplierBuysId], references: [id])
//   supplierBuysId Int

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
//   productBatches ProductBatch[]
// }