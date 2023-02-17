import IBase from "./IBase";
import IEvent from "./IEvent";

export default interface ITicket extends IBase {
  name: string;
  type: string;
  price: number;
  quantity: number;
  sold: number;
  startDate: string;
  endDate: string;
  minPerOrder: number;
  maxPerOrder: number;
  visibility: "visible" | "hidden";
  description?: string;
  event: IEvent;
}
