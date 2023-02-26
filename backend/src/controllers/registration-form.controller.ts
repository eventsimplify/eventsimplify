import * as Yup from "yup";

import { RegistrationForm } from "../entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Create registration form
// @route   POST /registration-forms/create
// @access  Private
export const create = async (req, res) => {
  const { name, questions, additionalQuestions } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
  });

  try {
    await schema.validate({
      name,
      questions,
      additionalQuestions,
    });

    const form = await RegistrationForm.create({
      name,
      questions,
      additionalQuestions,
      eventId: req.event.id,
    }).save();

    await form.save();

    return sendSuccess({
      res,
      data: form,
      message: "Form created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Registration form list
// @route   GET /registration-forms/list
// @access  Private

export const list = async (req, res) => {
  try {
    const forms = await RegistrationForm.find({
      where: {
        eventId: req.event.id,
      },
    });

    return sendSuccess({
      res,
      data: forms,
      message: "Forms fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Registration form detail
// @route   POST /registration-forms/detail/:id
// @access  Private

export const detail = async (req, res) => {
  try {
    const form = await RegistrationForm.findOne({
      where: {
        eventId: req.event.id,
        id: req.params.id,
      },
    });

    return sendSuccess({
      res,
      data: form,
      message: "Form fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Registration form update
// @route   POST /registration-forms/update/:id
// @access  Private

export const update = async (req, res) => {
  const { name, questions, additionalQuestions } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
  });

  try {
    await schema.validate({
      name,
      questions,
      additionalQuestions,
    });

    const form = await RegistrationForm.findOne({
      where: {
        eventId: req.event.id,
        id: req.params.id,
      },
    });

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found!",
      });
    }

    form.name = name;
    form.questions = questions;
    form.additionalQuestions = additionalQuestions;

    await form.save();

    return sendSuccess({
      res,
      data: form,
      message: "Form updated successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// @desc    Registration form delete
// @route   POST /registration-forms/delete/:id
// @access  Private

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await RegistrationForm.findOne({
      where: {
        id,
        eventId: req.event.id,
      },
    });

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found!",
      });
    }

    await form.softRemove();

    return sendSuccess({
      res,
      message: "Form deleted successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
