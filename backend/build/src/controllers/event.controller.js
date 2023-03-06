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
exports.remove = exports.detail = exports.list = exports.create = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Event create
// @route   POST /events/create
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, type, tags, startDate, endDate, summary, description } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        type: Yup.string().required("Type is a required field"),
        startDate: Yup.date().required("Start date is a required field"),
        endDate: Yup.date().required("End date is a required field"),
        summary: Yup.string().required("Summary is a required field"),
        description: Yup.string().required("Description is a required field"),
    });
    try {
        yield schema.validate({
            name,
            type,
            tags,
            startDate,
            endDate,
            summary,
            description,
        });
        const event = yield entity_1.Event.create({
            name,
            type,
            startDate,
            endDate,
            summary,
            description,
            organizationId: req.organization.id,
        });
        yield event.save();
        return (0, utils_1.sendSuccess)({
            res,
            data: event,
            message: "Event created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Event list
// @route   POST /events/list
// @access  Private
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield entity_1.Event.find({
            where: { organizationId: req.organization.id },
            relations: ["tickets"],
            select: ["id", "name", "type", "startDate", "endDate"],
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: events,
            message: "Events fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.list = list;
// @desc    Event detail
// @route   POST /events/detail/:id
// @access  Private
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield entity_1.Event.findOne({
            where: { id: req.event.id },
            relations: ["tickets"],
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: event,
            message: "Event fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.detail = detail;
// @desc    Event remove
// @route   Delete /events/remove/:id
// @access  Private
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield entity_1.Event.findOne({
            where: { id: req.event.id },
        });
        yield event.remove();
        return (0, utils_1.sendSuccess)({
            res,
            message: "Event removed successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.remove = remove;
//# sourceMappingURL=event.controller.js.map