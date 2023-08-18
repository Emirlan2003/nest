import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config({
  path: `.env.${String(process.env.NODE_ENV ?? 'local').trim()}`,
});

const config = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOSTNAME,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/app/entities/**.entity.ts'],
  migrations: ['src/database/migrations/**.ts'],
  migrationsTableName: 'migrations',
  logging: true,
  synchronize: false,
  migrationsRun: false,
  namingStrategy: new SnakeNamingStrategy(),
});

export default config;
