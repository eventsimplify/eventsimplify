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
const auth_route_1 = __importDefault(require("./auth.route"));
const event_route_1 = __importDefault(require("./event.route"));
const organization_route_1 = __importDefault(require("./organization.route"));
const ticket_route_1 = __importDefault(require("./ticket.route"));
const file_route_1 = __importDefault(require("./file.route"));
const invitation_route_1 = __importDefault(require("./invitation.route"));
const role_route_1 = __importDefault(require("./role.route"));
const registration_form_route_1 = __importDefault(require("./registration-form.route"));
const speaker_route_1 = __importDefault(require("./speaker.route"));
const faq_route_1 = __importDefault(require("./faq.route"));
const utils_1 = require("../utils");
const pdfs_1 = require("../utils/pdfs");
const rootRoutes = (app) => {
    app.use("/auth", auth_route_1.default);
    app.use("/events", event_route_1.default);
    app.use("/organizations", organization_route_1.default);
    app.use("/tickets", ticket_route_1.default);
    app.use("/files", file_route_1.default);
    app.use("/invitations", invitation_route_1.default);
    app.use("/roles", role_route_1.default);
    app.use("/registration-forms", registration_form_route_1.default);
    app.use("/speakers", speaker_route_1.default);
    app.use("/faqs", faq_route_1.default);
    app.use("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, pdfs_1.scheduler)();
        res.end();
    }));
    app.use("*", (req, res) => {
        return (0, utils_1.sendError)({
            res,
            status: 404,
            data: null,
            message: "Request url doesnot exist!",
        });
    });
};
exports.default = rootRoutes;
//# sourceMappingURL=index.route.js.map