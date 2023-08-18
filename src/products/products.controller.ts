import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsServise } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productServise: ProductsServise) {}

  @Get()
  getAllProducts(): any[] {
    return this.productServise.getAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return this.productServise.getById(id);
  }

  @Post()
  @HttpCode(200)
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productServise.create(createProductDto);
  }
}
