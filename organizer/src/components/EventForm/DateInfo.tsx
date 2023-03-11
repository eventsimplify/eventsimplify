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
      <Col span={24}>
        <Field
          name="start_date"
          label="Start date"
          type="datetime"
          required
          placeholder="Start date"
        />
      </Col>
      <Col span={24}>
        <Field
          name="end_date"
          label="Event end date"
          type="datetime"
          required
          placeholder="Event end date"
        />
      </Col>
    </Row>
  );
};

export default DateInfo;
