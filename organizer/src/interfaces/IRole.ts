import IBase from "./IBase";
import IPermission from "./IPermission";

export default interface IRole extends IBase {
  name: string;
  permissions: IPermission[];
}
