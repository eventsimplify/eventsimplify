import IAttendee from "./IAttendee";
import IBase from "./IBase";
import IOrder from "./IOrder";
import IOrganization from "./IOrganization";
import ITicket from "./ITicket";

export default interface IOrderDetails extends IBase {
  orderId: number;
  order: IOrder;
  organizationId: number;
  organization: IOrganization;
  tickets: IOrderDetailsTickets[];
  attendees: IAttendee[];
}

interface IOrderDetailsTickets {
  ticketId: number;
  ticket: ITicket;
  quantity: number;
}
