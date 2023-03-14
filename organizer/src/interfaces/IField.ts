import { FormInstance } from "antd";
import IQuestionOption from "./IQuestionOption";

export default interface IField {
  name: string;
  type:
    | "text"
    | "textarea"
    | "checkbox"
    | "radio"
    | "dropdown"
    | "date"
    | "email"
    | "rich-text"
    | "password"
    | "options"
    | "socials"
    | "number"
    | "phone"
    | "banner"
    | "datetime"
    | "file"
    | "address";
  label: string;
  placeholder?: string;
  options?: IQuestionOption[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  extra?: string;
  optionType?: "button" | "default";
  setOptions?: (options: IQuestionOption[]) => void;
  form?: FormInstance;
  defaultValue?: string;
}
