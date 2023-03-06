import React from "react";
import { Col, Form, Row } from "antd";

import Field from "@/form-controls/Field";

const PaymentInformation = () => {
  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="paymentInfo"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onBlur"
      initialValues={{
        provider: "cash",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Field
            name="status"
            label="Payment status"
            type="dropdown"
            required
            placeholder="Select payment status"
            options={[
              { label: "Pending payment", value: "pending" },
              { label: "On hold", value: "onhold" },
              { label: "Completed", value: "completed" },
              { label: "Refunded", value: "refunded" },
              { label: "Cancelled", value: "cancelled" },
            ]}
          />
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Field
            name="provider"
            label="Payment provider"
            type="dropdown"
            required
            placeholder="Select payment provider"
            options={[
              { label: "Cash", value: "cash" },
              { label: "E-sewa", value: "esewa" },
              { label: "Khalti", value: "khalti" },
              { label: "Mobile Banking", value: "mobilebanking" },
              { label: "Other", value: "other" },
            ]}
          />
        </Col>
        <Col span={12} />
        <Col span={12}>
          <Field
            name="providerId"
            label="Payment provider ID / Transaction ID"
            type="text"
            placeholder="Enter payment provider ID"
          />
        </Col>

        <Col span={24}>
          <Field
            name="notes"
            label="Any additional notes"
            type="textarea"
            placeholder="Enter any additional notes"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default PaymentInformation;
