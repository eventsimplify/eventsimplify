import * as Yup from "yup";

import { Event } from "../entity";
import { Organization } from "../entity/organization.entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Organization create
// @route   POST /organizations/create
// @access  Private
export const create = async (req, res) => {
  const { name, summary, description} =
    req.body;

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

    const organization = await Organization.create({
        name,
        summary,
        description,
    });

    await organization.save();

    console.log(organization);

    return sendSuccess({
      res,
      data: organization,
      message: "Organization created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
