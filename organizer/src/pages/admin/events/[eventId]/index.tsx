import React from "react";

import { UserOutlined } from "@ant-design/icons";

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

import { Button, Card, Col, Row, Space, Statistic, Typography } from "antd";

import EventLayout from "@/layouts/event";
import RecentOrders from "@/components/RecentOrders";

const { Paragraph, Title } = Typography;

const index = () => {
  return (
    <EventLayout>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={112893}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={112893}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={112893}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={112893}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={24}>
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
        </Col>
        <Col span={24}>
          <Card
            title="Recent orders"
            extra={<Button type="link">All orders</Button>}
          >
            <RecentOrders />
          </Card>
        </Col>
      </Row>
    </EventLayout>
  );
};

export default index;
