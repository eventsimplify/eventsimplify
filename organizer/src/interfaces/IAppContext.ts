import { Dispatch, SetStateAction } from "react";
import IInvitation from "./IInvitation";
import IOrganization from "./IOrganization";
import IOrganizationUser from "./IOrganizationUser";
import IUser from "./IUser";

export default interface IAppContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getUser: () => void;
  organization: IOrganization | null;
  invitation: IInvitation | null;
  setInvitation: Dispatch<SetStateAction<IInvitation | null>>;
  organizations: IOrganizationUser[];
}
