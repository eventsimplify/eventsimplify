import * as Yup from "yup";
import bcrypt from "bcryptjs";

import { IUser } from "../interfaces";
import { User } from "../entity";
import {
  errorHandler,
  generateToken,
  sendError,
  sendSuccess,
  setCookie,
  removeCookie,
} from "../utils";

// @desc    User login
// @route   POST /users/login
// @access  Public
export const login = async (req, res) => {
  const { email, password } = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
  });

  try {
    await schema.validate({
      email,
      password,
    });

    let userExists: IUser = await User.findOneBy({
      email,
    });

    if (!userExists) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Please provide a valid email address and password",
      });
    }

    const isMatched = await bcrypt.compare(password, userExists.password);

    if (!isMatched) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Please provide a valid email address and password",
      });
    }

    let user: IUser = await User.findOneBy({ email });

    const token = generateToken(user.id);

    await setCookie(res, token);

    return sendSuccess({
      res,
      message: "User has been logged in successfully.",
      data: {
        token,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    User register
// @route   POST /users/register
// @access  Public
export const register = async (req, res) => {
  const { email, password, name, type } = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
    name: Yup.string().required("Name is a required field"),
    type: Yup.string()
      .required("Type is a required field")
      .oneOf(["user", "organizer", "admin"], "User type is invalid"),
  });

  try {
    await schema.validate({
      email,
      password,
      name,
      type,
    });

    let userExists: IUser = await User.findOneBy({
      email,
    });

    if (userExists) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "User with this email already exists, Please login.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    user.save();

    const token = generateToken(user.id);

    return sendSuccess({
      res,
      message: "User has been register successfully.",
      data: {
        token,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Get user
// @route   GET auth/me
// @access  Private
export const me = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      relations: ["organization"],
    });

    if (!user) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "User not found.",
      });
    }

    return sendSuccess({
      res,
      message: "User has been fetched successfully.",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        organization: user.organization.organizationId,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    User logout
// @route   POST /users/logout
// @access  Private

export const logout = async (req, res) => {
  try {
    await removeCookie(res);

    return sendSuccess({
      res,
      message: "User has been logged out successfully.",
      data: null,
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
