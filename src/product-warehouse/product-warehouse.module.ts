import { Module } from '@nestjs/common';
import { ProductWarehouseService } from './product-warehouse.service';

@Module({
  providers: [ProductWarehouseService]
})
export class ProductWarehouseModule {}
