import express from "express";

import { list, manualCreate } from "../controllers/order.controller";
import { protectWithOrganizationAndEvent } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router
  .route("/manual-create")
  .post(protectWithOrganizationAndEvent, manualCreate);

router.route("/list").get(protectWithOrganizationAndEvent, list);

export default router;
