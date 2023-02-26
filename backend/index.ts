import express from "express";
import dotenv from "dotenv";

import { middlewaresConfig } from "./src/middlewares";
import connectDB from "./src/config/database";
import rootRoutes from "./src/routes/index.route";

/* Initialization */
const app = express();

/* Middleware Config */
middlewaresConfig(app);

/* Config */
connectDB();
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./env/prod.env"
      : "./env/local.env",
});

rootRoutes(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
