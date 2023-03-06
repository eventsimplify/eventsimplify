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
exports.list = exports.create = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Ticket create
// @route   POST /tickets/create
// @access  Private
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, type, startDate, endDate, description, quantity, price, visibility, minPerOrder, maxPerOrder, } = req.body;
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is a required field"),
        type: Yup.string()
            .oneOf(["free", "paid"])
            .required("Type is a required field"),
        startDate: Yup.date().required("Start date is a required field"),
        endDate: Yup.date().required("End date is a required field"),
        quantity: Yup.number().required("Quantity is a required field"),
    });
    try {
        yield schema.validate({
            name,
            type,
            startDate,
            endDate,
            description,
            quantity,
        });
        yield entity_1.Ticket.create({
            name,
            type,
            startDate,
            endDate,
            description,
            quantity,
            price,
            visibility,
            minPerOrder,
            maxPerOrder,
            eventId: req.event.id,
        }).save();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Ticket created successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.create = create;
// @desc    Ticket list
// @route   POST /tickets/list
// @access  Private
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield entity_1.Ticket.find({
            where: {
                eventId: req.event.id,
            },
        });
        return (0, utils_1.sendSuccess)({
            res,
            data: tickets,
            message: "Tickets fetched successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.list = list;
//# sourceMappingURL=ticket.controller.js.map