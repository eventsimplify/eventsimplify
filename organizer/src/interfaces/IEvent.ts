import IBase from "./IBase";

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
}
