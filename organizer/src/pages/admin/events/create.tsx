import React, { useState } from "react";
import { Form } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import EventForm from "@/components/EventForm";
import { EventService } from "@/services";

const Create = () => {
  const [loading, setLoading] = useState("");
  const [form] = Form.useForm();

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

    await EventService.create(formData);

    setLoading("");
  };

  const onSaveDraft = () => {
    console.log("Save as draft");

    const values = form.getFieldsValue();

    console.log(values);
  };

  return (
    <DashboardLayout>
      <Form
        form={form}
        name="event-form"
        onFinish={onFinish}
        layout="vertical"
        size="large"
      >
        <EventForm loading={loading} />
      </Form>
    </DashboardLayout>
  );
};

export default Create;
