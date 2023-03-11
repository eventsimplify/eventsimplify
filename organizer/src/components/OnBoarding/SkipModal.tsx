import React, { useState } from "react";
import { Button, Result, Typography, Modal } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import { OrganizationService } from "@/services";
import { useRouter } from "next/router";

const { Paragraph, Text } = Typography;

const SkipModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setLoading("skip");
    const response = await OrganizationService.skipVerification();

    if (response) {
      setIsModalOpen(false);
      router.push("/admin/dashboard");
    }
    setLoading("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Skip onboarding
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="I understand the consequences"
        cancelText="Cancel"
        okType="danger"
        width={700}
        okButtonProps={{
          loading: loading !== "",
          type: "primary",
        }}
      >
        <Result
          status="warning"
          title="Are you sure you want to skip onboarding?"
          subTitle="You wont be able to access all the features of the platform until you complete the onboarding process."
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                Your account will have the following restrictions:
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
          </div>
        </Result>
      </Modal>
    </>
  );
};

export default SkipModal;
