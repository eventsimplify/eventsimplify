import IQuestionOption from "./IQuestionOption";

export default interface IFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: any[];
  disabled?: boolean;
  options?: IQuestionOption[];
  extra?: string;
  optionType?: "button" | "default";
  setOptions?: (options: IQuestionOption[]) => void;
}
