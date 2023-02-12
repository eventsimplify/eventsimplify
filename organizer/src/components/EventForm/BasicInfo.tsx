import React from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import { eventCategories, eventTypes, locationType } from "@/bootstrap/config";

const BasicInfo = () => {
  return (
    <Row gutter={[16, 0]}>
      <Col span={24}>
        <Form.Item
          name="name"
          label="Event name"
          rules={[{ required: true, message: "Please input your event name!" }]}
        >
          <Input placeholder="Event title" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="type"
          label="Event type"
          rules={[{ required: true, message: "Please input your event type!" }]}
        >
          <Select showSearch placeholder="Select a type" options={eventTypes} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="category"
          label="Event category"
          rules={[
            { required: true, message: "Please input your event category!" },
          ]}
        >
          <Select
            placeholder="Select a category"
            showSearch
            options={eventCategories}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="locationType"
          label="Location type"
          rules={[
            { required: true, message: "Please input your location type!" },
          ]}
        >
          <Radio.Group
            options={locationType}
            optionType="button"
            buttonStyle="solid"
            size="middle"
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="startDate"
          label="Event start date"
          rules={[{ required: true, message: "Please input your start date!" }]}
        >
          <DatePicker
            showTime
            use12Hours
            minuteStep={15}
            format="MMMM DD YYYY hh:mm A"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="endDate"
          label="Event end date"
          rules={[
            { required: true, message: "Please input your event end date!" },
          ]}
        >
          <DatePicker
            showTime
            use12Hours
            minuteStep={15}
            format="MMMM DD YYYY hh:mm A"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="location"
          label="Location search"
          rules={[{ required: true, message: "Please input your location!" }]}
        >
          <Input.Search
            placeholder="Search for a location"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default BasicInfo;
