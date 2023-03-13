import IBase from "./IBase";

export default interface ISpeaker extends IBase {
  name: string;
  job_title: string;
  description: string;
  company: string;
  socials: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
}
