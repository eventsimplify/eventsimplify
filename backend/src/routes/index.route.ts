import auth from "./auth.route";
import event from "./event.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/events", event);
};

export default rootRoutes;
