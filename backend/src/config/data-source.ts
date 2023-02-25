import "reflect-metadata";
import { DataSource } from "typeorm";

// entity imports
import {
  User,
  Event,
  OrganizationUser,
  Organization,
  Ticket,
  Invitations,
  Role,
} from "../entity";
//subscribers imports
import { EventEntitySubscriber } from "../subscribers";

//importing ssl certificate
import fs from "fs";
import path from "path";
const caCert = fs.readFileSync(path.join(__dirname, "certificate.crt"));

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
