import IBase from "./IBase";
import IOrganization from "./IOrganization";
import IRole from "./IRole";

export default interface IInvitation extends IBase {
  email: string;
  organization: IOrganization | null;
  role: IRole | null;
  token: string;
}
