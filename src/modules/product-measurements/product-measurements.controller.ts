import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductMeasurementsService } from './product-measurements.service';
import { CreateProductMeasurementDto } from './dto/create-product-measurement.dto';
import { UpdateProductMeasurementDto } from './dto/update-product-measurement.dto';

@ApiTags('Product Measurements')
@Controller('product-measurements')
export class ProductMeasurementsController {
  constructor(private readonly productMeasurementsService: ProductMeasurementsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una unidad de medida' })
  @ApiResponse({ status: 201, description: 'Unidad de medida creada correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createProductMeasurementDto: CreateProductMeasurementDto) {
    return this.productMeasurementsService.create(createProductMeasurementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las unidades de medida' })
  @ApiResponse({ status: 200, description: 'Lista de unidades de medida' })
  findAll() {
    return this.productMeasurementsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una unidad de medida por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Unidad de medida encontrada' })
  @ApiResponse({ status: 404, description: 'Unidad de medida no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productMeasurementsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una unidad de medida' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Unidad de medida actualizada correctamente' })
  @ApiResponse({ status: 404, description: 'Unidad de medida no encontrada' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductMeasurementDto: UpdateProductMeasurementDto) {
    return this.productMeasurementsService.update(id, updateProductMeasurementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una unidad de medida' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Unidad de medida eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Unidad de medida no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productMeasurementsService.remove(id);
  }
}