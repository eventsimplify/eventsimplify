import axios from "axios";
import Router from "next/router";

axios.defaults.withCredentials = true;
axios.defaults.params = {};
axios.interceptors.request.use(function (config) {
  const organizationId = localStorage.getItem("organizationId");

  if (organizationId) {
    config.headers["organization"] = organizationId;

    return config;
  }

  const eventId = Router.query.eventId;

  if (eventId) {
    config.headers["event"] = eventId;
  }

  return config;
});

import AuthService from "./auth.service";
import EventService from "./event.service";
import OrganizationService from "./organization.service";
import TicketService from "./ticket.service";
import InvitationService from "./invitation.service";
import RoleService from "./role.service";
import RegistrationFormService from "./registration-form.service";

export {
  AuthService,
  EventService,
  OrganizationService,
  TicketService,
  InvitationService,
  RoleService,
  RegistrationFormService,
};
