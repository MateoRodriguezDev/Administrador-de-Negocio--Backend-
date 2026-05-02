import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService){}
  
  async create(createSupplierDto: CreateSupplierDto) {
    return await this.prisma.supplier.create({data: createSupplierDto})
  }

  async findAll() {
    return await this.prisma.supplier.findMany()
  }

  async findOne(id: number) {
    const supplier = await this.prisma.supplier.findUnique({where: {id}})

    if(!supplier) throw new NotFoundException('Supplier Not Found')

    return supplier
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.findOne(id)

    return await this.prisma.supplier.update({where: {id}, data: updateSupplierDto})
  }

  async remove(id: number) {
    const supplier = await this.findOne(id)

    return this.update(id, {active: false})
  }
}
