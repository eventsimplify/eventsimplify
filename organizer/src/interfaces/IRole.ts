import IBase from "./IBase";
import IPermission, { ISelectedPermission } from "./IPermission";

export default interface IRole extends IBase {
  name: string;
  permissions: IPermission | ISelectedPermission;
}
