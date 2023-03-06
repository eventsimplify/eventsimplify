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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.me = exports.register = exports.login = void 0;
const Yup = __importStar(require("yup"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    User login
// @route   POST /users/login
// @access  Public
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log('I am inside login');
    const schema = Yup.object().shape({
        email: Yup.string().required('Email is a required field'),
        password: Yup.string().required('Password is a required field'),
    });
    try {
        yield schema.validate({
            email,
            password,
        });
        let userExists = yield entity_1.User.findOneBy({
            email,
        });
        if (!userExists) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: 'Please provide a valid email address and password',
            });
        }
        const isMatched = yield bcryptjs_1.default.compare(password, userExists.password);
        if (!isMatched) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: 'Please provide a valid email address and password',
            });
        }
        let user = yield entity_1.User.findOne({
            where: { email },
            select: ["id", "name", "email"],
        });
        const token = (0, utils_1.generateToken)(user.providerId);
        yield (0, utils_1.setCookie)(res, token);
        return (0, utils_1.sendSuccess)({
            res,
            message: 'User has been logged in successfully.',
            data: {
                user,
            },
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.login = login;
// @desc    User register
// @route   POST /users/register
// @access  Public
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
    const schema = Yup.object().shape({
        email: Yup.string().required('Email is a required field'),
        password: Yup.string().required('Password is a required field'),
        name: Yup.string().required('Name is a required field'),
    });
    try {
        yield schema.validate({
            email,
            password,
            name,
        });
        let userExists = yield entity_1.User.findOneBy({
            email,
        });
        if (userExists) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: 'User with this email already exists, Please login.',
            });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield entity_1.User.create({
            name,
            email,
            password: hashedPassword,
        });
        yield user.save();
        const token = (0, utils_1.generateToken)(user.providerId);
        yield (0, utils_1.setCookie)(res, token);
        return (0, utils_1.sendSuccess)({
            res,
            message: 'User has been register successfully.',
            data: {
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.register = register;
// @desc    Get user
// @route   GET auth/me
// @access  Private
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield entity_1.User.findOne({
            where: { id: req.user.id },
            relations: [
                'organizations',
                'organizations.organization',
                'organizations.role',
            ],
        });
        if (!user) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                data: null,
                message: 'User not found.',
            });
        }
        if (user.organizations.length === 0) {
            return (0, utils_1.sendSuccess)({
                res,
                message: 'User has been fetched successfully.',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    organization: null,
                    totalOrganizations: 0,
                    organizations: [],
                },
            });
        }
        const organizationId = req.headers['organization'];
        let organization = null;
        if (!organizationId) {
            organization = user.organizations[0].organization;
            return (0, utils_1.sendSuccess)({
                res,
                message: 'User has been fetched successfully.',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    organization: organization,
                    totalOrganizations: user.organizations.length,
                    organizations: user.organizations,
                },
            });
        }
        const organizationExists = user.organizations.find((org) => org.organizationId === Number(organizationId));
        if (!organizationExists) {
            return (0, utils_1.sendError)({
                res,
                status: 401,
                data: null,
                message: 'Organization not found!',
            });
        }
        organization = organizationExists.organization;
        return (0, utils_1.sendSuccess)({
            res,
            message: 'User has been fetched successfully.',
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                organization: organization,
                totalOrganizations: user.organizations.length,
                organizations: user.organizations,
            },
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.me = me;
// @desc    User logout
// @route   POST /users/logout
// @access  Private
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, utils_1.removeCookie)(res);
        return (0, utils_1.sendSuccess)({
            res,
            message: 'User has been logged out successfully.',
            data: null,
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map