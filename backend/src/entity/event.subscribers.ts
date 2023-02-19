import { EntitySubscriberInterface, EventSubscriber } from "typeorm";

import { Event, Ticket } from "./index";

@EventSubscriber()
export class EventEventSubscriber implements EntitySubscriberInterface<Event> {
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

    // we need to use the event manager to save the ticket because we are in a transaction and we cannot use the repository directly
    await event.manager.getRepository(Ticket).save(ticket);
  }
}
