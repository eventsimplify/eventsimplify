import * as Yup from "yup";

import { Invitations, OrganizationUser, Organization } from "../entity";
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
        role: "owner",
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

    // create organization user role
    await OrganizationUser.create({
      organizationId: organization.id,
      userId: req.user.id,
      role: "owner",
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

// @desc    Invite staff
// @route   POST /organizations/invite-staff
// @access  Private
export const inviteStaff = async (req, res) => {
  const { email, role } = req.body;

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is a required field"),
    role: Yup.string().required("Role is a required field"),
  });

  try {
    await schema.validate({
      email,
      role,
    });

    const invitationExists = await Invitations.findOne({
      where: {
        email: email,
        organizationId: req.organization.id,
      },
    });

    if (invitationExists) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Invitations already exists for this staff!",
      });
    }

    const invitation = await Invitations.create({
      email,
      organizationId: req.organization.id,
      expiresAt: new Date(new Date().setDate(new Date().getDate() + 7)),
      role,
    });

    await invitation.save();

    return sendSuccess({
      res,
      data: null,
      message: "Invitation sent succesfully!",
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
      select: ["users"],
      relations: ["users", "users.user"],
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
