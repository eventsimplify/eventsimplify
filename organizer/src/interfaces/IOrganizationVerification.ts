import IBase from "./IBase";

export default interface IOrganizationVerification extends IBase {
  status:
    | "not_started"
    | "verify_later"
    | "in_progress"
    | "verified"
    | "rejected";
  current_step: number;
  business_details: IBusinessDetails;
  representative_details: IRepresentativeDetails;
  organization_id: number;
}

export interface IBusinessDetails {
  name: string;
  type: string;
  structure: string;
  address: {
    country: string;
    state: string;
    city: string;
    area: string;
    address: string;
  };
}

export interface IRepresentativeDetails {
  name: string;
  email: string;
  jobTitle: string;
  dob: string;
  phone: string;
}
