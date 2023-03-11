import React, { useState } from "react";
import { Button, Col, Divider, Form, Row, Typography } from "antd";

import Field from "@/form-controls/Field";
import { OrganizationService } from "@/services";

const { Title, Paragraph, Text } = Typography;

const BusinessDetails = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("business-details");

    const formData = {
      name: values.name,
      type: values.type,
      structure: values.structure,
      address: {
        country: values.country,
        state: values.state,
        city: values.city,
        area: values.area,
        address: values.address,
      },
    };

    const response = await OrganizationService.saveBusinessDetails(formData);

    if (response) {
      setCurrentStep(2);
    }
    setLoading("");
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        country: "Nepal",
        type: "individual",
        structure: "sole-proprietorship",
      }}
      validateTrigger="onBlur"
      onFinish={onFinish}
    >
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Title level={4}>Provide your business details to get started.</Title>
          <Paragraph>
            We need to know a little bit about your business to get you started.
          </Paragraph>
          <Text strong type="danger">
            Fill out the details below matching your business documents. If the
            information doesn't match, your account may not be verified.
          </Text>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>

        <Col span={24}>
          <Field
            name="name"
            label="Legal business name"
            type="text"
            required
            placeholder="e.g. Acme Inc."
            extra="The combination of your name and Employer Identification Number (EIN) must exactly match the one listed on your IRS documents (e.g., Letter 147C or SS-4 Confirmation letter), including capitalization and punctuation."
          />
        </Col>
        <Col span={12}>
          <Field
            name="type"
            label="Business type"
            type="dropdown"
            required
            options={[
              { label: "Individual", value: "individual" },
              { label: "Company", value: "company" },
              { label: "Non-profit organization", value: "non-profit" },
            ]}
          />
        </Col>
        <Col span={12}>
          <Field
            name="structure"
            label="Business structure"
            type="dropdown"
            required
            options={[
              { label: "Sole proprietorship", value: "sole-proprietorship" },
              { label: "Partnership", value: "partnership" },
              { label: "Limited liability company", value: "llc" },
              { label: "Corporation", value: "corporation" },
              { label: "Not sure", value: "not-sure" },
            ]}
          />
        </Col>
        <Divider />
        <Col
          span={24}
          style={{
            marginBottom: "1rem",
          }}
        >
          <Text strong>Legal business address (where you receive mail)</Text>
        </Col>
        <Col span={12}>
          <Field
            name="country"
            label="Country"
            type="text"
            required
            placeholder="e.g. 123 Main St"
            disabled
          />
        </Col>
        <Col span={12}>
          <Field
            name="state"
            label="State/Province"
            type="text"
            required
            placeholder="e.g. Lumbini"
          />
        </Col>
        <Col span={12}>
          <Field
            name="city"
            label="City"
            type="text"
            required
            placeholder="e.g. Kathmandu"
          />
        </Col>
        <Col span={12}>
          <Field
            name="area"
            label="Area"
            type="text"
            required
            placeholder="e.g. New Baneshwor"
          />
        </Col>
        <Col span={24}>
          <Field
            name="address"
            label="Full address"
            type="textarea"
            required
            placeholder="e.g. New Baneshwor, Kathmandu, Nepal"
            extra="Please enter the full address(include house floor/unit number/shop name, street & road) For example, House number 2B, Tarkeshwor old Guheshwori Area Kathmandu."
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
            loading={loading === "business-details"}
          >
            Confirm business details and continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessDetails;
