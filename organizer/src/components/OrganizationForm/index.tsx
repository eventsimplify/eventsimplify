import React from "react";
import { Col, Row } from "antd";
import Field from "@/form-controls/Field";

const OrganizationForm = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Field
          name="name"
          label="Company name"
          required
          extra="This is the name that will appear on your organizer profile and on your events."
          type="text"
          placeholder="Enter your company name."
        />
      </Col>
      <Col span={24}>
        <Field
          name="summary"
          label="Company summary"
          required
          extra="Please enter a summary of at least 10 characters and no more than 200 characters."
          type="textarea"
          placeholder="Enter a summary of your company."
        />
      </Col>
      <Col span={24}>
        <Field
          name="description"
          label="Company description"
          required
          extra="Describe who you are, the types of events you host, or your mission. The description is displayed on your organizer profile."
          type="rich-text"
          placeholder="Describe your company."
        />
      </Col>
    </Row>
  );
};

export default OrganizationForm;
