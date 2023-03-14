import React from "react";
import { Col, Divider, Row, Typography } from "antd";

import Field from "@/form-controls/Field";

const { Title, Paragraph } = Typography;

const Details = () => {
  return (
    <Row gutter={[16, 0]}>
      <Divider />
      <Col
        span={24}
        style={{
          marginBottom: "2rem",
        }}
      >
        <Title level={4}>Event details</Title>
        <Paragraph>
          Tell us more about your event. This is the main body of your event
          page.
        </Paragraph>
      </Col>
      <Col span={24}>
        <Field
          name="banner"
          label="Event banner"
          extra="Upload a banner for your event. This will be the first thing attendees see when they visit your event page."
          placeholder="Please input your event banner!"
          type="banner"
          required
        />
      </Col>
      <Col span={24}>
        <Field
          name="summary"
          label="Event summary"
          extra="Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max)"
          required
          placeholder="Please input your event summary!"
          type="textarea"
        />
      </Col>
      <Col span={24}>
        <Field
          name="description"
          label="Event description"
          extra="Tell attendees all about your event. This is the main body of your event page. You can use this space to share details about your event, including the agenda, speakers, and more."
          required
          placeholder="Please input your event description!"
          type="rich-text"
        />
      </Col>
      <Col span={24}>
        <Field
          name="address"
          label="Event address"
          extra="Enter the address where your event will take place. This will be displayed on your event page."
          required
          placeholder="Please input your event address!"
          type="address"
        />
      </Col>
    </Row>
  );
};

export default Details;
