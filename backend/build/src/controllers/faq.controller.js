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
exports.remove = exports.update = exports.list = exports.create = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Create faq
// @route   POST /faqs
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answer } = req.body;
    const schema = Yup.object().shape({
        question: Yup.string().required("Question is a required field"),
        answer: Yup.string().required("Answer is a required field"),
    });
    try {
        yield schema.validate({
            question,
            answer,
        });
        yield entity_1.Faq.create({
            question,
            answer,
            eventId: req.event.id,
        }).save();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Faq created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Faq list
// @route   GET /faqs
// @access  Private
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faqs = yield entity_1.Faq.find({
            where: {
                eventId: req.event.id,
            },
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: faqs,
            message: "Faqs fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.list = list;
// @desc    Faq update
// @route   PUT /faqs/:id
// @access  Private
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answer } = req.body;
    const schema = Yup.object().shape({
        question: Yup.string().required("Question is a required field"),
        answer: Yup.string().required("Answer is a required field"),
    });
    try {
        yield schema.validate({
            question,
            answer,
        });
        const faq = yield entity_1.Faq.findOne({
            where: {
                eventId: req.event.id,
                id: req.params.id,
            },
        });
        if (!faq) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Faq not found!",
            });
        }
        faq.question = question;
        faq.answer = answer;
        yield faq.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: faq,
            message: "Faq updated successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.update = update;
// @desc    Faq delete
// @route   DELETE /faqs/:id
// @access  Private
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const faq = yield entity_1.Faq.findOne({
            where: {
                id,
                eventId: req.event.id,
            },
        });
        if (!faq) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Faq not found!",
            });
        }
        yield faq.remove();
        return (0, utils_1.sendSuccess)({
            res,
            message: "Faq deleted successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.remove = remove;
//# sourceMappingURL=faq.controller.js.map