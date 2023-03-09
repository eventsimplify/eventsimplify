import React from "react";
import { Row, Col, Card, Button, Space } from "antd";

import BasicInfo from "./BasicInfo";
import LocationInfo from "./LocationInfo";
import DateInfo from "./DateInfo";
import Details from "./Details";

const EventForm = ({ loading }: { loading: string }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card
          title="Create new event"
          extra={
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading === "create"}
              >
                Create event
              </Button>
            </Space>
          }
        >
          <Col span={14}>
            <BasicInfo />
          </Col>
          <Col span={14}>
            <LocationInfo />
          </Col>
          <Col span={14}>
            <DateInfo />
          </Col>
          <Col span={14}>
            <Details />
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default EventForm;
