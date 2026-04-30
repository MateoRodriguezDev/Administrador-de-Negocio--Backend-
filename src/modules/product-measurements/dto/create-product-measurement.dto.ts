import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateProductMeasurementDto {


    @ApiProperty({example: 'Kilograms', description: 'Name of the measurement'})
    @IsString()
    measurementName: string

    @ApiProperty({example: 'kg', description: 'Measurement Unit Used'})
    @IsString()
    measurementUnit: string

    @ApiProperty({example: 'true', description: 'If the element is active or not'})
    @IsBoolean()
    @IsOptional()
    active?: boolean
}








// model ProductMeasurement {
//   id Int @id @default(autoincrement()) 

//   measurementName String @db.VarChar(100)
//   measurementUnit String @db.VarChar(5)

//   products Product[]

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
// }
