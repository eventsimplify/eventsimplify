import auth from "./auth.route";
import event from "./event.route";
import organization from "./organization.route";
import ticket from "./ticket.route";
import files from "./file.route";
import invitation from "./invitation.route";
import role from "./role.route";

import { sendError } from "../utils";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/events", event);
  app.use("/organizations", organization);
  app.use("/tickets", ticket);
  app.use("/files", files);
  app.use("/invitations", invitation);
  app.use("/roles", role);

  app.use("*", (req, res) => {
    return sendError({
      res,
      status: 404,
      data: null,
      message: "Request url doesnot exist!",
    });
  });
};

export default rootRoutes;
