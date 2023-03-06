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
exports.manualCreate = void 0;
const Yup = __importStar(require("yup"));
const entity_1 = require("../entity");
const utils_1 = require("../utils");
// @desc    Order create
// @route   POST /orders/manual-create
// @access  Private
const manualCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tickets, attendeeInformation, paymentInformation } = req.body;
    const schema = Yup.object().shape({
        tickets: Yup.array().required("Tickets is a required field"),
        attendeeInformation: Yup.object()
            .shape({
            name: Yup.string().required("Name is a required field"),
            email: Yup.string().required("Email is a required field"),
            phone: Yup.string().required("Phone is a required field"),
            age: Yup.string().required("Age is a required field"),
        })
            .required("Attendee information is a required field"),
        paymentInformation: Yup.object().shape({
            status: Yup.string().required("Status is a required field"),
            provider: Yup.string().required("Provider is a required field"),
            paymentDate: Yup.date().required("Payment date is a required field"),
        }),
    });
    try {
        yield schema.validate({
            tickets,
            attendeeInformation,
            paymentInformation,
        });
        const { status, provider, notes, paymentDate } = paymentInformation;
        const orderDetails = yield entity_1.OrderDetails.create({
            tickets,
        });
        yield orderDetails.save();
        const total = tickets.reduce((acc, ticket) => {
            return acc + ticket.price;
        }, 0);
        const paymentDetails = yield entity_1.PaymentDetails.create({
            organizationId: req.organization.id,
            total: total,
            type: "manual",
            status,
            provider,
            notes: notes || null,
            paymentDate,
        }).save();
        yield entity_1.Order.create({
            organizationId: req.organization.id,
            eventId: req.event.id,
            payment_detail_id: paymentDetails.id,
        }).save();
        return (0, utils_1.sendSuccess)({
            res,
            data: null,
            message: "Order placed successfully!",
        });
    }
    catch (err) {
        (0, utils_1.errorHandler)(res, err);
    }
});
exports.manualCreate = manualCreate;
//# sourceMappingURL=order.controller.js.map