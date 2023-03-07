import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { readFileSync } from 'fs';
import { join } from 'path';

// entity imports
import Entities from '../entity';
//subscribers imports
import { EventEntitySubscriber } from '../subscribers';

const ssl = {
  rejectUnauthorized: true,
  ca: readFileSync(join(__dirname, 'ca-certificate.crt')),
};
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [...Object.values(Entities)],
  migrations: [],
  subscribers: [EventEntitySubscriber],
  ssl: ssl,
});
