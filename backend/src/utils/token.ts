import jwt from "jsonwebtoken";
import cookie from "cookie";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const getToken = (req) => {
  if (req.cookies[process.env.COOKIE_NAME]) {
    return req.cookies[process.env.COOKIE_NAME];
  }

  return null;
};

export const setCookie = (res, token) => {
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    sameSite: "strict",
    path: "/",
  };

  res.setHeader(
    "Set-Cookie",
    cookie.serialize(process.env.COOKIE_NAME, token, options)
  );
};

export const removeCookie = (res) => {
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    sameSite: "strict",
    path: "/",
  };

  res.setHeader(
    "Set-Cookie",
    cookie.serialize(process.env.COOKIE_NAME, "", options)
  );
};
