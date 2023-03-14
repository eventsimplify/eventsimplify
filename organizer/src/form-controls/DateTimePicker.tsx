import React from "react";
import { Form, DatePicker as Datepicker } from "antd";

import { IFieldProps } from "@/interfaces";

const DateTimePicker = ({
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
        use12Hours
        showTime
        showSecond={false}
        minuteStep={15}
        style={{ width: "100%" }}
        placeholder={placeholder}
        disabled={disabled}
        format="DD MMM YYYY hh:mm A"
      />
    </Form.Item>
  );
};

export default DateTimePicker;
