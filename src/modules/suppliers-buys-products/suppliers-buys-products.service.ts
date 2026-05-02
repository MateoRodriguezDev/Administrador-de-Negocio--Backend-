import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSuppliersBuysProductDto } from './dto/create-suppliers-buys-product.dto';
import { UpdateSuppliersBuysProductDto } from './dto/update-suppliers-buys-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliersBuysProductsService {
  constructor(private prisma: PrismaService){}


  async create(createSuppliersBuysProductDto: CreateSuppliersBuysProductDto) {
    return await this.prisma.supplierBuysProduct.create({data: createSuppliersBuysProductDto})
  }

  async findAll() {
    const supplierBuysProducts = await this.prisma.supplierBuysProduct.findMany()

    if(!supplierBuysProducts) throw new NotFoundException('No Supplier Buys Products Found')

    return supplierBuysProducts
  }

  async findOne(id: number) {
    const supplierBuysProduct = await this.prisma.supplierBuysProduct.findUnique({where: {id}})

    if(!supplierBuysProduct) throw new NotFoundException('No Supplier Buys Product Found')

    return supplierBuysProduct
  }

  async update(id: number, updateSuppliersBuysProductDto: UpdateSuppliersBuysProductDto) {
    const supplierBuysProduct = await this.findOne(id)

    return await this.prisma.supplierBuysProduct.update({where: {id}, data: updateSuppliersBuysProductDto})
  }

  async remove(id: number) {
    const supplierBuysProduct = await this.findOne(id)

    return this.update(id, {active: false})
  }
}
