import IBase from "./IBase";
import IOrganizationUser from "./IOrganizationUser";

export default interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  organizations?: IOrganizationUser[];
  confirmed: boolean;
  active: boolean;
  blocked: boolean;
  provider_id: string;
  provider: string;
}
