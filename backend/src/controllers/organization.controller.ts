import * as Yup from "yup";

import { OrganizationUser } from "../entity";
import { Organization } from "../entity/organization.entity";
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
