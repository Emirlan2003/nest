import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config({
  path: `.env.${String(process.env.NODE_ENV ?? 'local').trim()}`,
});

export default () => ({
  port: Number.parseInt(process.env.PORT, 10) || 9500,
  debug: process.env.DEBUG === 'true',
  globalUsers: [
    '67456544-2b0b-4895-95ed-170fce5c0ea1',
    '08f57a4e-dfd6-432e-906f-2c7c49062b62',
  ],
  parser: {
    autoDev: {
      apikey: 'ZrQEPSkKYW9ib3NvdjFAZ21haWwuY29t',
    },
  },
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOSTNAME,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/app/entities/**.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**.js'],
    migrationsTableName: 'migrations',
    logging: 'warn',
    synchronize: false,
    migrationsRun: false,
    namingStrategy: new SnakeNamingStrategy(),
  },
});
