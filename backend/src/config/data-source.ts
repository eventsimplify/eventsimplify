import 'reflect-metadata';
import { DataSource } from 'typeorm';
import fs from 'fs';
import path from 'path';

// entity imports
import {
  User,
  Event,
  OrganizationUser,
  Organization,
  Ticket,
  Invitations,
  Role,
} from '../entity';
const caCert = fs.readFileSync(path.join(__dirname, 'ca-certificate.crt'));
//subscribers imports
import { EventEntitySubscriber } from '../subscribers';
const dbHostLocation = process.env.CHOOSE_DB_HOST;

// if dbHostLocation == "digitalocean", set AppDataSource to this else null

let AppDataSource;
if (dbHostLocation === 'digitalocean') {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: 'eventsimplify-postgres-db-do-user-12466944-0.b.db.ondigitalocean.com',
    port: 25060,
    username: 'doadmin',
    password: 'AVNS_DNVkKA7XXedS-Hgqufg',
    database: 'defaultdb',
    ssl: {
      rejectUnauthorized: true,
      ca: caCert,
    },
    synchronize: true,
    logging: false,
    entities: [
      User,
      Event,
      Organization,
      OrganizationUser,
      Ticket,
      Invitations,
      Role,
    ],
    migrations: [],
    subscribers: [EventEntitySubscriber],
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bipulpoudel',
    password: 'paramount10',
    database: 'eventsimplify',
    synchronize: true,
    logging: false,
    entities: [
      User,
      Event,
      Organization,
      OrganizationUser,
      Ticket,
      Invitations,
      Role,
    ],
    migrations: [],
    subscribers: [EventEntitySubscriber],
  });
}
export { AppDataSource };
