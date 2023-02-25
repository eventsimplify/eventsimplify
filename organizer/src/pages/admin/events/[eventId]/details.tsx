import React, { useState } from "react";
import { Form } from "antd";
import moment from "moment";
import EventForm from "@/components/EventForm";
import EventLayout from "@/layouts/event";
import { EventService } from "@/services";
import { useEventContext } from "@/contexts/EventProvider";

const Details = () => {
  const { event } = useEventContext();
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
        initialValues={{
          name: event?.name,
          type: event?.type,
          category: event?.category,
          summary: event?.summary,
          description: event?.description,
          startDate: event?.startDate ? moment(event.startDate) : null,
          endDate: event?.endDate ? moment(event.endDate) : null,
        }}
      >
        <EventForm loading={""} />
      </Form>
    </EventLayout>
  );
};

export default Details;
