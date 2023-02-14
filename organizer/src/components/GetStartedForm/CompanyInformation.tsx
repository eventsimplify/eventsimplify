import React from "react";
import { Col, Form, Input, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const CompanyInformation = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography>
          <Title>Provide some basic information about your organization.</Title>
          <Paragraph>
            Choose a name that will give people a clear idea of what the
            organization is about. Feel free to get creative! You can edit this
            later if you change your mind.
          </Paragraph>
        </Typography>
      </Col>
      <Col span={24}>
        <Form.Item
          name="name"
          label="Company name"
          rules={[
            { required: true, message: "Please input your company name!" },
          ]}
        >
          <Input placeholder="Company name" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="summary"
          label="Company summary"
          rules={[
            { required: true, message: "Please input your company summary!" },
          ]}
          extra="Please enter a summary of at least 10 characters and no more than 200 characters."
        >
          <Input.TextArea placeholder="Company summary!" rows={4} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="description"
          label="Company description"
          rules={[
            {
              required: true,
              message: "Please input your company description!",
            },
          ]}
          extra="Describe who you are, the types of events you host, or your mission. The description is displayed on your organizer profile."
        >
          <Input.TextArea placeholder="Company description" rows={10} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CompanyInformation;
