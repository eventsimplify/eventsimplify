import IBase from "./IBase";
import IOrganization from "./IOrganization";

export default interface IOrganizationVerification extends IBase {
  status: "not_started" | "verify_later" | "pending" | "verified" | "rejected";
  organization: IOrganization;
  organization_id: number;
  current_step: number;
  business_details: IBusinessDetails;
  representative_details: IRepresentativeDetails;
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
  job_title: string;
  date_of_birth: string;
  phone: string;
  id_type: string;
}
