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
let OrganizationVerification = class OrganizationVerification extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrganizationVerification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", {
        nullable: false,
        default: "not_started",
    }),
    __metadata("design:type", String)
], OrganizationVerification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.Organization, (organization) => organization.verification),
    (0, typeorm_1.JoinColumn)({
        name: "organizationId",
    }),
    __metadata("design:type", index_1.Organization)
], OrganizationVerification.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", {
        nullable: false,
        default: {},
    }),
    __metadata("design:type", Object)
], OrganizationVerification.prototype, "businessDetails", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", {
        nullable: false,
        default: {},
    }),
    __metadata("design:type", Object)
], OrganizationVerification.prototype, "representativeDetails", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrganizationVerification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrganizationVerification.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], OrganizationVerification.prototype, "deletedAt", void 0);
OrganizationVerification = __decorate([
    (0, typeorm_1.Entity)({ name: "organization_verifications" })
], OrganizationVerification);
exports.default = OrganizationVerification;
//# sourceMappingURL=organization-verification.entity.js.map