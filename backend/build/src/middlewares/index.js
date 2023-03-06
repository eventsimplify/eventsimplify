"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewaresConfig = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const middlewaresConfig = (app) => {
    if (process.env.NODE_ENV == "development") {
        app.use((0, morgan_1.default)("dev"));
    }
    app.set("trust proxy", 1);
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.static("uploads"));
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        credentials: true,
        origin: "http://localhost:3000",
    }));
};
exports.middlewaresConfig = middlewaresConfig;
//# sourceMappingURL=index.js.map