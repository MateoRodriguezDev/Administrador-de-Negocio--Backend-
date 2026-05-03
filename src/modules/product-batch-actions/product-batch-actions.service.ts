import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductBatchActionDto } from './dto/create-product-batch-action.dto';
import { UpdateProductBatchActionDto } from './dto/update-product-batch-action.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductBatchActionsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductBatchActionDto: CreateProductBatchActionDto) {
    return await this.prisma.productBatchAction.create({ data: createProductBatchActionDto });
  }

  async findAll() {
    const productBatchActions = await this.prisma.productBatchAction.findMany();

    if (productBatchActions.length === 0) {
      throw new NotFoundException('No Product Batch Actions in the Database');
    }

    return productBatchActions;
  }

  async findOne(id: number) {
    const productBatchAction = await this.prisma.productBatchAction.findUnique({ where: { id } });

    if (!productBatchAction) {
      throw new NotFoundException('Product Batch Action Not Found');
    }

    return productBatchAction;
  }

  async update(id: number, updateProductBatchActionDto: UpdateProductBatchActionDto) {
    await this.findOne(id);

    return this.prisma.productBatchAction.update({
      where: { id },
      data: updateProductBatchActionDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.update(id, {active: false})
  }
}