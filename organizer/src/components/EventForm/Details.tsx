import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import {
  Button,
  Col,
  Form,
  Row,
  Upload,
  UploadFile,
  UploadProps,
  Input,
} from "antd";
import RichText from "@/form-controls/RichText";

import Field from "@/form-controls/Field";
import axios from "axios";

const Details = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadProps: UploadProps = {
    multiple: false,
    listType: "picture",
    fileList,
    onChange: ({ fileList }) => {
      setFileList(fileList);

      handleUpload();
    },
    name: "banner",
    accept: "image/*",
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
    },
  };

  const handleUpload = async () => {
    if (fileList.length === 0) return false;

    console.log(fileList);

    const formData = new FormData();
    formData.append("file", fileList[0].originFileObj as Blob);

    await axios.post("http://localhost:9000/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return false;
  };

  return (
    <Row gutter={[16, 0]}>
      <Col span={8}>
        <Form.Item name="banner" label="Banner image">
          <Upload {...uploadProps}>
            {fileList.length === 0 && (
              <Button icon={<UploadOutlined />}>Upload</Button>
            )}
          </Upload>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Field
          name="summary"
          label="Event summary"
          extra="Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max)"
          required
          placeholder="Please input your event summary!"
          type="textarea"
        />
      </Col>
      <Col span={24}>
        <RichText
          name="description"
          label="Event description"
          placeholder="Please input your event description!"
          rules={[
            { required: true, message: "Please input your event description!" },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Details;
