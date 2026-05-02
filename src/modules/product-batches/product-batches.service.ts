import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductBatchDto } from './dto/create-product-batch.dto';
import { UpdateProductBatchDto } from './dto/update-product-batch.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductBatchesService {
  constructor(private prisma: PrismaService) {}

  async create(createProductBatchDto: CreateProductBatchDto) {
    return await this.prisma.productBatch.create({
      data: createProductBatchDto,
    });
  }

  async findAll() {
    const productBatches = await this.prisma.productBatch.findMany();

    if (productBatches.length === 0) {
      throw new NotFoundException('No Product Batches in the Database');
    }

    return productBatches;
  }

  async findOne(id: number) {
    const productBatch = await this.prisma.productBatch.findUnique({
      where: { id },
    });

    if (!productBatch) {
      throw new NotFoundException('Product Batch Not Found');
    }

    return productBatch;
  }

  async update(id: number, updateProductBatchDto: UpdateProductBatchDto) {
    await this.findOne(id);

    return this.prisma.productBatch.update({
      where: { id },
      data: updateProductBatchDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.productBatch.update({
      where: { id },
      data: { state: 'NotActive' },
    });
  }
}
