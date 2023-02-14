import IBase from "./IBase";

export default interface IOrganization extends IBase {
  name: string;
  summary?: string;
  description?: string;
}
