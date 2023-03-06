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
    });

    await event.save();

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
      relations: ["tickets"],
      select: ["id", "name", "type", "startDate", "endDate"],
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
    const event = await Event.findOne({
      where: { id: req.event.id },
      relations: ["tickets"],
    });

    return sendSuccess({
      res,
      data: event,
      message: "Event fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Event remove
// @route   Delete /events/remove/:id
// @access  Private

export const remove = async (req, res) => {
  try {
    const event = await Event.findOne({
      where: { id: req.event.id },
    });

    await event.remove();

    return sendSuccess({
      res,
      message: "Event removed successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
