import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../app/entities/products.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsServise {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly products: Repository<ProductsEntity>,
  ) {}

  async getAll() {
    return this.products.find();
  }

  async remove(id: string) {
    const car = await this.products.delete(id);
    if (!car.affected) {
      throw new HttpException('Продукт не найдена', HttpStatus.NOT_FOUND);
    }
  }

  async getById(id) {
    return this.products.findOne({
      where: {
        id,
      },
    });
  }

  async create(createProductDto: CreateProductDto) {
    return this.products.save(createProductDto);
  }
}
