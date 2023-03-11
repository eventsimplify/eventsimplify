import { EntitySubscriberInterface, EventSubscriber } from "typeorm";
import { defaultRegistrationQuestions } from "../config";

import { Event, RegistrationForm, Settings, Ticket } from "../entity/index";

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
    ticket.min_per_order = 1;
    ticket.max_per_order = 10;
    ticket.visibility = "public";
    ticket.start_date = event.entity.created_at;
    ticket.end_date = event.entity.end_date;
    ticket.event_id = event.entity.id;

    // create general admission registration form
    const form = new RegistrationForm();
    form.name = "General Admission";
    form.questions = defaultRegistrationQuestions;
    form.additional_questions = [];
    form.event_id = event.entity.id;

    //create settings for the event
    const multipleOrderSettings = new Settings();
    multipleOrderSettings.key = "multiple_ticket_per_order";
    multipleOrderSettings.value = "false";
    multipleOrderSettings.type = "event_settings";
    multipleOrderSettings.description = "Allow multiple tickets per order";
    multipleOrderSettings.event_id = event.entity.id;
    multipleOrderSettings.organization_id = event.entity.organization_id;

    // we need to use the event manager to save the ticket because we are in a transaction and we cannot use the repository directly
    await event.manager.getRepository(Ticket).save(ticket);
    await event.manager.getRepository(RegistrationForm).save(form);
    await event.manager.getRepository(Settings).save(multipleOrderSettings);
  }
}
