import React from "react";
import { Form, Input } from "antd";

import { IFieldProps } from "@/interfaces";

const PhoneInput = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Input
        addonBefore="+977"
        placeholder={placeholder}
        disabled={disabled}
        type="tel"
      />
    </Form.Item>
  );
};

export default PhoneInput;
