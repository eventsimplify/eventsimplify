import * as Yup from "yup";

import { Attendee, Event, File, Order, Venue } from "../entity";
import { errorHandler, sendSuccess } from "../utils";

// @desc    Event create
// @route   POST /events/create
// @access  Private
export const create = async (req, res) => {
  const {
    name,
    type,
    tags,
    start_date,
    end_date,
    summary,
    description,
    venue,
  } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    start_date: Yup.date().required("Start date is a required field"),
    end_date: Yup.date().required("End date is a required field"),
  });

  try {
    await schema.validate({
      name,
      type,
      tags,
      start_date,
      end_date,
    });

    const {
      name: venue_name,
      type: venue_type,
      address1,
      address2,
      city,
      state,
      post_code,
      country,
      longitude,
      latitude,
    } = venue;

    const newVenue = await Venue.create({
      name: venue_name,
      type: venue_type,
      address1,
      address2,
      city,
      state,
      post_code,
      country,
      longitude,
      latitude,
    }).save();

    console.log(start_date);
    console.log(end_date);

    const event = await Event.create({
      name,
      type,
      start_date,
      end_date,
      summary,
      description,
      organization_id: req.organization.id,
      venue_id: newVenue.id,
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
    const events = await Event.createQueryBuilder("event")
      .where("event.organization_id = :id", { id: req.organization.id })
      .leftJoinAndMapMany(
        "event.banner",
        File,
        "f",
        "f.relation_id = event.id AND f.relation_type = 'event' AND f.field = 'banner'"
      )
      .getMany();

    return sendSuccess({
      res,
      data: events,
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
    const event = await Event.createQueryBuilder("event")
      .leftJoinAndSelect("event.tickets", "tickets")
      .leftJoinAndSelect("event.venue", "venue")
      .where("event.id = :id", { id: req.event.id })
      .leftJoinAndMapMany(
        "event.banner",
        File,
        "f",
        "f.relation_id = event.id AND f.relation_type = 'event' AND f.field = 'banner'"
      )
      .getOne();

    return sendSuccess({
      res,
      data: event,
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

    await event.softRemove();

    return sendSuccess({
      res,
      message: "Event removed successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

//@desc Event dashboard
//@route GET /events/dashboard/:id
//@access Private

export const dashboard = async (req, res) => {
  try {
    // get event
    const event = await Event.createQueryBuilder("event")
      .leftJoinAndSelect("event.tickets", "tickets")
      .where("event.id = :id", { id: req.event.id })
      .getOne();

    // get total orders
    const totalOrders = await Order.count({
      where: { event_id: req.event.id },
    });

    // get total attendees
    const totalAttendees = await Attendee.count({
      where: { event_id: req.event.id },
    });

    // get recent 5 orders
    const recentOrders = await Order.find({
      where: { organization_id: req.organization.id, event_id: req.event.id },
      relations: [
        "order_details",
        "order_details.attendees",
        "order_details.tickets",
        "order_details.tickets.ticket",
        "payment_details",
      ],
      order: { created_at: "DESC" },
      take: 5,
    });

    return sendSuccess({
      res,
      data: {
        event,
        totalOrders,
        totalAttendees,
        recentOrders,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
