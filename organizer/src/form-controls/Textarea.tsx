import React from "react";
import { Form, Input } from "antd";

import { IFieldProps } from "@/interfaces";

const Textarea = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Input.TextArea rows={3} placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );
};

export default Textarea;
