import IQuestionOption from "./IQuestionOption";

export default interface IQuestion {
  type:
    | "text"
    | "radio"
    | "checkbox"
    | "select"
    | "textarea"
    | "number"
    | "address"
    | "phone";
  name: string;
  label: string;
  options?: IQuestionOption[];
  included: boolean;
  required: boolean;
}
