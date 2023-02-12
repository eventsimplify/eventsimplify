import React, { useState } from "react";
import { Button, Card, Divider, Form, Space, Steps, message } from "antd";
import { BookOutlined, AuditOutlined } from "@ant-design/icons";

import GetStartedForm from "@/components/GetStartedForm";
import GetStartedLayout from "@/layouts/get-started";

const GetStarted = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    console.log(values);
  };

  const onNext = async () => {
    try {
      const values = await form.validateFields();

      setCurrent(current + 1);
    } catch (error) {
      console.log(error);

      messageApi.error("Please fill in all required fields");
    }
  };

  return (
    <>
      {contextHolder}
      <GetStartedLayout>
        <Form
          form={form}
          name="event-form"
          onFinish={onFinish}
          layout="vertical"
          size="large"
          validateTrigger="onSubmit"
        >
          <Card>
            <Steps
              current={current}
              items={[
                {
                  title: "Company Information",
                  description: "Enter your company information",
                },
                {
                  title: "Review Guidelines",
                  description: "Review our guidelines",
                },
              ]}
            />
            <Divider />
            <GetStartedForm loading="" current={current} />
            <Divider />
            <Space>
              <Form.Item>
                <Button
                  htmlType="button"
                  onClick={() => setCurrent(current + 1)}
                >
                  Previous
                </Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType="button" type="primary" onClick={onNext}>
                  Next
                </Button>
              </Form.Item>
            </Space>
          </Card>
        </Form>
      </GetStartedLayout>
    </>
  );
};

export default GetStarted;
