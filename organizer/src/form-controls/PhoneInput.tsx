import React from "react";
import { Form, Input, Select } from "antd";

import { IFieldProps } from "@/interfaces";

const { Option } = Select;

const PhoneInput = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
  form,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Input.Group compact>
        <Select defaultValue="+977" style={{ width: "15%" }}>
          <Option value="+977">+977</Option>
        </Select>
        <Input
          defaultValue={form?.getFieldValue(name)}
          placeholder={placeholder}
          disabled={disabled}
          style={{ width: "85%" }}
          type="tel"
          onChange={(e) => {
            const { value } = e.target;
            form?.setFieldsValue({ [name]: value });
          }}
        />
      </Input.Group>
    </Form.Item>
  );
};

export default PhoneInput;
