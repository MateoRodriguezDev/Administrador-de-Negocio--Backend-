import { ProductMeasurement } from './../../../node_modules/.prisma/client/index.d';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductMeasurementDto } from './dto/create-product-measurement.dto';
import { UpdateProductMeasurementDto } from './dto/update-product-measurement.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductMeasurementsService {
  constructor(private prisma: PrismaService){}


  async create(createProductMeasurementDto: CreateProductMeasurementDto) {
    return this.prisma.productMeasurement.create({data: createProductMeasurementDto})
  }

  async findAll() {
    return await this.prisma.productMeasurement.findMany()
  }

  async findOne(id: number) {
    const productMeasurement = await this.prisma.productMeasurement.findUnique({where: {id}})

    if(!productMeasurement) throw new NotFoundException('Measurement Not Found')

    return productMeasurement
  }

  async update(id: number, updateProductMeasurementDto: UpdateProductMeasurementDto) {
    const productMeasurement = await this.findOne(id)
    
    return this.prisma.productMeasurement.update({where: {id}, data: updateProductMeasurementDto})
  }

  async remove(id: number) {
    const productMeasurement = await this.findOne(id)

    return this.update(id, {active: false})
  }
}
