import { Module } from '@nestjs/common';
import { ProductsServise } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductsServise],
  controllers: [ProductsController],
})
export class ProductsModule {}
