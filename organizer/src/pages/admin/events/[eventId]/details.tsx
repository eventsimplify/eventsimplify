import React, { useState } from "react";
import { Form } from "antd";
import EventForm from "@/components/EventForm";

import { EventService } from "@/services";
import { useEventContext } from "@/contexts/EventProvider";
import EventLayoutWithContext from "@/layouts/event";
import moment from "moment";

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
    <Form
      form={form}
      name="eventForm"
      onFinish={onFinish}
      layout="vertical"
      validateTrigger="onSubmit"
      initialValues={{
        name: event?.name,
        type: event?.type,
        category: event?.category,
        summary: event?.summary,
        description: event?.description,
        startDate: moment(event?.startDate),
        endDate: moment(event?.endDate),
      }}
    >
      <EventForm loading={""} />
    </Form>
  );
};

Details.getLayout = (page: any) => (
  <EventLayoutWithContext>{page}</EventLayoutWithContext>
);

export default Details;
