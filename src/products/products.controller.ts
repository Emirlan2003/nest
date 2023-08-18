import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsServise } from './products.service';
import { ProductsEntity } from 'src/app/entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private productServise: ProductsServise) {}

  @Get()
  async getAllProducts(): Promise<ProductsEntity[]> {
    return await this.productServise.getAll();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<ProductsEntity> {
    return await this.productServise.getById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productServise.remove(id);
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productServise.create(createProductDto);
  }
}
