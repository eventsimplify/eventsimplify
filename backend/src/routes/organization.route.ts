import express from "express";

import {
  create,
  getStaff,
  inviteStaff,
} from "../controllers/organization.controller";
import {
  protect,
  protectWithOrganization,
} from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/create").post(protect, create);

router.route("/invite-staff").post(protectWithOrganization, inviteStaff);

router.route("/get-staff").get(protectWithOrganization, getStaff);

export default router;
