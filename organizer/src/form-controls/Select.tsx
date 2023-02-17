import React from "react";
import { Form, Select as AntDSelect } from "antd";

import { IFieldProps } from "@/interfaces";

const Select = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  options,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <AntDSelect
        showSearch
        placeholder={placeholder}
        disabled={disabled}
        options={options}
      />
    </Form.Item>
  );
};

export default Select;
