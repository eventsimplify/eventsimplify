import express from "express";

import {
  acceptInvitation,
  getInvitationDetails,
  inviteStaff,
} from "../controllers/invitation.controller";
import {
  protect,
  protectWithOrganization,
} from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/invitation/:token").get(protect, getInvitationDetails);
router.route("/accept-invitation").post(protect, acceptInvitation);

//protectWithOrganization
router.route("/invite-staff").post(protectWithOrganization, inviteStaff);

export default router;
