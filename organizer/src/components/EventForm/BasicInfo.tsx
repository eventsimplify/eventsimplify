import React from "react";
import { Col, Row } from "antd";
import { eventCategories, eventTypes } from "@/bootstrap/config";
import Field from "@/form-controls/Field";

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
          required
          options={eventTypes}
        />
      </Col>
      <Col span={12}>
        <Field
          name="category"
          label="Event category"
          placeholder="Select event category"
          type="dropdown"
          required
          options={eventCategories}
        />
      </Col>
      <Col span={12}>
        <Field name="startDate" label="Event start date" type="date" required />
      </Col>
      <Col span={12}>
        <Field name="endDate" label="Event end date" type="date" required />
      </Col>
    </Row>
  );
};

export default BasicInfo;
