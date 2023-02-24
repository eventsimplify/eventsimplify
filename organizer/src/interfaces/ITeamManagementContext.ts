import { Dispatch, SetStateAction } from "react";
import IInvitation from "./IInvitation";
import IRole from "./IRole";
import IUser from "./IUser";

export default interface ITeamManagementContext {
  staffs: IUser[];
  setStaffs: Dispatch<SetStateAction<IUser[]>>;
  invitations: IInvitation[];
  setInvitations: Dispatch<SetStateAction<IInvitation[]>>;
  loading: string;
  getStaffs: () => void;

  roles: IRole[];
  setRoles: Dispatch<SetStateAction<IRole[]>>;

  deleteRole: (id: number) => void;
}
