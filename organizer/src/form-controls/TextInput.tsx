import React from "react";
import { Form, Input } from "antd";

import { IFieldProps } from "@/interfaces";

const TextInput = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Input placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );
};

export default TextInput;
