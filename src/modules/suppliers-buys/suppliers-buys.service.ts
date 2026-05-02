import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSuppliersBuyDto } from './dto/create-suppliers-buy.dto';
import { UpdateSuppliersBuyDto } from './dto/update-suppliers-buy.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliersBuysService {

  constructor(private prisma: PrismaService){}

  async create(createSuppliersBuyDto: CreateSuppliersBuyDto) {
    return await this.prisma.supplierBuys.create({data: createSuppliersBuyDto})
  }

  async findAll() {
    const supplierBuys = await this.prisma.supplierBuys.findMany()

    if(supplierBuys.length === 0) throw new NotFoundException('Not Supplier Buys Found')

    return supplierBuys
  }

  async findOne(id: number) {
    const supplierBuys = await this.prisma.supplierBuys.findFirst({where: {id}})

    if(!supplierBuys) throw new NotFoundException('Supplier Buys Not Found')

    return supplierBuys
  }

  async update(id: number, updateSuppliersBuyDto: UpdateSuppliersBuyDto) {
    const supplierBuys = await this.findOne(id)

    return await this.prisma.supplierBuys.update({where: {id}, data: updateSuppliersBuyDto})
  }

  async remove(id: number) {
    const supplierBuys = await this.findOne(id)

    return await this.update(id, {state: 'Cancel'})
  }
}
