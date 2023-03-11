import React from "react";
import { Card, Space, Typography } from "antd";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const { Paragraph, Title } = Typography;

const EventDetails = () => {
  return (
    <Card title="Event Details">
      <Title level={5}>Event URL</Title>
      <Paragraph
        copyable={{
          text: "https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137",
        }}
      >
        https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137
      </Paragraph>

      <Title level={5}>Share your event on social media</Title>
      <Space size="large">
        <FacebookShareButton url="https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137">
          <FacebookIcon size={40} />
        </FacebookShareButton>

        <TwitterShareButton url="https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137">
          <TwitterIcon size={40} />
        </TwitterShareButton>

        <WhatsappShareButton url="https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137">
          <WhatsappIcon size={40} />
        </WhatsappShareButton>

        <LinkedinShareButton url="https://www.eventbrite.com/e/free-career-success-meditation-class-guatemala-city-registration-390577607137">
          <LinkedinIcon size={40} />
        </LinkedinShareButton>
      </Space>
    </Card>
  );
};

export default EventDetails;
