import * as Yup from "yup";

import { Order, OrderDetails, PaymentDetails } from "../entity";
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
        phone: Yup.string().required("Phone is a required field"),
        age: Yup.string().required("Age is a required field"),
      })
      .required("Attendee information is a required field"),
    paymentInformation: Yup.object().shape({
      status: Yup.string().required("Status is a required field"),
      provider: Yup.string().required("Provider is a required field"),
      paymentDate: Yup.date().required("Payment date is a required field"),
    }),
  });

  try {
    await schema.validate({
      tickets,
      attendeeInformation,
      paymentInformation,
    });

    const { status, provider, notes, paymentDate } = paymentInformation;

    const orderDetails = await OrderDetails.create({
      tickets,
    });

    await orderDetails.save();

    const total = tickets.reduce((acc, ticket) => {
      return acc + ticket.price;
    }, 0);

    const paymentDetails = await PaymentDetails.create({
      organizationId: req.organization.id,
      total: total,
      type: "manual",
      status,
      provider,
      notes: notes || null,
      paymentDate,
    }).save();

    await Order.create({
      organizationId: req.organization.id,
      eventId: req.event.id,
      payment_detail_id: paymentDetails.id,
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
