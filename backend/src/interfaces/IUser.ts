import IBase from "./IBase";
import IOrganizationUser from "./IOrganizationUser";

export default interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  organizations?: IOrganizationUser[];
  active: boolean;
  blocked: boolean;
  providerId: string;
  provider: string;
}
