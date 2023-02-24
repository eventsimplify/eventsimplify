import React, { useState } from "react";
import { Form } from "antd";

import { EventService } from "@/services";
import EventLayout from "@/layouts/event";
import OrderForm from "@/components/OrderForm";

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

  return (
    <EventLayout>
      <Form
        form={form}
        name="event-form"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        validateTrigger="onSubmit"
      >
        <OrderForm loading={loading} />
      </Form>
    </EventLayout>
  );
};

export default Create;
