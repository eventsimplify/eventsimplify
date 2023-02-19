import React from "react";
import { Col, Row } from "antd";

import Field from "@/form-controls/Field";

const AdditionalInfo = () => {
  return (
    <Row gutter={[16, 0]}>
      <Col span={12}>
        <Field
          name="name"
          label="Full name"
          type="text"
          required
          placeholder="Enter attendee full name"
          extra="This name will be used to send the ticket"
        />
      </Col>
      <Col span={12}>
        <Field
          name="email"
          label="Email"
          type="email"
          required
          placeholder="Enter attendee email"
          extra="This email will be used to send the ticket"
        />
      </Col>
      <Col span={12}>
        <Field
          name="phone"
          label="Phone/mobile"
          type="text"
          placeholder="Enter attendee phone/mobile"
        />
      </Col>

      <Col span={12}>
        <Field
          name="age"
          label="Age"
          type="text"
          placeholder="Enter attendee age"
        />
      </Col>
      <Col span={12}>
        <Field
          name="gender"
          label="Gender"
          type="radio"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            {
              label: "Other",
              value: "other",
            },
          ]}
          optionType="default"
        />
      </Col>
    </Row>
  );
};

export default AdditionalInfo;
