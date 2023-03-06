"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invitation_controller_1 = require("../controllers/invitation.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.route("/invitation/:token").get(auth_middleware_1.protect, invitation_controller_1.getInvitationDetails);
router.route("/accept-invitation").post(auth_middleware_1.protect, invitation_controller_1.acceptInvitation);
//protectWithOrganization
router.route("/invite-staff").post(auth_middleware_1.protectWithOrganization, invitation_controller_1.inviteStaff);
exports.default = router;
//# sourceMappingURL=invitation.route.js.map