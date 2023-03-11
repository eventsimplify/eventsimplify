import IBase from "./IBase";

import IOrganization from "./IOrganization";
import ITicket from "./ITicket";

export default interface IEvent extends IBase {
  name: string;
  slug: string;
  type: string;
  description?: string;
  summary?: string;
  start_date: Date;
  end_date: Date;
  status: "draft" | "published" | "saved" | "scheduled";
  tickets: ITicket[];
  organization: IOrganization;
  organization_id: number;
}
