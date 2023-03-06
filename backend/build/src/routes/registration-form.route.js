"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registration_form_controller_1 = require("../controllers/registration-form.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// private routes
router.route("/create").post(auth_middleware_1.protectWithOrganizationAndEvent, registration_form_controller_1.create);
router.route("/list").get(auth_middleware_1.protectWithOrganizationAndEvent, registration_form_controller_1.list);
router.route("/detail/:id").get(auth_middleware_1.protectWithOrganizationAndEvent, registration_form_controller_1.detail);
router.route("/update/:id").put(auth_middleware_1.protectWithOrganizationAndEvent, registration_form_controller_1.update);
router.route("/delete/:id").delete(auth_middleware_1.protectWithOrganizationAndEvent, registration_form_controller_1.remove);
exports.default = router;
//# sourceMappingURL=registration-form.route.js.map