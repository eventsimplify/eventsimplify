import React from "react";
import { Col, Divider, Row, Typography } from "antd";

import Field from "@/form-controls/Field";

import { eventCategories, eventTypes } from "@/bootstrap/config";

const { Title, Paragraph } = Typography;

const BasicInfo = () => {
  return (
    <Row gutter={[16, 0]}>
      <Col span={24}>
        <Field
          name="name"
          label="Event name"
          type="text"
          required
          placeholder="Event name"
        />
      </Col>
      <Col span={12}>
        <Field
          name="type"
          label="Event type"
          placeholder="Select event type"
          type="dropdown"
          options={eventTypes}
        />
      </Col>
      <Col span={12}>
        <Field
          name="category"
          label="Event category"
          placeholder="Select event category"
          type="dropdown"
          options={eventCategories}
        />
      </Col>
    </Row>
  );
};

export default BasicInfo;
