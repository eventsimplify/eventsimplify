import * as Yup from "yup";

import {
  Invitations,
  OrganizationUser,
  Organization,
  Role,
  Permission,
} from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc    Organization create
// @route   POST /organizations/create
// @access  Private
export const create = async (req, res) => {
  const { name, summary } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    summary: Yup.string().required("Summary is a required field"),
  });

  try {
    await schema.validate({
      name,
      summary,
    });

    const organizationExists = await OrganizationUser.findOne({
      where: {
        userId: req.user.id,
        roleId: 1,
      },
    });

    if (organizationExists) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "You already have an organization!",
      });
    }

    const organization = await Organization.create({
      name,
      summary,
    });

    await organization.save();

    // get owner role
    const ownerRole = await Role.findOne({
      where: {
        name: "owner",
        type: "default",
      },
    });

    // create organization user role
    await OrganizationUser.create({
      organizationId: organization.id,
      userId: req.user.id,
      roleId: ownerRole.id,
    }).save();

    return sendSuccess({
      res,
      data: organization,
      message: "Organization created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc Get staff
// @route GET /organizations/staff
// @access Private
export const getStaff = async (req, res) => {
  try {
    const organization = await Organization.findOne({
      where: {
        id: req.organization.id,
      },
      relations: ["users", "users.user", "users.role"],
    });

    const invitations = await Invitations.find({
      where: {
        organizationId: req.organization.id,
      },
      relations: ["role"],
    });

    const roles = await Role.find({
      where: [
        {
          type: "default",
        },
        {
          organizationId: req.organization.id,
        },
      ],
      relations: ["users"],
    });

    const permissions = await Permission.find({});

    return sendSuccess({
      res,
      data: {
        invitations,
        staffs: organization.users,
        roles,
        permissions,
      },
      message: "Staff fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc remove staff from organization
// @route DELETE /organizations/remove-staff/:id
// @access Private
export const removeStaff = async (req, res) => {
  const { id } = req.params;

  try {
    const organizationUser = await OrganizationUser.findOne({
      where: {
        id: id,
      },
    });

    if (!organizationUser) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Staff not found!",
      });
    }

    const ownerRole = await Role.findOne({
      where: {
        name: "owner",
        type: "default",
      },
    });

    // check if user is owner
    if (organizationUser.roleId === ownerRole.id) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "You cannot remove the owner!",
      });
    }

    await organizationUser.remove();

    return sendSuccess({
      res,
      data: null,
      message: "Staff removed successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
