import React from "react";

import EventLayoutWithContext from "@/layouts/event";
import SpeakerForm from "@/components/Speakers/SpeakerForm";
import { Card, Divider, Row, Col, Typography } from "antd";
import SpeakerList from "@/components/Speakers";

const { Title, Paragraph } = Typography;

const Speakers = () => {
  return (
    <Card>
      <Title level={4}>Manage speakers</Title>
      <Paragraph>
        Add speakers to your event. You can add up to 10 speakers. You can also
        add a moderator to your event.
      </Paragraph>
      <Divider />
      <SpeakerList />
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>Add a speaker</Title>
        </Col>
        <Col span={18}>
          <SpeakerForm />
        </Col>
      </Row>
    </Card>
  );
};

Speakers.getLayout = (page: any) => (
  <EventLayoutWithContext>{page}</EventLayoutWithContext>
);

export default Speakers;
