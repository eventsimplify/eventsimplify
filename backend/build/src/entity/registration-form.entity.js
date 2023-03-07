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
let RegistraionForm = class RegistraionForm extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RegistraionForm.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], RegistraionForm.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { nullable: false, default: [] }),
    __metadata("design:type", Array)
], RegistraionForm.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { nullable: false, default: [] }),
    __metadata("design:type", Array)
], RegistraionForm.prototype, "additionalQuestions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RegistraionForm.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Event, (event) => event.forms, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({
        name: "eventId",
    }),
    __metadata("design:type", index_1.Event)
], RegistraionForm.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegistraionForm.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegistraionForm.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], RegistraionForm.prototype, "deletedAt", void 0);
RegistraionForm = __decorate([
    (0, typeorm_1.Entity)({ name: "registration_forms" })
], RegistraionForm);
exports.default = RegistraionForm;
//# sourceMappingURL=registration-form.entity.js.map