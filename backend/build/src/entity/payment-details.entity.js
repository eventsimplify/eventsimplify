"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
const orders_entity_1 = __importDefault(require("./orders.entity"));
let PaymentDetails = class PaymentDetails extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Organization, (organization) => organization.events),
    (0, typeorm_1.JoinColumn)({ name: "organizationId" }),
    __metadata("design:type", index_1.Organization)
], PaymentDetails.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orders_entity_1.default, (order) => order.id),
    (0, typeorm_1.JoinColumn)({ name: "orderId" }),
    __metadata("design:type", orders_entity_1.default)
], PaymentDetails.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false, default: "online" }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false, default: "pending" }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "paymentId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamptz", { nullable: false }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "deletedAt", void 0);
PaymentDetails = __decorate([
    (0, typeorm_1.Entity)({ name: "payment_details" })
], PaymentDetails);
exports.default = PaymentDetails;
//# sourceMappingURL=payment-details.entity.js.map