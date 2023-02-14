import auth from "./auth.route";
import event from "./event.route";
import organization from "./organization.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/events", event);
  app.use("/organizations", organization)
};

export default rootRoutes;
