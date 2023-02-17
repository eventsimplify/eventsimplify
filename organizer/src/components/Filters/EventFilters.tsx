import React from "react";
import { Button, Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./filters.module.css";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const EventFilters: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="inline"
    >
      <Form.Item name="name">
        <Input placeholder="Search by Name" prefix={<SearchOutlined />} />
      </Form.Item>

      <Form.Item name="status">
        <Select
          placeholder="Select a category"
          allowClear
          style={{
            width: 200,
          }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="button">Reset</Button>
      </Form.Item>
    </Form>
  );
};

export default EventFilters;
