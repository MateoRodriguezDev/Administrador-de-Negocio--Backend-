import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductBatchActionsService } from './product-batch-actions.service';
import { CreateProductBatchActionDto } from './dto/create-product-batch-action.dto';
import { UpdateProductBatchActionDto } from './dto/update-product-batch-action.dto';

@ApiTags('Product Batch Actions')
@Controller('product-batch-actions')
export class ProductBatchActionsController {
  constructor(private readonly productBatchActionsService: ProductBatchActionsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una acción sobre un lote' })
  @ApiResponse({ status: 201, description: 'Acción registrada correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Lote no encontrado' })
  create(@Body() createProductBatchActionDto: CreateProductBatchActionDto) {
    return this.productBatchActionsService.create(createProductBatchActionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las acciones de lotes' })
  @ApiResponse({ status: 200, description: 'Lista de acciones' })
  findAll() {
    return this.productBatchActionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una acción por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Acción encontrada' })
  @ApiResponse({ status: 404, description: 'Acción no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productBatchActionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una acción' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Acción actualizada correctamente' })
  @ApiResponse({ status: 404, description: 'Acción no encontrada' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductBatchActionDto: UpdateProductBatchActionDto) {
    return this.productBatchActionsService.update(id, updateProductBatchActionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una acción' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Acción eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Acción no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productBatchActionsService.remove(id);
  }
}