"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendee = exports.OrganizationVerification = exports.Settings = exports.Faq = exports.Speaker = exports.PaymentDetails = exports.OrderDetails = exports.Order = exports.Permission = exports.Category = exports.EventType = exports.RegistrationForm = exports.Role = exports.Invitations = exports.Ticket = exports.OrganizationUser = exports.Organization = exports.Event = exports.User = void 0;
const user_entity_1 = __importDefault(require("./user.entity"));
exports.User = user_entity_1.default;
const event_entity_1 = __importDefault(require("./event.entity"));
exports.Event = event_entity_1.default;
const organization_entity_1 = __importDefault(require("./organization.entity"));
exports.Organization = organization_entity_1.default;
const organization_user_entity_1 = __importDefault(require("./organization-user.entity"));
exports.OrganizationUser = organization_user_entity_1.default;
const ticket_entity_1 = __importDefault(require("./ticket.entity"));
exports.Ticket = ticket_entity_1.default;
const invitation_entity_1 = __importDefault(require("./invitation.entity"));
exports.Invitations = invitation_entity_1.default;
const role_entity_1 = __importDefault(require("./role.entity"));
exports.Role = role_entity_1.default;
const registration_form_entity_1 = __importDefault(require("./registration-form.entity"));
exports.RegistrationForm = registration_form_entity_1.default;
const event_type_entity_1 = __importDefault(require("./event-type.entity"));
exports.EventType = event_type_entity_1.default;
const category_entity_1 = __importDefault(require("./category.entity"));
exports.Category = category_entity_1.default;
const permission_entity_1 = __importDefault(require("./permission.entity"));
exports.Permission = permission_entity_1.default;
const orders_entity_1 = __importDefault(require("./orders.entity"));
exports.Order = orders_entity_1.default;
const order_details_entity_1 = __importDefault(require("./order-details.entity"));
exports.OrderDetails = order_details_entity_1.default;
const payment_details_entity_1 = __importDefault(require("./payment-details.entity"));
exports.PaymentDetails = payment_details_entity_1.default;
const speaker_entity_1 = __importDefault(require("./speaker.entity"));
exports.Speaker = speaker_entity_1.default;
const faq_entity_1 = __importDefault(require("./faq.entity"));
exports.Faq = faq_entity_1.default;
const settings_entity_1 = __importDefault(require("./settings.entity"));
exports.Settings = settings_entity_1.default;
const organization_verification_entity_1 = __importDefault(require("./organization-verification.entity"));
exports.OrganizationVerification = organization_verification_entity_1.default;
const attendee_entity_1 = __importDefault(require("./attendee.entity"));
exports.Attendee = attendee_entity_1.default;
exports.default = {
    User: user_entity_1.default,
    Event: event_entity_1.default,
    Organization: organization_entity_1.default,
    OrganizationUser: organization_user_entity_1.default,
    Ticket: ticket_entity_1.default,
    Invitations: invitation_entity_1.default,
    Role: role_entity_1.default,
    RegistrationForm: registration_form_entity_1.default,
    EventType: event_type_entity_1.default,
    Category: category_entity_1.default,
    Permission: permission_entity_1.default,
    Order: orders_entity_1.default,
    OrderDetails: order_details_entity_1.default,
    PaymentDetails: payment_details_entity_1.default,
    Speaker: speaker_entity_1.default,
    Faq: faq_entity_1.default,
    Settings: settings_entity_1.default,
    OrganizationVerification: organization_verification_entity_1.default,
    Attendee: attendee_entity_1.default,
};
//# sourceMappingURL=index.js.map