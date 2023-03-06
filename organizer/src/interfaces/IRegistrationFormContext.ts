import IRegistrationForm from "./IRegistrationForm";

export default interface IRegistrationFormContext {
  forms: IRegistrationForm[];
  getForms: () => void;
  loading: string;
  deleteForm: (id: string) => void;
}
