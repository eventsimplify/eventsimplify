"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("../controllers/event.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// private routes
router.route("/create").post(auth_middleware_1.protectWithOrganization, event_controller_1.create);
router.route("/list").get(auth_middleware_1.protectWithOrganization, event_controller_1.list);
router.route("/detail/:eventId").get(auth_middleware_1.protectWithOrganizationAndEvent, event_controller_1.detail);
router
    .route("/remove/:eventId")
    .delete(auth_middleware_1.protectWithOrganizationAndEvent, event_controller_1.remove);
exports.default = router;
//# sourceMappingURL=event.route.js.map