import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductWarehouseService } from './product-warehouse.service';
import { Product } from '../product/product';
import { ProductWarehouse } from './product-warehouse';

@Controller('product-warehouse')
export class ProductWarehouseController {
  constructor(
    private readonly productWarehouseService: ProductWarehouseService,
  ) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productWarehouseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productWarehouseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    return this.productWarehouseService.update(id, product);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productWarehouseService.create(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Product> {
    return this.productWarehouseService.delete(id);
  }
}
