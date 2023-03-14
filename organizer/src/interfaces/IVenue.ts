import IBase from "./IBase";

export default interface IVenue extends IBase {
  name: string;
  type: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postal_code: string;
  country?: string;
  longitude?: number;
  latitude?: number;
}
