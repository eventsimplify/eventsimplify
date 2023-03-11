import * as Yup from "yup";

import {
  Attendee,
  Order,
  OrderDetails,
  OrderDetailsTickets,
  PaymentDetails,
} from "../entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Order create
// @route   POST /orders/manual-create
// @access  Private
export const manualCreate = async (req, res) => {
  const { tickets, attendeeInformation, paymentInformation } = req.body;

  const schema = Yup.object().shape({
    tickets: Yup.array().required("Tickets is a required field"),
    attendeeInformation: Yup.object()
      .shape({
        name: Yup.string().required("Name is a required field"),
        email: Yup.string().required("Email is a required field"),
      })
      .required("Attendee information is a required field"),
    paymentInformation: Yup.object().shape({
      status: Yup.string().required("Status is a required field"),
      provider: Yup.string().required("Provider is a required field"),
    }),
  });

  try {
    await schema.validate({
      tickets,
      attendeeInformation,
      paymentInformation,
    });

    const { status, provider, notes, payment_date } = paymentInformation;

    const { name, email, phone, age, gender } = attendeeInformation;

    //create order details
    const order_details = await OrderDetails.create({}).save();

    for (const ticket of tickets) {
      await OrderDetailsTickets.create({
        order_detail_id: order_details.id,
        ticket_id: ticket.id,
        quantity: ticket.quantity,
      }).save();
    }

    //create attendee
    const attendee = await Attendee.create({
      event_id: req.event.id,
      order_detail_id: order_details.id,
      name,
      email,
      phone,
      age,
      gender,
    }).save();

    const total = tickets.reduce((acc, ticket) => {
      return acc + Number(ticket.price);
    }, 0);

    const paymentDetails = await PaymentDetails.create({
      organization_id: req.organization.id,
      total: total,
      type: "manual",
      status,
      provider,
      notes: notes || null,
      payment_date,
    }).save();

    await Order.create({
      organization_id: req.organization.id,
      event_id: req.event.id,
      order_detail_id: order_details.id,
      payment_detail_id: paymentDetails.id,
      total: total,
    }).save();

    return sendSuccess({
      res,
      data: null,
      message: "Order placed successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc Order list
// @route GET /orders
// @access Private
export const list = async (req, res) => {
  try {
    const orders = await Order.find({
      where: { organization_id: req.organization.id, event_id: req.event.id },
      relations: [
        "order_details",
        "order_details.attendees",
        "order_details.tickets",
        "order_details.tickets.ticket",
        "payment_details",
      ],
      order: { created_at: "DESC" },
    });

    return sendSuccess({ res, data: orders });
  } catch (err) {
    errorHandler(res, err);
  }
};
