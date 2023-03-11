import React, { ReactElement } from "react";
import { Button, Card, Col, Row, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";

import EventLayout from "@/layouts/event";
import RecentOrders from "@/components/EventDashboard/RecentOrders";
import EventDetails from "@/components/EventDashboard/EventDetails";

const Dashboard = () => {
  return (
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
        <EventDetails />
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
  );
};

Dashboard.getLayout = (page: ReactElement) => <EventLayout>{page}</EventLayout>;

export default Dashboard;
