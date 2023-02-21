import jwt_decode from "jwt-decode";

import { User, Event } from "../entity";
import { sendError, getToken } from "../utils";

export const protect = async (req, res, next) => {
  const token = await getToken(req);

  if (!token) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login is required to access this!",
    });
  }

  let decoded: any = jwt_decode(token);

  let user = await User.findOne({
    where: { id: decoded.id },
    relations: ["organizations", "organizations.organization"],
  });

  if (!user) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login is required to access this!",
    });
  }

  req.user = user;

  next();
};

export const protectWithOrganization = async (req, res, next) => {
  protect(req, res, async () => {
    const { user } = req;

    if (!user.organizations[0]) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Organization required!",
      });
    }

    req.organization = user.organizations[0].organization;

    next();
  });
};

export const protectWithOrganizationAndEvent = async (req, res, next) => {
  protectWithOrganization(req, res, async () => {
    let { eventId } = req.query;

    if (!eventId) {
      eventId = req.params.eventId;
    }

    if (!eventId || eventId === "undefined") {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Event is required!",
      });
    }

    const event = await Event.findOne({
      where: {
        id: Number(eventId),
      },
      relations: ["tickets"],
    });

    if (!event) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Event not found!",
      });
    }

    req.event = event;

    next();
  });
};
