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
exports.remove = exports.update = exports.create = exports.getAll = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Role get all
// @route   GET /roles/
// @access  Private
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        return (0, utils_1.sendSuccess)({
            res,
            data: roles,
            message: "Roles fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.getAll = getAll;
// @desc    Role create
// @route   POST /roles/create
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, permissions } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        permissions: Yup.array().required("Permissions is a required field"),
    });
    try {
        yield schema.validate({
            name,
            permissions,
        });
        //check if role already exists
        const roleExists = yield entity_1.Role.findOne({
            where: {
                name,
                organizationId: req.organization.id,
            },
        });
        if (roleExists) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Role with this name already exists!",
            });
        }
        const role = yield entity_1.Role.create({
            name,
            permissions,
            organizationId: req.organization.id,
        });
        yield role.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: role,
            message: "Role created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Role update
// @route   PUT /roles/update/:id
// @access  Private
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, permissions } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        permissions: Yup.array().required("Permissions is a required field"),
    });
    try {
        yield schema.validate({
            name,
            permissions,
        });
        const role = yield entity_1.Role.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!role) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: "Role not found!",
            });
        }
        if (role.type === "default") {
            return (0, utils_1.sendError)({
                res,
                status: 403,
                data: null,
                message: "You don't have permission to update this role!",
            });
        }
        role.name = name;
        role.permissions = permissions;
        yield role.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: role,
            message: "Role updated successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.update = update;
// @desc    Role delete
// @route   DELETE /roles/delete/:id
// @access  Private
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield entity_1.Role.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!role) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: "Role not found!",
            });
        }
        if (role.type === "default") {
            return (0, utils_1.sendError)({
                res,
                status: 403,
                data: null,
                message: "You don't have permission to delete this role!",
            });
        }
        //check if role is used by any user
        const organizationUser = yield entity_1.OrganizationUser.findOne({
            where: {
                roleId: role.id,
            },
        });
        if (organizationUser) {
            return (0, utils_1.sendError)({
                res,
                status: 400,
                data: null,
                message: "Role is used by some users!",
            });
        }
        yield role.remove();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Role deleted successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.remove = remove;
//# sourceMappingURL=role.controller.js.map