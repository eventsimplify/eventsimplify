import { Dispatch, SetStateAction } from "react";
import IAttendee from "./IAttendee";
import IPaymentInformation from "./IPaymentInformation";
import ITicket from "./ITicket";

export default interface IOrderFormContext {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;

  loading: string;
  setLoading: Dispatch<SetStateAction<string>>;

  selectedTickets: ITicket[];
  setSelectedTickets: Dispatch<SetStateAction<ITicket[]>>;

  attendeeInformation: IAttendee | null;
  setAttendeeInformation: Dispatch<SetStateAction<IAttendee | null>>;

  paymentInformation: IPaymentInformation | null;

  setPaymentInformation: Dispatch<SetStateAction<IPaymentInformation | null>>;
}
