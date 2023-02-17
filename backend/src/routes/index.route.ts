import auth from "./auth.route";
import event from "./event.route";
import organization from "./organization.route";
import ticket from "./ticket.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/events", event);
  app.use("/organizations", organization);
  app.use("/tickets", ticket);
};

export default rootRoutes;
