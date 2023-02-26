import React, { ReactElement, useEffect } from "react";

import FormItem from "@/components/RegistrationForm/FormItem";
import { Button, Card, Divider, Row, Typography } from "antd";
import { useRouter } from "next/router";
import RegisterationFormProvider, {
  useRegistrationFormContext,
} from "@/contexts/RegistrationFormProvider";
import { useEventContext } from "@/contexts/EventProvider";

import EventLayoutWithContext from "@/layouts/event";
import Redirect from "@/components/Redirect";

const { Title, Paragraph } = Typography;

const RegistrationForm = () => {
  const router = useRouter();
  const { event } = useEventContext();
  const { forms, getForms } = useRegistrationFormContext();

  const onCreateClick = () => {
    router.push({
      pathname: "/admin/events/[eventId]/registration-form/create",
      query: router.query,
    });
  };

  useEffect(() => {
    if (event?.id && forms.length === 0) {
      getForms();
    }
  }, [event?.id]);

  if (forms.length === 1) {
    return (
      <Redirect
        to={`/admin/events/${event?.id}/registration-form/${forms[0].id}`}
      />
    );
  }

  return (
    <Card>
      <div className="flex-justify">
        <div>
          <Title level={3}>Registration Form</Title>
          <Paragraph>
            Personalize your checkout experience by adding a registration form
            to your event.
          </Paragraph>
        </div>
        <Button type="primary" onClick={onCreateClick}>
          Add a new form
        </Button>
      </div>
      <Divider />
      <Row gutter={[16, 16]}>
        {forms?.map((form) => (
          <FormItem form={form} key={form.id} />
        ))}
      </Row>
    </Card>
  );
};

RegistrationForm.getLayout = (page: ReactElement) => {
  return (
    <EventLayoutWithContext>
      <RegisterationFormProvider>{page}</RegisterationFormProvider>
    </EventLayoutWithContext>
  );
};

export default RegistrationForm;
