import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({ data: createProductDto });
  }

  async findAll() {
    const products = await this.prisma.product.findMany();

    if (products.length === 0) {
      throw new NotFoundException('No Products in the Database');
    }

    return products;
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product Not Found');
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    const product = this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: { active: false },
    });
  }
}
