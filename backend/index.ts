import express from "express";
import loadEnv from "./src/config/env";

loadEnv();

import { middlewaresConfig } from "./src/middlewares";
import connectDB from "./src/config/database";
import rootRoutes from "./src/routes/index.route";

/* Initialization */
const app = express();

/* Middleware Config */
middlewaresConfig(app);

/* Config */
connectDB();

rootRoutes(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
