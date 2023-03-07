import React from "react";
import dynamic from "next/dynamic";
import { Form } from "antd";

import { IFieldProps } from "@/interfaces";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

import "react-quill/dist/quill.snow.css";

const RichText = ({ name, label, rules, placeholder, form }: IFieldProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <ReactQuill
        theme="snow"
        placeholder={placeholder}
        onChange={(v) => {
          form?.setFieldValue(name, v);
        }}
        style={{
          minHeight: "200px",
        }}
      />
    </Form.Item>
  );
};

export default RichText;
