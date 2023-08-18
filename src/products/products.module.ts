import { Module } from '@nestjs/common';
import { ProductsServise } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../app/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductsServise],
  controllers: [ProductsController],
})
export class ProductsModule {}
