import IBase from "./IBase";

import IOrganization from "./IOrganization";
import ITicket from "./ITicket";

export default interface IEvent extends IBase {
  name: string;
  slug: string;
  type: string;
  description?: string;
  summary?: string;
  startDate: string;
  endDate: string;
  status: "draft" | "published" | "saved" | "scheduled";
  tags: string[];
  tickets: ITicket[];
  organization: IOrganization;
}
