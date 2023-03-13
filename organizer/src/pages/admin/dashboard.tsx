import React, { ReactElement, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";

import { Row, Col, Card, Statistic, Space, Typography } from "antd";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

//layout imports
import DashboardLayout from "@/layouts/dashboard";
import RecentOrders from "@/components/AdminDashboard/RecentOrders";
import { IOrder } from "@/interfaces";
import { OrganizationService } from "@/services";

const { Paragraph, Title } = Typography;

const Dashboard = () => {
  const [loading, setLoading] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [recentOrders, setRecentOrders] = useState<IOrder[]>([]);

  const getDashboardData = async () => {
    const reponse = await OrganizationService.dashboard();

    if (reponse) {
      setRecentOrders(reponse.recentOrders || []);
      setTotalOrders(reponse.totalOrders || 0);
      setTotalEvents(reponse.totalEvents || 0);
    }

    setLoading("");
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <Card>
          <Statistic
            title="Total Orders"
            value={totalOrders}
            prefix={<UserOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Total Events"
            value={totalEvents}
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
        <RecentOrders />
      </Col>
    </Row>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
