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

const PGHOST = 'mydb.ep-blue-haze-947702.ap-southeast-1.aws.neon.tech';
const PGDATABASE = 'neondb';
const PGUSER = 'eventsimplify';
const PGPASSWORD = 'GurmJK1NR2jc';
const ENDPOINT_ID = 'mydb';
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://eventsimplify:GurmJK1NR2jc@ep-blue-haze-947702.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  synchronize: true,
  logging: false,
  entities: [...Object.values(Entities)],
  migrations: [],
  subscribers: [EventEntitySubscriber],
});
