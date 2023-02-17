export default interface IBase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedAt?: Date;
  deletedBy?: number;
}
