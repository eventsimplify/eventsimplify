import 'reflect-metadata';
import { DataSource } from 'typeorm';

// entity imports
import Entities from '../entity';
//subscribers imports
import { EventEntitySubscriber } from '../subscribers';

//importing ssl certificate
import fs from 'fs';
import path from 'path';
const caCert = fs.readFileSync(path.join(__dirname, 'certificate.crt'));

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432, // This is the default Postgres port
  username: 'postgres', // This is the default Postgres username
  password: 'mysecretpassword', // This is the password you set for the `postgres` user in your `docker-compose.yml` file
  database: 'mydb',
  ssl: process.env.NODE_ENV === 'production' && {
    rejectUnauthorized: true,
    ca: caCert,
  },
  synchronize: true,
  logging: false,
  entities: [...Object.values(Entities)],
  migrations: [],
  subscribers: [EventEntitySubscriber],
});
