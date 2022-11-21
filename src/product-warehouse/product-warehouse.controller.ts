import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
  async findOne(id: number): Promise<Product> {
    return this.productWarehouseService.findOne(id);
  }

  @Put(':id')
  async update(id: number, product: Product): Promise<Product> {
    return this.productWarehouseService.update(id, product);
  }

  @Post(':id')
  async create(product: Product): Promise<Product> {
    return this.productWarehouseService.create(product);
  }

  @Delete(':id')
  async delete(id: number): Promise<Product> {
    return this.productWarehouseService.delete(id);
  }
}
