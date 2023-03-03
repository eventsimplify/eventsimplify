import express from "express";

import {
  create,
  list,
  remove,
  update,
} from "../controllers/speaker.controller";

import { protectWithOrganizationAndEvent } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/").post(protectWithOrganizationAndEvent, create);
router.route("/").get(protectWithOrganizationAndEvent, list);
router.route("/:id").put(protectWithOrganizationAndEvent, update);
router.route("/:id").delete(protectWithOrganizationAndEvent, remove);

export default router;
