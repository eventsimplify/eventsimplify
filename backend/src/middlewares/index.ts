import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP",
});

export const middlewaresConfig = (app) => {
  if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
  }
  app.set("trust proxy", 1);
  app.use(cookieParser());
  app.use(express.static("uploads"));
  app.use(express.json());

  // using express rate limiter
  app.use(limiter);

  app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
    })
  );
};
