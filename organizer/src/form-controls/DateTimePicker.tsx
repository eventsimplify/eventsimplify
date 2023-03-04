import React from "react";
import { Form, DatePicker as Datepicker } from "antd";

import { IFieldProps } from "@/interfaces";

const DatePicker = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Datepicker
        showTime
        use12Hours
        minuteStep={15}
        format="MMMM DD YYYY hh:mm A"
        style={{ width: "100%" }}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default DatePicker;
