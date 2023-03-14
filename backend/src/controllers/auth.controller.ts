import * as Yup from "yup";
import bcrypt from "bcryptjs";

import { User } from "../entity";
import {
  errorHandler,
  generateToken,
  sendError,
  sendSuccess,
  setCookie,
  removeCookie,
} from "../utils";
import { getDataFromAuthProvidersUsingToken } from "../utils/provider.utils";

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

    let userExists = await User.findOneBy({
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

    let user = await User.findOne({
      where: { email },
      select: ["name", "email", "provider_id"],
    });

    const token = generateToken(user.provider_id);

    await setCookie(res, token);

    return sendSuccess({
      res,
      message: "User has been logged in successfully.",
      data: user,
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    User Social login
// @route   POST /users/social-login
// @access  Public
export const socialLogin = async (req, res) => {
  const { access_token, provider } = req.body;

  const schema = Yup.object().shape({
    access_token: Yup.string().required("Access token is a required field"),
    provider: Yup.string()
      .oneOf(["google"], "Provider is not valid.")
      .required("Type is a required field"),
  });

  try {
    await schema.validate({
      access_token,
      provider,
    });

    const { email, name } = await getDataFromAuthProvidersUsingToken({
      token: access_token,
      provider,
    });

    let userExists = await User.findOne({
      where: { email },
    });

    if (userExists && userExists?.provider !== "google") {
      //TODO: Add logic to update user details if user is already registered with facebook

      return sendError({
        res,
        status: 404,
        message: "Your email is already registered with another provider.",
      });
    }

    // if user exists, login user
    if (userExists) {
      let user = await User.findOne({
        where: { email },
        select: ["name", "email", "provider_id"],
      });

      const token = generateToken(user.provider_id);

      await setCookie(res, token);

      return sendSuccess({
        res,
        message: "User has been logged in successfully.",
        data: user,
      });
    }

    const hashedPassword = await bcrypt.hash(access_token, 10);

    const user = await User.create({
      name,
      email,
      provider: "google",
      provider_id: access_token,
      password: hashedPassword,
    });

    await user.save();

    const token = generateToken(user.provider_id);

    await setCookie(res, token);

    return sendSuccess({
      res,
      message: "User has been register successfully.",
      data: {
        name: user.name,
        email: user.email,
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
  const { email, password, name } = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
    name: Yup.string().required("Name is a required field"),
  });

  try {
    await schema.validate({
      email,
      password,
      name,
    });

    let userExists = await User.findOneBy({
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

    console.log("hashedPassword", hashedPassword);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = generateToken(user.provider_id);

    await setCookie(res, token);

    return sendSuccess({
      res,
      message: "User has been register successfully.",
      data: {
        name: user.name,
        email: user.email,
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
      relations: [
        "organizations",
        "organizations.organization",
        "organizations.role",
        "organizations.organization.verification",
      ],
      select: ["id", "name", "email", "organizations"],
    });

    if (!user) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "User not found.",
      });
    }

    if (user.organizations.length === 0) {
      return sendSuccess({
        res,
        data: {
          ...user,
          organization: null,
          totalOrganizations: 0,
          organizations: [],
        },
      });
    }

    const organizationId = req.headers["organization"];

    let organization = null;
    let permissions = null;

    if (!organizationId) {
      organization = user.organizations[0].organization;

      return sendSuccess({
        res,
        data: {
          ...user,
          organization: organization,
          totalOrganizations: user.organizations.length,
          organizations: user.organizations,
          permissions: permissions,
        },
      });
    }

    const organizationExists = user.organizations.find(
      (org) => org.organization_id === Number(organizationId)
    );

    if (!organizationExists) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Organization not found!",
      });
    }

    organization = organizationExists.organization;

    return sendSuccess({
      res,
      data: {
        ...user,
        organization: organization,
        totalOrganizations: user.organizations.length,
        organizations: user.organizations,
        permissions: permissions,
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
