"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStaff = exports.getStaff = exports.create = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Organization create
// @route   POST /organizations/create
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, summary } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        summary: Yup.string().required("Summary is a required field"),
    });
    try {
        yield schema.validate({
            name,
            summary,
        });
        const organizationExists = yield entity_1.OrganizationUser.findOne({
            where: {
                userId: req.user.id,
                roleId: 1,
            },
        });
        if (organizationExists) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "You already have an organization!",
            });
        }
        const organization = yield entity_1.Organization.create({
            name,
            summary,
        });
        yield organization.save();
        // get owner role
        const ownerRole = yield entity_1.Role.findOne({
            where: {
                name: "owner",
                type: "default",
            },
        });
        // create organization user role
        yield entity_1.OrganizationUser.create({
            organizationId: organization.id,
            userId: req.user.id,
            roleId: ownerRole.id,
        }).save();
        return (0, utils_1.sendSuccess)({
            res,
            data: organization,
            message: "Organization created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc Get staff
// @route GET /organizations/staff
// @access Private
const getStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield entity_1.Organization.findOne({
            where: {
                id: req.organization.id,
            },
            relations: ["users", "users.user", "users.role"],
        });
        const invitations = yield entity_1.Invitations.find({
            where: {
                organizationId: req.organization.id,
            },
            relations: ["role"],
        });
        const roles = yield entity_1.Role.find({
            where: [
                {
                    type: "default",
                },
                {
                    organizationId: req.organization.id,
                },
            ],
            relations: ["users"],
        });
        const permissions = yield entity_1.Permission.find({});
        return (0, utils_1.sendSuccess)({
            res,
            data: {
                invitations,
                staffs: organization.users,
                roles,
                permissions,
            },
            message: "Staff fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.getStaff = getStaff;
// @desc remove staff from organization
// @route DELETE /organizations/remove-staff/:id
// @access Private
const removeStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const organizationUser = yield entity_1.OrganizationUser.findOne({
            where: {
                id: id,
            },
        });
        if (!organizationUser) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: "Staff not found!",
            });
        }
        const ownerRole = yield entity_1.Role.findOne({
            where: {
                name: "owner",
                type: "default",
            },
        });
        // check if user is owner
        if (organizationUser.roleId === ownerRole.id) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "You cannot remove the owner!",
            });
        }
        yield organizationUser.remove();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Staff removed successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.removeStaff = removeStaff;
//# sourceMappingURL=organization.controller.js.map