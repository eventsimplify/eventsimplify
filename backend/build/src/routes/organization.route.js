"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organization_controller_1 = require("../controllers/organization.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.route("/create").post(auth_middleware_1.protect, organization_controller_1.create);
router.route("/get-staff").get(auth_middleware_1.protectWithOrganization, organization_controller_1.getStaff);
router.route("/remove-staff/:id").delete(auth_middleware_1.protectWithOrganization, organization_controller_1.removeStaff);
exports.default = router;
//# sourceMappingURL=organization.route.js.map