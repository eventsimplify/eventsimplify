import jwt_decode from "jwt-decode";

import { User } from "../entity";
import { sendError, getToken } from "../utils";

export const protect = async (req, res, next) => {
  const token = await getToken(req);

  if (!token) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login required!",
    });
  }

  let decoded: any = jwt_decode(token);

  let user = await User.findOne({
    where: { id: decoded.id },
    relations: ["organization"],
  });

  if (!user) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login required!",
    });
  }

  req.user = user;

  next();
};

export const protectWithOrganization = async (req, res, next) => {
  const token = await getToken(req);

  if (!token) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login required!",
    });
  }

  let decoded: any = jwt_decode(token);

  let user = await User.findOne({
    where: { id: decoded.id },
    relations: ["organization", "organization.organization"],
  });

  if (!user) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Login required!",
    });
  }

  if (!user.organization) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Organization required!",
    });
  }

  req.user = user;

  req.organization = user.organization.organization;

  next();
};
