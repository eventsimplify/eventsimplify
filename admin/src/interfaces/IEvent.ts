export default interface IEvent {
  id: number;
  name: string;
  description: string;
  status: string;
  ticketSold?: number;
}
