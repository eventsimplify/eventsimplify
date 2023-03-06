"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
// Multer config
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    fileFilter: (req, file, cb) => {
        //get ext from mimetype
        const ext = file.mimetype.split("/")[1];
        //TODO: work on adding more file types to be uploaded
        // TODO: work on making validation properly
        if (ext !== "jpg" &&
            ext !== "jpeg" &&
            ext !== "png" &&
            ext !== "webp" &&
            ext !== "avif") {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
});
exports.default = upload;
//# sourceMappingURL=multer.js.map