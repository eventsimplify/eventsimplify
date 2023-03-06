"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// entity imports
const entity_1 = __importDefault(require("../entity"));
//subscribers imports
const subscribers_1 = require("../subscribers");
//importing ssl certificate
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const caCert = fs_1.default.readFileSync(path_1.default.join(__dirname, "certificate.crt"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'mydb',
    ssl: process.env.NODE_ENV === "production" && {
        rejectUnauthorized: true,
        ca: caCert,
    },
    synchronize: true,
    logging: false,
    entities: [...Object.values(entity_1.default)],
    migrations: [],
    subscribers: [subscribers_1.EventEntitySubscriber],
});
//# sourceMappingURL=data-source.js.map