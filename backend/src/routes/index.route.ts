import auth from "./auth.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
};

export default rootRoutes;
