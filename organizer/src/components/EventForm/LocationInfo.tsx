import React from "react";
import { Col, Divider, Row, Typography } from "antd";

import Field from "@/form-controls/Field";

const { Title, Paragraph } = Typography;

const LocationInfo = ({ locationType }: { locationType: string }) => {
  return (
    <Row gutter={[16, 0]}>
      <Divider />
      <Col span={24}>
        <Title level={4}>Location</Title>
        <Paragraph>
          Help people in the area discover your event and let attendees know
          where to show up.
        </Paragraph>
      </Col>

      <Col
        span={24}
        style={{
          marginTop: "2rem",
        }}
      >
        <Field
          name="venue_type"
          label="Event location"
          type="radio"
          required
          options={[
            { label: "Online event", value: "online" },
            { label: "Venue based", value: "venue" },
          ]}
        />
      </Col>
      {locationType === "venue" && (
        <>
          <Col span={24}>
            <Field
              name="venue_name"
              label="Venue name"
              type="text"
              required
              placeholder="Venue name"
            />
          </Col>
          <Col span={12}>
            <Field
              name="address1"
              label="Address 1"
              type="text"
              required
              placeholder="e.g. 123 Main St"
            />
          </Col>
          <Col span={12}>
            <Field
              name="address2"
              label="Address 2"
              type="text"
              placeholder="e.g. Suite 100"
            />
          </Col>
          <Col span={12}>
            <Field
              name="city"
              label="City"
              type="text"
              required
              placeholder="e.g. San Francisco"
            />
          </Col>
          <Col span={6}>
            <Field
              name="state"
              label="State/Province"
              type="text"
              required
              placeholder="e.g. California"
            />
          </Col>
          <Col span={6}>
            <Field
              name="postal_code"
              label="Postal code"
              type="text"
              required
              placeholder="e.g. 94105"
            />
          </Col>
        </>
      )}
    </Row>
  );
};

export default LocationInfo;
