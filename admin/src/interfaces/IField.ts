export default interface IField {
  name: string;
  type: "text" | "textarea" | "checkbox" | "radio" | "dropdown" | "date";
  label: string;
  placeholder?: string;
  options?: string[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}
