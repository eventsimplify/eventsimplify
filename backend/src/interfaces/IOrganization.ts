import IBase from "./IBase";

export default interface IOrganization extends IBase {
  name: string;
  slug: string;
  description?: string;
}
