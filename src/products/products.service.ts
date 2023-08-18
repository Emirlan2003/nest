import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsServise {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find((p) => p.id === id);
  }

  create(createProductDto: CreateProductDto) {
    this.products.push({
      ...createProductDto,
      id: Date.now().toString(),
    });
  }
}
