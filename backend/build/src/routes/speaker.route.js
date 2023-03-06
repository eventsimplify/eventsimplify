"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const speaker_controller_1 = require("../controllers/speaker.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// private routes
router.route("/").post(auth_middleware_1.protectWithOrganizationAndEvent, speaker_controller_1.create);
router.route("/").get(auth_middleware_1.protectWithOrganizationAndEvent, speaker_controller_1.list);
router.route("/:id").put(auth_middleware_1.protectWithOrganizationAndEvent, speaker_controller_1.update);
router.route("/:id").delete(auth_middleware_1.protectWithOrganizationAndEvent, speaker_controller_1.remove);
exports.default = router;
//# sourceMappingURL=speaker.route.js.map