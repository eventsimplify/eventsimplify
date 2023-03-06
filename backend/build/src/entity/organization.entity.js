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
let Organization = class Organization extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Organization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Organization.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Organization.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Event, (event) => event.organization),
    __metadata("design:type", Array)
], Organization.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.OrganizationUser, (organizationUser) => organizationUser.organization),
    __metadata("design:type", Array)
], Organization.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Settings, (settings) => settings.organization),
    __metadata("design:type", Array)
], Organization.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.OrganizationVerification, (verification) => verification.organization),
    __metadata("design:type", index_1.OrganizationVerification)
], Organization.prototype, "verification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Organization.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Organization.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Organization.prototype, "deletedAt", void 0);
Organization = __decorate([
    (0, typeorm_1.Entity)({ name: "organizations" })
], Organization);
exports.default = Organization;
//# sourceMappingURL=organization.entity.js.map