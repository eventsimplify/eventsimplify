"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const index_1 = require("../entity/index");
let EventEntitySubscriber = class EventEntitySubscriber {
    listenTo() {
        return index_1.Event;
    }
    // listen to after insert events
    afterInsert(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = new index_1.Ticket();
            ticket.name = "General Admission";
            ticket.type = "free";
            ticket.price = 100;
            ticket.quantity = 100;
            ticket.minPerOrder = 1;
            ticket.maxPerOrder = 10;
            ticket.visibility = "public";
            ticket.startDate = event.entity.createdAt;
            ticket.endDate = event.entity.endDate;
            ticket.eventId = event.entity.id;
            // create general admission registration form
            const form = new index_1.RegistrationForm();
            form.name = "General Admission";
            form.questions = config_1.defaultRegistrationQuestions;
            form.additionalQuestions = [];
            form.eventId = event.entity.id;
            //create settings for the event
            const multipleOrderSettings = new index_1.Settings();
            multipleOrderSettings.key = "multiple_ticket_per_order";
            multipleOrderSettings.value = "false";
            multipleOrderSettings.type = "event_settings";
            multipleOrderSettings.description = "Allow multiple tickets per order";
            multipleOrderSettings.eventId = event.entity.id;
            multipleOrderSettings.organizationId = event.entity.organizationId;
            // we need to use the event manager to save the ticket because we are in a transaction and we cannot use the repository directly
            yield event.manager.getRepository(index_1.Ticket).save(ticket);
            yield event.manager.getRepository(index_1.RegistrationForm).save(form);
            yield event.manager.getRepository(index_1.Settings).save(multipleOrderSettings);
        });
    }
};
EventEntitySubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], EventEntitySubscriber);
exports.default = EventEntitySubscriber;
//# sourceMappingURL=event.subscribers.js.map