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
// @desc    Create speaker
// @route   POST /speakers
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, jobTitle, company, description } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        jobTitle: Yup.string().required("Job title is a required field"),
        company: Yup.string().required("Company is a required field"),
        description: Yup.string().required("Description is a required field"),
    });
    try {
        yield schema.validate({
            name,
            jobTitle,
            company,
            description,
        });
        yield entity_1.Speaker.create({
            name,
            jobTitle,
            company,
            description,
            eventId: req.event.id,
        }).save();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Speaker created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Speaker list
// @route   GET /speakers
// @access  Private
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const speakers = yield entity_1.Speaker.find({
            where: {
                eventId: req.event.id,
            },
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: speakers,
            message: "Speakers fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.list = list;
// @desc    Speaker update
// @route   PUT /speakers/:id
// @access  Private
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, jobTitle, company, description } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        jobTitle: Yup.string().required("Job title is a required field"),
        company: Yup.string().required("Company is a required field"),
        description: Yup.string().required("Description is a required field"),
    });
    try {
        yield schema.validate({
            name,
            jobTitle,
            company,
            description,
        });
        const speaker = yield entity_1.Speaker.findOne({
            where: {
                eventId: req.event.id,
                id: req.params.id,
            },
        });
        if (!speaker) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Speaker not found!",
            });
        }
        speaker.name = name;
        speaker.jobTitle = jobTitle;
        speaker.company = company;
        speaker.description = description;
        yield speaker.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: speaker,
            message: "Speaker updated successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.update = update;
// @desc    Speaker delete
// @route   DELETE /speakers/:id
// @access  Private
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const speaker = yield entity_1.Speaker.findOne({
            where: {
                id,
                eventId: req.event.id,
            },
        });
        if (!speaker) {
            return (0, utils_1.sendError)({
                res,
                status: 404,
                message: "Speaker not found!",
            });
        }
        yield speaker.remove();
        return (0, utils_1.sendSuccess)({
            res,
            message: "Speaker deleted successfully!",
        });
    }
    catch (error) {
        (0, utils_1.errorHandler)(res, error);
    }
});
exports.remove = remove;
//# sourceMappingURL=speaker.controller.js.map