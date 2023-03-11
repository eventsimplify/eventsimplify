import * as Yup from "yup";

import { Invitations, OrganizationUser, Role } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

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
        organization_id: req.organization.id,
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

    // check if role exists
    const roleExists = await Role.findOne({
      where: {
        id: role,
        organization_id: req.organization.id,
      },
    });

    if (!roleExists) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Role not found!",
      });
    }

    const invitation = await Invitations.create({
      email,
      organization_id: req.organization.id,
      expires_at: new Date(new Date().setDate(new Date().getDate() + 7)),
      role_id: roleExists.id,
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

//@desc Get invitation details
//@route GET /organizations/invitation/:token
//@access Private
export const getInvitationDetails = async (req, res) => {
  const { token } = req.params;

  const schema = Yup.object().shape({
    token: Yup.string()
      .uuid("Please verify invitation link")
      .required("Token is a required field"),
  });

  try {
    await schema.validate({
      token,
    });

    const invitation = await Invitations.findOne({
      where: {
        token: req.params.token,
      },
      relations: ["organization", "role"],
    });

    if (!invitation) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Invitation not found!",
      });
    }

    if (invitation.email !== req.user.email) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "You are not authorized to view this invitation!",
      });
    }

    return sendSuccess({
      res,
      data: invitation,
      message: "Invitation fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

//@desc Accept invitation
//@route POST /organizations/accept-invitation
//@access Private
export const acceptInvitation = async (req, res) => {
  const { token } = req.body;

  const schema = Yup.object().shape({
    token: Yup.string()
      .uuid("Please verify invitation link")
      .required("Token is a required field"),
  });

  try {
    await schema.validate({
      token,
    });

    const invitation = await Invitations.findOne({
      where: {
        token: token,
      },
    });

    if (!invitation) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Invitation not found!",
      });
    }

    if (invitation.email !== req.user.email) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "You are not authorized to accept this invitation!",
      });
    }

    if (invitation.expires_at < new Date()) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Invitation expired!",
      });
    }

    const organizationUserExists = await OrganizationUser.findOne({
      where: {
        user_id: req.user.id,
        organization_id: invitation.organization_id,
      },
    });

    if (organizationUserExists) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "You are already a member of this organization!",
      });
    }

    await OrganizationUser.create({
      user_id: req.user.id,
      organization_id: invitation.organization_id,
      role_id: invitation.role_id,
    }).save();

    await Invitations.delete({
      id: invitation.id,
    });

    return sendSuccess({
      res,
      data: null,
      message: "Invitation accepted successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
