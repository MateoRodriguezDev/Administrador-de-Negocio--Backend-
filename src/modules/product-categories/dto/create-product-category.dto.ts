import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProductCategoryDto {
  @ApiProperty({
    example: 'Gaseosas',
    description: 'Es la categoría que utilizan los productos',
  })
  @IsString()
  categoryName: string;

  @ApiProperty({
    example: 'Bebidas sin alcohol con gas',
    description: 'Descripcion breve para explicar la categoría',
  })
  @IsString()
  @IsOptional()
  categoryDescription?: string;
}

// model ProductCategory {
//   id Int @id @default(autoincrement())

//   categoryName        String  @db.VarChar(100)
//   categoryDescription String?

//   products Product[]

//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now()) @updatedAt
// }
