import IBase from "./IBase";
import IOrganizationUser from "./IOrganizationUser";

export default interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  type: "user" | "organizer" | "admin";
  organization?: IOrganizationUser;
}
