import { Rule } from "antd/es/form";

export default interface IFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: Rule[];
  disabled?: boolean;
  options?: any[];
  extra?: string;
}
