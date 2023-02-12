import * as Yup from "yup";
import bcrypt from "bcryptjs";

import { Event } from "../entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Event create
// @route   POST /events/create
// @access  Private
export const create = async (req, res) => {
  const { name, type, tags, startDate, endDate, summary, description } =
    req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    type: Yup.string().required("Type is a required field"),
    startDate: Yup.date().required("Start date is a required field"),
    endDate: Yup.date().required("End date is a required field"),
    summary: Yup.string().required("Summary is a required field"),
    description: Yup.string().required("Description is a required field"),
  });

  try {
    await schema.validate({
      name,
      type,
      tags,
      startDate,
      endDate,
      summary,
      description,
    });

    const event = await Event.create({
      name,
      type,
      tags,
      startDate,
      endDate,
      summary,
      description,
    }).save();

    console.log(event);

    return sendSuccess({
      res,
      data: event,
      message: "Event created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
