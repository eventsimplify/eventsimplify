import * as Yup from "yup";

import { Invitations, OrganizationUser, Organization, Role } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc    Organization create
// @route   POST /organizations/create
// @access  Private
export const create = async (req, res) => {
  const { name, summary, description } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    summary: Yup.string().required("Summary is a required field"),
    description: Yup.string().required("Description is a required field"),
  });

  try {
    await schema.validate({
      name,
      summary,
      description,
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
      description,
    });

    await organization.save();

    // get owner role
    const ownerRole = await Role.findOne({
      where: {
        name: "Owner",
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
    });

    return sendSuccess({
      res,
      data: {
        invitations,
        staffs: organization.users,
      },
      message: "Staff fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
