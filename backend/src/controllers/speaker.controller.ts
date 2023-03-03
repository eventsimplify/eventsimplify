import * as Yup from "yup";

import { Speaker } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc    Create speaker
// @route   POST /speakers
// @access  Private
export const create = async (req, res) => {
  const { name, jobTitle, company, description } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    jobTitle: Yup.string().required("Job title is a required field"),
    company: Yup.string().required("Company is a required field"),
    description: Yup.string().required("Description is a required field"),
  });

  try {
    await schema.validate({
      name,
      jobTitle,
      company,
      description,
    });

    await Speaker.create({
      name,
      jobTitle,
      company,
      description,
      eventId: req.event.id,
    }).save();

    return sendSuccess({
      res,
      data: null,
      message: "Speaker created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Speaker list
// @route   GET /speakers
// @access  Private

export const list = async (req, res) => {
  try {
    const speakers = await Speaker.find({
      where: {
        eventId: req.event.id,
      },
    });

    return sendSuccess({
      res,
      data: speakers,
      message: "Speakers fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Speaker update
// @route   PUT /speakers/:id
// @access  Private

export const update = async (req, res) => {
  const { name, jobTitle, company, description } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    jobTitle: Yup.string().required("Job title is a required field"),
    company: Yup.string().required("Company is a required field"),
    description: Yup.string().required("Description is a required field"),
  });

  try {
    await schema.validate({
      name,
      jobTitle,
      company,
      description,
    });

    const speaker = await Speaker.findOne({
      where: {
        eventId: req.event.id,
        id: req.params.id,
      },
    });

    if (!speaker) {
      return sendError({
        res,
        status: 404,
        message: "Speaker not found!",
      });
    }

    speaker.name = name;
    speaker.jobTitle = jobTitle;
    speaker.company = company;
    speaker.description = description;

    await speaker.save();

    return sendSuccess({
      res,
      data: speaker,
      message: "Speaker updated successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// @desc    Speaker delete
// @route   DELETE /speakers/:id
// @access  Private

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const speaker = await Speaker.findOne({
      where: {
        id,
        eventId: req.event.id,
      },
    });

    if (!speaker) {
      return sendError({
        res,
        status: 404,
        message: "Speaker not found!",
      });
    }

    await speaker.remove();

    return sendSuccess({
      res,
      message: "Speaker deleted successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
