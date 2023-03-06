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
exports.protectWithOrganizationAndEvent = exports.protectWithOrganization = exports.protect = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, utils_1.getToken)(req);
    if (!token) {
        return (0, utils_1.sendError)({
            res,
            status: 401,
            data: null,
            message: "Login is required to access this!",
        });
    }
    let decoded = (0, jwt_decode_1.default)(token);
    let user = yield entity_1.User.findOne({
        where: { providerId: decoded.id },
        relations: ["organizations", "organizations.organization"],
    });
    if (!user) {
        return (0, utils_1.sendError)({
            res,
            status: 401,
            data: null,
            message: "Login is required to access this!",
        });
    }
    req.user = user;
    // set user to global variable
    globalThis.user = user;
    next();
});
exports.protect = protect;
const protectWithOrganization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, exports.protect)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
        const { user } = req;
        if (!user.organizations[0]) {
            return (0, utils_1.sendError)({
                res,
                status: 401,
                data: null,
                message: "Organization required!",
            });
        }
        const organizationId = req.headers["organization"];
        if (!organizationId) {
            req.organization = user.organizations[0].organization;
            return next();
        }
        const organization = user.organizations.find((org) => org.organization.id === Number(organizationId));
        if (!organization) {
            return (0, utils_1.sendError)({
                res,
                status: 401,
                data: null,
                message: "Organization not found!",
            });
        }
        req.organization = organization.organization;
        return next();
    }));
});
exports.protectWithOrganization = protectWithOrganization;
const protectWithOrganizationAndEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, exports.protectWithOrganization)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
        let { eventId } = req.query;
        if (!eventId) {
            eventId = req.params.eventId;
        }
        if (!eventId) {
            eventId = req.body.eventId;
        }
        if (!eventId) {
            eventId = req.headers["event"];
        }
        if (!eventId || eventId === "undefined") {
            return (0, utils_1.sendError)({
                res,
                status: 401,
                data: null,
                message: "Event is required!",
            });
        }
        const event = yield entity_1.Event.findOne({
            where: {
                id: Number(eventId),
            },
            relations: ["tickets"],
        });
        if (!event) {
            return (0, utils_1.sendError)({
                res,
                status: 401,
                data: null,
                message: "Event not found!",
            });
        }
        req.event = event;
        next();
    }));
});
exports.protectWithOrganizationAndEvent = protectWithOrganizationAndEvent;
//# sourceMappingURL=auth.middleware.js.map