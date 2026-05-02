import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SuppliersBuysService } from './suppliers-buys.service';
import { CreateSuppliersBuyDto } from './dto/create-suppliers-buy.dto';
import { UpdateSuppliersBuyDto } from './dto/update-suppliers-buy.dto';

@ApiTags('Suppliers Buys')
@Controller('suppliers-buys')
export class SuppliersBuysController {
  constructor(private readonly suppliersBuysService: SuppliersBuysService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una compra a proveedor' })
  @ApiResponse({ status: 201, description: 'Compra registrada correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  create(@Body() createSuppliersBuyDto: CreateSuppliersBuyDto) {
    return this.suppliersBuysService.create(createSuppliersBuyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las compras a proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de compras' })
  findAll() {
    return this.suppliersBuysService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una compra por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Compra encontrada' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersBuysService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una compra' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Compra actualizada correctamente' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSuppliersBuyDto: UpdateSuppliersBuyDto) {
    return this.suppliersBuysService.update(id, updateSuppliersBuyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una compra' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Compra eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersBuysService.remove(id);
  }
}