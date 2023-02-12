import IBase from "./IBase";

export default interface IEvent extends IBase {
  name: string;
  slug: string;
  type: string;
  category: string;
  tags: string[];
  startDate: string;
  endDate: string;
  tagline?: string;
  description?: string;
  status: "draft" | "published";
}
