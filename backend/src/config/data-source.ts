import 'reflect-metadata';
import { DataSource } from 'typeorm';

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
//subscribers imports
import { EventEntitySubscriber } from '../subscribers';

//importing ssl certificate
import fs from 'fs';
import path from 'path';
let AppDataSource;
if (process.env.CHOOSE_DB_HOST === 'docker_container') {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: 'postgres', // This should be the name of the Docker service in your `docker-compose.yml` file
    port: 5432, // This is the default Postgres port
    username: 'postgres', // This is the default Postgres username
    password: 'mysecretpassword', // This is the password you set for the `postgres` user in your `docker-compose.yml` file
    database: 'mydb', // This is the name of the database you want to use
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
// else if (process.env.CHOOSE_DB_HOST === 'digitalocean') {
//   const caCert = fs.readFileSync(path.join(__dirname, 'certificate.crt'));

//   AppDataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     ssl: {
//       rejectUnauthorized: true,
//       ca: caCert,
//     },
//     synchronize: true,
//     logging: false,
//     entities: [
//       User,
//       Event,
//       Organization,
//       OrganizationUser,
//       Ticket,
//       Invitations,
//       Role,
//     ],
//     migrations: [],
//     subscribers: [EventEntitySubscriber],
//   });
// }

export { AppDataSource };
