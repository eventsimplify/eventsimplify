import * as Yup from "yup";
import bcrypt from "bcryptjs";

import { IUser } from "../interfaces";
import { User } from "../entity";
import { errorHandler, generateToken, sendError, sendSuccess } from "../utils";

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
  const { email, password, firstName, lastName, type } = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
    firstName: Yup.string().required("First name is a required field"),
    lastName: Yup.string().required("Last name is a required field"),
    type: Yup.string()
      .required("Type is a required field")
      .oneOf(["user", "organizer", "admin"], "User type is invalid"),
  });

  try {
    await schema.validate({
      email,
      password,
      firstName,
      lastName,
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
      firstName,
      lastName,
      email,
      password: hashedPassword,
      type,
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
    console.log(err);
    errorHandler(res, err);
  }
};
