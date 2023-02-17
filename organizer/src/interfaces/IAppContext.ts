import { Dispatch, SetStateAction } from "react";
import IUser from "./IUser";

export default interface IAppContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  loading: string;
  setLoading: Dispatch<SetStateAction<string>>;
}
