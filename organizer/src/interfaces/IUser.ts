import IBase from "./IBase";
import IOrganization from "./IOrganization";

export default interface IUser extends IBase {
  name: string;
  email: string;
  password?: string;
  accessToken?: string;
  organization?: number | IOrganization | null;
}
