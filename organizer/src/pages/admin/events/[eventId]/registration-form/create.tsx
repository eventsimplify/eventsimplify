import React, { ReactElement, useState } from "react";
import { Button, Card, Space, Form as AntDForm } from "antd";

import { EyeOutlined } from "@ant-design/icons";

import EventLayoutWithContext from "@/layouts/event";
import Form from "@/components/RegistrationForm";
import { IQuestion } from "@/interfaces";
import { RegistrationFormService } from "@/services";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const router = useRouter();
  const [form] = AntDForm.useForm();
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const [additionalQuestions, setAdditionalQuestions] = useState<IQuestion[]>(
    []
  );

  const onFinish = async (values: any) => {
    setLoading(true);

    const formData = {
      name: values.name,
      questions,
      additionalQuestions,
      eventId: router.query.eventId as string,
    };

    const response = await RegistrationFormService.create(formData);

    if (response) {
      form.resetFields();
      router.push({
        pathname: `/admin/events/[eventId]/registration-form`,
        query: { eventId: router.query.eventId },
      });
    }

    setLoading(false);
  };

  return (
    <AntDForm
      form={form}
      name="registrationForm"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onSubmit"
    >
      <Card
        title="Create a new form"
        extra={
          <Space>
            <Button icon={<EyeOutlined />}>Preview</Button>
            <Button type="primary" htmlType="submit" form="registrationForm">
              Create
            </Button>
          </Space>
        }
      >
        <Form
          questions={questions}
          setQuestions={setQuestions}
          additionalQuestions={additionalQuestions}
          setAdditionalQuestions={setAdditionalQuestions}
        />
      </Card>
    </AntDForm>
  );
};

RegistrationForm.getLayout = (page: ReactElement) => {
  return <EventLayoutWithContext>{page}</EventLayoutWithContext>;
};

export default RegistrationForm;
