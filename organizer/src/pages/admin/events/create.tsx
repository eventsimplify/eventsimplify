import React, { ReactElement, useState } from "react";
import { Form } from "antd";

import DashboardLayout from "@/layouts/dashboard";
import { EventService } from "@/services";
import { useRouter } from "next/router";
import CreateEventForm from "@/components/EventForm/Create";

const Create = () => {
  const [loading, setLoading] = useState("");
  const [form] = Form.useForm();
  const [locationType, setLocationType] = useState<"venue" | "online">(
    "online"
  );

  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading("create");

    const formData = {
      name: values.name,
      type: values.type,
      category: values.category,
      start_date: new Date(values.start_date),
      end_date: new Date(values.end_date),
      venue: {
        type: values.venue_type,
        name: values.venue_name,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        state: values.state,
        postal_code: values.postal_code,
        country: values.country,
      },
    };

    const response = await EventService.create(formData);

    if (response) {
      form.resetFields();
      router.back();
    }

    setLoading("");
  };

  return (
    <Form
      form={form}
      name="event-form"
      onFinish={onFinish}
      onValuesChange={(changedValues) => {
        if (changedValues.venue_type) {
          setLocationType(changedValues.venue_type);
        }
      }}
      layout="vertical"
      validateTrigger="onBlur"
      initialValues={{
        venue_type: "online",
      }}
    >
      <CreateEventForm loading={loading} locationType={locationType} />
    </Form>
  );
};

Create.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Create;
