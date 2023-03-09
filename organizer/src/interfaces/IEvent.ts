import IBase from "./IBase";
import IFile from "./IFile";
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
  banner?: IFile[];
}
