import express from "express";

import { create, detail, list, remove } from "../controllers/event.controller";
import {
  protectWithOrganization,
  protectWithOrganizationAndEvent,
} from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/create").post(protectWithOrganization, create);
router.route("/list").get(protectWithOrganization, list);
router.route("/detail/:eventId").get(protectWithOrganizationAndEvent, detail);

router
  .route("/remove/:eventId")
  .delete(protectWithOrganizationAndEvent, remove);

export default router;
