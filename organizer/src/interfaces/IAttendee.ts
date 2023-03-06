import IBase from "./IBase";

export default interface IAttendee extends IBase {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
}
