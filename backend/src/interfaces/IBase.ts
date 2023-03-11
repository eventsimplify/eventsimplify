export default interface IBase {
  id: number;
  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;
  deleted_at?: Date;
  deleted_by?: number;
}
