import { EntitySubscriberInterface, EventSubscriber } from "typeorm";
import { defaultRegistrationQuestions } from "../config";

import { Event, RegistrationForm, Ticket } from "../entity/index";

@EventSubscriber()
export default class EventEntitySubscriber
  implements EntitySubscriberInterface<Event>
{
  listenTo() {
    return Event;
  }

  // listen to after insert events
  async afterInsert(event) {
    const ticket = new Ticket();
    ticket.name = "General Admission";
    ticket.type = "free";
    ticket.price = 100;
    ticket.quantity = 100;
    ticket.minPerOrder = 1;
    ticket.maxPerOrder = 10;
    ticket.visibility = "public";
    ticket.startDate = event.entity.createdAt;
    ticket.endDate = event.entity.endDate;
    ticket.eventId = event.entity.id;

    // create general admission registration form
    const form = new RegistrationForm();
    form.name = "General Admission";
    form.questions = defaultRegistrationQuestions;
    form.additionalQuestions = [];
    form.eventId = event.entity.id;

    // we need to use the event manager to save the ticket because we are in a transaction and we cannot use the repository directly
    await event.manager.getRepository(Ticket).save(ticket);

    await event.manager.getRepository(RegistrationForm).save(form);

    console.log("Event create event triggered");
  }
}
