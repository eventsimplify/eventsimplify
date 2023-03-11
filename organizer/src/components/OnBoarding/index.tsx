import React, { useState } from "react";
import { Button, Col, Divider, Form, Row, Typography } from "antd";

import Field from "@/form-controls/Field";
import { OrganizationService } from "@/services";

const { Title, Paragraph } = Typography;

const BusinessInformation = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("create");
    const response = await OrganizationService.create({
      name: values.name,
      summary: values.summary,
    });

    if (response) {
      setCurrentStep(1);
    }

    setLoading("");
  };

  return (
    <Form layout="vertical" validateTrigger="onBlur" onFinish={onFinish}>
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Title level={4}>Get started by creating your organization.</Title>
          <Paragraph>
            We need to know about your organization to get you started. You can
            change this information later in organization profile section.
          </Paragraph>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
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
            extra="This is a short summary of your company that will appear on your organizer profile."
            type="textarea"
            placeholder="Enter a summary of your company."
          />
        </Col>
        <Col span={24}>
          <Field
            name="description"
            label="Company description"
            required
            extra="This is a detailed description of your company that will appear on your organizer profile."
            type="rich-text"
            placeholder="Enter a description of your company."
          />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          span={24}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading === "create"}
          >
            Create organization and continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessInformation;
