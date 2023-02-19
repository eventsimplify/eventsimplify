import React from "react";

import { IField, IFieldProps } from "@/interfaces";
import {
  TextInput,
  Select,
  DatePicker,
  Radio,
  Textarea,
  RichText,
} from "./index";

const Field = ({ ...field }: IField) => {
  const {
    type,
    name,
    label,
    disabled,
    placeholder,
    required,
    options,
    extra,
    optionType = "button",
  } = field;

  let validations = [];

  if (required) {
    validations.push({
      required: true,
      message: `${label} is required`,
    });

    if (type === "email") {
      validations.push({
        type: "email",
        message: "Please enter a valid email",
      });
    }
  }

  const props: IFieldProps = {
    name,
    label,
    disabled,
    placeholder,
    rules: validations,
    options,
    extra,
    optionType,
  };

  switch (type) {
    case "text": {
      return <TextInput key={name} {...props} />;
    }

    case "email": {
      return <TextInput key={name} {...props} />;
    }

    case "dropdown": {
      return <Select key={name} {...props} />;
    }

    case "date": {
      return <DatePicker key={name} {...props} />;
    }

    case "radio": {
      return <Radio key={name} {...props} />;
    }

    case "textarea": {
      return <Textarea key={name} {...props} />;
    }

    case "rich-text": {
      return <RichText key={name} {...props} />;
    }

    default:
      return null;
  }
};

export default Field;
