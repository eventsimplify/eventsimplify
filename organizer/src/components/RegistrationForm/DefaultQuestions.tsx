import React from "react";
import {
  Button,
  Divider,
  Space,
  Switch,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { ColumnsType } from "antd/es/table";

import { UpOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

interface DataType {
  key: string;
  name: string;
  include: boolean;
  required: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    key: "sort",
    width: "5%",
    title: "Sort",
    render: () => (
      <Space>
        <Tooltip title="Move up">
          <Button shape="circle" size="small" icon={<UpOutlined />} />
        </Tooltip>
        <Tooltip title="Move down">
          <Button size="small" shape="circle" icon={<DownOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
  {
    title: "Question name",
    dataIndex: "name",
    width: "70%",
  },
  {
    title: "Include",
    dataIndex: "include",
    width: "10%",
    render: (text) => <Switch defaultChecked size="small" />,
  },
  {
    title: "Required",
    dataIndex: "required",
    width: "10%",
    render: (text) => <Switch defaultChecked size="small" />,
  },

  {
    title: "Action",
    dataIndex: "action",
    width: "5%",
    render: (text) => <Button icon={<MenuOutlined />} />,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Prefix (Mr., Mrs., etc.)",
    include: true,
    required: false,
  },
  {
    key: "2",
    name: "Gender",
    include: true,
    required: false,
  },
  {
    key: "3",
    name: "Age",
    include: true,
    required: false,
  },
  {
    key: "4",
    name: "Phone number",
    include: true,
    required: false,
  },
];

const DefaultQuestions = () => {
  return (
    <div>
      <Title level={3}>What do you need to know about your attendees?</Title>
      <Paragraph>
        We collect
        <Text strong> first name, last name and email </Text>
        by default.
      </Paragraph>
      <Divider />
      <Table
        bordered
        rowKey="key"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default DefaultQuestions;
