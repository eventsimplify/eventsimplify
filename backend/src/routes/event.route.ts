import express from "express";

import { create, list } from "../controllers/event.controller";
import { protectWithOrganization } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/create").post(protectWithOrganization, create);
router.route("/list").get(protectWithOrganization, list);

export default router;
