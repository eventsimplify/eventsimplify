import express from "express";

import {
  me,
  login,
  register,
  logout,
  socialLogin,
} from "../controllers/auth.controller";

import { protect } from "../middlewares/auth.middleware";

const router = express.Router();

// public routes
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/social-login").post(socialLogin);

// private routes
router.route("/me").get(protect, me);
router.route("/logout").get(protect, logout);

export default router;
