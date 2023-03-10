import React from "react";

import { IField, IFieldProps } from "@/interfaces";
import {
  TextInput,
  Select,
  DatePicker,
  Radio,
  Textarea,
  RichText,
  Options,
  Socials,
  NumberInput,
  PhoneInput,
  Banner,
  DateTimePicker,
} from "./index";
import PasswordInput from "./Password";

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
    setOptions,
    form,
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
    setOptions,
    form,
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

    case "datetime": {
      return <DateTimePicker key={name} {...props} />;
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

    case "password": {
      return <PasswordInput key={name} {...props} />;
    }

    case "options": {
      return <Options key={name} {...props} />;
    }

    case "socials": {
      return <Socials key={name} {...props} />;
    }

    case "number": {
      return <NumberInput key={name} {...props} />;
    }

    case "phone": {
      return <PhoneInput key={name} {...props} />;
    }

    case "banner": {
      return <Banner key={name} {...props} />;
    }

    default:
      return null;
  }
};

export default Field;
