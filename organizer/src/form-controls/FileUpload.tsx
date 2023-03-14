import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";

import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import { IFieldProps } from "@/interfaces";

const FileUpload = ({ name, label, extra, rules, form }: IFieldProps) => {
  const [file, setFile] = useState<UploadFile | null>(null);

  const props: UploadProps = {
    listType: "picture",
    onRemove: () => {
      setFile(null);
      form?.setFieldValue(name, null);
    },
    beforeUpload: (file, _) => {
      setFile(file);
      form?.setFieldValue(name, file);
      return false;
    },
    fileList: file ? [file] : [],
  };

  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <Upload {...props}>
        {file === null && (
          <Button icon={<UploadOutlined />}>Select File</Button>
        )}
      </Upload>
      {/* <Input
        type="file"
        multiple={true}
        accept="image/*"
        onChange={(e) => {
          const data = e.target.files?.item(0);
          if (!data) return;
          setFile(data);
          setFileName(data.name);
          form?.setFieldValue(name, data);
        }}
      /> */}
    </Form.Item>
  );
};

export default FileUpload;
