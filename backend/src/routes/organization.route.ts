import express from "express";

import {
  create,
  getStaff,
  removeStaff,
} from "../controllers/organization.controller";
import {
  protect,
  protectWithOrganization,
} from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/create").post(protect, create);

router.route("/get-staff").get(protectWithOrganization, getStaff);
router.route("/remove-staff/:id").delete(protectWithOrganization, removeStaff);

export default router;
