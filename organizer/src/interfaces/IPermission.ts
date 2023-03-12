export default interface IPermission {
  [key: string]: IPermissionItem;
}

export interface IPermissionItem {
  name: string;
  action: string;
}

export interface ISelectedPermission {
  [key: string]: string[];
}
