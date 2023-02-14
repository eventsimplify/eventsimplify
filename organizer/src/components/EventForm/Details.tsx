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

const Details = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadProps: UploadProps = {
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture-card",
    fileList,
    onChange: ({ fileList }) => setFileList(fileList),
    name: "banner",
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
        <Form.Item
          name="summary"
          label="Event summary"
          extra="Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max)"
          rules={[
            { required: true, message: "Please input your event summary!" },
          ]}
        >
          <Input.TextArea
            placeholder="Please input your event summary!"
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>
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
