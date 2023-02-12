import "reflect-metadata";
import { DataSource } from "typeorm";

// entity imports
import { User, Event } from "../entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bipulpoudel",
  password: "paramount10",
  database: "event-simplify",
  synchronize: true,
  logging: false,
  entities: [User, Event],
  migrations: [],
  subscribers: [],
});
