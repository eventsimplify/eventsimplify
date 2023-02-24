import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.params = {};
axios.interceptors.request.use(function (config) {
  const organizationId = localStorage.getItem("organizationId");

  if (organizationId) {
    config.headers["organization"] = organizationId;

    return config;
  }

  return config;
});

import AuthService from "./auth.service";
import EventService from "./event.service";
import OrganizationService from "./organization.service";
import TicketService from "./ticket.service";
import InvitationService from "./invitation.service";
import RoleService from "./role.service";

export {
  AuthService,
  EventService,
  OrganizationService,
  TicketService,
  InvitationService,
  RoleService,
};
