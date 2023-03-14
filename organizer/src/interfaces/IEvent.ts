import IBase from "./IBase";
import IFile from "./IFile";
import ITicket from "./ITicket";
import IVenue from "./IVenue";

export default interface IEvent extends IBase {
  name: string;
  slug: string;
  type: string;
  category: string;
  start_date: Date;
  end_date: Date;
  summary?: string;
  description?: string;
  status: "draft" | "published";
  tickets?: ITicket[];
  banner?: IFile[];
  venue_id: number;
  venue: Partial<IVenue>;
}
