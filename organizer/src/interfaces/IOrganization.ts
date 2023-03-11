import IBase from "./IBase";
import IOrganizationVerification from "./IOrganizationVerification";

export default interface IOrganization extends IBase {
  name: string;
  summary?: string;
  description?: string;
  verification: IOrganizationVerification;
}
