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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Organization, (organization) => organization.events),
    (0, typeorm_1.JoinColumn)({ name: "organizationId" }),
    __metadata("design:type", index_1.Organization)
], Order.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.Event, (event) => event.id),
    (0, typeorm_1.JoinColumn)({ name: "eventId" }),
    __metadata("design:type", index_1.Event)
], Order.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "order_details_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.OrderDetails, (orderDetails) => orderDetails.order),
    (0, typeorm_1.JoinColumn)({ name: "order_detail_id" }),
    __metadata("design:type", index_1.OrderDetails)
], Order.prototype, "order_details", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "payment_detail_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.PaymentDetails, (paymentDetails) => paymentDetails.id),
    (0, typeorm_1.JoinColumn)({ name: "payment_detail_d" }),
    __metadata("design:type", index_1.PaymentDetails)
], Order.prototype, "payment_details", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "deletedAt", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)({ name: "orders" })
], Order);
exports.default = Order;
//# sourceMappingURL=orders.entity.js.map