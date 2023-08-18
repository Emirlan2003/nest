import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  price: string;
}
