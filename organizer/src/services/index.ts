import axios from "axios";

axios.defaults.withCredentials = true;

import AuthService from "./auth.service";
import EventService from "./event.service";
import OrganizationService from "./organization.service";

export { AuthService, EventService, OrganizationService };
