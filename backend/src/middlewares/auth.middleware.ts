import jwt_decode from "jwt-decode";

import { IUser } from "../interfaces";
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

  let user: IUser = await User.findOneBy({
    id: decoded.id,
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
