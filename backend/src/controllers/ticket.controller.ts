import * as Yup from "yup";

import { Ticket } from "../entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Ticket create
// @route   POST /tickets/create
// @access  Private
export const create = async (req, res) => {
  const {
    name,
    type,
    start_date,
    end_date,
    description,
    quantity,
    price,
    visibility,
    min_per_order,
    max_per_order,
  } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    type: Yup.string()
      .oneOf(["free", "paid"])
      .required("Type is a required field"),
    start_date: Yup.date().required("Start date is a required field"),
    end_date: Yup.date().required("End date is a required field"),
    quantity: Yup.number().required("Quantity is a required field"),
  });

  try {
    await schema.validate({
      name,
      type,
      start_date,
      end_date,
      description,
      quantity,
    });

    await Ticket.create({
      name,
      type,
      start_date,
      end_date,
      description,
      quantity,
      price,
      visibility,
      min_per_order,
      max_per_order,
      event_id: req.event.id,
    }).save();

    return sendSuccess({
      res,
      data: null,
      message: "Ticket created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Ticket list
// @route   POST /tickets/list
// @access  Private

export const list = async (req, res) => {
  try {
    const tickets = await Ticket.find({
      where: {
        event_id: req.event.id,
      },
    });

    return sendSuccess({
      res,
      data: tickets,
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
