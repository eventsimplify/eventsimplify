import IBase from "./IBase";
import IOrganization from "./IOrganization";
import IRole from "./IRole";
import IUser from "./IUser";

export default interface IOrganizationUser extends IBase {
  organizationId: number;
  organization: IOrganization;
  userId: number;
  user: IUser;
  roleId: number;
  role: IRole;
}
