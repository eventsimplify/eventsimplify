import React, { useState } from "react";
import { Form } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import EventForm from "@/components/EventForm";
import { EventService } from "@/services";
import { useRouter } from "next/router";

const Create = () => {
  const [loading, setLoading] = useState("");
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading("create");

    const formData = {
      name: values.name,
      type: values.type,
      startDate: values.startDate,
      endDate: values.endDate,
      summary: values.summary,
      description: values.description,
    };

    const response = await EventService.create(formData);

    if (response) {
      form.resetFields();
      router.back();
    }

    setLoading("");
  };

  return (
    <DashboardLayout>
      <Form
        form={form}
        name="event-form"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        validateTrigger="onSubmit"
      >
        <EventForm loading={loading} />
      </Form>
    </DashboardLayout>
  );
};

export default Create;
