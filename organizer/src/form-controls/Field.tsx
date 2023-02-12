import React from "react";

import { IField, IFieldProps } from "@/interfaces";
import { TextInput } from "./index";

const Field = ({ ...field }: IField) => {
  const { type, name, label, disabled, placeholder, required } = field;

  let validations = [];

  if (required) {
    validations.push({
      required: true,
      message: `${label} is required`,
    });
  }

  const props: IFieldProps = {
    name,
    label,
    disabled,
    placeholder,
    rules: validations,
  };

  switch (type) {
    case "text": {
      return <TextInput key={name} {...props} />;
    }

    default:
      return null;
  }
};

export default Field;
