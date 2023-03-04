import React from "react";
import { Col, Divider, Row, Typography } from "antd";

import Field from "@/form-controls/Field";

const { Title, Paragraph } = Typography;

const DateInfo = () => {
  return (
    <Row gutter={[16, 0]}>
      <Divider />
      <Col
        span={24}
        style={{
          marginBottom: "2rem",
        }}
      >
        <Title level={4}>Date and time</Title>
        <Paragraph>
          Tell event-goers when your event starts and ends so they can make
          plans to attend.
        </Paragraph>
      </Col>
      <Col span={18}>
        <Field
          name="startDate"
          label="Start date"
          type="date"
          required
          placeholder="Start date"
        />
      </Col>

      <Col span={6}>
        <Field
          name="startTime"
          label="Start time"
          type="date"
          required
          placeholder="Start time"
        />
      </Col>
      <Col span={18}>
        <Field
          name="endDate"
          label="Event end date"
          type="date"
          required
          placeholder="Event end date"
        />
      </Col>

      <Col span={6}>
        <Field
          name="endTime"
          label="Event end time"
          type="date"
          required
          placeholder="Event end time"
        />
      </Col>
    </Row>
  );
};

export default DateInfo;
