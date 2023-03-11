import React from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Result, Space, Typography } from "antd";
import Link from "next/link";

const { Paragraph, Text } = Typography;

const VerificationDetails = () => (
  <Result
    status="success"
    title="Your organization verification is in progress."
    subTitle="Thank you for onboarding with us. We will get back to you soon. Please check your email for further details."
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          Until your account is verified, you will not be able to access the
          full features of the platform.
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleFilled
          className="site-result-demo-error-icon"
          style={{
            color: "red",
          }}
        />{" "}
        You will not be able to publish events.{" "}
      </Paragraph>
      <Paragraph>
        <CloseCircleFilled
          className="site-result-demo-error-icon"
          style={{
            color: "red",
          }}
        />{" "}
        You will not be able to take orders for your events.
      </Paragraph>
      <Paragraph>
        <CloseCircleFilled
          className="site-result-demo-error-icon"
          style={{
            color: "red",
          }}
        />{" "}
        User will not be able to see your organization on the platform.
      </Paragraph>
      <Text strong type="danger">
        It takes 2-3 business days to verify your account. Please check your
        email for further details. If you have any questions, please contact
        support.
      </Text>
    </div>
    <Space
      style={{
        marginTop: 24,
      }}
    >
      <Link href="/admin/dashboard" key="dashboard">
        <Button type="primary">Go to dashboard</Button>
      </Link>
      <Link href="mailto:support@eventsimplify.com" key="support">
        <Button>Contact support</Button>
      </Link>
    </Space>
  </Result>
);

export default VerificationDetails;
