import React, { useState } from "react";
import { Button, Col, Divider, Form, Row, Typography } from "antd";

import Field from "@/form-controls/Field";
import { OrganizationService } from "@/services";

const { Title, Paragraph, Text } = Typography;

const BusinessDocuments = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("business-details");

    const formData = new FormData();

    formData.append("registration", values.registration["file"]);
    formData.append("vat", values.vat["file"]);

    const response = await OrganizationService.saveBusinessDocuments(formData);

    if (response) {
      setCurrentStep(4);
      window.location.href = "/admin/dashboard";
      return;
    }
    setLoading("");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      validateTrigger="onChange"
      onFinish={onFinish}
    >
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Title level={4}>
            Provide following business documents to get started.
          </Title>
          <Paragraph>
            We need to verify your business to make sure you are eligible to use
            our services.
          </Paragraph>
          <Text strong type="danger">
            Upload the documents below matching your business documents. If we
            found, the documents were not valid, your account may be suspended.
          </Text>
        </Col>
        <Divider />
        <Col span={12}>
          <Col span={24}>
            <Field
              name="registration"
              label="Business registration document"
              type="file"
              required
              form={form}
            />
          </Col>
          <Col span={24}>
            <Field
              name="vat"
              label="VAT registration document"
              type="file"
              required
              form={form}
            />
          </Col>
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
            loading={loading === "business-details"}
          >
            Confirm business details
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessDocuments;
