import React, { useState } from "react";
import { Button, Col, Divider, Form, Row, Typography } from "antd";

import Field from "@/form-controls/Field";
import { OrganizationService } from "@/services";

const { Title, Paragraph, Text } = Typography;

const BusinessRepresentative = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("representative-details");

    const formData = {
      name: values.name,
      job_title: values.job_title,
      date_of_birth: values.date_of_birth,
      phone: values.phone,
      id_type: values.id_type,
    };

    const response = await OrganizationService.saveRepresentativeDetails(
      formData
    );

    if (response) {
      setCurrentStep(3);
    }
    setLoading("");
  };

  return (
    <Form
      layout="vertical"
      validateTrigger="onBlur"
      onFinish={onFinish}
      initialValues={{
        id_type: "citizenship",
      }}
    >
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Title level={4}>Verify your personal details</Title>
          <Paragraph>
            This account should be activated by someone authorized to sign on
            your organizations behalf. If thats not you, please ask the right
            person to complete this form.
          </Paragraph>
          <Text strong type="danger">
            Fill out the details below matching your documents. If the
            information doesn't match, your account may not be verified.
          </Text>
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
            name="job_title"
            label="Job title"
            type="text"
            required
            placeholder="e.g. CEO, CFO, COO, etc."
          />
        </Col>
        <Col span={12}>
          <Field
            name="date_of_birth"
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
            name="id_type"
            label="ID type"
            type="dropdown"
            required
            placeholder="Select your ID type"
            options={[
              {
                label: "Citizenship ID",
                value: "citizenship",
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
        <Col span={12} />
        <Col span={12}>
          <Field
            name="id"
            label="ID attachment"
            type="file"
            required
            placeholder="Upload your ID"
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
            loading={loading === "representative-details"}
          >
            Confirm representative details and continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessRepresentative;
