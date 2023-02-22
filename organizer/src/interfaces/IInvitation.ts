import IBase from "./IBase";
import IOrganization from "./IOrganization";

export default interface IInvitation extends IBase {
  email: string;
  organization: IOrganization | null;
  role: string;
  token: string;
}
