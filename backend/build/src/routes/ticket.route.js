"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_controller_1 = require("../controllers/ticket.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// private routes
router.route("/create").post(auth_middleware_1.protectWithOrganizationAndEvent, ticket_controller_1.create);
router.route("/list").get(auth_middleware_1.protectWithOrganizationAndEvent, ticket_controller_1.list);
exports.default = router;
//# sourceMappingURL=ticket.route.js.map