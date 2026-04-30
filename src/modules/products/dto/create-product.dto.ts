import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: 1001, description: "Código único del producto" })
    @IsNumber()
    productCode: number

    @ApiProperty({ example: "Coca Cola 500ml", description: "Nombre del producto" })
    @IsString()
    productName: string

    @ApiPropertyOptional({ example: "Gaseosa sabor cola", description: "Descripción del producto" })
    @IsOptional()
    @IsString()
    productDescription?: string

    @ApiProperty({ example: 150.50, description: "Costo del producto" })
    @IsNumber({maxDecimalPlaces: 2})
    cost: number

    @ApiProperty({ example: 250.00, description: "Precio de venta del producto" })
    @IsNumber({maxDecimalPlaces: 2})
    price: number

    @ApiProperty({ example: 100, description: "Stock actual del producto" })
    @IsNumber()
    stock: number

    @ApiProperty({ example: 100, description: "Stock inicial del producto" })
    @IsNumber()
    initialStock: number

    @ApiProperty({ example: 10, description: "Stock mínimo antes de alertar" })
    @IsNumber()
    minStock: number

    @ApiProperty({ example: false, description: "Indica si el producto maneja lotes" })
    @IsBoolean()
    useProductBatch: boolean

    @ApiProperty({ example: 1, description: "ID de la categoría del producto" })
    @IsNumber()
    productCategoryId: number

    @ApiProperty({ example: 1, description: "ID de la unidad de medida del producto" })
    @IsNumber()
    productMeasurementId: number
}