"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_controller_1 = require("../controllers/role.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.route("/get-all").get(auth_middleware_1.protectWithOrganization, role_controller_1.getAll);
router.route("/create").post(auth_middleware_1.protectWithOrganization, role_controller_1.create);
router.route("/update/:id").put(auth_middleware_1.protectWithOrganization, role_controller_1.update);
router.route("/delete/:id").delete(auth_middleware_1.protectWithOrganization, role_controller_1.remove);
exports.default = router;
//# sourceMappingURL=role.route.js.map