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
let Ticket = class Ticket extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Ticket.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Ticket.prototype, "sold", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false, default: 1 }),
    __metadata("design:type", Number)
], Ticket.prototype, "minPerOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { nullable: false, default: 10 }),
    __metadata("design:type", Number)
], Ticket.prototype, "maxPerOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false, default: "public" }),
    __metadata("design:type", String)
], Ticket.prototype, "visibility", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Event, (event) => event.tickets, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "eventId" }),
    __metadata("design:type", index_1.Event)
], Ticket.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => index_1.OrderDetails, (orderDetails) => orderDetails.tickets),
    __metadata("design:type", Array)
], Ticket.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Ticket.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Ticket.prototype, "deletedAt", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)({ name: "tickets" })
], Ticket);
exports.default = Ticket;
//# sourceMappingURL=ticket.entity.js.map