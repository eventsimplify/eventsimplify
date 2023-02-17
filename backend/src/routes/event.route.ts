import express from "express";

import { create, detail, list } from "../controllers/event.controller";
import {
  protectWithOrganization,
  protectWithOrganizationAndEvent,
} from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/create").post(protectWithOrganization, create);
router.route("/list").get(protectWithOrganization, list);
router.route("/detail/:eventId").get(protectWithOrganizationAndEvent, detail);

export default router;
