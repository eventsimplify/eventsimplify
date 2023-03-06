"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_controller_1 = require("../controllers/file.controller");
const multer_1 = __importDefault(require("../utils/multer"));
const router = express_1.default.Router();
// private routes
router.route("/upload").post(multer_1.default.single("file"), file_controller_1.upload);
exports.default = router;
//# sourceMappingURL=file.route.js.map