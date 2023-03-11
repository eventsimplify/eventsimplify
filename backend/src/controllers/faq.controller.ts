import * as Yup from "yup";

import { Faq, Speaker } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc    Create faq
// @route   POST /faqs
// @access  Private
export const create = async (req, res) => {
  const { question, answer } = req.body;

  const schema = Yup.object().shape({
    question: Yup.string().required("Question is a required field"),
    answer: Yup.string().required("Answer is a required field"),
  });

  try {
    await schema.validate({
      question,
      answer,
    });

    await Faq.create({
      question,
      answer,
      event_id: req.event.id,
    }).save();

    return sendSuccess({
      res,
      data: null,
      message: "Faq created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Faq list
// @route   GET /faqs
// @access  Private

export const list = async (req, res) => {
  try {
    const faqs = await Faq.find({
      where: {
        event_id: req.event.id,
      },
    });

    return sendSuccess({
      res,
      data: faqs,
      message: "Faqs fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Faq update
// @route   PUT /faqs/:id
// @access  Private

export const update = async (req, res) => {
  const { question, answer } = req.body;

  const schema = Yup.object().shape({
    question: Yup.string().required("Question is a required field"),
    answer: Yup.string().required("Answer is a required field"),
  });

  try {
    await schema.validate({
      question,
      answer,
    });

    const faq = await Faq.findOne({
      where: {
        event_id: req.event.id,
        id: req.params.id,
      },
    });

    if (!faq) {
      return sendError({
        res,
        status: 404,
        message: "Faq not found!",
      });
    }

    faq.question = question;
    faq.answer = answer;

    await faq.save();

    return sendSuccess({
      res,
      data: faq,
      message: "Faq updated successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// @desc    Faq delete
// @route   DELETE /faqs/:id
// @access  Private

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const faq = await Faq.findOne({
      where: {
        id,
        event_id: req.event.id,
      },
    });

    if (!faq) {
      return sendError({
        res,
        status: 404,
        message: "Faq not found!",
      });
    }

    await faq.remove();

    return sendSuccess({
      res,
      message: "Faq deleted successfully!",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
