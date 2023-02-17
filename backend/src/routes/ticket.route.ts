import express from "express";

import { create, list } from "../controllers/ticket.controller";
import { protectWithOrganizationAndEvent } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/create").post(protectWithOrganizationAndEvent, create);
router.route("/list").get(protectWithOrganizationAndEvent, list);

export default router;
