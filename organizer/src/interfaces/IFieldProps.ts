export default interface IFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: any[];
  disabled?: boolean;
  options?: any[];
  extra?: string;
  optionType?: "button" | "default";
}
