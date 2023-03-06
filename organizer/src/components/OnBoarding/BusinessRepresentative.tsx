import React from "react";
import { Button, Col, Divider, Form, Row, Typography } from "antd";

import Field from "@/form-controls/Field";

const { Title, Paragraph, Text } = Typography;

const BusinessRepresentative = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  return (
    <Form
      layout="vertical"
      initialValues={{
        country: "Nepal",
        businessType: "individual",
        businessStructure: "sole-proprietorship",
      }}
    >
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Title level={4}>Verify your personal details</Title>
          <Paragraph>
            This account should be activated by someone authorized to sign on
            your organization’s behalf. If that’s not you, please ask the right
            person to complete this form.
          </Paragraph>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>

        <Col span={24}>
          <Field
            name="name"
            label="Legal name"
            type="text"
            required
            placeholder="Enter your legal full name"
            extra="Enter your name exactly as it is recorded with the IRS. This includes your middle name, suffix, and any other titles."
          />
        </Col>
        <Col span={12}>
          <Field
            name="email"
            label="Email address"
            type="email"
            required
            placeholder="Enter your email address"
          />
        </Col>
        <Col span={12}>
          <Field
            name="jobTitle"
            label="Job title"
            type="text"
            required
            placeholder="e.g. CEO, CFO, COO, etc."
          />
        </Col>
        <Col span={12}>
          <Field
            name="dateOfBirth"
            label="Date of birth"
            type="date"
            required
            placeholder="Enter your date of birth"
          />
        </Col>

        <Divider />
        <Col
          span={24}
          style={{
            marginBottom: "1rem",
          }}
        >
          <Text strong>
            Provide additional information to verify your identity
          </Text>
        </Col>
        <Col span={12}>
          <Field
            name="phone"
            label="Phone number"
            type="phone"
            required
            placeholder="Enter your phone number"
          />
        </Col>
        <Col span={12} />

        <Col span={12}>
          <Field
            name="idType"
            label="ID type"
            type="dropdown"
            required
            placeholder="Select your ID type"
            options={[
              {
                label: "Citizenship ID",
                value: "citizenship-id",
              },
              {
                label: "Driving License",
                value: "driving-license",
              },
              {
                label: "Passport",
                value: "passport",
              },
            ]}
          />
        </Col>

        <Col
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          span={24}
        >
          <Button type="primary" htmlType="button" loading>
            Continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessRepresentative;
