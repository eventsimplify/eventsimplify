import React, { useState } from "react";
import { Form } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import EventForm from "@/components/EventForm";
import { EventService } from "@/services";
import { useRouter } from "next/router";
import moment from "moment";

const Create = () => {
  const [loading, setLoading] = useState("");
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading("create");

    const formData = {
      name: values.name,
      type: values.type,
      startDate: moment(values.startDate).toDate(),
      endDate: moment(values.endDate).toDate(),
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
        validateTrigger="onBlur"
        initialValues={{
          venueType: "venue",
        }}
      >
        <EventForm loading={loading} />
      </Form>
    </DashboardLayout>
  );
};

export default Create;
