"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const middlewares_1 = require("./src/middlewares");
const database_1 = __importDefault(require("./src/config/database"));
const index_route_1 = __importDefault(require("./src/routes/index.route"));
/* Initialization */
const app = (0, express_1.default)();
/* Middleware Config */
(0, middlewares_1.middlewaresConfig)(app);
/* Config */
(0, database_1.default)();
dotenv_1.default.config({
    path: process.env.NODE_ENV === "production"
        ? "./env/prod.env"
        : "./env/local.env",
});
(0, index_route_1.default)(app);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
//# sourceMappingURL=index.js.map