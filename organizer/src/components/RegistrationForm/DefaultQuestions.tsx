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
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { IQuestion } from "@/interfaces";

const { Title, Paragraph, Text } = Typography;

const DefaultQuestions = ({
  questions,
  setQuestions,
}: {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
}) => {
  const handleMoveUp = (index: number) => {
    const newQuestions = [...questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index - 1];
    newQuestions[index - 1] = temp;
    setQuestions(newQuestions);
  };

  const handleMoveDown = (index: number) => {
    const newQuestions = [...questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index + 1];
    newQuestions[index + 1] = temp;
    setQuestions(newQuestions);
  };

  const handleInclude = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].included = !newQuestions[index].included;
    // If the question is not included, it should not be required
    if (!newQuestions[index].included) {
      newQuestions[index].required = false;
    }
    setQuestions(newQuestions);
  };

  const handleRequired = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].required = !newQuestions[index].required;

    // If the question is required, it should be included
    if (newQuestions[index].required) {
      newQuestions[index].included = true;
    }
    setQuestions(newQuestions);
  };

  const columns: ColumnsType<IQuestion> = [
    {
      key: "sort",
      width: "5%",
      title: "Sort",
      dataIndex: "key",
      render: (_, __, index) => (
        <Space>
          <Button
            shape="circle"
            size="small"
            icon={<UpOutlined />}
            disabled={index === 0}
            onClick={() => handleMoveUp(index)}
          />
          <Button
            size="small"
            shape="circle"
            icon={<DownOutlined />}
            disabled={index === questions.length - 1}
            onClick={() => handleMoveDown(index)}
          />
        </Space>
      ),
    },
    {
      title: "Question name",
      dataIndex: "label",
      width: "70%",
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "10%",
    },
    {
      title: "Include",
      dataIndex: "included",
      width: "10%",
      render: (text, _, index) => (
        <Switch
          checked={text}
          size="small"
          onChange={() => handleInclude(index)}
        />
      ),
    },
    {
      title: "Required",
      dataIndex: "required",
      width: "10%",
      render: (text, _, index) => (
        <Switch
          checked={text}
          size="small"
          onChange={() => handleRequired(index)}
        />
      ),
    },
  ];

  return (
    <div>
      <Title level={3}>What do you need to know about your attendees?</Title>
      <Paragraph>
        We collect
        <Text strong> first name, last name and email </Text>
        by default.
      </Paragraph>
      <Paragraph type="secondary">
        Select from the list of default questions below to include them in your
        form.
      </Paragraph>
      <Divider />
      <Table
        bordered
        rowKey={(record) => record.name}
        columns={columns}
        dataSource={questions}
        pagination={false}
      />
    </div>
  );
};

export default DefaultQuestions;
