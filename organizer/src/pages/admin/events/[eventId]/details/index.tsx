import React, { useEffect, useState } from "react";
import { Form } from "antd";

import { EventService } from "@/services";
import { useEventContext } from "@/contexts/EventProvider";
import EventLayoutWithContext from "@/layouts/event";
import CreateEventForm from "@/components/EventForm/Create";
import dayjs from "dayjs";

const Details = () => {
  const { event } = useEventContext();
  const [loading, setLoading] = useState("");
  const [form] = Form.useForm();
  const [locationType, setLocationType] = useState("online");

  const { name, type, start_date, end_date, category, venue } = event!;

  useEffect(() => {
    if (venue) {
      setLocationType(venue?.type!);
    }
  }, [venue]);

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
      validateTrigger="onBlur"
      onValuesChange={(changedValues) => {
        if (changedValues.venue_type) {
          setLocationType(changedValues.venue_type);
        }
      }}
      initialValues={{
        name: name,
        type: type,
        category: category,
        venue_name: venue.name,
        venue_type: venue.type,
        address1: venue.address1,
        address2: venue.address2,
        city: venue.city,
        state: venue.state,
        country: venue.country,
        postal_code: venue.postal_code,
        start_date: start_date ? dayjs(start_date) : null,
        end_date: end_date ? dayjs(end_date) : null,
      }}
    >
      <CreateEventForm loading={loading} locationType={locationType} />
    </Form>
  );
};

Details.getLayout = (page: any) => (
  <EventLayoutWithContext>{page}</EventLayoutWithContext>
);

export default Details;
