import * as Yup from "yup";

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
      startDate,
      endDate,
      summary,
      description,
      organizationId: req.organization.id,
    }).save();

    return sendSuccess({
      res,
      data: event,
      message: "Event created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Event list
// @route   POST /events/list
// @access  Private

export const list = async (req, res) => {
  try {
    const events = await Event.find({
      where: { organizationId: req.organization.id },
    });

    return sendSuccess({
      res,
      data: events,
      message: "Events fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Event detail
// @route   POST /events/detail/:id
// @access  Private

export const detail = async (req, res) => {
  try {
    const event = req.event;

    return sendSuccess({
      res,
      data: event,
      message: "Event fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
