import IAttendee from "./IAttendee";
import IBase from "./IBase";
import IEvent from "./IEvent";
import IOrderDetails from "./IOrderDetails";
import IOrganization from "./IOrganization";
import IPaymentDetails from "./IPaymentDetails";
import IPaymentInformation from "./IPaymentInformation";
import ITicket from "./ITicket";

export default interface IOrder extends IBase {
  organizationId: number;
  eventId: number;
  organization: IOrganization;
  event: IEvent;
  order_details_id: number;
  payment_detail_id: number;
  order_details: IOrderDetails;
  total: number;
  payment_details: IPaymentDetails;
}

export interface IOrderManualCreate {
  tickets: ITicket[];
  attendeeInformation: IAttendee;
  paymentInformation: IPaymentInformation;
}
