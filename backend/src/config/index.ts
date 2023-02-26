import { IQuestion } from "../interfaces";

export const defaultRegistrationQuestions: IQuestion[] = [
  {
    type: "radio",
    name: "prefix",
    label: "Prefix",
    options: [
      {
        label: "Mr.",
        value: "Mr.",
      },
      {
        label: "Mrs.",
        value: "Mrs.",
      },
      {
        label: "Miss",
        value: "Miss",
      },
      {
        label: "Ms.",
        value: "Ms.",
      },
      {
        label: "Mx.",
        value: "Mx.",
      },
      {
        label: "Dr.",
        value: "Dr.",
      },
      {
        label: "Prof.",
        value: "Prof.",
      },
      {
        label: "Rev.",
        value: "Rev.",
      },
    ],
    included: false,
    required: false,
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
    included: false,
    required: false,
  },
  {
    type: "number",
    name: "age",
    label: "Age",
    included: false,
    required: false,
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone number / Mobile number",
    included: false,
    required: false,
  },
  {
    type: "address",
    name: "address",
    label: "Address",
    included: false,
    required: false,
  },
];
