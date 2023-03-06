import React from "react";
import { Form, Input } from "antd";

const LocationSearch = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Venue location" name="venue">
        <Input.Search placeholder="Search for a venue or address" />
      </Form.Item>
    </Form>
  );
};

export default LocationSearch;
