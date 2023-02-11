import React from "react";
import { Card, Col, Form, Input, Radio, Row, Select } from "antd";

const options = [
  { label: "Venue", value: "venue" },
  { label: "Online event", value: "online" },
];

const BasicInfo = () => {
  return (
    <Card title="Basic Info">
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Event title"
            rules={[{ required: true, message: "Please input your note!" }]}
          >
            <Input placeholder="Event title" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Event type"
            rules={[{ required: true, message: "Please input your note!" }]}
          >
            <Select
              placeholder="Select a type"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Event category"
            rules={[{ required: true, message: "Please input your note!" }]}
          >
            <Select
              placeholder="Select a category"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name="type"
            label="Location type"
            rules={[{ required: true, message: "Please input your note!" }]}
          >
            <Radio.Group
              options={options}
              optionType="button"
              buttonStyle="solid"
              size="middle"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="location"
            label="Location search"
            rules={[{ required: true, message: "Please input your note!" }]}
          >
            <Input.Search
              placeholder="Search for a location"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default BasicInfo;
