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

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bipulpoudel",
  password: "paramount10",
  database: "eventsimplify",
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
