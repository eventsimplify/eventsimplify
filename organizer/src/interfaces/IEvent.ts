import IBase from "./IBase";
import ITicket from "./ITicket";

export default interface IEvent extends IBase {
  name: string;
  slug: string;
  type: string;
  category: string;
  startDate: Date;
  endDate: Date;
  summary?: string;
  description?: string;
  status: "draft" | "published";
  tickets?: ITicket[];
}
