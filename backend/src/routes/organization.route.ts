import express from "express";

import { create, getStaff } from "../controllers/organization.controller";
import {
  protect,
  protectWithOrganization,
} from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/create").post(protect, create);

router.route("/get-staff").get(protectWithOrganization, getStaff);

export default router;
