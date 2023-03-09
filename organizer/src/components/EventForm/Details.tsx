import React from "react";

import { Col, Row } from "antd";
import RichText from "@/form-controls/RichText";

import Field from "@/form-controls/Field";

const Details = () => {
  return (
    <Row gutter={[16, 0]}>
      <Col span={24}>
        <Field
          name="banner"
          label="Event banner"
          extra="Upload a banner for your event. This will be the first thing attendees see when they visit your event page."
          placeholder="Please input your event banner!"
          type="banner"
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
        <RichText
          name="description"
          label="Event description"
          placeholder="Please input your event description!"
          rules={[
            { required: true, message: "Please input your event description!" },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Details;
