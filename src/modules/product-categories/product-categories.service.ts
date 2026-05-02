import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductCategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    console.log('hola')
    return await this.prisma.productCategory.create({
      data: createProductCategoryDto,
    });
  }

  async findAll() {
    const productCategories = await this.prisma.productCategory.findMany();

    if (productCategories.length === 0) {
      throw new NotFoundException('No Products in the Database');
    }

    return productCategories;
  }

  async findOne(id: number) {
    const productCategory = await this.prisma.productCategory.findUnique({
      where: { id },
    });

    if (!productCategory) {
      throw new NotFoundException('Product Not Found');
    }

    return productCategory;
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    const productCategory = await this.findOne(id);

    return this.prisma.productCategory.update({
      where: { id },
      data: updateProductCategoryDto,
    });
  }

  async remove(id: number) {
    const productCategory = await this.findOne(id);

    return this.prisma.productCategory.update({
      where: { id },
      data: { active: false },
    });
  }
}
