import * as Yup from "yup";
import { ownerPermissions, permissions } from "../config/permissions";

import {
  Invitations,
  OrganizationUser,
  Organization,
  Role,
  OrganizationVerification,
  Event,
  Order,
  Attendee,
} from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";
import { uploadFile } from "./file.controller";

//@desc Event dashboard
//@route GET /organizations/dashboard/
//@access Private

export const dashboard = async (req, res) => {
  try {
    // get event
    const totalEvents = await Event.count({
      where: { organization_id: req.organization.id },
    });

    // get total orders
    const totalOrders = await Order.count({
      where: {
        organization_id: req.organization.id,
      },
    });

    // get recent 5 orders
    const recentOrders = await Order.find({
      where: { organization_id: req.organization.id },
      relations: [
        "order_details",
        "order_details.attendees",
        "order_details.tickets",
        "order_details.tickets.ticket",
        "payment_details",
      ],
      order: { created_at: "DESC" },
      take: 5,
    });

    return sendSuccess({
      res,
      data: {
        totalEvents,
        totalOrders,
        recentOrders,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

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
        user_id: req.user.id,
        role_id: 1,
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

    const role = await Role.create({
      name: "Owner",
      organization_id: organization.id,
      permissions: ownerPermissions,
    }).save();

    // create organization user role
    await OrganizationUser.create({
      organization_id: organization.id,
      user_id: req.user.id,
      role_id: role.id,
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
        organization_id: req.organization.id,
      },
      relations: ["role"],
    });

    const roles = await Role.find({
      where: [
        {
          organization_id: req.organization.id,
        },
      ],
      relations: ["users"],
    });

    return sendSuccess({
      res,
      data: {
        invitations,
        staffs: organization.users,
        roles,
        permissions: permissions,
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
    if (organizationUser.role_id === ownerRole.id) {
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

// @desc skip verification
// @route PUT /organizations/skip-verification/:id
// @access Private

export const skipVerification = async (req, res) => {
  const { id } = req.params;

  try {
    const organizationVerification = await OrganizationVerification.findOne({
      where: {
        organization_id: req.organization.id,
      },
    });

    if (!organizationVerification) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Verification not found!",
      });
    }

    organizationVerification.status = "verify_later";

    await organizationVerification.save();

    return sendSuccess({
      res,
      data: null,
      message: "You have skipped verification!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

//@desc Get onboarding
// @route GET /organizations/onboarding
// @access Private

export const getOnboarding = async (req, res) => {
  try {
    let organizationVerification = null;

    organizationVerification = await OrganizationVerification.findOne({
      where: {
        organization_id: req.organization.id,
      },
      select: [
        "id",
        "status",
        "current_step",
        "business_details",
        "representative_details",
      ],
    });

    return sendSuccess({
      res,
      data: organizationVerification,
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc Save business details
// @route PUT /organizations/onboarding/business-details
// @access Private
export const saveBusinessDetails = async (req, res) => {
  const { name, type, structure, address } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Business name is a required field"),
    type: Yup.string().required("Business type is a required field"),
    structure: Yup.string().required("Business structure is a required field"),
    address: Yup.object().shape({
      country: Yup.string().required("Country is a required field"),
      state: Yup.string().required("State is a required field"),
      city: Yup.string().required("City is a required field"),
      area: Yup.string().required("Area is a required field"),
      address: Yup.string().required("Full address is a required field"),
    }),
  });

  try {
    await schema.validate({
      name,
      type,
      structure,
      address,
    });

    const organizationVerification = await OrganizationVerification.findOne({
      where: {
        organization_id: req.organization.id,
      },
    });

    if (!organizationVerification) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Verification not found!",
      });
    }

    organizationVerification.business_details = {
      name,
      type,
      structure,
      address,
    };
    organizationVerification.current_step = 2;

    await organizationVerification.save();

    return sendSuccess({
      res,
      data: null,
      message: "Business details saved successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// @desc Save representative details
// @route PUT /organizations/onboarding/representative-details
// @access Private

export const saveRepresentativeDetails = async (req, res) => {
  const { name, job_title, date_of_birth, phone, id_type } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    job_title: Yup.string().required("Job title is a required field"),
    date_of_birth: Yup.string().required("Date of birth is a required field"),
    phone: Yup.string().required("Phone number is a required field"),
    id_type: Yup.string().required("ID type is a required field"),
  });

  try {
    await schema.validate({
      name,
      job_title,
      date_of_birth,
      phone,
      id_type,
    });

    const organizationVerification = await OrganizationVerification.findOne({
      where: {
        organization_id: req.organization.id,
      },
    });

    if (!organizationVerification) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Verification not found!",
      });
    }

    organizationVerification.representative_details = {
      name,
      job_title,
      date_of_birth,
      phone,
      id_type,
    };
    organizationVerification.current_step = 3;

    await organizationVerification.save();

    return sendSuccess({
      res,
      data: null,
      message: "Representative details saved successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// @desc Save business documents
// @route PUT /organizations/onboarding/business-documents
// @access Private

export const saveBusinessDocuments = async (req, res) => {
  try {
    const organizationVerification = await OrganizationVerification.findOne({
      where: {
        organization_id: req.organization.id,
      },
    });

    if (!organizationVerification) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Verification not found!",
      });
    }

    // loop through files and upload
    const files = Object.keys(req.files);

    for (const key of files) {
      const file = req.files[key][0];

      await uploadFile({
        file,
        folder: "business-documents",
        relation_id: organizationVerification.id,
        relation_type: "organization_verifications",
        field: file.fieldname,
      });
    }

    organizationVerification.current_step = 4;
    organizationVerification.status = "in_progress";
    await organizationVerification.save();

    return sendSuccess({
      res,
      data: null,
      message: "Business documents saved successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
