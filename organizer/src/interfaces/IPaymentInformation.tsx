import IBase from "./IBase";
import IOrganization from "./IOrganization";

export default interface IPaymentInformation extends IBase {
  organization: IOrganization;
  organizationId: string;
  type: string;
  status: string;
  provider: string;
  providerId?: string;
  notes?: string;
}
