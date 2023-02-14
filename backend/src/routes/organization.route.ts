import express from "express";

import { create } from "../controllers/organization.controller";
import { protect } from "../middlewares/auth.middleware";

const router = express.Router();

// public routes
router.route("/create").post(protect, create);

export default router;
