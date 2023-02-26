import React from "react";
import { Col, Row } from "antd";

import Field from "@/form-controls/Field";

const PaymentInformation = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Field
          name="paymentMethod"
          label="Payment method"
          type="dropdown"
          required
          placeholder="Enter attendee full name"
          options={[
            { label: "Cash", value: "cash" },
            { label: "Credit card", value: "creditCard" },
            { label: "Bank transfer", value: "bankTransfer" },
            { label: "Other", value: "other" },
          ]}
        />
      </Col>
      <Col span={12} />
      <Col span={24}>
        <Field
          name="note"
          label="Any additional notes"
          type="textarea"
          placeholder="Enter any additional notes"
        />
      </Col>
    </Row>
  );
};

export default PaymentInformation;
