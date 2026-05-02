import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductBatchesService } from './product-batches.service';
import { CreateProductBatchDto } from './dto/create-product-batch.dto';
import { UpdateProductBatchDto } from './dto/update-product-batch.dto';

@ApiTags('Product Batches')
@Controller('product-batches')
export class ProductBatchesController {
  constructor(private readonly productBatchesService: ProductBatchesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un lote de producto' })
  @ApiResponse({ status: 201, description: 'Lote creado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  create(@Body() createProductBatchDto: CreateProductBatchDto) {
    return this.productBatchesService.create(createProductBatchDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los lotes' })
  @ApiResponse({ status: 200, description: 'Lista de lotes' })
  findAll() {
    return this.productBatchesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un lote por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Lote encontrado' })
  @ApiResponse({ status: 404, description: 'Lote no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productBatchesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un lote' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Lote actualizado correctamente' })
  @ApiResponse({ status: 404, description: 'Lote no encontrado' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductBatchDto: UpdateProductBatchDto) {
    return this.productBatchesService.update(id, updateProductBatchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Desactivar un lote' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Lote desactivado correctamente' })
  @ApiResponse({ status: 404, description: 'Lote no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productBatchesService.remove(id);
  }
}