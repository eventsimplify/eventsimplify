import React from "react";
import { Form, InputNumber } from "antd";

import { IFieldProps } from "@/interfaces";

const NumberInput = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <InputNumber
        placeholder={placeholder}
        disabled={disabled}
        style={{ width: "100%" }}
        min={1}
      />
    </Form.Item>
  );
};

export default NumberInput;
