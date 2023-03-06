import React from "react";
import { Card, Button, Space, Typography, Col, Row, Divider } from "antd";
import Field from "@/form-controls/Field";
import LocationSearch from "./LocationSearch";
import Location from "./Location";

const { Title, Paragraph } = Typography;

const LocationForm = ({ loading }: { loading: string }) => {
  return (
    <Card
      title="Event location"
      extra={
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading === "create"}
          >
            Save
          </Button>
        </Space>
      }
    >
      <Title level={4}>Manage event location</Title>
      <Paragraph>
        Help people in the area discover your event and let attendees know where
        to show up.
      </Paragraph>
      <Divider />
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Field
            name="name"
            label="Location type"
            type="radio"
            required
            placeholder="Location type"
            options={[
              { label: "Venue", value: "venue" },
              { label: "Online", value: "online" },
            ]}
          />
        </Col>
        <Col span={18}>
          <LocationSearch />
        </Col>
        <Col span={12} />
        <Col span={18}>
          <Location />
        </Col>
      </Row>
    </Card>
  );
};

export default LocationForm;
