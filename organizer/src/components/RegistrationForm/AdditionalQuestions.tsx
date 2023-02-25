import React from "react";
import { Divider, Switch, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";

import { DragOutlined } from "@ant-design/icons";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "move",
        }}
      >
        <DragOutlined
          style={{
            color: "#999",
            fontSize: 20,
          }}
        />
      </div>
    ),
  },
  {
    title: "Question name",
    dataIndex: "name",
    width: "65%",
  },
  {
    title: "Include",
    dataIndex: "include",
    width: "15%",
    render: (text) => <Switch defaultChecked size="small" />,
  },
  {
    title: "Required",
    dataIndex: "required",
    width: "15%",
    render: (text) => <Switch defaultChecked size="small" />,
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

const AdditionalQuestions = () => {
  return (
    <div>
      <Title level={3}>Collect more information</Title>
      <Paragraph>
        You can collect more information about your attendees by adding custom
        questions to your registration form.
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

export default AdditionalQuestions;
