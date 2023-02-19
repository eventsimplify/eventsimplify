import React from "react";
import { Form, Radio as AntDRadio } from "antd";

import { IFieldProps } from "@/interfaces";

const Radio = ({
  name,
  label,
  rules,
  options,
  disabled,
  optionType,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <AntDRadio.Group
        options={options}
        optionType={optionType}
        buttonStyle="solid"
        size="middle"
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default Radio;
