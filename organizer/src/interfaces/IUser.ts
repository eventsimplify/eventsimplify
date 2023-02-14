import IBase from "./IBase";

export default interface IUser extends IBase {
  name: string;
  email: string;
  password?: string;
  type: "user" | "organizer" | "admin";
  accessToken?: string;
}
