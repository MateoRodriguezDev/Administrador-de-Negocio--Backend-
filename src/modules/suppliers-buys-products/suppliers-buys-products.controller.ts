import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SuppliersBuysProductsService } from './suppliers-buys-products.service';
import { CreateSuppliersBuysProductDto } from './dto/create-suppliers-buys-product.dto';
import { UpdateSuppliersBuysProductDto } from './dto/update-suppliers-buys-product.dto';

@Controller('suppliers-buys-products')
export class SuppliersBuysProductsController {
  constructor(private readonly suppliersBuysProductsService: SuppliersBuysProductsService) {}

  @Post()
  create(@Body() createSuppliersBuysProductDto: CreateSuppliersBuysProductDto) {
    return this.suppliersBuysProductsService.create(createSuppliersBuysProductDto);
  }

  @Get()
  findAll() {
    return this.suppliersBuysProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersBuysProductsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSuppliersBuysProductDto: UpdateSuppliersBuysProductDto) {
    return this.suppliersBuysProductsService.update(id, updateSuppliersBuysProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersBuysProductsService.remove(id);
  }
}
