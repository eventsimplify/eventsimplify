export default interface IField {
  name: string;
  type:
    | "text"
    | "textarea"
    | "checkbox"
    | "radio"
    | "dropdown"
    | "date"
    | "email";
  label: string;
  placeholder?: string;
  options?: any[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  extra?: string;
  optionType?: "button" | "default";
}
