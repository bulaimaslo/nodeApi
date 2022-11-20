import { Module } from '@nestjs/common';
import { ProductWarehouseModule } from './product-warehouse/product-warehouse.module';

@Module({
  imports: [ProductWarehouseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
