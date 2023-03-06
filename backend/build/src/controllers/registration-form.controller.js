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
exports.remove = exports.update = exports.detail = exports.list = exports.create = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Create registration form
// @route   POST /registration-forms/create
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, questions, additionalQuestions } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
    });
    try {
        yield schema.validate({
            name,
            questions,
            additionalQuestions,
        });
        const form = yield entity_1.RegistrationForm.create({
            name,
            questions,
            additionalQuestions,
            eventId: req.event.id,
        }).save();
        yield form.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: form,
            message: "Form created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Registration form list
// @route   GET /registration-forms/list
// @access  Private
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forms = yield entity_1.RegistrationForm.find({
            where: {
                eventId: req.event.id,
            },
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: forms,
            message: "Forms fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.list = list;
// @desc    Registration form detail
// @route   POST /registration-forms/detail/:id
// @access  Private
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const form = yield entity_1.RegistrationForm.findOne({
            where: {
                eventId: req.event.id,
                id: req.params.id,
            },
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: form,
            message: "Form fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.detail = detail;
// @desc    Registration form update
// @route   POST /registration-forms/update/:id
// @access  Private
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, questions, additionalQuestions } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
    });
    try {
        yield schema.validate({
            name,
            questions,
            additionalQuestions,
        });
        const form = yield entity_1.RegistrationForm.findOne({
            where: {
                eventId: req.event.id,
                id: req.params.id,
            },
        });
        if (!form) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Form not found!",
            });
        }
        form.name = name;
        form.questions = questions;
        form.additionalQuestions = additionalQuestions;
        yield form.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: form,
            message: "Form updated successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.update = update;
// @desc    Registration form delete
// @route   POST /registration-forms/delete/:id
// @access  Private
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const form = yield entity_1.RegistrationForm.findOne({
            where: {
                id,
                eventId: req.event.id,
            },
        });
        if (!form) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Form not found!",
            });
        }
        yield form.softRemove();
        return (0, utils_1.sendSuccess)({
            res,
            message: "Form deleted successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.remove = remove;
//# sourceMappingURL=registration-form.controller.js.map