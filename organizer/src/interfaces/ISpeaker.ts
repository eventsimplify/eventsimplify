import IBase from "./IBase";

export default interface ISpeaker extends IBase {
  name: string;
  jobTitle: string;
  description: string;
  company: string;
  socials: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
}
