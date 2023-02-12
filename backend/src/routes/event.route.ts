import express from "express";

import { create } from "../controllers/event.controller";

const router = express.Router();

// public routes
router.route("/create").post(create);

export default router;
