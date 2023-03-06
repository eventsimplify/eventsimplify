import IBase from "./IBase";
import IOrganization from "./IOrganization";

export default interface IOrganizationVerification extends IBase {
  status: "not_started" | "pending" | "approved" | "rejected";
  organization: IOrganization;
  organizationId: number;
  businessDetails: IBusinessDetails;
  representativeDetails: IRepresentativeDetails;
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
