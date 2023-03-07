import IBase from "./IBase";
import IOrder from "./IOrder";
import IOrganization from "./IOrganization";

export default interface IPaymentDetails extends IBase {
  orderId: number;
  order: IOrder;
  organizationId: number;
  organization: IOrganization;
  total: number;
  type: "online" | "manual";
  status: string;
  provider: string;
  providerId: string;
  notes: string;
  paymentDate: string;
}
