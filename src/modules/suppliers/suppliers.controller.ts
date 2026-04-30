import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@ApiTags('Suppliers')
@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un proveedor' })
  @ApiResponse({ status: 201, description: 'Proveedor creado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de proveedores' })
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proveedor por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Proveedor encontrado' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un proveedor' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Proveedor actualizado correctamente' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSupplierDto: UpdateSupplierDto) {
    return this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proveedor' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Proveedor eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.remove(id);
  }
}