import express from "express";

import {
  create,
  detail,
  list,
  remove,
  update,
} from "../controllers/registration-form.controller";

import { protectWithOrganizationAndEvent } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/create").post(protectWithOrganizationAndEvent, create);
router.route("/list").get(protectWithOrganizationAndEvent, list);
router.route("/detail/:id").get(protectWithOrganizationAndEvent, detail);
router.route("/update/:id").put(protectWithOrganizationAndEvent, update);
router.route("/delete/:id").delete(protectWithOrganizationAndEvent, remove);

export default router;
