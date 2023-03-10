import express from "express";

import { me, login, register, logout } from "../controllers/auth.controller";
import { protect } from "../middlewares/auth.middleware";

const router = express.Router();

// public routes
router.route("/login").post(login);
router.route("/register").post(register);

// private routes
router.route("/me").get(protect, me);
router.route("/logout").get(protect, logout);

export default router;
