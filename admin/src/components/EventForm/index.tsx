import React from "react";
import { Form, Row, Col } from "antd";

import BasicInfo from "./BasicInfo";
import Details from "./Details";
import Status from "./Status";

const EventForm = () => {
  return (
    <Form layout="vertical" size="large">
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <BasicInfo />
        </Col>
        <Col span={6}>
          <Status />
        </Col>
        <Col span={24}>
          <Details />
        </Col>
      </Row>
    </Form>
  );
};

export default EventForm;
