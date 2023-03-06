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
exports.acceptInvitation = exports.getInvitationDetails = exports.inviteStaff = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Invite staff
// @route   POST /organizations/invite-staff
// @access  Private
const inviteStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, role } = req.body;
    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Enter a valid email address")
            .required("Email is a required field"),
        role: Yup.string().required("Role is a required field"),
    });
    try {
        yield schema.validate({
            email,
            role,
        });
        const invitationExists = yield entity_1.Invitations.findOne({
            where: {
                email: email,
                organizationId: req.organization.id,
            },
        });
        if (invitationExists) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Invitations already exists for this staff!",
            });
        }
        // check if role exists
        const roleExists = yield entity_1.Role.findOne({
            where: {
                id: role,
                organizationId: req.organization.id,
            },
        });
        if (!roleExists) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Role not found!",
            });
        }
        const invitation = yield entity_1.Invitations.create({
            email,
            organizationId: req.organization.id,
            expiresAt: new Date(new Date().setDate(new Date().getDate() + 7)),
            roleId: roleExists.id,
        });
        yield invitation.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Invitation sent succesfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.inviteStaff = inviteStaff;
//@desc Get invitation details
//@route GET /organizations/invitation/:token
//@access Private
const getInvitationDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    const schema = Yup.object().shape({
        token: Yup.string()
            .uuid("Please verify invitation link")
            .required("Token is a required field"),
    });
    try {
        yield schema.validate({
            token,
        });
        const invitation = yield entity_1.Invitations.findOne({
            where: {
                token: req.params.token,
            },
            relations: ["organization", "role"],
        });
        if (!invitation) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Invitation not found!",
            });
        }
        if (invitation.email !== req.user.email) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "You are not authorized to view this invitation!",
            });
        }
        return (0, utils_1.sendSuccess)({
            res,
            data: invitation,
            message: "Invitation fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.getInvitationDetails = getInvitationDetails;
//@desc Accept invitation
//@route POST /organizations/accept-invitation
//@access Private
const acceptInvitation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    const schema = Yup.object().shape({
        token: Yup.string()
            .uuid("Please verify invitation link")
            .required("Token is a required field"),
    });
    try {
        yield schema.validate({
            token,
        });
        const invitation = yield entity_1.Invitations.findOne({
            where: {
                token: token,
            },
        });
        if (!invitation) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Invitation not found!",
            });
        }
        if (invitation.email !== req.user.email) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "You are not authorized to accept this invitation!",
            });
        }
        if (invitation.expiresAt < new Date()) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Invitation expired!",
            });
        }
        const organizationUserExists = yield entity_1.OrganizationUser.findOne({
            where: {
                userId: req.user.id,
                organizationId: invitation.organizationId,
            },
        });
        if (organizationUserExists) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "You are already a member of this organization!",
            });
        }
        yield entity_1.OrganizationUser.create({
            userId: req.user.id,
            organizationId: invitation.organizationId,
            roleId: invitation.roleId,
        }).save();
        yield entity_1.Invitations.delete({
            id: invitation.id,
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Invitation accepted successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.acceptInvitation = acceptInvitation;
//# sourceMappingURL=invitation.controller.js.map