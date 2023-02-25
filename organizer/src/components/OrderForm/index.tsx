import React from "react";
import { Row, Col, Card, Button, Space, Divider } from "antd";

import AttendeeInfo from "./AttendeeInfo";
import Tickets from "./Tickets";

const OrderForm = ({ loading }: { loading: string }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card
          title="Create manual order"
          extra={
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading === "create"}
              >
                Create order
              </Button>
            </Space>
          }
        >
          <AttendeeInfo />
          <Divider orientation="left" orientationMargin={0}>
            Tickets information
          </Divider>
          <Tickets />
        </Card>
      </Col>
    </Row>
  );
};

export default OrderForm;
