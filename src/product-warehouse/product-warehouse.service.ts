import { Injectable } from '@nestjs/common';
import { ProductWarehouse } from './product-warehouse';
import { Product } from '../product/product';

@Injectable()
export class ProductWarehouseService {
  private readonly productWarehouse: ProductWarehouse = {
    1: {
      id: 1,
      name: 'Product 1',
      price: 1.99,
      updatedDate: new Date(),
    },
    2: {
      id: 2,
      name: 'Product 2',
      price: 2.99,
      updatedDate: new Date(),
    },
    3: {
      id: 3,
      name: 'Product 3',
      price: 3.99,
      updatedDate: new Date(),
    },
    4: {
      id: 4,
      name: 'Product 4',
      price: 4.99,
      updatedDate: new Date(),
    },
  };

  findAll(): Product[] {
    return Object.values(this.productWarehouse);
  }

  findOne(id: number): Product {
    return this.productWarehouse[id];
  }

  update(id: number, product: Product): Product {
    this.productWarehouse[id] = product;
    return product;
  }

  create(product: Product): Product {
    this.productWarehouse[product.id] = product;
    return product;
  }

  delete(id: number): Product {
    const product = this.productWarehouse[id];
    delete this.productWarehouse[id];
    return product;
  }
}
