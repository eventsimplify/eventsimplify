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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = __importDefault(require("slugify"));
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
const speaker_entity_1 = __importDefault(require("./speaker.entity"));
let Event = class Event extends typeorm_1.BaseEntity {
    //create slug before inserting into database
    beforeInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            const slug = (0, slugify_1.default)(this.name, {
                lower: true,
                strict: true,
            });
            this.slug = slug + "-" + new Date().getTime();
        });
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", {
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Event.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamptz", { nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamptz", { nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: false, default: "saved" }),
    __metadata("design:type", String)
], Event.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Event.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Organization, (organization) => organization.events, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "organizationId" }),
    __metadata("design:type", index_1.Organization)
], Event.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Ticket, (ticket) => ticket.event),
    __metadata("design:type", Array)
], Event.prototype, "tickets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.RegistrationForm, (registrationForm) => registrationForm.event),
    __metadata("design:type", Array)
], Event.prototype, "forms", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => speaker_entity_1.default, (speaker) => speaker.event),
    __metadata("design:type", Array)
], Event.prototype, "speakers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Faq, (faq) => faq.event),
    __metadata("design:type", Array)
], Event.prototype, "faqs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Settings, (settings) => settings.event),
    __metadata("design:type", Array)
], Event.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Event.prototype, "beforeInsert", null);
Event = __decorate([
    (0, typeorm_1.Entity)({ name: "events" })
], Event);
exports.default = Event;
//# sourceMappingURL=event.entity.js.map