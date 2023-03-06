"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// public routes
router.route("/login").post(auth_controller_1.login);
router.route("/register").post(auth_controller_1.register);
// private routes
router.route("/me").get(auth_middleware_1.protect, auth_controller_1.me);
router.route("/logout").get(auth_middleware_1.protect, auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.route.js.map