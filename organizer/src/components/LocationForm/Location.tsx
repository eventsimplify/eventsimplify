import React from "react";
import { Col, Divider, Form, Row, Typography } from "antd";
import Field from "@/form-controls/Field";

const { Title } = Typography;

const Location = () => {
  return (
    <Form layout="vertical">
      <div
        style={{
          height: "200px",
          width: "100%",
          backgroundColor: "red",
        }}
      />
      <Divider />
      <Field
        name="name"
        label="Venue name"
        type="text"
        required
        placeholder="Venue name"
      />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>Street address</Title>
        </Col>
        <Col span={12}>
          <Field
            name="address1"
            label="Address 1"
            type="text"
            required
            placeholder="e.g. 123 Main St"
          />
        </Col>
        <Col span={12}>
          <Field
            name="address2"
            label="Address 2"
            type="text"
            placeholder="e.g. Suite 100"
          />
        </Col>
        <Col span={12}>
          <Field
            name="city"
            label="City"
            type="text"
            required
            placeholder="e.g. San Francisco"
          />
        </Col>
        <Col span={6}>
          <Field
            name="state"
            label="State/Province"
            type="text"
            required
            placeholder="e.g. California"
          />
        </Col>
        <Col span={6}>
          <Field
            name="postalCode"
            label="Postal code"
            type="text"
            required
            placeholder="e.g. 94105"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Location;
