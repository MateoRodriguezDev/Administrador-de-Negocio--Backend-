import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString } from "class-validator"

export class CreateSupplierDto {

    
    @ApiProperty({example: `Drink A Cola`, description: 'Supplier Name'})
    @IsString()
    supplierName: string

    @ApiProperty({example: '+5492984789155', description: 'Supplier Number'})
    @IsString()
    @IsOptional()
    supplierNumber?: string

    @ApiProperty({example: 'supplierDrinkACola@email.com', description: 'Supplier Email'})
    @IsString()
    @IsOptional()
    supplierEmail?: string

    @ApiProperty({example: 'Yerba Mate 7280', description: 'Supplier Address'})
    @IsString()
    @IsOptional()
    supplierAddress?: string

    @ApiProperty({example: 'They Charge 5% more with credit', description: 'Supplier Notes'})
    @IsString()
    @IsOptional()
    supplierNotes?: string

    @IsBoolean()
    @IsOptional()
    active?: boolean


}



// model Supplier {
//   id Int @id @default(autoincrement()) 

//   supplierName    String  @db.VarChar(100)
//   supplierNumber  String?
//   supplierEmail   String? @db.VarChar(100)
//   supplierAddress String? @db.VarChar(100)
//   supplierNotes   String?

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
//   supplierBuys SupplierBuys[]
// }