import React from "react";
import { Button, Divider, Space, Switch, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import {
  UpOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { IQuestion } from "@/interfaces";

const { Title, Paragraph } = Typography;

const AdditionalQuestions = ({
  questions,
  setQuestions,
  onOpen,
  setSelectedQuestion,
}: {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  onOpen: () => void;
  setSelectedQuestion: (question: IQuestion) => void;
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

  const handleDelete = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleEdit = (index: number) => {
    setSelectedQuestion(questions[index]);
    onOpen();
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
      width: "55%",
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
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
      render: (_, __, index) => (
        <Space>
          <Button
            type="text"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(index)}
          />
          <Button
            type="link"
            size="small"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(index)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex-justify">
        <div>
          <Title level={3}>Collect more information</Title>
          <Paragraph>
            You can collect more information about your attendees by adding
            custom questions to your registration form.
          </Paragraph>
        </div>
        <Button type="primary" onClick={onOpen}>
          Add question
        </Button>
      </div>
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

export default AdditionalQuestions;
