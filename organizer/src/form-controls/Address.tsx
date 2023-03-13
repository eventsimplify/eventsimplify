import React, { useState } from "react";
import { Col, Form, Row, Select } from "antd";

import { IFieldProps } from "@/interfaces";
import { countries, states } from "@/bootstrap/address";

const AddressInput = ({
  name,
  label,
  rules,
  placeholder,
  disabled,
  extra,
}: IFieldProps) => {
  const [selectedCountry, setSelectedCountry] = useState("NP");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };

  return (
    <Form.Item label={label} rules={rules} extra={extra}>
      <Row gutter={8}>
        <Col span={12}>
          <Select
            value={selectedCountry}
            disabled={true}
            onChange={handleCountryChange}
            options={countries}
          />
        </Col>
        <Col span={12}>
          <Select
            showSearch={true}
            options={states}
            onChange={handleStateChange}
          />
        </Col>
        <Col span={12}>
          <Select showSearch={true} />
        </Col>
      </Row>
    </Form.Item>
  );
};

export default AddressInput;
