"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const initialize_1 = __importDefault(require("./initialize"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield data_source_1.AppDataSource.initialize();
        if (response.isInitialized) {
            console.log("Database connection established");
            yield (0, initialize_1.default)();
            console.log("Database initialized");
        }
        return response;
    }
    catch (error) {
        console.error(`Error in database connection: ${error.message}`);
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=database.js.map