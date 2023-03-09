import IBase from "./IBase";

export default interface IFile extends IBase {
  name: string;
  key: string;
  size: number;
  mimetype: string;
  url: string;
}
