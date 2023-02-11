import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

export const middlewaresConfig = (app) => {
  if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
  }
  app.set("trust proxy", 1);
  app.use(cookieParser());
  app.use(express.static("uploads"));
  app.use(express.json());
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
};
