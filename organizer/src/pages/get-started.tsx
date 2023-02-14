import React, { useState } from "react";
import { Button, Card, Divider, Form, Space, message } from "antd";
// import { BookOutlined, AuditOutlined } from "@ant-design/icons";

import GetStartedForm from "@/components/GetStartedForm";
import GetStartedLayout from "@/layouts/get-started";
import { OrganizationService } from "@/services";

const GetStarted = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState("");

  const onFinish = async (values: any) => {
    setLoading("create");
    await OrganizationService.create({
      name: values.name,
      summary: values.summary,
      description: values.description,
    });

    setLoading("");
  };

  return (
    <GetStartedLayout>
      <Form
        form={form}
        name="event-form"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        validateTrigger="onSubmit"
      >
        <Card
          bordered={false}
          extra={
            <Button
              type="primary"
              htmlType="submit"
              loading={loading === "create"}
            >
              Create an organization
            </Button>
          }
        >
          <GetStartedForm loading="" current={0} />
        </Card>
      </Form>
    </GetStartedLayout>
  );
};

export default GetStarted;
