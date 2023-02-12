import React from "react";
import { SaveOutlined } from "@ant-design/icons";
import { Row, Col, Card, Button, Space, Divider } from "antd";

import BasicInfo from "./BasicInfo";
import Details from "./Details";
// import Status from "./Status";

const EventForm = ({ loading }: { loading: string }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card
          title="Create new event"
          extra={
            <Space>
              <Button type="default" htmlType="button" icon={<SaveOutlined />}>
                Save as draft
              </Button>
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
          <Col span={24}>
            <BasicInfo />
          </Col>
          <Divider />
          <Col span={24}>
            <Details />
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default EventForm;
